(() => {
    const refs = {
        openMenuBtn: document.querySelector('.open-menu'),
        closeMenuBtn: document.querySelector('.close-menu'),
        mobileMenu: document.querySelector('.menu'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        refs.mobileMenu.classList.toggle('is-hidden');
    }
})();