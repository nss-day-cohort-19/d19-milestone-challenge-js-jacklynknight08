console.log("Grow Your Tree");

var heightInput = document.getElementById("height");
var characterInput = document.getElementById("character");
var button = document.getElementById("grow");
//var tree = {heightInput, characterInput};
var space = " ";


function growTree(event) {
	// var tree = {};

	for(var i= 1; i < heightInput.value; i++){

	console.log(space.repeat(heightInput.value - i) + (characterInput.value.repeat(i) + (characterInput.value.repeat(i - 1)) + space.repeat(heightInput.value - 1)));

	};
}


function checkInput(event) {
	if(heightInput.value && characterInput.value) {
		growTree(event);
	}
	else {
		alert("Both fields must have a value");
	}
}

button.addEventListener("click", checkInput);

heightInput.addEventListener("keypress", function(event) {
	if(event.charcode === 13) {
		checkInput(event);
	}
});

characterInput.addEventListener("keypress", function(event) {
	if(event.charcode === 13) {
		checkInput(event);
	}
});

// document.getElementById("output").innerHTML = growTree(event);
// function treeOutput(){
// 	output.height = heightInput.value;
// 	output.character = characterInput.value;

// 	growTree();
// }