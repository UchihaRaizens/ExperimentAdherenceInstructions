var dataTask1 = ["Červená",
				"Black",
				"Yellow",
				"Zelená",
				"Modrá"];
var dataTaskColor = [
	"blue",
	"green",
	"red",
	"pink",
	"orange"
];

var endData = "Stlacte klavesu F12";

var MAX = 4;
var index = 0;

function load() {
	document.getElementById('stroop-result').value = "";
	document.getElementById("stroop-example").innerHTML = dataTask1[index];
	document.getElementById("stroop-example").style.color = dataTaskColor[index];
	index++;
}

function answerTask() {
	var result = document.getElementById('stroop-result').value;
	console.log("Odpoved: " + result);
	nextMathExample();
}

function nextMathExample() {
	if (index <= MAX) {
		load();
	} else {
		end();
	}

}

function end() {
	document.getElementById("stroop-example").innerHTML = endData;
	document.getElementById("stroop-example").style.color = "black";
	document.getElementById("stroop-result").style.visibility = "hidden";
	document.getElementById("submit-btn").style.visibility = "hidden";
}