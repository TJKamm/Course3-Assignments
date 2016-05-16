//create

$('#createSubmit').off( );
$('#createSubmit').on('click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'tkamm'; 
    var title = $('#movieTitle').val();
    var year = $('#yearReleased').val();

    $.ajax( baseUrl + collection,
    {
        method: 'POST',
        data: {
                  title: title,
                  year: year
              },
        success: logCreateResult,
        error: logAjaxError
    } );
} );

function displayValue( selector, value ) {
        if ( value === undefined ) {
            $( selector ).empty( );
        } else {
            $( selector ).text( value );
        }
  }

function logCreateResult( data ) {
    console.log( 'Data received:', data );
    displayValue( '#displayCreatedID', 'ID:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}

//Read
//List

$('#listIDs').on( 'click', function( evt ) {
var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
var collection = 'tkamm'; 

$.ajax( baseUrl + collection,
{
    method: 'GET',
    success: logListResult,
    error: logAjaxError
} );
} );

function logListResult( data ) {
    console.log( 'Data received:', data );
    displayValue( '#listData', data);
}

//Single Item

$('#searchIDSubmit').off( );
$('#searchIDSubmit').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'tkamm'; 
    var id = $('#searchID').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
    {
        method: 'GET',
        success: logReadResult,
        error: logAjaxError
    } );
} );

function logReadResult( data ) {
    console.log( 'Data received:', data );
    displayValue( '#displaySearchedID', data);
}

//Update

$('#update').off( );
$('#update').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'tkamm'; 
    var id = $('#updateID').val();
    var title = $('#updateMovieTitle').val();
    var year = $('#updateYearReleased').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
    {
        method: 'PUT',
        data: {
                  title: title,
                  year: year
              },
        success: logUpdateResult,
        error: logAjaxError
    } );
} );

function logUpdateResult( data ) {
    console.log( 'Data received:', data );
    displayValue( '#displayUpdatedID', data);
}

//Delete

$('#deleteIDSubmit').off( );
$('#deleteIDSubmit').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'tkamm'; 
    var id = $('#deleteID').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
    {
        method: 'DELETE',
        success: logDeleteResult,
        error: logAjaxError
    } );
} );

function logDeleteResult( data ) {
    console.log( 'Data received:', data );
}
