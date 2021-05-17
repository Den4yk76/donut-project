(() => {
        const refs = {
            openWrapBtn: document.querySelector('[data-wrap-open]'),
            closeWrapBtn: document.querySelector('[data-wrap-close]'),
            wrap: document.querySelector('[data-wrap1]'),
            animate: document.querySelector('[data-anime]'),
        };

        refs.openWrapBtn.addEventListener('click', toggleModal);
        refs.closeWrapBtn.addEventListener('click', toggleModal);

        function toggleModal() {
            refs.wrap.classList.toggle('is-hidden');
            refs.animate.classList.toggle('animate__slideInDown');
        }
})();
    