---
title: Usage
description: Basic example and config.
sidebar_position: 3
---

# Usage

## Quick Example

```ts
import { Spinner, ProgressBar, Dots } from '@the-node-forge/loader-kit';

// Spinner
Spinner.show();
Spinner.hide();

// Progress Bar
ProgressBar.start('#progress-bar');
ProgressBar.set(60); // percent
ProgressBar.complete();

// Dots
Dots.show();
Dots.hide();
```

## Customization

Each loader supports optional styling via options:

```ts
Spinner.show(document.body, {
  color: '#f00',
  size: 50,
  position: 'overlay',
  style: { transform: 'translateY(-30px)' },
});

ProgressBar.start('#progress-bar', {
  color: '#00f',
  size: 4,
  style: { marginTop: '10px' },
});

Dots.show(document.body, {
  color: '#0f0',
  position: 'centered',
});
```

Make sure your container element (e.g., `#progress-bar`) exists in the DOM before
calling the loader methods.
