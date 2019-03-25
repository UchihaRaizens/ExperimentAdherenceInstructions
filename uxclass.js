
var SYSTEM_TOKEN = "12345-dynamic-aoi";
var SYSTEM_VALUES = "abc,dbe";
var DEBUG = 0;

function sendEventValue(token, value) {
	console.log(value);
	if(DEBUG == 1) {
		return;
	}
	else {
		$.ajax({
			type : "POST",
			url : "http://localhost:55555/api/UXS/SendEvent",
			crossDomain : true,
			data : {
				"Token" : token,
				"Value" : value,
				"ValidFrom" : new Date().toISOString()
			},
			dataType : 'json',
			success : function(response) {
			},
			error : function(error) {
			}
		});
	}
}

function sendEvent(value) {
	if (value != null) {
		sendEventValue(SYSTEM_TOKEN, value);
	}
}

function start() {
	var sessionSetup = {
		"Source" : "FIIT Dotazniky",
		"User" : "Aaaa",
		"Setup" : {
			"Id" : 2,
			"Label" : "testing",
			"DeviceCodes" : ["ET"],
			"ExternalTokens" : [{
				"KeywordId" : 1,
				"Attributes" : "aa,bb,cc",
				"AllowedValues" : SYSTEM_VALUES,
				"Token" : SYSTEM_TOKEN
			}]
		}
	};

	$.ajax({
		type : "POST",
		url : "https://localhost:55555/api/External/StartRecording",
		crossDomain : true,
		data : sessionSetup,
		dataType : 'json',
		crossDomain : true,
		success : function(response) {

			alert("started");

		},
		error : function(error) {
			console.log(error.statusText);
			console.log(error.getResponseHeader('Header'));
			console.log(error);
		},
		complete : function() {

		}
	});

}

function finish() {
	$.ajax({
		type : "POST",
		url : "http://localhost:55555/api/External/StopRecording",
		crossDomain : true,
		dataType : 'json',
		success : function(response) {
		},
		error : function(error) {
			console.log(error);
		},
		complete : function() {
		}
	});
}