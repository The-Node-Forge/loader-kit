---
title: Usage
description: Basic example and config.
sidebar_position: 3
---

# Usage

## Basic Example

### Using ES Modules (Recommended)

```js
import { createLoader } from 'loader-kit';

const loader = createLoader({
  type: 'spinner',
  size: 40,
  color: '#ff0000',
  container: document.body,
});

loader.start();

// Stop loader after 5 seconds
setTimeout(() => {
  loader.stop();
}, 5000);
```
