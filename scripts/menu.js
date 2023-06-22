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
const card2p = document.querySelectorAll(".card2 p ");
const card2 = document.querySelector(".card2"); 
const card1li = document.querySelectorAll(".card1 li"); 
const card1a = document.querySelectorAll(".card1 a");
const card1Hover = document.querySelectorAll(".card1 a:hover");


const footer = document.querySelector("footer");
let mode = 1;

night.addEventListener("click", () => {
	if (mode == 1) {
		main.style.background = '#192B41';
		h2.style.color = "white"
		card1.style.background = 'black';
		card2p.forEach(fontWhite);
		card2.style.background = "black";
		card1li.forEach(fontWhite);
		card1a.forEach(fontWhite);

		mode = 2;
	} else {
		main.style.background = "white";
		h2.style.color = "grey";
		card1.style.background = "white";
		card2p.forEach(fontGrey);
		card2.style.background = "white";
		card1li.forEach(fontGrey);
		card1a.forEach(fontBlack);

		mode = 1;
	}
});
function fontWhite(item){
	item.style.color = "white";
}
function fontGrey(item){
	item.style.color = "#5A5A5A"
}
function fontBlack(item){
	item.style.color = "black";
}



const visits = document.querySelector(".visits");
let numberOfVisits = Number(window.localStorage.getItem("numberOfVisits-ls")) || 0;
if (numberOfVisits != 0){
	visits.textContent = "Visits: "+numberOfVisits;
}
else{
	visits.textContent = "This is the first visit! Welcome!"

}
numberOfVisits ++;
localStorage.setItem("numberOfVisits-ls",numberOfVisits);
