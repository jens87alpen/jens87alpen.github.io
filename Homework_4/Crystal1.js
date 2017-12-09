var randomResult
var win = 0;
var lost = 0;
var addingNumber = 0;
	
		
var resetAndStartGame = function ()	{

		$('.crystals').empty();

		var images = ['http://celebritytoob.com/wp-content/uploads/2014/08/143317713.jpg',
					  'https://i.pinimg.com/236x/79/d8/78/79d878423609a201f1a2a9b8b22cac91--leonardo-movie-stars.jpg',
					  'https://i2-prod.mirror.co.uk/incoming/article189804.ece/ALTERNATES/s298/Brad-Pitt.gif',
					  'https://i.pinimg.com/736x/bf/80/5d/bf805db38d4d5ea8fecfc38a7a7126d9--sandra-bullock-movie-stars.jpg']
		
		//find a number between 19 and 121
		randomResult = Math.floor(Math.random() * 102) +19;
		$('#randomNumber').html('Random number: ' + randomResult);

		//create 4 dynamic Crystal boxes 
		for (var i = 0; i < 4; i++) {
			
			var random = Math.floor(Math.random() * 11) + 1;
			$('#result').html('Result: ' + addingNumber);
			
			var crystal = $('<div>');

				crystal.attr({
					'class': 'crystal',
					'data-random': random,
				});	
				
				crystal.css({
					'background-image': 'url(' + images[i] + ')',
					'background-size': 'cover',
				});						

			$('.crystals').append(crystal);	
		}
}

resetAndStartGame();



	$(document).on("click", ".crystal", function() {
		
		//convert the string into a number so we can add up each crystal 
		var number = parseInt($(this).attr('data-random'));


		addingNumber += number;

		console.log(addingNumber);
		$('#result').html('Result: ' + addingNumber);

		if (addingNumber > randomResult) {
			lost ++;

			$('#lost').html('Losses: ' + lost);

			addingNumber = 0;

			resetAndStartGame();


		} else if (addingNumber === randomResult) {
			win ++;
		
			$('#win').html('Wins: ' + win);

			addingNumber = 0;

			resetAndStartGame();

		}
		
	});







