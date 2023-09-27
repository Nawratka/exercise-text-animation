const modal = document.querySelector('.modal');
const modalInput = document.querySelector('.modal-input');
const modalBtn = document.querySelector('.modal-btn');
const saveBtn = document.querySelector('.save-btn');
const text = document.querySelector('.text');
const errorMsg = document.querySelector('.error-msg');

let inputValue = 'Test text';
let timeout;
let index = 1;
let speed = 80;

const writingAnimation = () => {
	text.innerText = inputValue.slice(0, index);
	index++;

	if (index > inputValue.length) {
		return;
	}
	timeout = setTimeout(writingAnimation, speed);
};

const openModal = () => {
	modal.classList.add('active');
};

const closeModal = () => {
	if (modalInput.value == '') {
		errorMsg.textContent = 'Wprowadź text';
		return;
	}
	inputValue = modalInput.value;
	modal.classList.remove('active');
	clearStuff();
	writingAnimation();
};

const clearStuff = () => {
	modalInput.value = '';
	errorMsg.textContent = '';
	clearTimeout(timeout);
	index = 1;
};

modalBtn.addEventListener('click', openModal);
saveBtn.addEventListener('click', closeModal);

writingAnimation();
