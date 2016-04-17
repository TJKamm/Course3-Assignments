var bookData = [];
var bookData = [{
  bookTitle: "Fahrenheit 451", 
  bookAuthor: "Ray Bradbury", 
  yearPublished: 1953
  }, 
  {
  bookTitle: "The Bell Jar",
  bookAuthor: "Sylvia Plath",
  yearPublished: 1963
  },
  {
  bookTitle: "Neverwhere", 
  bookAuthor: "Neil Gaiman", 
  yearPublished: 2003
  }];

//Write a function that creates a table row (<code>tr</code>) for each object in the array, with a cell (<code>td</code>) for each property to be displayed. Append each of these rows to the table body. Based off code from http://stackoverflow.com/questions/19903946/add-array-objects-to-html-table

function createTable (tableBody) {
  var table = document.getElementById('tableBody');
  
  for (var i=0; i < bookData.length; ++i) {
    var book = bookData[i];
    
    var row = document.createElement('tr');
    
    var properties = ['bookTitle', 'bookAuthor', 'yearPublished'];
    
    for (var j=0; j < properties.length; ++j) {
      var cell = document.createElement('td');
      
      cell.innerHTML = book[properties[j]];
      
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

function displayForm () {
  $( "#booksTable" ).hide();
  $( "#addForm" ).show();
}

function inputData () {
  
document.getElementById("tableBody").innerHTML = "";
  
  var bookTitleInput = document.getElementById("bookTitle").value;
  var bookAuthorInput = document.getElementById("bookAuthor").value;
  var yearPublishedInput = document.getElementById("yearPublished").value;
    
bookData.push({bookTitle: bookTitleInput, bookAuthor: bookAuthorInput, yearPublished: yearPublishedInput});
createTable();
   $( "#addForm" ).hide();
   $( "#booksTable" ).show();
}

function cancelForm () {
    $( "#addForm" ).hide();
   $( "#booksTable" ).show();
}

