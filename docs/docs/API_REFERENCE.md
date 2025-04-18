## ✅ API Reference

### Spinner

```ts
Spinner.show(container?: HTMLElement, options?: {
  color?: string;
  size?: number;
  position?: 'inline' | 'centered' | 'overlay';
  style?: Partial<CSSStyleDeclaration>;
})
Spinner.hide()
```

### ProgressBar

```ts
ProgressBar.start(container: HTMLElement | string, options?: {
  color?: string;
  size?: number;
  style?: Partial<CSSStyleDeclaration>;
})
ProgressBar.set(percent: number)
ProgressBar.complete()
```

### Dots

```ts
Dots.show(container?: HTMLElement, options?: {
  color?: string;
  position?: 'inline' | 'centered' | 'overlay';
  style?: Partial<CSSStyleDeclaration>;
})
Dots.hide()
```
