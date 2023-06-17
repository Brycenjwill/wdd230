let modified = document.lastModified;

document.getElementById("lastModified").innerHTML = `Last modification: ${modified}`;
const ham = document.querySelector('#ham');
const nav = document.querySelector('.nav');
let hamb = 1;

ham.addEventListener('click', () => {
	nav.classList.toggle('open');
	ham.classList.toggle('open');
	if (hamb == 1){
		nav.style.display = "block";
	}
});