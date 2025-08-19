 let lastScroll = 0;
  const nav = document.getElementById('mainNav');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      nav.classList.remove('nav-show');
      return;
    }

    if (currentScroll < lastScroll) {
      nav.classList.add('nav-show');
    } else {
      nav.classList.remove('nav-show');
    }
    lastScroll = currentScroll;
  });