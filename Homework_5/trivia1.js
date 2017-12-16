
var time = 4;
var qCounter = 0;
var hiddenImage = false

var questions = 
{
		q1:['Who is the main actor in Home Alone?'], 
		q2:['Why do we celebrate Christmas?'], 
		q3:['What “spy” hides around the house, reporting back to Santa on who has been naughty and nice?'] 
};
		
var answers = 
{
		answers1: [{1 : 'Bart Simpson', 
					2 : 'Macaulay Culkin', 
		   			3 : 'Brad Pitt'
		   		  }],
		
		
		answers2: [{1 :'Jesus was born', 
					2  :'Its Santas birthday', 
					3  :'Its Buddys the elfs birthday'
				}],
		
		
		answers3: [{1 :'The Elf on the Shelf', 
					2  :'Buddy the Elf', 
					3  :'Donald Trump'
				}]
};

	
	var isCorrect = false;
	var questCnt = 0;
	var answerCount = 0;
	var wrongCount = 0;
	var correctAnswer;
	var wrongAnswers;
	var intervalId;

console.log(correctAnswer);

	function startGame() {

		
	}

	

	function gamePlay() {

		$('.startBtn').on('click', function() {

			$('.startBtn').hide();
			
			timeCount();
			quest1();
			chooseCheckAnswer();

		});	
	}

	

	function timeCount() {
		
		time = 4;
		interval = setInterval(timeRemaining,1000);
		$('.btnContainer').html('<div class= "timeRem">' + 'Time Remaining: ' + '<div class="timerCountDown"></div>' + '<div class="quest"></div>');
	}

	//prints time remaining and once it = 0 it stops
	function timeRemaining() {
		
		//Decrement time 1 sec
		time--;
		//prints time remaining
		$('.timerCountDown').text(time + ' seconds');
		console.log(time);
		
		if (time === 0) {
			console.log(true);
	        //stops time
	        clearInterval(interval);

	        $('button').remove();
	        $('.questionInput').remove();

	        $('.btnContainer').append('<div class="timeIsUp">Time is up </div>');

	        dispAns();
	    } 
	}

	
	function dispAns() {

		if(questCnt === 1 && isCorrect == false) {
			wrongCount++;

			var newDiv = $('<div class="corAnsw">');
			correctAnswer = newDiv.text('Wrong! ' + 'The correct answer is ' + answers.answers1[0][2]);
			$('.btnContainer').append(correctAnswer);

			setTimeout(function() {
				
				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');
				
				timeCount();
				quest2();
				chooseCheckAnswer();

			}, 3000);
		}
		
		else if(questCnt === 1 && isCorrect === true) {
			answerCount++;

			var newDiv = $('<div class="corAnsw">');
			correctAnswer = newDiv.text('Correct!');
			$('.btnContainer').append(correctAnswer);

			setTimeout(function() {
				isCorrect = false;

				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');

				timeCount();
				quest2();
				chooseCheckAnswer();
			}, 3000);
		}

		else if(questCnt === 2 && isCorrect == false) {
			wrongCount++;

			var newDiv = $('<div class="corAnsw">');
			correctAnswer = newDiv.text('Wrong! ' + 'The correct answer is ' + answers.answers2[0][1]);
			$('.btnContainer').append(correctAnswer);

			setTimeout(function() {
				
				isCorrect = false;
				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');
				
				timeCount();
				quest2();
				chooseCheckAnswer();

			}, 3000);
		}

		else if(questCnt === 2 && isCorrect === true) {
			answerCount++;

			var newDiv = $('<div class="corAnsw">');
			correctAnswer = newDiv.text('Correct!');
			$('.btnContainer').append(correctAnswer);

			setTimeout(function() {
				isCorrect = false;

				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');

				timeCount();
				quest2();
				chooseCheckAnswer();
			}, 3000);
		}
		

		if(questCnt === 3 && isCorrect == false) {
			wrongCount++;

			var newDiv = $('<div class="corAnsw">');
			correctAnswer = newDiv.text('Wrong! ' + 'The correct answer is ' + answers.answers3[0][1]);
			$('.btnContainer').append(correctAnswer);

			setTimeout(function() {
				
				isCorrect = false;
				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');
				
				endGame();

			}, 3000);
		}

		else if(questCnt === 3 && isCorrect === true) {
			answerCount++;

			var newDiv = $('<div class="corAnsw">');
			correctAnswer = newDiv.text('Correct!');
			$('.btnContainer').append(correctAnswer);

			setTimeout(function() {
				isCorrect = false;

				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');

				endGame();
			}, 3000);
		}
		console.log('question counter = ' + questCnt);

	}


	function quest1() {

		questCnt++;

		$('.btnContainer').append('<div class="questionInput">' + questions.q1 + '</div>');

		$('.btnContainer').append('<button class="answerVal" data-value="0">' + answers.answers1[0][1] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="1">' + answers.answers1[0][2] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="0">' + answers.answers1[0][3] + '</button>');		
	}

	function quest2() {

		questCnt++;

		$('.btnContainer').append('<div class="questionInput">' + questions.q2 + '</div>');

		$('.btnContainer').append('<button class="answerVal" data-value="1">' + answers.answers2[0][1] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="0">' + answers.answers2[0][2] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="0">' + answers.answers2[0][3] + '</button>');		
	}

	function quest3() {

		questCnt++;

		$('.btnContainer').append('<div class="questionInput">' + questions.q3 + '</div>');

		$('.btnContainer').append('<button class="answerVal" data-value="1">' + answers.answers3[0][1] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="0">' + answers.answers3[0][2] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="0">' + answers.answers3[0][3] + '</button>');		
	}
	
	

	function chooseCheckAnswer() {
		$('button').on('click', function() {

			var chooseCheckAnswer = $(this).attr('data-value');

			console.log(chooseCheckAnswer)

			clearInterval(interval);

			if (chooseCheckAnswer == '1') {

				isCorrect = true;
			}

			else{
				
				isCorrect = false;

			}

				$('button').remove();

				$('.questionInput').remove();
				dispAns();
		});
	}

	function endGame() {
		$('.btnContainer').append('<div class="gameOver">All done, here is your result</div>' + '<div class="gameOver">Correct: ' + answerCount + '</div>' + '<div class="gameOver">Wrong: ' + wrongCount + '</div>')
	}

	gamePlay();
