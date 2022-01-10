$(document).ready(function() {
    $('.showmenu').on('click',  function(e){
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
    $('.menu > li > a').click(function(e) { 
        e.preventDefault();
        $(this).parent().siblings().removeClass('active');
        $(this).parent().toggleClass('active');
        $(this).parent().siblings().find('.childmenu').slideUp();
        $(this).parent().find('.childmenu').slideToggle();
    });
    $('.scrolltop a').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        },600);
    })
});