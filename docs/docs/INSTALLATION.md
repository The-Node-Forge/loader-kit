---
title: Installation
description: Installation details.
sidebar_position: 2
---

## 📦 Installation

You can install Loader Kit using **npm** or **yarn**:

```sh
npm install @the-node-forge/loader-kit
```

or

```sh
yarn add @the-node-forge/loader-kit
```

---

## ✅ Requirements

- Node.js 16 or higher
- A modern frontend project (React, Vue, vanilla JS, etc.)

---

## 🧠 Quick Note

Loader Kit comes with **zero dependencies**, built-in styles, and helper utilities
for:

- `Spinner.show()` / `Spinner.hide()`
- `ProgressBar.start()` / `.set()` / `.complete()`
- `Dots.show()` / `Dots.hide()`

No setup or styling needed—just import and go!

```js
import { Spinner } from '@the-node-forge/loader-kit';

Spinner.show(); // start loading
Spinner.hide(); // stop loading
```
