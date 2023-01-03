$(document).ready(function(){

    /*section01*/ 

    var a = 0;

    $('#right_slaid01').click(function(){
        
        a++;

        if(a>2){
            a=0;
        }

        $('#bookimg_wrap').animate({
            left: -1920*a,
        },1000);

    });

    $('#left_slaid01').click(function(){
        a--;

        if(a<0){
            a=2;
        }

        $('#bookimg_wrap').animate({
            left: -1920*a,
        },1000);
    });

    setInterval(function(){

        $('#right_slaid01').trigger('click')

    },5000);




    /*section03*/ 

    var b = 0;

    $('#sec03_right').click(function(){

        b++;

        if(b>3){
            b=0;
        }

        $('#sec03menu').animate({

            left: -550*b,

        },1000);
    });


    $('#sec03_left').click(function(){
        
        b--;

        if(b<0){
            b=3;
        }

        $('#sec03menu').animate({

            left: -550*b,

        },1000);

    });

    /*section05*/ 

    var c = 0;

    $('#right02').click(function(){

        c++;

        if(c>5){
            c=0;
        }

        $('#book_slaid').animate({
            left: -225*c,
        });

    });

    $('#left02').click(function(){

        c--;

        if(c<0){
            c=5;
        }

        $('#book_slaid').animate({
            left: -225*c,
        });

    });

    /*search*/ 

    $('#search button').click(function(){
        alert('찾으시는 상품이 없습니다.');
    });
   


});//end

