const container = document.querySelector('.container')
const red = document.querySelector('input[name=red]')
const green = document.querySelector('input[name=green]')
const blue = document.querySelector('input[name=blue]')
const hexNumber = document.querySelector('.hex-number')

red.nextElementSibling.innerHTML = red.value
green.nextElementSibling.innerHTML = green.value
blue.nextElementSibling.innerHTML = blue.value
displayHexNumber ()

container.addEventListener('input', e => {
	sliderChange (e.target)
	changeBackgroundColor ()
	displayHexNumber ()
})

function sliderChange (color) {
	color.nextElementSibling.innerHTML = color.value
}

function changeBackgroundColor () {
	document.querySelector('body').style.backgroundColor= `rgb(${red.value},${green.value},${blue.value})`
}

function displayHexNumber () {
	let hexRed = Number(red.value).toString(16)
	let hexGreen = Number(green.value).toString(16)
	let hexBlue = Number(blue.value).toString(16)
	
	if (red.value < 16) {hexRed = '0' + hexRed}
	if (green.value < 16) {hexGreen = '0' + hexGreen}
	if (blue.value < 16) {hexBlue = '0' + hexBlue}
	
	hexNumber.firstElementChild.innerHTML = '#'+hexRed+hexGreen+hexBlue
}