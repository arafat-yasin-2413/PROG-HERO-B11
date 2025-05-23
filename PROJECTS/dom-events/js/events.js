console.log("external file");

// option 2 to handle event
function makeYellow() {
	document.body.style.backgroundColor = "yellow";
}

function makeRed() {
	document.body.style.backgroundColor = "red";
}

// option 3 : get element by id and then set onclick on that object
const btnMakeBlue = document.getElementById("btn-make-blue");
// console.log(btnMakeBlue);

btnMakeBlue.onclick = function makeBlue() {
	document.body.style.backgroundColor = "blue";
};

// option 3 : slight different version
const btnMakePurple = document.getElementById("btn-make-purple");
// console.log(btnMakePurple);
btnMakePurple.onclick = makePurple;

function makePurple() {
	document.body.style.backgroundColor = "purple";
}
