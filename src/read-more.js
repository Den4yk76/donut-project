(() => {
        const refs = {
            openModalBtn: document.querySelector('[data-button-open]'),
            closeModalBtn: document.querySelector('[data-button-close]'),
            modal: document.querySelector('[data-wrap]'),
            animate1: document.querySelector('[data-anime1]'),
        };

        refs.openModalBtn.addEventListener('click', toggleModal);
        refs.closeModalBtn.addEventListener('click', toggleModal);

        function toggleModal() {
            refs.modal.classList.toggle('is-hidden');
            refs.animate1.classList.toggle('animate__slideInDown');
        }
})();
    