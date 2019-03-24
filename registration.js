
var endData = "Stlacte klavesu F12";


function load() {
	
}

function registration() {
	console.log("Registracia");
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var psw = document.getElementById('psw').value;
	var repsw = document.getElementById('repsw').value;
	endTask();
}

function endTask() {
	document.getElementById("end").innerHTML = endData;
	document.getElementById("content").innerHTML = "";

}