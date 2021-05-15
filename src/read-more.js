(() => {
        const refs = {
            openModalBtn: document.querySelector('[data-button-open]'),
            closeModalBtn: document.querySelector('[data-button-close]'),
            openWrapBtn: document.querySelector('[data-wrap-open]'),
            closeWrapBtn: document.querySelector('[data-wrap-close]'),
            modal: document.querySelector('[data-wrap]'),
            wrap: document.querySelector('[data-wrap1]'),
        };

        refs.openModalBtn.addEventListener('click', toggleModal);
        refs.closeModalBtn.addEventListener('click', toggleModal);
        refs.openWrapBtn.addEventListener('click', toggleModal);
        refs.closeWrapBtn.addEventListener('click', toggleModal);

        function toggleModal() {
            refs.modal.classList.toggle('is-hidden');
            refs.wrap.classList.toggle('is-hidden');
        }
})();
    