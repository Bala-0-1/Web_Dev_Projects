function getRandomNumber(){
	return Math.round(Math.random()*255);

}

function getRandomColor(){
	return `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
}

console.log(getRandomColor());
