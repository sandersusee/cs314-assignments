function ConfirmPrompt() {
	let confirmBool = confirm("Pick One");
	if (confirmBool == true) {
	alert("You pressed OK");
	} else {
	alert("You pressed Cancel");
	}
}
ConfirmPrompt();

function ConfrimPromptTernary() {
	let confirmBool = confirm("Pick One") ? alert("You pressed OK") : alert("You pressed Cancel");
}
ConfrimPromptTernary();

function NumberPrompt() {
	let userInput = prompt("Please enter a number");
	let number = Number(userInput);
	let numberCheck = isNaN(number);
	if (!numberCheck && userInput !== "" && userInput !== null) {
	alert("Thanks for the number");
	}
	else if (numberCheck) {
	alert("You provided a string");
	}
	else if (userInput === "") {
	alert("You left the field empty");
	}
	else if (userInput == null) {
	alert("You pressed Cancel");
	}
}
NumberPrompt();

let Me = {
	firstName: "Sander",
	lastName: "Susee",
	age: 22,
	fullName: function() {return this.firstName + " " + this.lastName + " is " + this.age + " years old";}
};

let cloneMe = Object.assign({}, Me);

console.log(Object.values(Me));
console.log(Object.values(cloneMe));

//function stringConcat(stringA, stringB, stringC = "") {
//	return stringA + " " + stringB + " " + stringC;
//}

//let stringConcat = function (stringA, stringB, stringC = "") {return stringA + " " + stringB + " " + stringC};

let stringConcat = (stringA, stringB, stringC = "") => stringA + " " + stringB + " " + stringC;

console.log(stringConcat("hi", "there", "friend"));
console.log(stringConcat("hi", "there"));

