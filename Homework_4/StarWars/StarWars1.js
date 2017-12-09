// four boxes of Players click able
// life range from 100 to 180
// choose my Character + enemy character
// animate boxes so its moves to attack position
// substract life from both characters when hitting the attack button
// increase my power after each attack (8-12)
// pick a new enemy
// Gamover after all enemys are beaten 


	$(function() {
		
		$('.player').on('click', function() {

			var playerId = $(this).attr('data-playerid')
			$('#player1').animate({ top: "+=200px" }, "normal");
			
			//alert(playerId);

			console.log(playerId);
		});
	
	});
		
	
	
	

		


	




	




