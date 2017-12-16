//create objects for each questions
//function to start and end the game
//click events to hide and show the questions
//with a for loop pick randomly the questions
//timer for each question
//restart game



	
	var gameQuestions = [{
		question1:'Who is the main actor in Home Alone?', 
		answer1:'Bart Simpson', 
		answer2:'Macaulay Culkin', 
		answer3:'Brad Pitt'}
		,
		{question2:'Why do we celebrate Christmas?', 
		answer1:'Jesus was born', 
		answer2:'Its Santas birthday', 
		answer3:'Its Buddys the elfs birthday'}
		,
		{question3:'Why do we celebrate Christma?', 
		answer1:'Jesus was born', 
		answer2:'Its Santas birthday', 
		answer3:'Its Buddys the elfs birthday'}
					]

	console.log(gameQuestions[0]);



	
	for (var i = 0; i < gameQuestions.length ; i++) {
			
			var random = Math.floor(Math.random() * 3);
			
			var questions = $('<div>');

				questions.attr({
					'class': 'questions',
					'data-random': gameQuestions[random],
				});	
				
				
				$('#game').append(questions);
	};




	$("#start").click(function(){
    	$('#start').hide();
    	$('#time').fadeIn();
	});

	$("#start").click(function(){
    	$('#question1').fadeIn();
	});

	$(".wrong1").click(function(){
	    $('#question1').hide();
	    $('.finalWrong1').fadeIn();
	});
	
	$(".correct1").click(function(){
	    $('#question1').hide();
	    $('.finalCorrect1').fadeIn();
	});

	$(".wrong2").click(function(){
	    $('#question2').hide();
	    $('.finalWrong2').fadeIn();
	});
	
	$(".correct2").click(function(){
	    $('#question2').hide();
	    $('.finalCorrect2').fadeIn();
	});

	$(".wrong3").click(function(){
	    $('#question3').hide();
	    $('.finalWrong3').fadeIn();
	});
	
	$(".correct3").click(function(){
	    $('#question3').hide();
	    $('.finalCorrect3').fadeIn();
	});



	var number1 = 5;
	var number2 = 5;
	var intervalId;
	var intervalId1;
	var intervalId2;
	

 	$("#question2").on("click", stop);

 	$("#question1").on("click", run1);

 	$("#question2").on("click", run2);


    function stop() {

      clearInterval(intervalId1 || intervalId2);
    }


    function decrement1() {

     	number1--;

    	if (number1 === 0) {

        stop();

        $('.finalCorrect1').hide();
        $('.finalWrong1').hide();
        $('#question2').show();
        $('#time').show();
    	}	    
    }

    function decrement2() {

     	number2--;

    	if (number2 === 0) {

        stop();

        $('.finalCorrect2').hide();
        $('.finalWrong2').hide();
        $('#question3').show();
        $('#time').show();
    	}	    
    }


    function run1() {
     	intervalId1 = setInterval(decrement1, 1000);
    }

    function run2() {
    	intervalId2 = setInterval(decrement2, 1000);
    }




    	$("#start").on("click", timeCount);
    	
    	
		$("#question1").click(function(){
			$('#time').hide();
		});



	    var timeClock = 15;
	    var interval;
	    var timer;

	    function timeRmaining() {

	      timeClock--;

	      $("#time").html("<h3>" + timeClock + "</h3>");
	      console.log(timeClock);
	      
	      if (timeClock === 0) {

	        clearInterval(interval); 

	        $('#question1').hide();
	        $('#question2').show();
	        $('#time').hide();
			} 	
	    } 


	   	function timeCount() {
			
			timeClock = 15;
			interval = setInterval(timeRmaining,1000);

		}


		var wins = 0;
    	var losses = 0;
    	answer = false;

    	

		
		
		function checkAnswer() {

			$(".correct1").on("click", function() {
				var checkRightAnswer = $('button').attr('value');

				
				
				if (checkRightAnswer == 1) {
	            
				
	            wins =+ 1;
	           
	            $('#wins').html(wins);
	          	}
			});
		}
			console.log(wins);	

	    


   


		
		

		