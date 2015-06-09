/* jshint devel:true */
'use strict';

(function ( $ ) {
    var MAP_ID = '#map-pane';
    var HIDECLASS = 'showmorehidden';

    //This makes any element with class "link-to-map" open and move to the MAP_ID panel on click events
    $('.link-to-map').on('click', function() {
        $('#vegas-tabs-box a[href="' + MAP_ID + '"]').tab('show');
        window.location.hash = MAP_ID;
    });
    
    //This assumes any element with class "showmore" is a wrapper for content that will be shown/hidden.
    //It initializes hidden with 200px showing.
    //A clickable link is appended after the wrapper to show/hide the content.
    //The wrapper element can have an attribute data-description that will be appended to the end
    //of the show/hide link.
    $('.showmore').each( function() {  
        $(this).after(makeShowMore(this, $(this).data('description'))); 
    });
    
    //This makes the show/hide element and inits the wrapper in the hidden state.
    function makeShowMore(wrapperEl, description) {
        description = (typeof description === 'string') ? description : '';
        var moreHtml = '<a>Show more ' + description + '&nbsp;<span class="icon-down-triangle" aria-hidden="true">&#x25BE;</span></a>';
        var lessHtml = '<a>Show less ' + description + '&nbsp;<span class="icon-up-triangle" aria-hidden="true">&#x25B4;</span></a>';

        return $(moreHtml).on('click', function() {
            if ($(wrapperEl).hasClass(HIDECLASS)) {
                $(this).html(lessHtml);
                $(wrapperEl).removeClass(HIDECLASS);
            } else {
                $(this).html(moreHtml);
                $(wrapperEl).addClass(HIDECLASS);
            }

        }).css({position: 'relative',
                bottom: '-10px'});
    }
    
})( jQuery );