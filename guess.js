  var correct = Math.floor((Math.random() * 100)+1);
       	//document.write(correct);
       
        function yourGuess()
        	{
            var guess =  document.getElementById("userguess").value;
            if (guess >100 || guess<1 || isNaN(guess)) {
            	alert("Please enter a whole number between 1 and 100");
            	} else if (Math.abs(guess - correct) <= 3 && Math.abs(guess - correct) > 0){
            		("Scorching!");
            	} else if (Math.abs(guess - correct) <= 10 && Math.abs(guess - correct) > 3) {
            		alert("Hot!");
            	} else if (Math.abs(guess - correct) <= 20 && Math.abs(guess - correct) > 10) {
            		alert("Warm!");
				} else if (Math.abs(guess - correct) <= 30 && Math.abs(guess - correct) > 20) {
            		alert("Cool!");
            	} else if (Math.abs(guess - correct) <= 50 && Math.abs(guess - correct) > 30) {
            		alert("Cold!");
            	} else if (Math.abs(guess - correct) > 50) {
            		alert("Freezing!");
            	} else if (guess == correct) {
            		alert("Good guess! You guessed " + guess + " and the correct number is " + correct );
            	}
            }