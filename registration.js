
var endData = "Stlačte klávesu F12";


function load() {
	sendEvent("Start Registration-task");
}

function registration() {
	console.log("Registracia");
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var psw = document.getElementById('psw').value;
	var repsw = document.getElementById('repsw').value;
	sendEvent("Odpoveď Registration-task" + " : " + name + "," + email + "," + psw + "," + repsw);
	endTask();
}

function endTask() {
	sendEvent("End Registration-task");
	document.getElementById("end").innerHTML = endData;
	document.getElementById("content").innerHTML = "";

}