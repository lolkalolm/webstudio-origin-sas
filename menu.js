(() => {
    const refs = {
      openMenuBtn: document.querySelector('.mobile-open-btn'),
      closeMenuBtn: document.querySelector('.mobile-close-btn'),
      menu: document.querySelector('.mobile-menu-wrap'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
    }
  })();