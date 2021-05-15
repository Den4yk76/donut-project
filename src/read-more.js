(() => {
        const refs = {
            openModalBtn: document.querySelector('[data-button-open]'),
            closeModalBtn: document.querySelector('[data-button-close]'),
            modal: document.querySelector('[data-wrap]'),
        };

        refs.openModalBtn.addEventListener('click', toggleModal);
        refs.closeModalBtn.addEventListener('click', toggleModal);

        function toggleModal() {
            refs.modal.classList.toggle('is-hidden');
        }
})();
    