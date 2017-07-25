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
	this.start = function () {
		console.log("Starting " + this.name);
		var self = this;
		this.hungerTimer = setInterval(function() {
			self.cry();
		}, 6000);
		this.yawnTimer = setInterval(function() {
			self.yawn();
		}, 10000);
		this.sickTimer = setInterval(function() {
			self.puke();
		}, 20000);
	};
	this.stop = function() {
		console.log("Stopping " + this.name);
		clearInterval(this.hungerTimer);
		clearInterval(this.yawnTimer);
		clearInterval(this.sickTimer);
	};
};

//create new Tamagotchis
var gizmo = new Tamagotchi("Gizmo", "Mametchi");
var bobby = new Tamagotchi("Bobby", "Kuchipatchi");
var lionel = new Tamagotchi("Lionel", "Gozarutchi");
//test out your Tamagotchies below via console.logs
console.log(gizmo.start());
console.log(bobby);
console.log(lionel);