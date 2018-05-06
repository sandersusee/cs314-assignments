function showInput() {
	document.getElementById('submitheader').innerHTML = "The input you entered was:"
        document.getElementById('display1').innerHTML = "Name: " + document.getElementById("name").value;
        document.getElementById('display2').innerHTML = "Email: " + document.getElementById("email").value;
        document.getElementById('display3').innerHTML = "Subject: " + document.getElementById("subject").value;
        document.getElementById('display4').innerHTML = "Message: " + document.getElementById("about").value;
	
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("subject").value = "";
		document.getElementById("about").value = "";
	}