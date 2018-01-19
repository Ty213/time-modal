var modal = document.querySelector('.modal');
var closeModal = document.querySelector('.modal__close');


function popUp() {
    modal.style.display = 'block';
    modal.style.float = 'right';
}

setTimeout(popUp, 3000);

 closeModal.addEventListener('click', () => {
	modal.style.display = 'none';
});