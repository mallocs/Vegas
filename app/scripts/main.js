/* jshint devel:true */

(function ( $ ) {
    var MAP_ID = '#map-pane';
    
    $('.link-to-map').on('click', function() {
        $('#vegas-tabs-box a[href="' + MAP_ID + '"]').tab('show');
        window.location.hash = MAP_ID;
    });
    
    var showmoreEl = $('<a>Show more</a>').on('click', function() {
            alert('hi');
        });
    $('.showmore').after( showmoreEl );
    
})( jQuery );