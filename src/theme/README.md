# Design Tokens

This directory contains the centralized design tokens for the YojanaMitra application.

## Overview

Design tokens are the single source of truth for design decisions in the application. They define colors, typography, spacing, and other visual properties that ensure consistency across the entire application.

## Files

### `tokens.ts`

The main design tokens file containing:

- **Colors**: Primary, secondary, accent, semantic, and neutral color palettes
- **Typography**: Font families, sizes, weights, line heights, and letter spacing
- **Spacing**: Consistent spacing scale based on 4px grid
- **Shadows**: Elevation system for depth hierarchy
- **Border Radius**: Corner radius values
- **Z-Index**: Layering system
- **Transitions**: Animation timing values
- **Accessibility**: Focus ring and touch target specifications
- **Breakpoints**: Responsive design breakpoints

## Usage

### Importing Tokens

```tsx
import { theme, colors, typography, spacing } from './theme/tokens';
```

### Using in TypeScript/JavaScript

```tsx
// Using specific token categories
import { colors } from './theme/tokens';

const primaryColor = colors.primary[500]; // #f97316

// Using the complete theme object
import theme from './theme/tokens';

const cardShadow = theme.shadows.card;
const buttonPadding = `${theme.spacing[4]} ${theme.spacing[6]}`;
```

### Using in CSS

The tokens are also available as CSS custom properties in `src/styles/index.css`:

```css
.my-component {
  color: var(--primary-500);
  background: var(--secondary-50);
}
```

### Using in Tailwind Config

The tokens are integrated into the Tailwind configuration:

```tsx
// Automatically available as Tailwind classes
<div className="bg-primary-500 text-white">
  Content
</div>
```

## Token Categories

### Colors

All colors meet WCAG 2.1 AA contrast requirements:

```tsx
colors.primary[500]    // Main brand color (orange)
colors.secondary[500]  // Secondary brand color (blue)
colors.accent[500]     // Accent color (green)
colors.gray[500]       // Neutral gray
```

### Typography

```tsx
typography.fontFamily.sans   // ['Inter', 'system-ui', ...]
typography.fontSize.base     // ['1rem', { lineHeight: '1.5rem' }]
typography.fontWeight.bold   // '700'
```

### Spacing

Based on 4px grid system:

```tsx
spacing[4]  // '1rem' (16px)
spacing[6]  // '1.5rem' (24px)
spacing[8]  // '2rem' (32px)
```

## Modifying Tokens

When adding or modifying tokens:

1. **Update `tokens.ts`** with new values
2. **Update `tailwind.config.js`** to expose them as Tailwind utilities
3. **Update CSS variables** in `src/styles/index.css` if needed
4. **Document changes** in the Style Guide
5. **Ensure accessibility** - check contrast ratios for color changes
6. **Run linters** to ensure code quality

## Accessibility Requirements

All design tokens must meet WCAG 2.1 AA standards:

- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Touch Targets**: Minimum 44x44px (defined in `accessibility.minTouchTarget`)
- **Focus Indicators**: Visible focus rings (defined in `accessibility.focusRing`)

## Benefits of Design Tokens

✅ **Consistency**: Single source of truth prevents design drift  
✅ **Maintainability**: Easy to update design system-wide  
✅ **Type Safety**: TypeScript provides autocomplete and validation  
✅ **Documentation**: Self-documenting with JSDoc comments  
✅ **Scalability**: Easy to extend with new tokens  
✅ **Theming**: Can be swapped for different themes in the future

## Related Documentation

- [Style Guide](../../STYLE_GUIDE.md) - Complete styling documentation
- [Main Stylesheet](../styles/index.css) - CSS implementation
- [Tailwind Config](../../tailwind.config.js) - Tailwind integration
