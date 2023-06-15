const ham = document.querySelector('#ham');
const nav = document.querySelector('.nav');

ham.addEventListener('click', () => {
	nav.classList.toggle('open');
	ham.classList.toggle('open');
});