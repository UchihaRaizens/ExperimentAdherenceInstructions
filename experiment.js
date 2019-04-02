var dataTask1 = ["1 $ 2 $ 3 ! 4 = ?",
				"2 & 3 ! 2 ! 2 = ?",
				"5 & 5 ! 20 $ 4 = ? ",
				"10 ! 3 ! 4 $ 3 = ?",
				"3 & 3 $ 1 ! 7 =  ?"];

var endData = "Stlačte klávesu F10";

var MAX = 4;
var index = 0;

function load() {
	if(index == 0) {
		sendEvent("START Math-task");
	}
	document.getElementById('math-result').value = "";
	document.getElementById("math-example").innerHTML = dataTask1[index];
	index++;
}

function answerTask() {
	var result = document.getElementById('math-result').value;
	sendEvent("ODPOVED Math-task_" + index + " : " + result);
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
	sendEvent("END Math-task");
	document.getElementById("math-example").innerHTML = endData;
	document.getElementById("math-result").style.visibility = "hidden";
	document.getElementById("submit-btn").style.visibility = "hidden";
}