$(document).ready(function(){
 var correct = Math.floor((Math.random() * 100)+1);
 //document.write(correct);
 var answer = "";
 //document.write(guess);
 var numGuesses = 0;

 //function tries(numGuesses){
  //  numGuesses = numGuesses + 1;
   // document.write(numGuesses);}

 function guess(){
    var answer = $('#userguess').val();
    if (answer >100 || answer<1 || isNaN(answer)) {
                alert("Please enter a whole number between 1 and 100");
                }
 }  

})













/*


  var correct = Math.floor((Math.random() * 100)+1);
       	//document.write(correct);
       
        function yourGuess()
        	{
            var guess =  document.getElementById("userguess").value;
            if (guess >100 || guess<1 || isNaN(guess)) {
            	alert("Please enter a whole number between 1 and 100");
            	} else if (Math.abs(guess - correct) <= 3 && Math.abs(guess - correct) >= 1){
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

            function newGame(){
            var correct = Math.floor((Math.random() * 100)+1);
            }

            */