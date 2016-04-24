// take userInput from HTML5 form, onclick function:
// if (userInput = number, add to userNumbers)
// else (add to userStrings)

//numbers count + sum + mean
//run display function

//concatenate userStrings array
//run display function


var userNumbers = [];
var userStrings = [];
var thisTotal = 0;

function checkInputType () {

  var x = document.forms["userForm"]["userInput"].value;
  if (x == null || x == "") {
    resetData();
    alert("A value must be entered");
    return;
   }
  
  var userInput = document.getElementById("userInput").value;
  
  if(!isNaN(userInput))
  {
    userNumbers.push(userInput);
    calculateStats();
  }else{
    userStrings.push(userInput);
    concatenateStrings();
  };
  
}

function calculateStats () {
  var i;
  count = userNumbers.length;
  thisTotal = 0;
  
  for ( i = 0; i < count; ++i ) {
    thisTotal += parseFloat(userNumbers[i]);
  }
  
  if (count > 0) {
    average = thisTotal / count;
  } else {
    average = undefined;
  }
   displayNumbers();
}
  
function displayNumbers () {

  displayValue( '#count', count );
  displayValue( '#sum', thisTotal );
  displayValue( '#average', average );
  
  function displayValue( selector, value ) {
        if ( value === undefined ) {
            $( selector ).empty( );
        } else {
            $( selector ).text( value );
        }
  }
}

function concatenateStrings () {
  
  //for ( i = 0; i < userStrings.length; ++i ) {
    document.getElementById("displayStrings").innerHTML = "Number of Strings: " + userStrings.length + "<br><br>" + userStrings.join(" ");
  //}
  
}

function resetData() {
  userNumbers = [];
  userStrings = [];
  document.getElementById("displayStrings").innerHTML = "";
  calculateStats();
  displayNumbers();
}
