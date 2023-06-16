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

const night = document.querySelector("#night");
const header = document.querySelector("header");


const footer = document.querySelector("footer");
let mode = 1;

night.addEventListener("click", () => {
	if (mode == 1) {
		header.style.background = "#232323";
		header.style.color = "#fff";

		mode = 2;
	} else {
		header.style.background = "#4A4E69";
		header.style.color = "#000";
		mode = 1;
	}
});

