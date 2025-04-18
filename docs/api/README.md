**@the-node-forge/loader-kit**

***

<div align="center">

# Loader Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Made with TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-007acc)

[![NPM Version](https://img.shields.io/npm/v/@the-node-forge/loader-kit)](https://www.npmjs.com/package/@the-node-forge/loader-kit)
[![Build Status](https://img.shields.io/github/actions/workflow/status/the-node-forge/loader-kit/ci.yaml?branch=main)](https://github.com/The-Node-Forge/loader-kit/actions)
![Platform](https://img.shields.io/badge/platform-browser%20%7C%20frameworks-brightgreen)

[Live Documentation](https://the-node-forge.github.io/loader-kit/)

</div>

A **lightweight, customizable loader library** for JavaScript/TypeScript
applications. Loader Kit provides beautiful and dynamic loading indicators—including
spinners, progress bars, and dot loaders—with smooth CSS animations to enhance user
experience during asynchronous operations.

## ✨ Features

- ✅ **Multiple Loader Types** – Choose between spinners, progress bars, or dots.
- ✅ **Minimal API Surface** – Just import and go.
- ✅ **Smooth CSS Animations** – Built with modern CSS and vanilla JavaScript.
- ✅ **Built-In Helpers** – `Spinner`, `ProgressBar`, and `Dots` for dead-simple
  usage.

---

## 📦 Installation

```sh
npm install @the-node-forge/loader-kit
```

or using Yarn:

```sh
yarn add @the-node-forge/loader-kit
```

---

## 🛠️ Usage

```js
import { Spinner, ProgressBar, Dots } from '@the-node-forge/loader-kit';

// Show a spinner
Spinner.show();
setTimeout(() => Spinner.hide(), 2000);

// Show a progress bar
ProgressBar.start('#progress-bar');
ProgressBar.set(50);
ProgressBar.complete();

// Show dot loader
Dots.show();
Dots.hide();
```

---

## 🧩 Helpers API

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

---

## 💡 Contributing

We welcome contributions! Feel free to open an
[issue](https://github.com/The-Node-Forge/loader-kit/issues) or submit a
[pull request](https://github.com/The-Node-Forge/loader-kit/pulls).

---

## ⭐ Support

If you find Loader Kit helpful, give it a ⭐ on
[GitHub](https://github.com/The-Node-Forge/loader-kit).

---

## 🔗 Links

- 📦 [NPM Package](https://www.npmjs.com/package/@the-node-forge/loader-kit)
- 📖 [Live Docs](https://the-node-forge.github.io/loader-kit/)
- 🏠 [The-Node-Forge Org](https://github.com/The-Node-Forge)
