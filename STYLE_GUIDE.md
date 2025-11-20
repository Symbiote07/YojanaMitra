# YojanaMitra Style Guide

## Overview

This style guide documents the design system and styling approach for the YojanaMitra application. It provides guidelines for maintaining consistency, accessibility, and maintainability across the entire application.

## Table of Contents

1. [Design System](#design-system)
2. [Styling Approach](#styling-approach)
3. [Color Palette](#color-palette)
4. [Typography](#typography)
5. [Spacing](#spacing)
6. [Components](#components)
7. [Accessibility](#accessibility)
8. [Best Practices](#best-practices)

## Design System

### Philosophy

YojanaMitra uses a **utility-first CSS approach** with Tailwind CSS, complemented by centralized design tokens for maintainability and consistency.

**Key Principles:**
- **Accessibility First**: All components meet WCAG 2.1 AA standards
- **Responsive Design**: Mobile-first approach with breakpoints
- **Consistency**: Centralized design tokens prevent drift
- **Maintainability**: Clear naming conventions and documentation
- **Performance**: Optimized CSS with PurgeCSS in production

### Architecture

```
src/
├── styles/
│   └── index.css          # Main stylesheet with Tailwind + custom utilities
├── theme/
│   └── tokens.ts          # Centralized design tokens
└── components/
    └── [component files]  # Component-specific styles
```

## Styling Approach

### Tailwind CSS

We use **Tailwind CSS** as our primary styling solution for the following reasons:

1. **Utility-First**: Rapid development with consistent utilities
2. **Tree-Shaking**: Only used classes are included in production
3. **Responsive**: Built-in responsive utilities
4. **Customizable**: Extended with our design tokens
5. **Well-Documented**: Excellent documentation and community support

### When to Use Each Approach

| Approach | Use Case | Example |
|----------|----------|---------|
| Tailwind Utilities | Common patterns, layout, spacing | `className="flex items-center gap-4"` |
| Custom CSS Classes | Reusable component patterns | `className="btn btn-primary"` |
| CSS Variables | Theming, dynamic values | `var(--primary-500)` |

## Color Palette

### Primary Colors (Orange)
Represents energy, optimism, and government of India branding.

```css
primary-50:  #fff7ed
primary-500: #f97316  /* Main primary */
primary-900: #7c2d12
```

**Usage:**
- Primary actions (buttons, links)
- Brand elements
- Active states

### Secondary Colors (Blue)
Represents trust, stability, and professionalism.

```css
secondary-50:  #eff6ff
secondary-500: #3b82f6  /* Main secondary */
secondary-900: #1e3a8a
```

**Usage:**
- Secondary actions
- Informational elements
- Navigation

### Accent Colors (Green)
Represents growth, prosperity, and success.

```css
accent-50:  #f0fdf4
accent-500: #22c55e  /* Main accent */
accent-900: #14532d
```

**Usage:**
- Success messages
- Positive feedback
- Growth indicators

### Semantic Colors

```css
success: #22c55e  /* Green - positive actions */
warning: #f59e0b  /* Amber - warnings */
error:   #ef4444  /* Red - errors */
info:    #3b82f6  /* Blue - information */
```

### Accessibility Requirements

- **Text on Light Background**: Minimum contrast ratio 4.5:1
- **Text on Dark Background**: Minimum contrast ratio 4.5:1
- **Large Text (18pt+)**: Minimum contrast ratio 3:1
- **Interactive Elements**: Clear focus indicators

## Typography

### Font Family

```css
Sans Serif: Inter, system-ui, sans-serif
Serif:      Georgia, Cambria, serif
Monospace:  Menlo, Monaco, monospace
```

### Font Scale

| Class | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 12px | 16px | Fine print, labels |
| `text-sm` | 14px | 20px | Secondary text |
| `text-base` | 16px | 24px | Body text (default) |
| `text-lg` | 18px | 28px | Emphasized text |
| `text-xl` | 20px | 28px | Small headings |
| `text-2xl` | 24px | 32px | Section headings |
| `text-3xl` | 30px | 36px | Page headings |
| `text-4xl` | 36px | 40px | Hero headings |

### Font Weights

```css
font-normal:    400  /* Body text */
font-medium:    500  /* Emphasized text */
font-semibold:  600  /* Subheadings */
font-bold:      700  /* Headings */
```

### Usage Examples

```jsx
// Hero heading
<h1 className="heading-1">Welcome to YojanaMitra</h1>

// Section heading
<h2 className="heading-2">Discover Government Schemes</h2>

// Body text
<p className="text-base text-gray-700">
  Find schemes that match your needs
</p>
```

## Spacing

### Spacing Scale

Based on a **4px grid system**:

```css
0:  0px
1:  4px    (0.25rem)
2:  8px    (0.5rem)
3:  12px   (0.75rem)
4:  16px   (1rem)
6:  24px   (1.5rem)
8:  32px   (2rem)
12: 48px   (3rem)
16: 64px   (4rem)
```

### Usage Guidelines

**Margins:**
- Between sections: `my-12` or `my-16`
- Between elements: `mb-4` or `mb-6`
- Between text lines: Use line-height

**Padding:**
- Card padding: `p-6`
- Button padding: `px-4 py-2`
- Container padding: `px-4 sm:px-6 lg:px-8`

### Responsive Spacing

```jsx
// Mobile: 4, Tablet: 6, Desktop: 8
<div className="p-4 md:p-6 lg:p-8">
  Content
</div>
```

## Components

### Button Component

```jsx
// Primary button
<button className="btn btn-primary">
  Submit Application
</button>

// Secondary button
<button className="btn btn-secondary">
  Learn More
</button>

// Outline button
<button className="btn btn-outline">
  Cancel
</button>

// Ghost button
<button className="btn btn-ghost">
  Skip
</button>

// Size variants
<button className="btn btn-primary btn-sm">Small</button>
<button className="btn btn-primary">Default</button>
<button className="btn btn-primary btn-lg">Large</button>
```

### Card Component

```jsx
<div className="card card-hover">
  <div className="card-header">
    <h3 className="heading-4">Scheme Title</h3>
  </div>
  <div className="card-body">
    <p>Scheme description goes here...</p>
  </div>
  <div className="card-footer">
    <button className="btn btn-primary">Apply Now</button>
  </div>
</div>
```

### Input Component

```jsx
<div>
  <label className="input-label" htmlFor="email">
    Email Address
  </label>
  <input
    id="email"
    type="email"
    className="input"
    placeholder="you@example.com"
  />
  <p className="input-helper">
    We'll never share your email
  </p>
</div>

// Error state
<div>
  <label className="input-label" htmlFor="password">
    Password
  </label>
  <input
    id="password"
    type="password"
    className="input input-error"
    aria-invalid="true"
    aria-describedby="password-error"
  />
  <p id="password-error" className="input-error-message">
    Password must be at least 8 characters
  </p>
</div>
```

### Badge Component

```jsx
<span className="badge badge-primary">Active</span>
<span className="badge badge-success">Approved</span>
<span className="badge badge-warning">Pending</span>
<span className="badge badge-error">Rejected</span>
```

### Alert Component

```jsx
<div className="alert alert-info">
  <p>Your application has been received.</p>
</div>

<div className="alert alert-success">
  <p>Application approved successfully!</p>
</div>

<div className="alert alert-warning">
  <p>Please review your documents.</p>
</div>

<div className="alert alert-error">
  <p>An error occurred. Please try again.</p>
</div>
```

## Accessibility

### Focus Indicators

All interactive elements MUST have visible focus indicators:

```css
/* Automatic focus ring for all focusable elements */
*:focus-visible {
  outline: none;
  ring: 2px solid var(--primary-500);
  ring-offset: 2px;
}
```

### Minimum Touch Targets

Interactive elements must meet **44x44px minimum size** (WCAG 2.1):

```jsx
// Correct
<button className="min-h-44 min-w-44 px-4 py-2">
  Click Me
</button>
```

### Color Contrast

- **Normal Text**: 4.5:1 contrast ratio
- **Large Text**: 3:1 contrast ratio
- **UI Components**: 3:1 contrast ratio

Test colors using tools like:
- WebAIM Contrast Checker
- Chrome DevTools Accessibility panel

### Screen Reader Support

```jsx
// Use semantic HTML
<button>Submit</button>  // ✅ Good

// Add aria-labels when needed
<button aria-label="Close dialog">
  <XIcon />
</button>

// Use aria-describedby for errors
<input
  aria-invalid="true"
  aria-describedby="email-error"
/>
<p id="email-error">Invalid email format</p>
```

### Skip Links

Include skip links for keyboard navigation:

```jsx
<a href="#main-content" className="skip-to-main">
  Skip to main content
</a>

<main id="main-content">
  {/* Page content */}
</main>
```

### Reduced Motion

Respect user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Best Practices

### 1. Use Utility Classes First

```jsx
// ✅ Good - Use Tailwind utilities
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">

// ❌ Avoid - Custom CSS for common patterns
<div className="custom-flex-container">
```

### 2. Component Classes for Reusable Patterns

```jsx
// ✅ Good - Use component classes for repeated patterns
<button className="btn btn-primary">

// ❌ Avoid - Repeating utilities everywhere
<button className="inline-flex items-center justify-center px-4 py-2...">
```

### 3. Responsive Design

```jsx
// ✅ Good - Mobile first, progressive enhancement
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// ❌ Avoid - Desktop first
<div className="grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
```

### 4. Semantic HTML

```jsx
// ✅ Good
<button onClick={handleClick}>Submit</button>

// ❌ Avoid
<div onClick={handleClick}>Submit</div>
```

### 5. CSS Linting

Run CSS linting before committing:

```bash
npm run lint:css        # Check for issues
npm run lint:css:fix    # Auto-fix issues
npm run lint:all        # Lint both JS and CSS
```

### 6. Performance

- Use `className` instead of inline styles
- Avoid deeply nested selectors
- Leverage Tailwind's JIT mode for optimal bundle size
- Use `will-change` sparingly

### 7. Naming Conventions

```css
/* Component classes */
.btn              /* Base component */
.btn-primary      /* Variant */
.btn-sm           /* Size modifier */

/* Utility classes */
.gradient-text    /* Descriptive name */
.truncate-2       /* Clear purpose */
```

## Linting & Quality

### CSS Linting with Stylelint

We use Stylelint to enforce CSS best practices:

```bash
# Check CSS files
npm run lint:css

# Auto-fix CSS issues
npm run lint:css:fix

# Check both JS and CSS
npm run lint:all
```

### Common Linting Rules

- Alphabetical property ordering
- No unknown at-rules (except Tailwind)
- No descending specificity
- Consistent naming patterns

## Resources

### Internal Documentation
- [Design Tokens](./src/theme/tokens.ts) - Centralized theme configuration
- [Main Stylesheet](./src/styles/index.css) - Base styles and utilities

### External Resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Inter Font](https://fonts.google.com/specimen/Inter)

### Tools
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - VS Code extension
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind) - Class sorter
- [Stylelint](https://stylelint.io/) - CSS linter

## Contributing

When adding new styles:

1. **Check existing utilities** - Use Tailwind utilities when possible
2. **Add to design tokens** - New colors/spacing should go in `tokens.ts`
3. **Document patterns** - Update this guide for new component patterns
4. **Test accessibility** - Ensure WCAG 2.1 AA compliance
5. **Run linters** - `npm run lint:all` before committing
6. **Consider responsive** - Test on mobile, tablet, and desktop

## Metrics

### Performance Metrics
- **Initial CSS Bundle**: Target < 20KB (gzipped)
- **Lighthouse Performance**: Target 90+
- **First Contentful Paint**: Target < 1.5s

### Accessibility Metrics
- **Lighthouse Accessibility**: Target 95+
- **Color Contrast**: All text passes WCAG AA
- **Keyboard Navigation**: All interactive elements accessible
- **Screen Reader**: Semantic HTML throughout

### Code Quality Metrics
- **CSS Linting**: Zero errors
- **Unused Styles**: < 5% unused utilities
- **Component Reuse**: 80%+ using design system

---

**Version**: 1.0.0  
**Last Updated**: November 2024  
**Maintained By**: YojanaMitra Team
