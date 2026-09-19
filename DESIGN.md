# Neuros design system foundation

Source: Figma file `QyXgqOKQJVQ44eFRYllhGq`, component foundation node `220:3406`. Runtime tokens are generated into `src/styles/tokens.css`; the typed, alias-preserving source is `src/design-system/tokens.ts`.

## Fonts

| Role               | Family                      | Source            | CSS variable            | Tailwind                 |
| ------------------ | --------------------------- | ----------------- | ----------------------- | ------------------------ |
| Heading and button | DM Sans variable (100–1000) | `next/font/local` | `--font-heading-source` | `font-heading`           |
| Body               | Inter variable (100–900)    | `next/font/local` | `--font-body-source`    | `font-body`, `font-sans` |

No CDN font links or build-time font requests are used. Both Latin variable WOFF2 files are stored in `src/assets/fonts/` and loaded with `display: swap`.

## Color tokens

| Figma token              | Value       | Tailwind utility examples        |
| ------------------------ | ----------- | -------------------------------- |
| `Neutral/N0`             | `#ffffff`   | `bg-neutral-0`, `text-neutral-0` |
| `Neutral/N100`           | `#f5f7fa`   | `bg-neutral-100`                 |
| `Neutral/N200`           | `#eceef4`   | `bg-neutral-200`                 |
| `Neutral/N400`           | `#b6bccd`   | `border-neutral-400`             |
| `Neutral/N500`           | `#9ea5bd`   | `text-neutral-500`               |
| `Neutral/N600`           | `#79829f`   | `text-neutral-600`               |
| `Neutral/N700`           | `#626981`   | `border-neutral-700`             |
| `Neutral/N800`           | `#4b5162`   | `text-neutral-800`               |
| `Neutral/N900`           | `#343844`   | `text-neutral-900`               |
| `Neutral/1000`           | `#1c1f25`   | `bg-neutral-1000`                |
| `Primary/PR600`          | `#387ff5`   | `bg-primary-600`                 |
| `Primary/PR700`          | `#2d66c4`   | `bg-primary-700`                 |
| `Primary/PR800`          | `#224c93`   | `bg-primary-800`                 |
| `PrimaryAlpha/PRA05`     | `#387ff50d` | `bg-primary-alpha-05`            |
| `PrimaryAlpha/PRA30`     | `#387ff54d` | `bg-primary-alpha-30`            |
| `NeutralAlpha/NA60`      | `#ffffff99` | `bg-neutral-alpha-60`            |
| `DarkOverlayElement/100` | `#ffffff`   | `text-dark-overlay-element-100`  |

Semantic aliases expose `background-primary`, `background-muted`, `background-disabled`, `background-inverse`, `foreground-default`, `foreground-muted`, `foreground-subtle`, `foreground-inverse`, `border-default`, `border-strong`, `border-focus`, and the `interactive-*` state colors. For example: `bg-background-primary`, `text-foreground-muted`, and `border-border-default`.

## Typography tokens

| Token                       | Value             | Tailwind                       |
| --------------------------- | ----------------- | ------------------------------ |
| `Heading/Desktop/H1 - Bold` | 64px / 1.1 / 700  | `text-heading-h1 font-bold`    |
| `Heading/Desktop/H2 - Bold` | 52px / 1.15 / 700 | `text-heading-h2 font-bold`    |
| `Heading/Desktop/H3 - Bold` | 40px / 1.2 / 700  | `text-heading-h3 font-bold`    |
| `Heading/Desktop/H4 - Bold` | 32px / 1.3 / 700  | `text-heading-h4 font-bold`    |
| `Heading/Desktop/H5 - Bold` | 20px / 1.42 / 700 | `text-heading-h5 font-bold`    |
| `Heading/Desktop/H6 - Bold` | 18px / 1.42 / 700 | `text-heading-h6 font-bold`    |
| `Body/Sm - Regular`         | 14px / 1.4 / 400  | `text-body-sm font-regular`    |
| `Body/Base - Regular`       | 16px / 1.6 / 400  | `text-body-base font-regular`  |
| `Body/Base - Semibold`      | 16px / 1.6 / 600  | `text-body-base font-semibold` |
| `Body/Md - Medium`          | 20px / 1.58 / 500 | `text-body-md font-medium`     |
| `Body/Lg - Regular`         | 24px / 1.6 / 400  | `text-body-lg font-regular`    |
| `Button/Small - Bold`       | 14px / 1.26 / 700 | `text-button-sm font-bold`     |
| `Button/Base - Bold`        | 16px / 1.22 / 700 | `text-button-base font-bold`   |

All extracted styles use zero letter spacing (`tracking-normal`). H1–H4 and H6 are provisional scale entries because the provided component node exposed H5 but not the remaining heading variables before the Figma request cap was reached.

## Spacing scale

| Primitive  | Value | Semantic aliases / utility          |
| ---------- | ----- | ----------------------------------- |
| `space-1`  | 4px   | `inline/xs`, `gap-inline-xs`        |
| `space-2`  | 8px   | `inset/sm`, `stack/sm`              |
| `space-3`  | 12px  | `inset/md`                          |
| `space-4`  | 16px  | `inset/lg`, `stack/lg`              |
| `space-5`  | 20px  | `inline/xl`, `inset/xl`, `stack/xl` |
| `space-6`  | 24px  | `stack/2xl`                         |
| `space-8`  | 32px  | `inline/3xl`, `inset/3xl`           |
| `space-10` | 40px  | `inset/4xl`                         |
| `space-12` | 48px  | `section/sm`                        |
| `space-16` | 64px  | `section/md`                        |
| `space-24` | 96px  | `section/lg`                        |

Named controls expose 36px, 44px, and 48px as `control-sm`, `control-md`, and `control-lg`. Icon sizes are 18px, 20px, and 24px as `icon-sm`, `icon-md`, and `icon-lg`.

## Radius and effects

| Figma token               | Value                            | Tailwind               |
| ------------------------- | -------------------------------- | ---------------------- |
| `md`                      | 8px                              | `rounded-md`           |
| `lg`                      | 12px                             | `rounded-lg`           |
| `2xl`                     | 20px                             | `rounded-2xl`          |
| `Shadow/To bot/Primary 1` | three-layer primary 5% shadow    | `shadow-primary-1`     |
| `Shadow/To bot/Primary 4` | five-layer primary 30%/5% shadow | `shadow-primary-4`     |
| `Blue/2 ÷ 2`              | 6px backdrop blur                | `backdrop-blur-button` |

## Breakpoints and grid

| Canvas  | Width / variant | Columns | Margin | Gutter | Tailwind            |
| ------- | --------------- | ------- | ------ | ------ | ------------------- |
| Mobile  | 420px           | 4       | 20px   | 16px   | base; `sm` at 420px |
| Tablet  | 810px           | 8       | 32px   | 20px   | `md`                |
| Desktop | 1440px          | 12      | 120px  | 24px   | `xl`                |

The canvas widths are directly exposed by the Figma component variants. Column counts, margins, and gutters are provisional grid defaults pending a dedicated layout-grid node export.

## Component inventory

| Component    | Props beyond native DOM props                                                      |
| ------------ | ---------------------------------------------------------------------------------- |
| `Container`  | `size: sm                                                                          | md               | lg                | full`             |
| `Section`    | `spacing: sm                                                                       | md               | lg`               |
| `Stack`      | `gap: xs                                                                           | sm               | md                | lg                | xl`; `align: start     | center                                        | end                        | stretch` |
| `Grid`       | `columns`, `tabletColumns`, `desktopColumns: 1                                     | 2                | 3                 | 4                 | 8                      | 12`; `gap: sm                                 | md                         | lg`      |
| `Heading`    | `level: 1                                                                          | 2                | 3                 | 4                 | 5                      | 6`                                            |
| `Text`       | `as: p                                                                             | span`; `size: sm | base              | md                | lg`; `variant: default | muted                                         | inverse`; `weight: regular | medium   | semibold` |
| `Button`     | `variant: primary                                                                  | secondary        | outline           | ghost`; `size: sm | md                     | lg`; optional `href`switches to Next.js`Link` |
| `IconButton` | required `aria-label` and `icon`; `variant: primary                                | secondary        | ghost`; `size: sm | md                | lg`                    |
| `Badge`      | `variant: primary                                                                  | neutral          | inverse`          |
| `Divider`    | `emphasis: default                                                                 | strong`          |
| `Card`       | `padding: sm \| md \| lg`; `isElevated`; `Card.Header`, `Card.Body`, `Card.Footer` |

Every primitive accepts `className`; DOM-backed primitives use `forwardRef`. The `/design-system` route imports and renders the complete inventory.

## Assets

- `public/assets/icons/button-star-primary-sm.svg`: exact 18px Figma export used by the small primary button example.
- `src/components/icons/StarIcon.tsx`: inline, `currentColor` React version using the exact exported vector path.
- `src/assets/fonts/dm-sans-latin-variable.woff2`: local DM Sans variable font, weights 100–1000.
- `src/assets/fonts/inter-latin-variable.woff2`: local Inter variable font, weights 100–900.

No raster images or logos were referenced by the queried foundation component sets, so their asset directories remain ready for future section exports.
