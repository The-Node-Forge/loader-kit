/**
 * @jest-environment jsdom
 */

/* eslint-env jest */

import { createLoader, Spinner } from '../src/index';

describe('Loader Kit', () => {
  let container: HTMLElement;

  // Move constants inside the describe block to avoid ESLint errors
  const MIN_HEIGHT = 4;
  const PROGRESS_DIVISOR = 9;
  const DOT_COUNT = 3;
  const DIVIDED_BY = 45;
  const EXPECTED_SIZE_FORTY = 40;
  const EXPECTED_SIZE_FIFTY = 50;

  beforeEach(() => {
    // Ensure document is properly defined
    container = document.createElement('div');
    container.id = 'test-container';
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should create a spinner loader and append it to the container', () => {
    const loader = createLoader({
      type: 'spinner',
      size: 40,
      color: '#ff0000',
      container: container,
    });

    // Before starting, the container should not have the loader.
    expect(container.querySelector('.loader')).toBeNull();

    loader.start();
    const loaderEl = container.querySelector('.loader-spinner') as HTMLElement;
    expect(loaderEl).not.toBeNull();
    expect(loaderEl.style.width).toBe(`${EXPECTED_SIZE_FORTY}px`);
    expect(loaderEl.style.height).toBe(`${EXPECTED_SIZE_FORTY}px`);
  });

  it('should remove the loader from the container when stopped', () => {
    const loader = createLoader({
      type: 'spinner',
      container: container,
    });
    loader.start();
    expect(container.querySelector('.loader-spinner')).not.toBeNull();
    loader.stop();
    expect(container.querySelector('.loader-spinner')).toBeNull();
  });

  it('should update the loader with new options', () => {
    const loader = createLoader({
      type: 'spinner',
      size: 40,
      color: '#ff0000',
      container: container,
    });
    loader.start();

    const originalLoaderEl = container.querySelector(
      '.loader-spinner',
    ) as HTMLElement;
    expect(originalLoaderEl).not.toBeNull();

    // Update loader with a new size and color.
    loader.update({ size: 50, color: '#00ff00' });

    const updatedLoaderEl = container.querySelector(
      '.loader-spinner',
    ) as HTMLElement;
    expect(updatedLoaderEl).not.toBeNull();
    expect(updatedLoaderEl.style.width).toBe(`${EXPECTED_SIZE_FIFTY}px`);
    expect(updatedLoaderEl.style.height).toBe(`${EXPECTED_SIZE_FIFTY}px`);
    expect(updatedLoaderEl.style.getPropertyValue('--loader-color')).toBe('#00ff00');
  });

  it('should create a progress loader correctly', () => {
    const loader = createLoader({
      type: 'progress',
      size: 45,
      color: '#123456',
      container: container,
    });
    loader.start();
    const loaderEl = container.querySelector('.loader-progress') as HTMLElement;
    expect(loaderEl).not.toBeNull();
    const expectedHeight = `${Math.max(MIN_HEIGHT, DIVIDED_BY / PROGRESS_DIVISOR)}px`;
    expect(loaderEl.style.height).toBe(expectedHeight);
  });

  it('should create a dots loader with three child elements', () => {
    const loader = createLoader({
      type: 'dots',
      container: container,
    });
    loader.start();
    const loaderEl = container.querySelector('.loader-dots') as HTMLElement;
    expect(loaderEl).not.toBeNull();
    const dots = loaderEl.querySelectorAll('span');
    expect(dots.length).toBe(DOT_COUNT);
  });

  it('Spinner.show should insert a loader into DOM', () => {
    Spinner.show(document.body);
    const loaderEl = document.body.querySelector('.loader-spinner');
    expect(loaderEl).not.toBeNull();
  });
});
