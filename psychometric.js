var endData = "Stlačte klávesu F12";

function load() {
	sendEvent("Start Psychometric-task");
}

function answerTask() {
	var result = document.getElementById('psychometrics-result').value;
	sendEvent("Odpoveď Psychometric-task" + " : " + result);
	console.log("Odpoved: " + result);
	end();
}


function end() {
	sendEvent("End Psychometric-task");
	document.getElementById("psychometrics-end").innerHTML = endData;
	var image_x = document.getElementById('psychometrics-example');
	image_x.parentNode.removeChild(image_x);
	document.getElementById("psychometrics-result").style.visibility = "hidden";
	document.getElementById("submit-btn").style.visibility = "hidden";
}