/* Progressive enhancement only. All content and links work without JavaScript. */
(() => {
  const dialog = document.querySelector('#world-preview');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('img');
  const title = dialog.querySelector('h2');
  let trigger = null;
  let previousOverflow = '';
  document.querySelectorAll('[data-preview]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      title.textContent = link.dataset.preview;
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
    });
  });
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    if (trigger) trigger.focus({preventScroll: true});
  });
})();
