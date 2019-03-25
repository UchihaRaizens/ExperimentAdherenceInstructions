var dataTask1 = [
"Prva veta obsahujuce podstatne mena",
"Druha veta obsahujuce podstatne mena",
"Tretia veta obsahujuce podstatne mena",
"Stvrta veta obsahujuce podstatne mena",
"Piata veta obsahujuce podstatne mena"
];


var endData = "Stlacte klavesu F12";

var MAX = 4;
var index = 0;


function load() {
	document.getElementById('noun-result').value = "";
	document.getElementById("noun-example").innerHTML = dataTask1[index];
	index++;
}

function answerTask() {
	var result = document.getElementById('noun-result').value;
	console.log("Odpoved: " + result);
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
	document.getElementById("noun-example").innerHTML = endData;
	document.getElementById("noun-result").style.visibility = "hidden";
	document.getElementById("submit-btn").style.visibility = "hidden";
}
