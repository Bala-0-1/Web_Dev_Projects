function arithmeticOperations(num1,num2,op){
	console.log("Only these operations are supported,\n1. +\n2. -\n3. /\n4. *");
	switch(op){
		case "+":
			console.log(Number(num1)+Number(num2));
			break;
		case "-":
			console.log(num1-num2);
			break;
		case "/":
			console.log(num1/num2);
			break;
		case "*":
			console.log(num1*num2);
			break;
		default:
			console.log("Stop messing with the code");
	
	}

}

arithmeticOperations(2,"3f",")");

