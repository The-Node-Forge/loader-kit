/* eslint-disable space-before-function-paren */
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
   * Defaults to DEFAULT_SIZE (spinner) or calculated based on type.
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

const DEFAULT_SIZE = 36;
const MIN_PROGRESS_HEIGHT = 4;
const DOT_COUNT = 3;
const PROGRESS_DIVISOR = 9;

/**
 * Loader class handles creation and control of loading indicators.
 */
export class Loader {
  private loaderElement: HTMLElement;
  private options: LoaderOptions;

  constructor(options: LoaderOptions) {
    const defaultOptions: LoaderOptions = {
      type: options.type,
      size: options.size ?? DEFAULT_SIZE,
      color: options.color ?? '#09f',
      container: options.container ?? document.body,
    };
    this.options = defaultOptions;
    this.loaderElement = this.createLoaderElement();
  }

  /**
   * Creates the loader element based on the provided options.
   */
  private createLoaderElement(): HTMLElement {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loader.style.setProperty('--loader-color', this.options.color as string);

    switch (this.options.type) {
      case 'spinner':
        loader.classList.add('loader-spinner');
        loader.style.width = `${this.options.size}px`;
        loader.style.height = `${this.options.size}px`;
        break;
      case 'progress':
        loader.classList.add('loader-progress');
        loader.style.height = `${Math.max(MIN_PROGRESS_HEIGHT, this.options.size! / PROGRESS_DIVISOR)}px`;
        break;
      case 'dots':
        loader.classList.add('loader-dots');
        for (let i = 0; i < DOT_COUNT; i++) {
          const dot = document.createElement('span');
          loader.appendChild(dot);
        }
        break;
      default:
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
    this.loaderElement.remove();
  }

  /**
   * Updates the loader with new configuration options.
   * @param _options Partial options to update the loader.
   */
  public update(_options: Partial<LoaderOptions>): void {
    this.options = { ...this.options, ..._options };

    if (_options.color) {
      this.loaderElement.style.setProperty('--loader-color', _options.color);
    }

    this.stop();
    this.loaderElement = this.createLoaderElement();
    this.start();
  }
}

/**
 * Factory function to create a new loader instance.
 * @param _options Loader configuration options.
 * @returns A new Loader instance.
 */
export const createLoader = (_options: LoaderOptions): Loader =>
  new Loader(_options);
