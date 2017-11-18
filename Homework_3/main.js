
//create an arry of player names
const player = ["drew brees", "david johnson", "antonio brown", "dez bryant"];

//choose word randomly                            
let randPlayer = Math.floor(Math.random() * player.length);
let choosenPlayer = player[randPlayer];
let rightPlayer = [];
let wrongPlayer = [];
let underScore = [];

let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

console.log(choosenPlayer);
//create underscores based on length of the word
let generateUnderscore = () => {
	for (let i = 0; i < choosenPlayer.length; i++) {
		underScore.push("_");
		 
	}
	return underScore;
}

//get users guess
document.addEventListener('keypress', (event) => {		//document.onkeyup =function(event)
	let keyword = String.fromCharCode(event.keyCode);	//var key = event.key
//if users guess is right 	
	if (choosenPlayer.indexOf(keyword) > -1) {
	
	//add to right word array
	rightPlayer.push(keyword);
	docUnderScore[0].innerHTML = underScore.join(' ');
	docRightGuess[0].innerHTML = rightPlayer;
	//replace underscore with right letter
	underScore[choosenPlayer.indexOf(keyword)] = keyword;
	
	//checks to see if user word matches guesses
		if(underScore.join('') == choosenPlayer) {
			alert('You Win!');
		}
	}
	else {
		wrongPlayer.push(keyword);
		docWrongGuess[0].innerHTML = wrongPlayer;
	}
});



docUnderScore[0].innerHTML = generateUnderscore().join(' ');



