/**
 * @jest-environment jsdom
 */

import { createLoader } from '../src/index';

describe('Loader Kit', () => {
  let container: HTMLElement;

  beforeEach(() => {
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
    expect(loaderEl.style.width).toBe('40px');
    expect(loaderEl.style.height).toBe('40px');
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
    expect(updatedLoaderEl.style.width).toBe('50px');
    expect(updatedLoaderEl.style.height).toBe('50px');
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
    const expectedHeight = Math.max(4, 45 / 9) + 'px';
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
    expect(dots.length).toBe(3);
  });
});
