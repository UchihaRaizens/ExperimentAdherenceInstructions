var dataTask1 = [
"Satan sa smial, div že sa nepotrhal, a to mu robilo veľmi dobre.",
"Rodičia obidvoch detí pripevnili zvonka drevenú truhličku, kde si pestovali potrebnejšiu kuchynskú zeleninu.",
"Číta.",
"O dva-tri roky, keď som už bol väčší, zaujímaly ma viac rozhovory starých, ako reči drotárika.",
"V dolinkách pod kopcom ešte ticho stekal čierny ľad, džurdžaly potôčiky."
];


var endData = "Stlačte klávesu F10;"

var MAX = 4;
var index = 0;


function load() {
	sendEvent("START Noun-task");
	document.getElementById('noun-result').value = "";
	document.getElementById("noun-example").innerHTML = dataTask1[index];
	index++;
}

function answerTask() {
	var result = document.getElementById('noun-result').value;
	sendEvent("ODPPOVED Noun-task_" + index + " : " + result);
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
	sendEvent("END Noun-task");
	document.getElementById("noun-example").innerHTML = endData;
	document.getElementById("noun-result").style.visibility = "hidden";
	document.getElementById("submit-btn").style.visibility = "hidden";
}
