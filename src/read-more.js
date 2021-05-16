(() => {
        const refs = {
            openModalBtn: document.querySelector('[data-button-open]'),
            closeModalBtn: document.querySelector('[data-button-close]'),
            openWrapBtn: document.querySelector('[data-wrap-open]'),
            closeWrapBtn: document.querySelector('[data-wrap-close]'),
            modal: document.querySelector('[data-wrap]'),
            wrap: document.querySelector('[data-wrap1]'),
            animate: document.querySelector('[data-anime]'),
            animate1: document.querySelector('[data-anime1]'),
        };

        refs.openModalBtn.addEventListener('click', toggleModal);
        refs.closeModalBtn.addEventListener('click', toggleModal);
        refs.openWrapBtn.addEventListener('click', toggleModal);
        refs.closeWrapBtn.addEventListener('click', toggleModal);

        function toggleModal() {
            refs.modal.classList.toggle('is-hidden');
            refs.wrap.classList.toggle('is-hidden');
            refs.animate.classList.toggle('animate__fadeInUp');
            refs.animate1.classList.toggle('animate__fadeInUp');
        }
})();
    