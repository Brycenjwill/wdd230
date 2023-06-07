let modified = document.lastModified;

document.getElementById("lastModified").innerHTML = `Last modification: ${modified}`;

let curYear = new Date().getFullYear();

document.getElementById("year").innerHTML = `&copy; ${curYear}`;