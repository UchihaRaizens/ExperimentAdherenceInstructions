var dataTask1 = [
	"1 2 3 4 5 6 ?",
	"9 7 5 3 1 ?",
	"1 3 7 9 11 58 ?"
];

var endData = "Stlačte klávesu F12";

var MAX = 2;
var index = 0; 

function load() {
	sendEvent("Start Woodstock-task");
	document.getElementById('woodcock-result').value = "";
	document.getElementById("woodcock-example").innerHTML = dataTask1[index];
	index++;
}

function answerTask() {
	var result = document.getElementById('woodcock-result').value;
	sendEvent("Odpoveď Woodstock-task" + index + " : " + result);
	console.log("Odpoved: " + result);
	nextWoodcockExample();
}

function nextWoodcockExample() {
	if(index <= MAX) {
		load();
	} else {
		end();
	}
}

function end() {	
	sendEvent("End Woodstock-task");
	document.getElementById("woodcock-example").innerHTML = endData;
	document.getElementById("woodcock-result").style.visibility = "hidden";
	document.getElementById("submit-btn").style.visibility = "hidden";
}