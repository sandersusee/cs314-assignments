function showYear3000Lyrics() {
	document.getElementById("songTitle").innerHTML = "";
	document.getElementById("lyrics").innerHTML = "";
	var request = new XMLHttpRequest();

	request.open('GET', 'https://api.lyrics.ovh/v1/The Jonas Brothers/Year 3000');

	request.onreadystatechange = function () {
	  if (this.readyState === 4) {
		console.log('Status:', this.status);
		console.log('Headers:', this.getAllResponseHeaders());
		var rawLyrics = this.responseText;
		var songLyrics = JSON.parse(rawLyrics);
		document.getElementById("songTitle").innerHTML = "Year 3000";
		document.getElementById("lyrics").innerHTML = songLyrics.lyrics;
	  }
	};

	request.send();
}

function showBurninUpLyrics() {
	document.getElementById("songTitle").innerHTML = "";
	document.getElementById("lyrics").innerHTML = "";
	var request = new XMLHttpRequest();

	request.open('GET', 'https://api.lyrics.ovh/v1/The Jonas Brothers/Burnin\' Up');

	request.onreadystatechange = function () {
	  if (this.readyState === 4) {
		console.log('Status:', this.status);
		console.log('Headers:', this.getAllResponseHeaders());
		var rawLyrics = this.responseText;
		var songLyrics = JSON.parse(rawLyrics);
		document.getElementById("songTitle").innerHTML = "Burnin' Up";
		document.getElementById("lyrics").innerHTML = songLyrics.lyrics;
	  }
	};

	request.send();
}

function showSOSLyrics() {
	document.getElementById("songTitle").innerHTML = "";
	document.getElementById("lyrics").innerHTML = "";
	var request = new XMLHttpRequest();

	request.open('GET', 'https://api.lyrics.ovh/v1/The Jonas Brothers/S.O.S.');

	request.onreadystatechange = function () {
	  if (this.readyState === 4) {
		console.log('Status:', this.status);
		console.log('Headers:', this.getAllResponseHeaders());
		var rawLyrics = this.responseText;
		var songLyrics = JSON.parse(rawLyrics);
		document.getElementById("songTitle").innerHTML = "S.O.S.";
		document.getElementById("lyrics").innerHTML = songLyrics.lyrics;
	  }
	};

	request.send();
}

function showFlyWithMeLyrics() {
	document.getElementById("songTitle").innerHTML = "";
	document.getElementById("lyrics").innerHTML = "";
	var request = new XMLHttpRequest();

	request.open('GET', 'https://api.lyrics.ovh/v1/The Jonas Brothers/Fly With Me');

	request.onreadystatechange = function () {
	  if (this.readyState === 4) {
		console.log('Status:', this.status);
		console.log('Headers:', this.getAllResponseHeaders());
		var rawLyrics = this.responseText;
		var songLyrics = JSON.parse(rawLyrics);
		document.getElementById("songTitle").innerHTML = "Fly With Me";
		document.getElementById("lyrics").innerHTML = songLyrics.lyrics;
	  }
	};

	request.send();
}