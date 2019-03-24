var dataTask1 = ["1 + 2 + 3 + 4 = ?",
				"2 - 3  = ?",
				"3 * 6 = ? "];

var endData = "Stlacte klavesu F12";

var MAX = 2;
var index = 0;

function load() {
	document.getElementById('math-result').value = "";
	document.getElementById("math-example").innerHTML = dataTask1[index];
	index++;
}

function answerTask() {
	var result = document.getElementById('math-result').value;
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
	document.getElementById("math-example").innerHTML = endData;
	document.getElementById("math-result").style.visibility = "hidden";
	document.getElementById("submit-btn").style.visibility = "hidden";
}