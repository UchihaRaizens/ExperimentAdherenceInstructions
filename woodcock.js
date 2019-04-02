var dataTask1 = [
	"3  &nbsp;6 &nbsp;9  &nbsp;12  &nbsp;15  &nbsp;?",
	"3  &nbsp;4  &nbsp;7  &nbsp;8  &nbsp;11  &nbsp;12  &nbsp;?",
	"32  &nbsp;16  &nbsp;8  &nbsp;4  &nbsp;2  &nbsp;?",
	"27  &nbsp;24  &nbsp;?  &nbsp;18  &nbsp;15  &nbsp;12",
	"0 &nbsp;1 &nbsp;1 &nbsp;2 &nbsp;3 &nbsp;5 &nbsp;?"
];

var endData = "Stlačte klávesu F10";

var MAX = 4;
var index = 0; 

function load() {
	if(index == 0) {
		sendEvent("START Woodstock-task");
	}
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