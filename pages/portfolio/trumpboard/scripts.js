//All sounds for soundboard in a nice array.
var sounds = [
	new Audio('./sounds/makeAmericaGreatAgain.wav'),
	new Audio('./sounds/china.wav'),
	new Audio('./sounds/toughIsis.wav'),
	new Audio('./sounds/aGreatWall.wav'),
	new Audio('./sounds/greatGreatWall.wav'),
	new Audio('./sounds/makeMexicoPay.wav'),
	new Audio('./sounds/mexicoNewChina.wav'),
	new Audio('./sounds/presidentObama.wav'),
	new Audio('./sounds/beatMexico.wav'),
	new Audio('./sounds/nicePerson.wav'),
	new Audio('./sounds/rosieUgly.wav'),
	new Audio('./sounds/freeTrade.wav')
];

function playSound(i) {
	sounds[i].play();
};



