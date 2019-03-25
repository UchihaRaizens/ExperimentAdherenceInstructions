var endData = "Stlacte klavesu F12";

function load() {

}

function answerTask() {
	var result = document.getElementById('psychometrics-result').value;
	console.log("Odpoved: " + result);
	end();
}


function end() {
	document.getElementById("psychometrics-end").innerHTML = endData;
	var image_x = document.getElementById('psychometrics-example');
	image_x.parentNode.removeChild(image_x);
	document.getElementById("psychometrics-result").style.visibility = "hidden";
	document.getElementById("submit-btn").style.visibility = "hidden";
}