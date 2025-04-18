// eslint-disable-next-line space-before-function-paren
export function injectStyles(css: string): void {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}
