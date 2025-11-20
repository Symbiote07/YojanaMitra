# Styling System

This directory contains the core styling files for the YojanaMitra application.

## Files

### `index.css`
The main stylesheet that imports Tailwind CSS and defines custom component classes and utilities.

**Contents:**
- Tailwind CSS base, components, and utilities
- CSS custom properties (CSS variables) for theming
- Component classes (buttons, cards, inputs, badges, alerts)
- Custom utility classes
- Animation keyframes
- Accessibility styles (focus rings, reduced motion)
- Print styles

## Usage

### Importing Styles

Import the main stylesheet in your application entry point:

```tsx
import './styles/index.css';
```

### Using Component Classes

```tsx
// Button example
<button className="btn btn-primary">
  Submit
</button>

// Card example
<div className="card card-hover">
  <div className="card-header">
    <h3 className="heading-4">Title</h3>
  </div>
  <div className="card-body">
    Content goes here
  </div>
</div>

// Input example
<div>
  <label className="input-label" htmlFor="email">
    Email
  </label>
  <input
    id="email"
    type="email"
    className="input"
  />
</div>
```

### Using Tailwind Utilities

```tsx
// Layout and spacing
<div className="flex items-center gap-4 p-6">
  Content
</div>

// Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Content
</div>

// Colors
<p className="text-primary-600 bg-gray-50">
  Colored text
</p>
```

## Linting

Run CSS linting to ensure code quality:

```bash
# Check for issues
npm run lint:css

# Auto-fix issues
npm run lint:css:fix

# Check both JS and CSS
npm run lint:all
```

## Best Practices

1. **Use Tailwind utilities first** for common patterns
2. **Use component classes** for repeated patterns
3. **Maintain accessibility** - ensure proper contrast, focus states, and semantic HTML
4. **Follow responsive design** - mobile-first approach
5. **Run linters** before committing

## Related Documentation

- [Style Guide](../../STYLE_GUIDE.md) - Comprehensive styling documentation
- [Design Tokens](../theme/tokens.ts) - Centralized theme configuration
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
