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
	this.puke = function () {
		this.foodInTummy--;
		console.log("Hurrrllll!");
		console.log(this.name + "'s food level is now: " + this.foodInTummy);
	};
	this.yawn = function () {
		this.restedness--;
		console.log("Yawnnnnn! I'm sleepy.");
		console.log(this.name + "'s restedness level is now: " + this.restedness);
	};
}

//create new Tamagotchis
var gizmo = new Tamagotchi("Gizmo", "Mametchi");

//test out your Tamagotchies below via console.logs
console.log(gizmo.yawn());
console.log(gizmo.puke());