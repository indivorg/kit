<p align="center">
  <img
    src="/.github/logo.svg"
    width="39"
    height="33"
  />
</p>

<h1 align="center">Indiv Component Kit</h1>

<p align="center">
  <strong>Themeable components based on Theme UI</strong>
</p>

\
Indiv Kit is a collection of React components built using Theme UI and based on a
standard [Theme Specification][].

**documentation**: https://indivorg.github.io/kit

---

Built for designs systems, white-labels, themes and other applications
where colors, typography, and layout are treated as first-class citizens
and based on a standard [Theme Specification][].

- Uses [Theme UI][]
- No hard-coded colours / branding – not too opinionated.
- Used by Indiv in production.

## Getting Started

```sh
yarn add @indivorg/kit
```

Any styles in your app can reference values from the global `theme` object. To
provide the theme in context, wrap your application with the `ThemeProvider`
component and pass in a custom `theme` object.

```jsx
// basic usage
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

export default (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)
```

[theme specification]: https://system-ui.com/theme
[theme ui]: https://theme-ui.com/