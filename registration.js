
var endData = "Stlačte klávesu F10";


function load() {
	if(index == 0) {
		sendEvent("START Registration-task");
	}
}

function registration() {
	console.log("Registracia");
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var psw = document.getElementById('psw').value;
	var repsw = document.getElementById('repsw').value;
	sendEvent("ODPOVED Registration-task" + " : " + name + "," + email + "," + psw + "," + repsw);
	endTask();
}

function endTask() {
	sendEvent("END Registration-task");
	document.getElementById("end").innerHTML = endData;
	document.getElementById("content").innerHTML = "";
}