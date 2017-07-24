console.log('tamagotchi file is loaded');

//your constructor function here
const Tamagotchi = function(name, creatureType) {
	this.name = name;
	this.creatureType = creatureType;
	this.foodInTummy = 10;
	this.restedness = 10;
	this.health = 10;
	this.cry = function() {
		this.foodInTummy--;
		console.log("WAHHHH!!!");
		console.log(this.name + " has this much food in its tummy: " + this.foodInTummy);
	};
}

//create new Tamagotchis
var gizmo = new Tamagotchi("Gizmo", "Darno");

//test out your Tamagotchies below via console.logs
console.log(gizmo.cry());