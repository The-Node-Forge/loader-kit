---
title: API Reference
description: API parameters, returns, examples.
sidebar_position: 4
---

### `createLoader(options)`

Creates and returns a new loader instance.

**Parameters:**

- `options` - `LoaderOptions` - An object containing loader configuration.

**Returns:**

- `Loader` - A loader instance with start, stop, and update methods.

**Examples:**

```js
const loader = createLoader({
  type: 'spinner',
  size: 50,
  color: '#FF5733',
  container: document.body,
});
```

```js
const { createLoader } = require('@the-node-forge/loader-kit');

const loader = createLoader({ type: 'progress', size: 60, color: '#00FF00' });
loader.start();
```

```js
import React, { useEffect } from 'react';
import { createLoader } from '@the-node-forge/loader-kit';

const LoaderComponent = () => {
  useEffect(() => {
    const loader = createLoader({ type: 'dots', size: 40, color: '#0000FF' });
    loader.start();
    return () => loader.stop();
  }, []);

  return <div id="loader-container"></div>;
};

export default LoaderComponent;
```
