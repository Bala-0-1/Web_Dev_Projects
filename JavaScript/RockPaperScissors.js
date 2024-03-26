const ROCK = "Rock";
const PAPER = "papers";
const SCISSORS = "Scissors";

function getRandomNumber(){
	let rand =  Math.floor(Math.random()*3);
	return rand;
}

function guess(){
	let choice = getRandomNumber();
	if(choice == 0){
		return "Rock";
	}
	else if(choice == 1){
		return "Papers";
	}
	else if(choice == 2){
		return "Scissors";
	}

}

function displayTheWinner(userGuess,computerGuess,winner){
	let winPrompt = `User guessed : ${userGuess} \nComputer guessed : ${computerGuess} \n${winner}`;
	console.log(winPrompt);
}


function findTheWinner(user,computer){
	if(!user || !computer){
		return;
	}
	if(user === ROCK && computer === SCISSORS){
		return "User wins!\nRock beats scissors";
	}
	else if(user === PAPER && computer === ROCK){
		return "User wins!\Paper beats rock";
	}
	else if(user === SCISSORS && computer === PAPER){
		return "User wins!\nSCISSORS beats PAPER";
	}
	else if(user === computer){
		return "It's a tie!";
	}
	else{
		return "COMPUTER WINS";
	}
}
	function startGame(){
		let userGuess = guess();
		let computerGuess = guess();
		let winner = findTheWinner(userGuess,computerGuess);
		displayTheWinner(userGuess,computerGuess,winner);
	}

	startGame();
