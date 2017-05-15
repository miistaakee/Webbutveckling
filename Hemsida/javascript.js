$('.img').on('mouseenter', function(evt){
    $('.popup').css({left: evt.pageX+30, top: evt.pageY-15}).show();
    $(this).on('mouseleave', function(){
        $('.popup').hide();
    });
});