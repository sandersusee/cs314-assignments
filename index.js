

//Helper function for prompts
function UserPrompt() {
	let userInput = prompt("Provide an input");
	let number = Number(userInput);
	let numberCheck = isNaN(number);
	if (!numberCheck && userInput !== "" && userInput !== null) {
		return userInput;
	}
	else if (numberCheck) {
		return userInput;
	}
	else if (userInput === "") {
		return userInput;
	}
	else if (userInput == null) {
		return ""
	}
}

// Task 1 - Char Swap
// This function creates a new string from an input string from
// the user swapping the position of first and last characters
function CharSwap() {
	let userString = UserPrompt();
	let stringLength =  userString.length;
	if (stringLength <= 1) {
		return userString;
	} 
	else {
		let lastLetter = userString.charAt(stringLength - 1);
		let middlePart = userString.substring(1, stringLength - 1);
		let firstLetter = userString.charAt(0);
		return lastLetter + middlePart + firstLetter;
	}
}
//console.log(CharSwap());


// Task 2 - Hi String
// This function asks for a string from the user and returns a new string 
// adding "Hi" in front of the input string. If the input 
// string begins with "Hi" then return the original string
function HiString() {
	let userString = UserPrompt();
	let stringLength =  userString.length;
	if (stringLength < 1) {
		return userString;
	} else {
		let addedHi = "Hi ";
		let indexForHi = userString.search("Hi");
		if (indexForHi == 0) {
			return userString;
		} else {
			return addedHi + userString;
		}
	}
}
//console.log(HiString());


// Task 3 - Three Chars to Front
// This function create a new string from an input string taking the 
// last 3 characters and adding them to the front of the string
function ThreeCharstoFront() {
	let userString = UserPrompt();	
	let stringLength =  userString.length;
	if (stringLength <= 3) {
		return "You need to enter a longer string";
	} else { 
		let lastLetter = userString.charAt(stringLength - 1);
		let secondLastLetter = userString.charAt(stringLength - 2);
		let thirdLastLetter = userString.charAt(stringLength - 3);
		let remainingString = userString.substring(0, stringLength - 3);
		return thirdLastLetter + secondLastLetter + lastLetter + remainingString;
	}
}
//console.log(ThreeCharstoFront());


// Task 4 - Strings to Sentence
// This function asks for a list of items from the user separated by commas. 
// Convert this to an array without the commas or extra spaces.
function StringtoSentence() {
	let userString = prompt("Enter your favorite color, hobby, and place all seperated by commas");
	if (userString == null){
		return "You canceled"
	} else {
		let userStrings = userString.split(",");
		if (userStrings[0] == "")
		{
			userStrings[0] = "???";
		}
		if (userStrings[1] == undefined)
		{
			userStrings[1] = "???";
		}
		if (userStrings[2] == undefined)
		{
			userStrings[2] = "???";
		}
		let sentence = `My favorite color is ${userStrings[0].trim()}, I really like ${userStrings[1].trim()}, and I think ${userStrings[2].trim()} is awesome!`;
		return sentence;
	}
}
//console.log(StringtoSentence());


// Task 5 - Upper or Lower
// This function asks for a string from the user and creates a new string from that 
// string where the first 3 characters are lowercase. If the string length
// entered by the user is less than 3 convert all the characters in upper case.
function UpperorLower() {
	let userString = UserPrompt();
	let stringLength =  userString.length;
	if (stringLength <= 3) {
		return userString.toUpperCase();
	} else { 
		let firstLetter = userString.charAt(0);
		let secondLetter = userString.charAt(1);
		let thirdLetter = userString.charAt(2);
		let remainingString = userString.substring(3, stringLength);
		return firstLetter.toLowerCase() + secondLetter.toLowerCase() + thirdLetter.toLowerCase() + remainingString;
	}
}
//console.log(UpperorLower());


// Task 6 - Integer Swap
// This function asks for a comma separated list of numbers from the 
// user and swap the first and last elements of a given array of integers.
function IntSwap() {
	let userNumbers = prompt("Enter at least 2 numbers seperated by commas");
	if (userNumbers == null){
		return "You canceled"
	} else {
		let userNumberArray = userNumbers.split(",");
		let arrayLength = userNumberArray.length;
		//make sure we have at least 2 numbers
		if (arrayLength <= 1) {
			return "Enter at least 2 numbers"
		}
		let count = arrayLength;
		for (let i = 0; i < count; i++)
		{	//make sure only numbers are entered
			if (isNaN(userNumberArray[i])) {
				return "Only enter numbers";
			}
		}
		let firstElement = userNumberArray[0];
		userNumberArray[0] = userNumberArray[arrayLength-1];
		userNumberArray[arrayLength-1] = firstElement;
		//incase the user has commas with no values
		let finalArray = userNumberArray.filter(element => element !== "");
		let refinedArray = finalArray.length;
		//double check length after extra empty elements are removed
		if (refinedArray <= 1) {
			return "Enter at least 2 numbers"
		}
		return finalArray;
	}
}
//alert(IntSwap());


// Task 7 - Longest String
// This function  asks for a comma separated list of strings from the 
// user and alerts the longest string from the given array of strings.
function LongestString() {
	let userInput = prompt("Enter at least 2 strings seperated by commas");
	if (userInput == null){
		return "You canceled"
	} else {
		let userStringArray = userInput.split(",");
		let arrayLength = userStringArray.length;
		//make sure we have at least 2 strings
		if (arrayLength <= 1) {
			return "Enter at least 2 strings"
		}
		let count = arrayLength;
		let longestString = 0;
		let longestStringContents = "";
		for (let i = 0; i < count; i++)
		{
			let stringLength = userStringArray[i].length;
			if (longestString <= stringLength) {
				longestString = stringLength;
				longestStringContents = userStringArray[i];
			}
		}
		return longestStringContents;
	}
}
//alert(LongestString());


// Task 8 - Largest Even Number
// This function asks for a comma separated list of numbers from the user.
// The largest even number from that list is returned.
function LargestEvenNumber() {
	let userNumbers = prompt("Enter at least 2 numbers seperated by commas");
	if (userNumbers == null){
		return "You canceled"
	} else {
		let userNumberArray = userNumbers.split(",");
		let arrayLength = userNumberArray.length;
		//make sure we have at least 2 numbers
		if (arrayLength <= 1) {
			return "Enter at least 2 numbers"
		}
		let count = arrayLength;
		for (let i = 0; i < count; i++)
		{	//make sure only numbers are entered
			if (isNaN(userNumberArray[i])) {
				return "Only enter numbers";
			}
		}
		numberArray = userNumberArray.sort((a, b) => b - a);
		//incase the user has commas with no values
		let finalArray = numberArray.filter(element => element !== "");
		let refinedArray = finalArray.length;
		//double check length after extra empty elements are removed
		if (refinedArray <= 1) {
			return "Enter at least 2 numbers"
		}
		for (let i = 0; i < count; i++)
		{
			if (finalArray[i]%2 == 0) {
				return finalArray[i];
			}
		}
		return "there were no even numbers";
	}
}
//alert(LargestEvenNumber());


// Task 9 - Current Day and Time
// This function alerts the current day and time.
function CurrentDayTime() {
	let date = new Date();
	let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	let fullTime = `Today is ${days[date.getDay()]}.\nIt is ${date.getHours()}:${date.getMinutes()}.`;
	return fullTime;

}
//alert(CurrentDayTime());


// Task 10 - Unlimited Function
// This function accepts an unlimited number of
// arguments and prints them out in a single string 
function UnlimitedFunction() {
	let userInput = prompt("Enter as much as you want seperated by commas");
	if (userInput == null){
		return "You canceled"
	} else {
		let userInputArray = userInput.split(",");
		let userInputString = userInputArray.toString();
		return userInputString.replace(/,/g, " ")
	}
}

//alert(UnlimitedFunction());