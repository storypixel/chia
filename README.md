# Chia

A plain CSS component library. No Tailwind, no build step, no dependencies.

One CSS file. Real selectors. Low specificity. Works everywhere.

## Usage

```html
<link rel="stylesheet" href="chia.css">
```

Or import in your framework:

```js
import 'chia/chia.css'
```

## Components

- **Layout**: `.sidebar`, `.sidebar-header`, `.sidebar-content`, `.sidebar-footer`, `.sidebar-rail`, `.sidebar-inset`
- **Card**: `.card`, `.card-header`, `.card-content`, `.card-footer`
- **Button**: `.btn`, `.btn-secondary`, `.btn-outline`, `.btn-ghost`, `.btn-destructive`, `.btn-sm`, `.btn-lg`, `.btn-icon`
- **Badge**: `.badge`, `.badge-secondary`, `.badge-outline`, `.badge-destructive`
- **Input**: `.input`, `.textarea`, `.select`
- **Avatar**: `.avatar`, `.avatar-sm`, `.avatar-lg`
- **Dialog**: `.dialog-overlay`, `.dialog`, `.dialog-header`, `.dialog-footer`
- **Dropdown**: `.dropdown`, `.dropdown-item`, `.dropdown-separator`, `.dropdown-label`
- **Tabs**: `.tabs`, `.tab-list`, `.tab`, `.tab-active`, `.tab-panel`
- **Skeleton**: `.skeleton`
- **Separator**: `.separator`, `.separator-vertical`
- **Table**: `.table`
- **Scroll Area**: `.scroll-area`
- **Sheet**: `.sheet-overlay`, `.sheet`, `.sheet-left`

## Design Tokens

All colors, spacing, and radii are CSS custom properties in `:root`. Override them to theme.

## Philosophy

- One class per element. No compound selectors.
- No nesting. No `!important`.
- Alphabetical properties.
- CSS custom properties for theming.
- Works without JavaScript.
