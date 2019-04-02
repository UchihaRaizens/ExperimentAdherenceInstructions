var endData = "Stlačte klávesu F10";

function load() {
	sendEvent("START Psychometric-task");
}

function answerTask() {
	var result = document.getElementById('psychometrics-result').value;
	sendEvent("ODPOVED Psychometric-task" + " : " + result);
	console.log("Odpoved: " + result);
	end();
}


function end() {
	sendEvent("END Psychometric-task");
	document.getElementById("psychometrics-end").innerHTML = endData;
	var image_x = document.getElementById('psychometrics-example');
	image_x.parentNode.removeChild(image_x);
	document.getElementById("psychometrics-result").style.visibility = "hidden";
	document.getElementById("submit-btn").style.visibility = "hidden";
}