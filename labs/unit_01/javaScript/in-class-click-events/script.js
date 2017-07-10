window.onload = function() {
	var button1 = document.getElementById("button1");
	var button2 = document.getElementById("button2");
	var button3 = document.getElementById("button3");


	var info = document.getElementById("information");

	button1.addEventListener("click", function(event) {
		alert("You have clicked button 1!");
	});

	button2.addEventListener("click", function(event) {
		var newPTag = document.createElement("p");

		newPTag.innerHTML = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).";
	
		info.appendChild(newPTag);
	});

	button3.addEventListener("click", function(event) {
		var pToRemove = document.querySelector("p");
		info.removeChild(pToRemove);
	})
}

