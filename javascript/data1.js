
var userNumbers = [];

function inputNumber () {
  
  var userNumbersInput = document.getElementById("userNumbersInput").value;

 // if (userNumbersInput.length === 0) {
         //       alert("Please enter a valid input");
         //       return;
         //   }
    
 userNumbers.push(userNumbersInput);
  calculateSum();
  displayNumbers();
}

var thisTotal = 0;

function calculateSum(){
  thisTotal = 0;
for (i = 0; i < userNumbers.length; i++) 
  {
  thisTotal += parseInt(userNumbers[i]);
    }
}


function displayNumbers() {
  var thisAverage = thisTotal/userNumbers.length;
  document.getElementById("display").innerHTML = "Numbers Entered: " + userNumbers + "</br>" + "Number of Numbers: " + userNumbers.length + "</br>" + "Sum:" + thisTotal + "</br>" + "Mean: " + thisAverage;
}


function resetData() {
  userNumbers = [];
  document.getElementById("display").innerHTML = "";
}


 // $(document).ready(function(){
 // $( "submit" ).click(function() {
// var userNumbersInput = document.getElementById("randomNumber").value;
    
 // userNumbers.push(userNumbersInput.value);
 //  displayNumbers();
  
    //messageBox.innerHTML = "";
    //messageBox.innerHTML += "Numbers: " + userNumbers() + "<br/>";
    
//  });
  
  // $("input:#reset").click(function () {
		
	//$('#randomNumber').html("");
//	$('input:number').val("");
// });

//var numbers = [0, 1, 2];
//document.getElementById("numbers").innerHTML = numbers;

//var x = numbers.length;
//document.writeIn("Number of numbers: " + x");



//function use_numbers() {
 // var i = 0;
 // var sum = 0;
 // var number = prompt("Please Enter a Number");
  //  sum += parseInt(number); //sum the numbers here
  //  i++;

   // document.write("Number: " + number);

 // document.write('Average of scores : ' + sum / i);//use the sum of the numbers divide by the the numbers the user enters
//}
//use_numbers();