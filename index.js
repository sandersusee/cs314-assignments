function scrollToOne() {
	document.getElementById("one").scrollIntoView();
}

function scrollToTwo() {
    document.getElementById("two").scrollIntoView();
}

function scrollToThree() {
    document.getElementById("three").scrollIntoView();
}

function scrollToFour() {
    document.getElementById("four").scrollIntoView();
}

function scrollToFive() {
    document.getElementById("five").scrollIntoView();
}

function backgroundBlue() {
    document.getElementById("one").style.backgroundColor = "blue";
}

function backgroundGreen() {
    document.getElementById("one").style.backgroundColor = "green";
}

function backgroundPinkOrange() {
	let buttonText = document.getElementById("pinkorangebutton").innerHTML;
	if (buttonText=="Click for pink!") {
		document.getElementById("two").style.backgroundColor = "pink";
		document.getElementById("pinkorangebutton").innerHTML = "Click for orange!"
		buttonText = "Click for orange!";
	}

    else {
		document.getElementById("two").style.backgroundColor = "orange";
		document.getElementById("pinkorangebutton").innerHTML = "Click for pink!"
		buttonText = "Click for pink!";
	}
}

function addToList() {
	let userInput = document.getElementById("addInput").value;
	let listElement = document.createElement('li');
	listElement.appendChild(document.createTextNode(userInput));
	document.getElementById("list1").appendChild(listElement);
	document.getElementById("addInput").value = "";
}

function removeElement(element) {
	element.parentNode.removeChild(element)
}

function highlight(element) {
	document.getElementById("item1").style.backgroundColor = "lightgray";
	document.getElementById("item2").style.backgroundColor = "lightgray";
	document.getElementById("item3").style.backgroundColor = "lightgray";
	document.getElementById("item4").style.backgroundColor = "lightgray";
	element.style.backgroundColor = "yellow";
}