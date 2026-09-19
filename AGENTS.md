# Neuros project rules

# AGENTS.md — Hard Guard Rails

These rules are NON-NEGOTIABLE. If a rule conflicts with convenience, follow the rule.
If a rule is impossible for a specific case, STOP and ask before violating it.

---

## 1. Language & Syntax Rules

### 1.1 Arrow Functions Everywhere
- ✅ `const Button = ({ ...props }: ButtonProps) => { ... }`
- ✅ `const formatLabel = (value: string): string => value.trim()`
- ❌ `function Button() {}`
- ❌ `export default function Page() {}` (except Next.js `page.tsx`, `layout.tsx`, `route.ts` which require default exports)
- All exports are **named exports** except Next.js route files.

### 1.2 No Conditionals Inside Component Bodies
The component function body must be **pure rendering**. No `if`, `else`, `switch`, `? :`, `&&`, `||` for rendering logic inside the returned JSX or the component body.

**Allowed locations for conditionals:**
- Custom hooks (`useXxx`)
- Pure utility functions in `src/lib/`
- CVA variant configs (declarative, not imperative)
- Lookup maps / record objects

**Forbidden patterns in components:**
```tsx
// ❌ ternary in JSX
{isLoading ? <Spinner /> : <Content />}

// ❌ short-circuit in JSX
{hasIcon && <Icon />}

// ❌ if statement in component body
if (variant === 'primary') { ... }

// ❌ switch in component body
switch (size) { ... }
```

**Required patterns instead:**
```tsx
// ✅ CVA for variants
const button = cva(base, { variants: { intent: { primary: '...', ghost: '...' } } })

// ✅ lookup map for rendering
const RENDERERS: Record<State, () => JSX.Element> = {
  loading: () => <Spinner />,
  success: () => <Content />,
}
const renderContent = RENDERERS[state]

// ✅ custom hook computes everything
const { content, icon, ariaLabel } = useButtonModel(props)
```

### 1.3 No Inline Logic in JSX
- No `.map()` with inline arrow bodies longer than a single expression.
- No `.filter()`, `.reduce()`, `.sort()` inside JSX. Precompute with `useMemo` or a hook.
- No string concatenation or template literals inside `className`. See §2.

### 1.4 Props Are Destructured at the Signature
```tsx
// ✅
const Card = ({ title, children, className }: CardProps) => { ... }
// ❌
const Card = (props: CardProps) => { const { title } = props; ... }
```

### 1.5 Explicit Return Types on Public APIs
Every exported function, hook, and component must have an explicit return type.
```tsx
const Button = ({ ... }: ButtonProps): JSX.Element => { ... }
const useToggle = (initial: boolean): UseToggleResult => { ... }
```

---

## 2. ClassName Rules (Pre-Figuring)

### 2.1 All ClassNames Are Pre-Computed
`className` values must be resolved **before** the JSX return. Never build them inline in JSX.

```tsx
// ❌ forbidden in JSX
<div className={`flex ${isActive ? 'bg-primary' : 'bg-muted'}`} />

// ✅ required
const rootClass = cn('flex', isActive ? 'bg-primary' : 'bg-muted')
return <div className={rootClass} />
```

### 2.2 CVA Is the Only Variant Mechanism
Install `class-variance-authority`. Every component with variants uses CVA. No manual variant objects, no ternaries for variants.

```tsx
const buttonVariants = cva('inline-flex items-center justify-center rounded-md', {
  variants: {
    intent: { primary: 'bg-primary text-primary-foreground', ghost: 'bg-transparent' },
    size:   { sm: 'h-8 px-3 text-sm', md: 'h-10 px-4', lg: 'h-12 px-6 text-lg' },
  },
  defaultVariants: { intent: 'primary', size: 'md' },
})
```

### 2.3 `cn()` Is the Only Composition Helper
Create `src/lib/cn.ts` using `clsx` + `tailwind-merge`. Every className that combines sources goes through `cn()`.

```ts
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))
```

### 2.4 No Tailwind Class Strings Duplicated Across Files
If the same multi-class string appears twice, promote it to:
- A CVA variant, or
- A shared constant in `src/design-system/classnames.ts`

### 2.5 Layout ClassNames Live at Module Scope
Static className strings that never change must be hoisted to module-level `const`.

```tsx
const ROOT = 'relative flex w-full flex-col gap-4'
const HEADER = 'flex items-center justify-between'
```

---

## 3. Component Architecture Rules

### 3.1 Component Categories
- `src/components/ui/` — primitives (Button, Card, Text, Heading, Stack, Grid, Container, Section, Divider, Badge, IconButton)
- `src/components/sections/` — page sections (Hero, Features, FAQ, Footer, Navbar)
- `src/components/icons/` — inline SVG icon components
- `src/components/patterns/` — compound components (Card.Header, FAQ.Item, etc.)

### 3.2 Required Design Patterns
Every component uses one or more of these. Do not invent ad-hoc patterns.

| Pattern | When to Use | Example |
|---|---|---|
| **Variant (CVA)** | Multiple visual styles | `Button`, `Badge`, `Text` |
| **Compound** | Parent + related children | `Card.Root`, `Card.Header`, `Card.Body` |
| **Slot (`asChild`)** | Render as another element | `<Button asChild><Link /></Button>` |
| **Polymorphic (`as`)** | Change root element | `<Text as="span" />` |
| **Container/Presenter** | Stateful wrapper, dumb view | `FaqContainer` + `FaqView` |
| **Custom Hook** | Any stateful logic | `useDisclosure`, `useFaq` |
| **Lookup Map** | Replacing conditionals | `RENDERERS[state]` |
| **Render Props / Children Fn** | Inverted control | Rare, only when justified |

### 3.3 One Component Per File
File name = component name (PascalCase). No multiple exports of components from one file, except compound components in a single `Card.tsx` that are attached as `Card.Header`, `Card.Body`.

### 3.4 No Default Exports
Except Next.js route files (`page.tsx`, `layout.tsx`, `route.ts`, `error.tsx`, `not-found.tsx`).

### 3.5 No Barrel `index.ts` Re-Exports Across Layers
Do NOT create `src/components/ui/index.ts` that re-exports everything. Import directly from the file. Barrels cause circular imports and slow builds.

### 3.6 Props Interfaces
- Named `XxxProps`, exported.
- Extend native element props when wrapping one: `ButtonHTMLAttributes<HTMLButtonElement>`.
- Use `VariantProps<typeof xxxVariants>` from CVA. Never duplicate variant unions by hand.

---

## 4. File & Folder Structure

```
src/
  app/                        # Next.js App Router (default exports OK here)
  components/
    ui/                       # primitives
    sections/                 # page sections
    icons/                    # inline SVGs
  design-system/
    tokens.ts                 # single source of truth for tokens
    classnames.ts             # shared className constants
    variants.ts               # shared CVA configs (optional)
  hooks/                      # all custom hooks
  lib/
    cn.ts                     # clsx + tailwind-merge
    utils.ts                  # pure utilities
  styles/
    globals.css               # Tailwind + @theme block (v4) or @tailwind directives
  types/
    index.ts                  # shared types
```

No deep nesting. No `utils/helpers/misc/` folders. If a util is used once, keep it next to its component.

---

## 5. Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Component | PascalCase | `IconButton` |
| Hook | `use` + PascalCase | `useDisclosure` |
| Utility | camelCase | `formatLabel` |
| Constant | SCREAMING_SNAKE | `ROOT_CLASS` |
| Type/Interface | PascalCase | `ButtonProps` |
| File (component) | PascalCase | `Button.tsx` |
| File (utility) | camelCase | `cn.ts` |
| Boolean | `is/has/should/can` prefix | `isOpen`, `hasError` |
| Event handler prop | `on` + Event | `onClick`, `onToggle` |
| Event handler impl | `handle` + Event | `handleClick` |

---

## 6. TypeScript Rules

- **Strict mode on.** No `any`. No `unknown` without narrowing.
- Prefer `type` over `interface` for props. Use `interface` only for extendable public APIs.
- No `as` casts except for `as const` on literal objects.
- Discriminated unions for state machines.
- `readonly` on all array/object props that shouldn't mutate.
- No non-null assertion (`!`). Use optional chaining + defaults.

---

## 7. Accessibility Rules (Non-Negotiable)

- Every interactive element has an accessible name.
- Every icon-only button has `aria-label`.
- FAQ uses `<details>`/`<summary>` or proper `aria-expanded` + `aria-controls`.
- Navbar has `<nav aria-label="Primary">`.
- Focus states are visible and use `focus-visible:` utilities only.
- No `div` with `onClick` — use `<button>` or `<a>`.

---

## 8. Tailwind Rules

- No arbitrary values in `[]` unless the design token doesn't exist. If a token is missing, add it to `tokens.ts` first.
- No `@apply` in component files. Utilities only.
- Mobile-first: base styles for mobile, `md:` / `lg:` for larger.
- No `!important`. Ever.
- Use `size-*` instead of `h-* w-*` when equal.
- Use logical properties where possible (`ps-*`, `pe-*`, `ms-*`, `me-*`).

---

## 9. Forbidden Actions

Codex must NEVER:
- Introduce a new dependency without asking.
- Add `console.log` to committed code.
- Add TODO comments without a linked issue number.
- Create a component that doesn't use a listed design pattern.
- Add a conditional inside a component body.
- Build a className string inline in JSX.
- Use `function` keyword for components or utilities.
- Use default exports outside Next.js route files.
- Duplicate a Tailwind class string across files.
- Skip accessibility props on interactive elements.
- Hardcode a color, spacing, or font value that exists as a token.
- Add a barrel `index.ts` for re-exports.

---

## 10. Definition of Done (Per Component)

Before marking a component complete:
1. `yarn lint` passes with zero warnings.
2. `yarn format` applied.
3. `yarn build` passes.
4. Component renders in `src/app/design-system/page.tsx`.
5. No conditionals in the component body.
6. All classNames pre-computed via CVA + `cn()`.
7. Explicit return types on exports.
8. Accessibility audit passed for interactive elements.
9. Props interface exported and named `XxxProps`.
10. Matches Figma at 1:1 for spacing, typography, color.

If any of the above fails, the component is NOT done.