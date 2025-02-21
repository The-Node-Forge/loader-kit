**@the-node-forge/loader-kit**

---

<div align="center">
   
  # Loader Kit
  
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Live Documentation](https://the-node-forge.github.io/loader-kit/)

</div>
 
A **lightweight, customizable loader library** for JavaScript/TypeScript applications. Loader Kit provides beautiful and dynamic loading indicators—including spinners, progress bars, and dot loaders—with smooth CSS animations to enhance user experience during asynchronous operations.

## ✨ Features

- ✅ **Multiple Loader Types** – Choose between spinners, progress bars, or dots.
- ✅ **Highly Customizable** – Adjust colors, sizes, and styles effortlessly.
- ✅ **Smooth CSS Animations** – Built with vanilla JavaScript and modern CSS.
- ✅ **Simple API** – Easily integrate into any web project.

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

## 🛠️ Basic Usage

### JavaScript/TypeScript Example

Easily integrate Loader Kit into your project:

```javascript
import { createLoader } from '@the-node-forge/loader-kit';
import '@the-node-forge/loader-kit/dist/loader.css';

// Create a spinner loader
const container = document.getElementById('loader-container') || document.body;
const loader = createLoader({
  type: 'spinner',
  size: 50,
  color: '#FF5733',
  container: container,
});

// Start the loader
loader.start();

// Stop the loader after 5 seconds
setTimeout(() => {
  loader.stop();
}, 5000);
```

---

## ✅ **API Reference**

### **Loader Class**

```typescript
new Loader(options: LoaderOptions);
```

| Parameter   | Type                                    | Description                                                                 |
| ----------- | --------------------------------------- | --------------------------------------------------------------------------- |
| `type`      | `'spinner'` \| `'progress'` \| `'dots'` | The type of loader to display.                                              |
| `size`      | `number`                                | Size of the loader in pixels (default is 36 for spinner).                   |
| `color`     | `string`                                | Primary color for the loader.                                               |
| `container` | `HTMLElement`                           | The DOM element where the loader will be appended (default: document.body). |

#### **Methods**

```typescript
start(): void;
stop(): void;
update(options: Partial<LoaderOptions>): void;
```

| Method                                    | Returns | Description                                                    |
| ----------------------------------------- | ------- | -------------------------------------------------------------- |
| `start()`                                 | `void`  | Appends the loader to the DOM and starts its animation.        |
| `stop()`                                  | `void`  | Removes the loader from the DOM.                               |
| `update(options: Partial<LoaderOptions>)` | `void`  | Dynamically updates the loader with new configuration options. |

---

### 💡 **Contributing**

Contributions are welcome! Please submit
[issues](https://github.com/The-Node-Forge/loader-kit/issues) or
[pull requests](https://github.com/The-Node-Forge/loader-kit/pulls) to help improve
Loader Kit.

---

### ⭐ Support

If you find this package useful, please **give it a ⭐ on
[GitHub](https://github.com/The-Node-Forge/loader-kit 'GitHub Repository')**.

---

### 🔗 **Links**

- 📦 [NPM Package](https://www.npmjs.com/package/@the-node-forge/loader-kit)
- 🏠 [The-Node-Forge Organization](https://github.com/The-Node-Forge)
