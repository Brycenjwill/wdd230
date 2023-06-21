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
const main = document.querySelector("*");
const h2 = document.querySelector("h2");
const card1 = document.querySelector('.card1');
const card2 = document.querySelector(".card2");

const footer = document.querySelector("footer");
let mode = 1;

night.addEventListener("click", () => {
	if (mode == 1) {
		main.style.background = '#192B41';
		h2.style.color = "white"
		card1.style.background = 'lightgrey';
		card2.style.background = "lightgrey";

		mode = 2;
	} else {
		main.style.background = "white";
		h2.style.color = "grey";
		card1.style.background = "white";
		card2.style.background = "white"
		
		mode = 1;
	}
});

