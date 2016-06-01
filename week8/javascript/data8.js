var element = $('#sun');
var paper = Raphael( element, 350, 850 );		

var sun = paper.circle( 250, 150, 50 );

sun.attr( {
    stroke: '#FAFF00',
    'stroke-width': 8,
    fill: '#FAFF00',
    opacity: 0.3
} );

window.onload = 
sun.animate( {
        cx: 550,
        cy: 75,
        opacity: 1.0
    },
    1500,
    function( ) {
        sun.animate( {
                cx: 750,
                cy: 150,
                opacity: 0.3
            },
            1500);
    } );
