export const designTokens = {
  color: {
    primitive: {
      neutral: {
        0: '#ffffff',
        100: '#f5f7fa',
        200: '#eceef4',
        400: '#b6bccd',
        500: '#9ea5bd',
        600: '#79829f',
        700: '#626981',
        800: '#4b5162',
        900: '#343844',
        1000: '#1c1f25',
      },
      primary: { 600: '#387ff5', 700: '#2d66c4', 800: '#224c93' },
      primaryAlpha: { '05': '#387ff50d', 30: '#387ff54d' },
      neutralAlpha: { 60: '#ffffff99' },
      darkOverlayElement: { 100: '#ffffff' },
    },
    semantic: {
      background: {
        primary: '{color.primitive.neutral.0}',
        muted: '{color.primitive.neutral.100}',
        disabled: '{color.primitive.neutral.200}',
        inverse: '{color.primitive.neutral.1000}',
      },
      foreground: {
        default: '{color.primitive.neutral.900}',
        muted: '{color.primitive.neutral.600}',
        subtle: '{color.primitive.neutral.700}',
        inverse: '{color.primitive.darkOverlayElement.100}',
      },
      border: {
        default: '{color.primitive.neutral.400}',
        strong: '{color.primitive.neutral.700}',
        focus: '{color.primitive.neutral.900}',
      },
      interactive: {
        primary: '{color.primitive.primary.600}',
        hover: '{color.primitive.primary.700}',
        focus: '{color.primitive.primary.800}',
        disabled: '{color.primitive.neutral.200}',
      },
    },
  },
  typography: {
    fontFamily: { heading: 'DM Sans', body: 'Inter' },
    fontWeight: { regular: 400, medium: 500, semibold: 600, bold: 700 },
    styles: {
      headingH1: { fontSize: '64px', lineHeight: '1.1', fontWeight: 700 },
      headingH2: { fontSize: '52px', lineHeight: '1.15', fontWeight: 700 },
      headingH3: { fontSize: '40px', lineHeight: '1.2', fontWeight: 700 },
      headingH4: { fontSize: '32px', lineHeight: '1.3', fontWeight: 700 },
      headingH5: { fontSize: '20px', lineHeight: '1.42', fontWeight: 700 },
      headingH6: { fontSize: '18px', lineHeight: '1.42', fontWeight: 700 },
      bodySmRegular: { fontSize: '14px', lineHeight: '1.4', fontWeight: 400 },
      bodyBaseRegular: { fontSize: '16px', lineHeight: '1.6', fontWeight: 400 },
      bodyBaseSemibold: {
        fontSize: '16px',
        lineHeight: '1.6',
        fontWeight: 600,
      },
      bodyMdMedium: { fontSize: '20px', lineHeight: '1.58', fontWeight: 500 },
      bodyLgRegular: { fontSize: '24px', lineHeight: '1.6', fontWeight: 400 },
      buttonSmBold: { fontSize: '14px', lineHeight: '1.26', fontWeight: 700 },
      buttonBaseBold: { fontSize: '16px', lineHeight: '1.22', fontWeight: 700 },
    },
    letterSpacing: { default: '0em' },
  },
  spacing: {
    primitive: {
      0: '0px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      32: '32px',
      40: '40px',
      48: '48px',
      64: '64px',
      96: '96px',
    },
    semantic: {
      inline: {
        xs: '{spacing.primitive.4}',
        xl: '{spacing.primitive.20}',
        '3xl': '{spacing.primitive.32}',
      },
      inset: {
        sm: '{spacing.primitive.8}',
        md: '{spacing.primitive.12}',
        lg: '{spacing.primitive.16}',
        xl: '{spacing.primitive.20}',
        '3xl': '{spacing.primitive.32}',
        '4xl': '{spacing.primitive.40}',
      },
      stack: {
        sm: '{spacing.primitive.8}',
        lg: '{spacing.primitive.16}',
        xl: '{spacing.primitive.20}',
        '2xl': '{spacing.primitive.24}',
      },
      section: {
        sm: '{spacing.primitive.48}',
        md: '{spacing.primitive.64}',
        lg: '{spacing.primitive.96}',
      },
    },
  },
  radius: { md: '8px', lg: '12px', '2xl': '20px' },
  effect: {
    shadowPrimary1:
      '0 6px 8px #387ff50d, 0 9px 12px #387ff50d, 0 16px 10px #387ff50d',
    shadowPrimary4:
      '0 2px 6px #387ff54d, 0 13px 12px #387ff50d, 0 24px 15px #387ff50d, 0 40px 16px #387ff50d, 0 62px 17px #387ff50d',
    blurButton: '6px',
  },
  breakpoint: { mobile: '420px', tablet: '810px', desktop: '1440px' },
  grid: {
    mobile: { width: '420px', columns: 4, margin: '20px', gutter: '16px' },
    tablet: { width: '810px', columns: 8, margin: '32px', gutter: '20px' },
    desktop: { width: '1440px', columns: 12, margin: '120px', gutter: '24px' },
  },
  // Existing CSS-only foundation values, centralized without changing their values.
  control: { sm: '36px', md: '44px', lg: '48px' },
  icon: { sm: '18px', md: '20px', lg: '24px' },
  outline: { offset: '2px', width: '2px' },
  border: { width: '1px' },
  container: { 'content-sm': '640px', 'content-md': '810px', content: '1200px' },
  columns: { 1: 1, 2: 2, 3: 3, 4: 4, 8: 8, 12: 12 },
} as const;

export type DesignTokens = typeof designTokens;
export const tokens = designTokens;
export type Tokens = typeof tokens;
