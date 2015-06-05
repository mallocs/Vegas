/* jshint devel:true */

(function ( $ ) {
    var MAP_ID = '#map-pane';
    
    $('.link-to-map').on('click', function() {
        $('#vegas-tabs-box a[href="' + MAP_ID + '"]').tab('show');
        window.location.hash = MAP_ID;
    });
    
    function makeShowMore(wrapperEl, description) {
        var moreHtml = '<a>Show more ' + (description || '') + '&nbsp;<span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></a>';
        var lessHtml = '<a>Show less ' + (description || '') + '&nbsp;<span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span></a>';

        $(wrapperEl).css({ height: '200px',
                         overflow: 'hidden'});
        return showmoreEl = $(moreHtml).on('click', function() {
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

    $('.showmore').each( function() {  $(this).after(makeShowMore(this, $(this).data('description'))) } );
    
})( jQuery );