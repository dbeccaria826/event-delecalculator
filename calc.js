let currentTotal = 0;
let buffer = '0';
let previousOperator;
const screen = document.querySelector('.screen');

//Event delegation, all the child buttons of the parent class possess the event
//User clicks
document.querySelector('.calc-buttons').addEventListener('click', function(event) {
	console.log(event.target.innerText);
	buttonClick(event.target.innerText);
});
//Button click is called and sends back the value
//Re render is called and places the value of the clicked element into the screen element
function buttonClick(value) {
	if (isNaN(parseInt(value))) {
		handleSymbol(value);
	} else {
		handleNumber(value);
	}
	rerender();
}
//Called after buttonclick finishes
function handleNumber(value) {
	if (buffer === 0) {
		buffer = value;
	} else {
		buffer += value;
	}
}

function handleSymbol(value) {
	if (buffer !== 0) {
	} else {
	}
}

function rerender() {
	screen.innerText = buffer
}
//How to check for symbols with built in methods
// console.log(isNaN());

// function getWindow() {
// 	console.log(this)
// 	console.log(this.getComputedStyle)
// }
// getNumber()
// getWindow()
