# Styling Quick Reference

Quick reference guide for using the YojanaMitra styling system.

## 🚀 Quick Start

```tsx
import './styles/index.css';  // In your main entry file
```

## 🎨 Colors

### Primary (Orange)
```tsx
className="bg-primary-500 text-white"        // Main primary
className="bg-primary-50 text-primary-900"   // Light variant
className="hover:bg-primary-600"             // Hover state
```

### Secondary (Blue)
```tsx
className="bg-secondary-500 text-white"
className="text-secondary-600"
```

### Accent (Green)
```tsx
className="bg-accent-500 text-white"
className="text-accent-600"
```

### Semantic
```tsx
className="text-red-600"     // Error
className="text-green-600"   // Success
className="text-yellow-600"  // Warning
className="text-blue-600"    // Info
```

## 🔘 Buttons

```tsx
// Primary button
<button className="btn btn-primary">Submit</button>

// Secondary button
<button className="btn btn-secondary">Cancel</button>

// Outline button
<button className="btn btn-outline">Learn More</button>

// Ghost button
<button className="btn btn-ghost">Skip</button>

// Sizes
<button className="btn btn-primary btn-sm">Small</button>
<button className="btn btn-primary">Default</button>
<button className="btn btn-primary btn-lg">Large</button>

// Disabled
<button className="btn btn-primary" disabled>Disabled</button>
```

## 📦 Cards

```tsx
<div className="card card-hover">
  <div className="card-header">
    <h3 className="heading-4">Card Title</h3>
  </div>
  <div className="card-body">
    <p>Card content goes here...</p>
  </div>
  <div className="card-footer">
    <button className="btn btn-primary">Action</button>
  </div>
</div>
```

## 📝 Forms

```tsx
// Text input
<div>
  <label className="input-label" htmlFor="name">Name</label>
  <input id="name" type="text" className="input" />
  <p className="input-helper">Helper text</p>
</div>

// Input with error
<div>
  <label className="input-label" htmlFor="email">Email</label>
  <input
    id="email"
    type="email"
    className="input input-error"
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <p id="email-error" className="input-error-message">
    Invalid email address
  </p>
</div>

// Select dropdown
<select className="input">
  <option>Select an option</option>
  <option>Option 1</option>
</select>
```

## 🏷️ Badges

```tsx
<span className="badge badge-primary">Active</span>
<span className="badge badge-secondary">Pending</span>
<span className="badge badge-success">Approved</span>
<span className="badge badge-warning">Review</span>
<span className="badge badge-error">Rejected</span>
```

## 🔔 Alerts

```tsx
<div className="alert alert-info">
  <p>Information message</p>
</div>

<div className="alert alert-success">
  <p>Success message</p>
</div>

<div className="alert alert-warning">
  <p>Warning message</p>
</div>

<div className="alert alert-error">
  <p>Error message</p>
</div>
```

## 📐 Layout

### Container
```tsx
<div className="container-custom">
  Content with consistent max-width and padding
</div>
```

### Section Spacing
```tsx
<section className="section">
  Consistent vertical padding for sections
</section>
```

### Grid
```tsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Flexbox
```tsx
// Center items
<div className="flex items-center justify-center gap-4">
  Content
</div>

// Space between
<div className="flex items-center justify-between">
  <span>Left</span>
  <span>Right</span>
</div>
```

## 📏 Spacing

Based on 4px grid:
```tsx
className="p-4"    // padding: 16px (all sides)
className="px-6"   // padding: 24px (horizontal)
className="py-2"   // padding: 8px (vertical)
className="m-4"    // margin: 16px (all sides)
className="mb-6"   // margin-bottom: 24px
className="gap-4"  // gap: 16px (flex/grid)
```

Common values:
- `2` = 8px
- `4` = 16px
- `6` = 24px
- `8` = 32px
- `12` = 48px

## 📱 Responsive Design

Mobile-first approach:
```tsx
// Base (mobile), then md (tablet), then lg (desktop)
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

<div className="p-4 md:p-6 lg:p-8">
  Responsive padding
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔤 Typography

### Headings
```tsx
<h1 className="heading-1">Page Title</h1>
<h2 className="heading-2">Section Title</h2>
<h3 className="heading-3">Subsection Title</h3>
<h4 className="heading-4">Card Title</h4>
```

### Text Sizes
```tsx
className="text-xs"    // 12px
className="text-sm"    // 14px
className="text-base"  // 16px (default)
className="text-lg"    // 18px
className="text-xl"    // 20px
className="text-2xl"   // 24px
```

### Font Weights
```tsx
className="font-normal"    // 400
className="font-medium"    // 500
className="font-semibold"  // 600
className="font-bold"      // 700
```

### Text Colors
```tsx
className="text-gray-900"  // Headings (darkest)
className="text-gray-700"  // Body text
className="text-gray-600"  // Secondary text
className="text-gray-500"  // Muted text
```

## 🎭 Effects

### Shadows
```tsx
className="shadow-card"       // Card shadow
className="shadow-cardHover"  // Card hover shadow
className="shadow-md"         // Medium shadow
className="shadow-lg"         // Large shadow
```

### Borders
```tsx
className="border border-gray-200"           // Border
className="border-2 border-primary-500"      // Thicker border
className="rounded-lg"                        // Rounded corners
className="rounded-full"                      // Fully rounded
```

### Transitions
```tsx
className="transition-all duration-200"      // All properties
className="transition-colors duration-200"   // Colors only
className="hover:scale-105 transition"       // Hover scale
```

## ♿ Accessibility

### Focus States
Focus rings are automatic on all interactive elements!

```tsx
// Add minimum touch target
<button className="min-h-44 min-w-44">
  Touch-friendly button
</button>
```

### Skip Links
```tsx
<a href="#main-content" className="skip-to-main">
  Skip to main content
</a>

<main id="main-content">
  Content
</main>
```

### ARIA Labels
```tsx
// Icon buttons need labels
<button aria-label="Close dialog">
  <XIcon />
</button>

// Error messages need IDs
<input
  aria-invalid="true"
  aria-describedby="error-message"
/>
<p id="error-message">Error text</p>
```

## 🔧 Utilities

### Gradient Text
```tsx
<h1 className="gradient-text">
  Colorful heading
</h1>
```

### Truncate Text
```tsx
<p className="truncate">
  Single line truncation...
</p>

<p className="truncate-2">
  Two line truncation...
</p>

<p className="truncate-3">
  Three line truncation...
</p>
```

### Custom Scrollbar
```tsx
<div className="scrollbar-custom overflow-auto">
  Scrollable content with styled scrollbar
</div>
```

### Hide Scrollbar
```tsx
<div className="scrollbar-hide overflow-auto">
  Scrollable content without visible scrollbar
</div>
```

## 🧪 Linting

```bash
# Check CSS
npm run lint:css

# Fix CSS issues automatically
npm run lint:css:fix

# Check both JS and CSS
npm run lint:all
```

## 📚 More Documentation

- [Complete Style Guide](./STYLE_GUIDE.md)
- [Design Tokens](./src/theme/tokens.ts)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 💡 Tips

1. **Use Tailwind utilities first** - Most common patterns are covered
2. **Use component classes for patterns** - Repeated button/card styles
3. **Mobile-first** - Add `md:` and `lg:` prefixes for larger screens
4. **Check accessibility** - Ensure proper contrast and focus states
5. **Run linters** - Before committing your changes

---

**Need help?** Check the [complete style guide](./STYLE_GUIDE.md) or the component examples in `src/main.tsx`.
