  var correct = Math.floor((Math.random() * 100)+1);
       	//document.write(correct);
       	var guess = "";

function yourGuess()
	{
    var guess =  $('#usernumber').val();
    //document.getElementById("userguess").value;

    // Appends guess to previous guesses list
    function prevGuesses(guess) {
    	$('#prev_guesses').prepend("<li>" + guess + "</li>");
    }
    

	    
	if (guess >100 || guess<1 || isNaN(guess)) {
		
    	$('#answer').html("Please enter a whole number between 1 and 100");
    }	else {

    var difference = Math.abs(guess - correct);
    if (difference <= 3 && difference >= 1){
    	$('#answer').html('<span id="scorching">Scorching!</span>');
    		//alert("Scorching!");
    	} else if (difference <= 10 && difference > 3) {
    		$('#answer').html('<span id="hot">Hot!</span>');
    		//alert("Hot!");
    	} else if (difference <= 20 && difference > 10) {
    		$('#answer').html('<span id="warm">Warm!</span>');
    		//alert("Warm!");
		} else if (difference <= 30 && difference > 20) {
			$('#answer').html('<span id="cool">Cool!</span>');
    		//alert("Cool!");
    	} else if (difference <= 50 && difference > 30) {
    		$('#answer').html('<span id="cold">Cold!</span>');
    		//alert("Cold!");
    	} else if (difference > 50) {
    		$('#answer').html('<span id="freezing">Freezing!</span>');
    		//alert("Freezing!");
    	} else if (guess == correct) {
    		$('#answer').html("Good guess! You guessed " + guess + " and the correct number is " + correct + "!!!");
    		//alert("Good guess! You guessed " + guess + " and the correct number is " + correct );
    	}


    	prevGuesses(guess);
    }
}


/*
// difference between last guess and previous guess
    function difference(a,b) {
		return Math.abs(a - b)
	}; 

}




function newGame(){
	    correct = Math.floor((Math.random() * 100)+1);
	    }

*/
