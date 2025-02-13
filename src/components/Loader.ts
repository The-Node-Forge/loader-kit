// src/components/Loader.ts

/**
 * Options for configuring the loader.
 */
export interface LoaderOptions {
  /**
   * Type of loader to display.
   * Options: 'spinner' | 'progress' | 'dots'
   */
  type: 'spinner' | 'progress' | 'dots';
  /**
   * Size of the loader in pixels.
   * Defaults to 36 (spinner) or calculated based on type.
   */
  size?: number;
  /**
   * Primary color for the loader.
   */
  color?: string;
  /**
   * The DOM element where the loader will be appended.
   * Defaults to document.body if not provided.
   */
  container?: HTMLElement;
}

/**
 * Loader class handles creation and control of loading indicators.
 */
export class Loader {
  private loaderElement: HTMLElement;
  private options: LoaderOptions;

  constructor(options: LoaderOptions) {
    // Apply default values if not provided.
    const defaultOptions: LoaderOptions = {
      type: options.type,
      size: options.size || 36,
      color: options.color || '#09f',
      container: options.container || document.body,
    };
    this.options = defaultOptions;
    this.loaderElement = this.createLoaderElement();
  }

  /**
   * Creates the loader element based on the provided options.
   */
  private createLoaderElement(): HTMLElement {
    const loader = document.createElement('div');
    loader.classList.add('loader'); // Base loader class

    // Set the primary color using an inline CSS variable.
    loader.style.setProperty('--loader-color', this.options.color as string);

    // Create loader based on type.
    switch (this.options.type) {
      case 'spinner':
        loader.classList.add('loader-spinner');
        loader.style.width = `${this.options.size}px`;
        loader.style.height = `${this.options.size}px`;
        break;
      case 'progress':
        loader.classList.add('loader-progress');
        // Use size to determine the height of the progress bar.
        loader.style.height = `${Math.max(4, this.options.size! / 9)}px`;
        break;
      case 'dots':
        loader.classList.add('loader-dots');
        // For the dots loader, create child elements (three dots).
        for (let i = 0; i < 3; i++) {
          const dot = document.createElement('span');
          loader.appendChild(dot);
        }
        break;
      default:
        // Fallback to spinner if the type is unknown.
        loader.classList.add('loader-spinner');
        loader.style.width = `${this.options.size}px`;
        loader.style.height = `${this.options.size}px`;
        break;
    }
    return loader;
  }

  /**
   * Starts the loader by appending it to the specified container.
   */
  public start(): void {
    if (this.options.container && !document.body.contains(this.loaderElement)) {
      this.options.container.appendChild(this.loaderElement);
    }
  }

  /**
   * Stops the loader by removing it from the DOM.
   */
  public stop(): void {
    if (this.loaderElement.parentElement) {
      this.loaderElement.parentElement.removeChild(this.loaderElement);
    }
  }

  /**
   * Updates the loader with new configuration options.
   * @param options Partial options to update the loader.
   */
  public update(options: Partial<LoaderOptions>): void {
    // Merge the new options.
    this.options = { ...this.options, ...options };

    // If the color is updated, change the inline CSS variable.
    if (options.color) {
      this.loaderElement.style.setProperty('--loader-color', options.color);
    }

    // For updates like type or size, recreate the loader element.
    this.stop();
    this.loaderElement = this.createLoaderElement();
    this.start();
  }
}

/**
 * Factory function to create a new loader instance.
 * @param options Loader configuration options.
 * @returns A new Loader instance.
 */
export const createLoader = (options: LoaderOptions): Loader => {
  return new Loader(options);
};
