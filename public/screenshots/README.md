# Screenshots

Drop your in-emulator captures here (PNG or JPG, 16:9 works best), then register
them in `assets/js/config.js`:

```js
gallery: [
  { src: "screenshots/dead-cells-01.png", label: "Dead Cells — gameplay" },
  ...
]
```

For the big "Now Running" frame, replace the placeholder inside
`index.html` (`data-screenshot-slot="dead-cells"`) with:

```html
<img src="screenshots/dead-cells-01.png" alt="Dead Cells running on Kyty" />
```

> Only commit captures you have the right to share. Never commit keys,
> firmware, game dumps or any copyrighted asset beyond fair-use screenshots
> of emulator output.
