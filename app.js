// parsing JSON
// var jsonResults = JSON.parse(request.responseText);


var request = new XMLHttpRequest();
request.addEventListener("load", callback);
request.open("GET", "text.txt");
request.send();

var htmlRequest = new XMLHttpRequest;
htmlRequest.addEventListener("load", callbackHtml);
htmlRequest.open("GET", "html.html"); 
htmlRequest.send(); 

var jsonRequest = new XMLHttpRequest;
jsonRequest.addEventListener("load", callbackJSON); 
jsonRequest.open("GET", "animals.json"); 
jsonRequest.send(); 



function callbackJSON(){
    var JSONDiv = document.getElementById("json");
	var JSONButton = document.getElementById("loadjson");
	JSONButton.addEventListener("click", changeTheDiv ); 
	function changeTheDiv(){
	    var jsonResults = JSON.parse(jsonRequest.responseText);
	    JSONDiv = jsonResults; 
	}; 
}


function callbackHtml() {
    var htmlDiv = document.getElementById("html");
	var htmlButton = document.getElementById("loadhtml");
	htmlButton.addEventListener("click", changeTheDiv ); 
	function changeTheDiv(){
	    htmlDiv.innerHTML = htmlRequest.responseText; 
	}; 
} 


function callback() {
	var textDiv = document.getElementById("text");
	var textButton = document.getElementById("loadtext");
	textButton.addEventListener("click", changeTheDiv ); 
	function changeTheDiv(){
	    textDiv.innerHTML = request.responseText; 
	}; 
}; 




