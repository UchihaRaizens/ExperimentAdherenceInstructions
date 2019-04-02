var dataTask1 = [
	"3  6  9  12  15  ?",
	"3  4  7  8  11  12  ?",
	"32  16  8  4  2  ?",
	"27  24  ?  18  15  12",
	"0  1  1  2  3  5  ?"
];

var endData = "Stlačte klávesu F10";

var MAX = 4;
var index = 0; 

function load() {
	sendEvent("START Woodstock-task");
	document.getElementById('woodcock-result').value = "";
	document.getElementById("woodcock-example").innerHTML = dataTask1[index];
	index++;
}

function answerTask() {
	var result = document.getElementById('woodcock-result').value;
	sendEvent("ODPOVED Woodstock-task_" + index + " : " + result);
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
	sendEvent("END Woodstock-task");
	document.getElementById("woodcock-example").innerHTML = endData;
	document.getElementById("woodcock-result").style.visibility = "hidden";
	document.getElementById("submit-btn").style.visibility = "hidden";
}