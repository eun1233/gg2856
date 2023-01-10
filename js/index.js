$(document).ready(function(){

// menu

var wh = $(window).height();

$('.main_menu').each(function(index){

    $(this).attr('data-index',index);

   }).click(function(){
    
    i = $(this).attr('data-index');

    $('html,body').animate({
        scrollTop: wh * i,
    },500);


   });


// section01

$('#box').css({

    display:'none',

});

$('#box').fadeIn(3000);



// section03

$(window).scroll(function(){

    sct = $(window).scrollTop();


    // console.log(sct);

});



$(window).scroll(function(){

    if(sct>1700){
        $('#skill').animate({
            
            top: 250,
            

        },1000);
    }

});


$('.jpg01').click(function(){

    $('.po01').fadeIn(500);

});

$('.close01').click(function(){

    $('.po01').fadeOut(500);

});


$('.jpg02').click(function(){

    $('.po02').fadeIn(500);

});

$('.close02').click(function(){

    $('.po02').fadeOut(500);

});


$('.jpg03').click(function(){

    $('.po03').fadeIn(500);

});

$('.close03').click(function(){

    $('.po03').fadeOut(500);

});


$('#port01').hover(function(){

    $('#port01 h1').fadeIn(500);

},function(){

    $('#port01 h1').fadeOut(500);

});


$('#port02').hover(function(){

    $('#port02 h1').fadeIn(500);

},function(){

    $('#port02 h1').fadeOut(500);

});


// top_btn

$(window).scroll(function(){

    sct = $(window).scrollTop();

    if(sct>100){
        $('#top_btn').css('display','block');
    }else{
        $('#top_btn').css('display','none');
    }

});


$('#top_btn').click(function(){

    $('html,body').animate({

        scrollTop: 0,

    },1000);



});





});//end