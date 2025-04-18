/* eslint-disable space-before-function-paren */
import { createLoader } from '../components/Loader';

// Internal loader references
let spinnerInstance: any = null;
let progressInstance: any = null;
let dotsInstance: any = null;

// Constants
const DEFAULT_COLOR = '#09f';
const DEFAULT_SPINNER_SIZE = 40;
const DEFAULT_PROGRESS_HEIGHT = 6;
const PROGRESS_COMPLETE = 100;
const STOP_DELAY_MS = 500;

type LoaderOptions = {
  size?: number;
  color?: string;
  position?: 'inline' | 'centered' | 'overlay';
  style?: Partial<CSSStyleDeclaration>;
};

export const Spinner = {
  show(container: HTMLElement = document.body, options: LoaderOptions = {}) {
    spinnerInstance = createLoader({
      type: 'spinner',
      size: options.size ?? DEFAULT_SPINNER_SIZE,
      color: options.color ?? DEFAULT_COLOR,
      position: options.position ?? 'centered',
      container,
      style: options.style,
    });
    spinnerInstance.start();
  },
  hide() {
    spinnerInstance?.stop();
    spinnerInstance = null;
  },
};

export const ProgressBar = {
  start(selectorOrElement: string | HTMLElement, options: LoaderOptions = {}) {
    const container =
      typeof selectorOrElement === 'string'
        ? document.querySelector(selectorOrElement)
        : selectorOrElement;

    if (!container || !(container instanceof HTMLElement)) return;

    progressInstance = createLoader({
      type: 'progress',
      size: options.size ?? DEFAULT_PROGRESS_HEIGHT,
      color: options.color ?? DEFAULT_COLOR,
      container,
      position: options.position ?? 'inline',
      style: {
        width: '100%',
        ...(options.style ?? {}),
      },
    });

    progressInstance.start();
  },
  set(percent: number) {
    progressInstance?.setProgress(percent);
  },
  complete() {
    progressInstance?.setProgress(PROGRESS_COMPLETE);
    setTimeout(() => progressInstance?.stop(), STOP_DELAY_MS);
  },
};

export const Dots = {
  show(container: HTMLElement = document.body, options: LoaderOptions = {}) {
    dotsInstance = createLoader({
      type: 'dots',
      color: options.color ?? DEFAULT_COLOR,
      position: options.position ?? 'centered',
      container,
      style: options.style,
    });
    dotsInstance.start();
  },
  hide() {
    dotsInstance?.stop();
    dotsInstance = null;
  },
};
