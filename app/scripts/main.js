/* jshint devel:true */
'use strict';

(function ( $ ) {
    var MAP_ID = '#map-pane';

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

        $(wrapperEl).css({ height: '200px', overflow: 'hidden'});
        return $(moreHtml).on('click', function() {
            if( $(wrapperEl)[0].style.height === '200px' ) {
                $(this).html(lessHtml);
                $(wrapperEl)[0].style.height = '';
                $(wrapperEl)[0].style.overflow = '';
            } else {
                $(this).html(moreHtml);
                $(wrapperEl)[0].style.height = '200px';
                $(wrapperEl)[0].style.overflow = 'hidden';
            }
        }).css({position: 'relative',
                bottom: '-10px'});
    }
    
})( jQuery );