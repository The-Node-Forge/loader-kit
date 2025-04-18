/* eslint-disable space-before-function-paren */
import { loaderCSS } from '../styles/loader.inline.css';

export interface LoaderOptions {
  type: 'spinner' | 'progress' | 'dots';
  size?: number;
  color?: string;
  container?: HTMLElement;
  position?: 'inline' | 'centered' | 'overlay';
  className?: string;
  style?: Partial<CSSStyleDeclaration>;
}

const DEFAULT_SIZE = 36;
const MIN_PROGRESS_HEIGHT = 4;
const DOT_COUNT = 3;
const PROGRESS_DIVISOR = 9;
const MAX_PROGRESS = 100;

function injectLoaderStyles(css: string) {
  if (document.getElementById('__loader-kit-css')) return;
  const style = document.createElement('style');
  style.id = '__loader-kit-css';
  style.innerHTML = css;
  document.head.appendChild(style);
}

export class Loader {
  private loaderElement: HTMLElement;
  private progressBarElement?: HTMLElement;
  private options: LoaderOptions;

  constructor(options: LoaderOptions) {
    injectLoaderStyles(loaderCSS);

    const defaultOptions: LoaderOptions = {
      type: options.type,
      size: options.size ?? DEFAULT_SIZE,
      color: options.color ?? '#09f',
      container: options.container ?? document.body,
      position: options.position ?? 'inline',
      className: options.className,
      style: options.style,
    };
    this.options = defaultOptions;
    this.loaderElement = this.createLoaderElement();
  }

  private createLoaderElement(): HTMLElement {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loader.style.setProperty('--loader-color', this.options.color as string);

    if (this.options.type === 'progress') {
      loader.classList.add('loader-progress');
      loader.style.height = `${Math.max(
        MIN_PROGRESS_HEIGHT,
        this.options.size! / PROGRESS_DIVISOR,
      )}px`;

      const fill = document.createElement('div');
      fill.classList.add('loader-progress-fill');
      loader.appendChild(fill);

      this.progressBarElement = fill; // keep reference
    }

    if (this.options.className) {
      loader.classList.add(this.options.className);
    }

    switch (this.options.type) {
      case 'spinner':
        loader.classList.add('loader-spinner');
        loader.style.width = `${this.options.size}px`;
        loader.style.height = `${this.options.size}px`;
        break;
      case 'progress':
        loader.classList.add('loader-progress');
        loader.style.height = `${Math.max(
          MIN_PROGRESS_HEIGHT,
          this.options.size! / PROGRESS_DIVISOR,
        )}px`;
        break;
      case 'dots':
        loader.classList.add('loader-dots');
        for (let i = 0; i < DOT_COUNT; i++) {
          const dot = document.createElement('span');
          loader.appendChild(dot);
        }
        break;
    }

    if (this.options.position === 'centered') {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'grid';
      wrapper.style.placeItems = 'center';
      wrapper.style.width = '100%';
      wrapper.style.height = '100%';
      wrapper.style.position = 'absolute';
      wrapper.style.top = '0';
      wrapper.style.left = '0';

      // ✅ Apply wrapper-level styles here
      if (this.options.style) {
        Object.entries(this.options.style).forEach(([key, value]) => {
          if (value && typeof value === 'string') {
            (wrapper.style as any)[key] = value;
          }
        });
      }

      wrapper.appendChild(loader);
      return wrapper;
    }

    if (this.options.position === 'overlay') {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.background = 'rgba(0, 0, 0, 0.5)';
      overlay.style.zIndex = '9999';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';

      if (this.options.className) {
        overlay.classList.add(this.options.className);
      }

      if (this.options.style) {
        Object.entries(this.options.style).forEach(([key, value]) => {
          if (value && typeof value === 'string') {
            (overlay.style as any)[key] = value;
          }
        });
      }

      overlay.appendChild(loader);
      return overlay;
    }

    // default is inline
    if (this.options.style) {
      Object.entries(this.options.style).forEach(([key, value]) => {
        if (value && typeof value === 'string') {
          (loader.style as any)[key] = value;
        }
      });
    }

    return loader;
  }

  // ✅ NEW: set progress programmatically
  public setProgress(percent: number): void {
    if (this.progressBarElement) {
      this.progressBarElement.style.width = `${Math.min(percent, MAX_PROGRESS)}%`;
    }
  }

  public start(): void {
    if (this.options.container && !document.body.contains(this.loaderElement)) {
      this.options.container?.appendChild(this.loaderElement);
    }
  }

  public stop(): void {
    this.loaderElement.remove();
  }

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

export const createLoader = (_options: LoaderOptions): Loader =>
  new Loader(_options);
