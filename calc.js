let currentTotal = 0;
let buffer = '0';
let previousOperator;
const screen = document.querySelector('.screen');

document.querySelector('.calc-buttons').addEventListener('click', function(event) {
	console.log(event.target.innerText)
	buttonClick(event.target.innerText);
});

function buttonClick(value) {
	if (isNaN(parseInt(value))) {
		handleSymbol(value);
	} else {
		handleNumber(value);
	}
	// rerender();
}
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
//How to check for symbols with built in methods
console.log(isNaN());

// function getWindow() {
// 	console.log(this)
// 	console.log(this.getComputedStyle)
// }
// getNumber()
// getWindow()
