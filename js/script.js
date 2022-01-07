$(document).ready(function(){

    $("#menu").click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    })

    $('.portfolio .button-container .btn').click(function(){

        var value = $(this).attr('data-filter');

        if(value == 'all'){
            $('.portfolio .image-container .box').show('400')
        }else{
            $('.portfolio .image-container .box').not('.'+value).hide('200');
            $('.portfolio .image-container .box').filter('.'+value).show('400');
        }
    });

    $('#theme-toggler').click(function(){
        $(this).toggleClass('fa-sun');
        $('body').toggleClass('dark-theme');
    });

});