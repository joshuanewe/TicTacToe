// QuerySeclectors
let buttons = document.getElementsByClassName("space");

// Gameboard Functionality
const Gameboard = {
	gameboard: [],

	generateGameboard: function () {
		for (i = 0; i < 9; i++) {
			this.gameboard.push(buttons[i].className);
			Events.addEvents(buttons[i]);
		}
	},
};

// Dom Events
const Events = {
	addEvents: function (button) {
		button.addEventListener("click", this.handleEvent);
	},

	handleEvent: function (e) {
		e.preventDefault();
		console.log(e.target.className);
	},
};

// Player Data and functions
let Player = {
	playerSelection: "",

	selectPlayer: function (selection) {
		this.playerSelection = selection;
	},
};

Gameboard.generateGameboard();
