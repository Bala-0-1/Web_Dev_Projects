function sum(n1,n2){
	return n1+n2;
}

function subract(n1,n2){
	return n1-n2;
}

function divide(n1,n2){
	return n1/n2;
}

function multiply(n1,n2){
	return n1*n2;
}

function modulo(n1,n2){
	return n1%n2;
}

function isNumber(n){
	return typeof n == 'number';
}

function arithmeticOperations(n1,n2,op){
	if(!n1 || !n2 || !op){
		return "Invalid input";
	}
	if(!isNumber(n1) || !isNumber(n2)){
		return "Invalid input";
	}
	
	switch(op){
	
	case "+":
		return sum(n1,n2);
	case "-":
		return subract(n1,n2);
	case "*":
		return multiply(n1,n2);
	case "/":
		if(n2 == 0){
			return "Cannot divide by zero";
		}
		else{
		return divide(n1,n2);
		}
		
	case "%":
		return modulo(n1,n2);

	}
	
	
}


console.log(`${arithmeticOperations(1,2,"+")}\n
${arithmeticOperations(1,0,"/")}\n
${arithmeticOperations(1,2,"-")}\n
${arithmeticOperations(1,2,"/")}\n
${arithmeticOperations(1,2,"*")}\n
${arithmeticOperations(1,2,"%")}`)


