$(document).ready(function(){

// menu

var menus = document.querySelectorAll('.main_menu')
var sec = document.querySelectorAll('section')

var oneTop = sec[1].offsetTop
var twoTop = sec[2].offsetTop
var threeTop = sec[3].offsetTop
var fourTop = sec[4].offsetTop


menus[0].onclick = function(){

     window.scroll({
        top: oneTop, 
        behavior: 'smooth',
     });

}

menus[1].onclick = function(){

     window.scroll({
        top: twoTop, 
        behavior: 'smooth',
     });

}

menus[2].onclick = function(){

     window.scroll({
        top: threeTop, 
        behavior: 'smooth',
     });

}

menus[3].onclick = function(){

     window.scroll({
        top: fourTop, 
        behavior: 'smooth',
     });

}



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
























});//end