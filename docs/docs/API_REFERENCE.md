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
