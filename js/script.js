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

        let filter = $(this).attr('data-filter');

        if(filter == 'all'){
            $('.portfolio .image-container .btn').show('400')
        }else{
            $('.portfolio .image-container .btn').not('.'+ filter).hide('200');
            $('.portfolio .image-container .btn').filter('.'+ filter).show('400');
        }
    });

});