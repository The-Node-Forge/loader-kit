# Class: Loader

Defined in:
[Loader.ts:35](https://github.com/The-Node-Forge/loader-kit/blob/220bcf6690e87aca0c79a3e719ffe91471131ad2/src/components/Loader.ts#L35)

Loader class handles creation and control of loading indicators.

## Methods

### start()

> **start**(): `void`

Defined in:
[Loader.ts:87](https://github.com/The-Node-Forge/loader-kit/blob/220bcf6690e87aca0c79a3e719ffe91471131ad2/src/components/Loader.ts#L87)

Starts the loader by appending it to the specified container.

#### Returns

`void`

---

### stop()

> **stop**(): `void`

Defined in:
[Loader.ts:96](https://github.com/The-Node-Forge/loader-kit/blob/220bcf6690e87aca0c79a3e719ffe91471131ad2/src/components/Loader.ts#L96)

Stops the loader by removing it from the DOM.

#### Returns

`void`

---

### update()

> **update**(`_options`): `void`

Defined in:
[Loader.ts:104](https://github.com/The-Node-Forge/loader-kit/blob/220bcf6690e87aca0c79a3e719ffe91471131ad2/src/components/Loader.ts#L104)

Updates the loader with new configuration options.

#### Parameters

##### \_options

`Partial`\<`LoaderOptions`\>

Partial options to update the loader.

#### Returns

`void`
