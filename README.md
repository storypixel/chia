# Chia

A plain CSS framework. No Tailwind, no build step, no JavaScript dependencies.

Real selectors. Low specificity. `data-slot` attributes for component styling. CSS custom properties for theming.

## Usage

Import everything:

```css
@import 'chia/chia.css';
```

Or import modules individually:

```css
@import 'chia/src/tokens.css';
@import 'chia/src/reset.css';
@import 'chia/src/components.css';
@import 'chia/src/utilities.css';
```

## Modules

| File | Purpose |
|------|---------|
| `src/tokens.css` | Design tokens — typography, radius, colors, spacing, transitions |
| `src/reset.css` | Modern CSS reset (Andy Bell-based) with sensible defaults |
| `src/animations.css` | Keyframes for fade, slide, scale, collapse, ping, shimmer, spin |
| `src/prose.css` | Rich text typography via `.prose` class |
| `src/utilities.css` | Minimal layout utilities — flex, grid, gap, padding, margin, sizing |
| `src/components.css` | UI components via `[data-slot]` selectors — button, badge, input, card, avatar, tabs, dialog, dropdown, etc. |

## Component Architecture

Components use `data-slot` attributes instead of classes:

```html
<button data-slot="button" data-variant="default" data-size="default">
  Click me
</button>

<div data-slot="card">
  <div data-slot="card-header">Title</div>
  <div data-slot="card-content">Body</div>
</div>

<span data-slot="badge" data-variant="secondary">New</span>
```

Variants and sizes are `data-variant` and `data-size` attributes. This keeps specificity flat — every component rule is a single attribute selector.

## Components

- **Button**: `[data-slot="button"]` — variants: default, outline, secondary, ghost, destructive, link. Sizes: xs, sm, default, lg, icon, icon-sm, icon-lg.
- **Badge**: `[data-slot="badge"]` — variants: default, secondary, destructive, outline, ghost, link.
- **Input**: `[data-slot="input"]`
- **Textarea**: `[data-slot="textarea"]`
- **Floating Input**: `[data-slot="floating-input"]` + `[data-slot="floating-label"]`
- **Card**: `[data-slot="card"]` — header, content, footer, title, description, action.
- **Avatar**: `[data-slot="avatar"]` — image, fallback. Sizes: sm, default, lg.
- **Checkbox**: `[data-slot="checkbox"]`
- **Toggle**: `[data-slot="toggle"]`
- **Label**: `[data-slot="label"]`
- **Description**: `[data-slot="description"]`

## Theming

Override CSS custom properties in `:root` or a theme layer:

```css
@layer theme {
  :root {
    --primary: #2563EB;
    --primary-foreground: #FFFFFF;
    --border: #E5E7EB;
    /* ... */
  }
}
```

See `src/tokens.css` for the full list of available tokens.

## Philosophy

- One attribute selector per rule. No compound selectors.
- No nesting. No `!important`.
- CSS custom properties for every value.
- `@layer base` for defaults, `@layer theme` for project overrides.
- Works without JavaScript. Works with any framework.
- Utilities exist for layout convenience, not as a design system.
