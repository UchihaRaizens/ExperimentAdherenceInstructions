var dataTask1 = [
"5  &nbsp;10  &nbsp;4  &nbsp;3  &nbsp;8  &nbsp;6",
"6  &nbsp;7  &nbsp;8  &nbsp;11  &nbsp;2  &nbsp;9",
"10  &nbsp;3  &nbsp;8  &nbsp;13  &nbsp;5  &nbsp;9",
"12  &nbsp;20  &nbsp;7  &nbsp;5  &nbsp;6  &nbsp;15",
"17  &nbsp;2  &nbsp;3  &nbsp;19  &nbsp;10  &nbsp;6"
];


var endData = "Stlačte klávesu F10";

var MAX = 4;
var index = 0;


function load() {
	if(index == 0) {
		sendEvent("START Prime-task");
	}
	document.getElementById('prime-result').value = "";
	document.getElementById("prime-example").innerHTML = dataTask1[index];
	index++;
}

function answerTask() {
	var result = document.getElementById('prime-result').value;
	sendEvent("ODPPOVED Prime-task_" + index + " : " + result);
	console.log("ODPOVED: " + result);
	nextNounExample();
}

function nextNounExample() {
	if (index <= MAX) {
		load();
	} else {
		end();
	}
}

function end() {
	sendEvent("END Prime-task");
	document.getElementById("prime-example").innerHTML = endData;
	document.getElementById("prime-result").style.visibility = "hidden";
	document.getElementById("submit-btn").style.visibility = "hidden";
}