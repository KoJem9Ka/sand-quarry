let promise: Promise<void> | null = null;

export async function pageReady(): Promise<void> {
  if (promise) return promise;

  const fontsPromise = document.fonts.ready;

  const loadPromise = new Promise<void>((resolve) => {
    if (document.readyState === 'complete') resolve();
    else window.addEventListener('load', () => resolve, { once: true });
  });

  promise = Promise.all([fontsPromise, loadPromise]).then(() => void 0)

  return promise;
}
