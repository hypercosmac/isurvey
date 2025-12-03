document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const scrollTarget = target.dataset.scroll;
  if (scrollTarget) {
    const el = document.querySelector(scrollTarget);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      event.preventDefault();
    }
  }
});


