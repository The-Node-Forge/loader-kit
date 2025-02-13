[**@the-node-forge/loader-kit**](../README.md)

***

[@the-node-forge/loader-kit](../globals.md) / Loader

# Class: Loader

Defined in: [Loader.ts:31](https://github.com/The-Node-Forge/loader-kit/blob/42c9d4322a3d6fd5fbeb1f0444e5f0a7ef216b69/src/components/Loader.ts#L31)

Loader class handles creation and control of loading indicators.

## Constructors

### new Loader()

> **new Loader**(`options`): [`Loader`](Loader.md)

Defined in: [Loader.ts:35](https://github.com/The-Node-Forge/loader-kit/blob/42c9d4322a3d6fd5fbeb1f0444e5f0a7ef216b69/src/components/Loader.ts#L35)

#### Parameters

##### options

`LoaderOptions`

#### Returns

[`Loader`](Loader.md)

## Methods

### start()

> **start**(): `void`

Defined in: [Loader.ts:90](https://github.com/The-Node-Forge/loader-kit/blob/42c9d4322a3d6fd5fbeb1f0444e5f0a7ef216b69/src/components/Loader.ts#L90)

Starts the loader by appending it to the specified container.

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [Loader.ts:99](https://github.com/The-Node-Forge/loader-kit/blob/42c9d4322a3d6fd5fbeb1f0444e5f0a7ef216b69/src/components/Loader.ts#L99)

Stops the loader by removing it from the DOM.

#### Returns

`void`

***

### update()

> **update**(`options`): `void`

Defined in: [Loader.ts:109](https://github.com/The-Node-Forge/loader-kit/blob/42c9d4322a3d6fd5fbeb1f0444e5f0a7ef216b69/src/components/Loader.ts#L109)

Updates the loader with new configuration options.

#### Parameters

##### options

`Partial`\<`LoaderOptions`\>

Partial options to update the loader.

#### Returns

`void`
