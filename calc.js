let currentTotal = 0;
let buffer = '0';
let previousOperator = null;
const screen = document.querySelector('.screen');

//Event delegation, all the child buttons of the parent class possess the event
//User clicks
document.querySelector('.calc-buttons').addEventListener('click', function(event) {
	console.log(event.target.innerText);
	buttonClick(event.target.innerText);
	rerender();
});
//Button click is called and sends back the value
//Re render is called and places the value of the clicked element into the screen element
function buttonClick(value) {
	if (isNaN(parseInt(value))) {
		handleSymbol(value);
	} else {
		handleNumber(value);
	}
}
//Called after buttonclick finishes
function handleNumber(value) {
	if (buffer === '0') {
		buffer = value;
	} else {
		buffer += value;
	}
}

function handleMath(value) {
	const intBuffer = parseInt(buffer);
	if(currentTotal === 0) {
		currentTotal = intBuffer;
	} else {
		flushOperation(intBuffer)
	}
	previousOperator = value;
	buffer = '0'
}

function flushOperation (intBuffer) {
	if (previousOperator === 'add') {
		currentTotal += intBuffer
	} else if (previousOperator === 'sub') {
		currentTotal -= intBuffer
	} else if (previousOperator === 'mult') {
		currentTotal *= intBuffer
	} else if (previousOperator === 'div') {
		currentTotal /= intBuffer
	}
}

function handleSymbol(value) {
	switch(value) {
		case 'C':
			buffer = '0';
			currentTotal = 0;
			previousOperator = null;
			break;
		case '=':
			if(previousOperator === null) {
				return;
			}
			flushOperation(parseInt(buffer));
			previousOperator = null;
			buffer = '' + currentTotal;
			currentTotal = 0;
			break;
		case 'back':
			if(buffer.length === 1) {
				buffer = '0';
			} else {
				buffer = buffer.substring(0, buffer.length - 1);
			}
			break;
		case 'add':
		case 'sub':
		case 'mult':
		case 'div':
			handleMath(value)
			break;
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
