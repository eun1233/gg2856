$(document).ready(function(){

    //section01 

    var mask_w = $('.sec01_img').width();

    $('#right').click(function(){

        $('#img_wrap').animate({

            left: -mask_w*2,

        },500,function(){

            $('#img_wrap').css({

                left: -mask_w,

            }).find('.sec01_img').first().appendTo('#img_wrap');

        });
    });

    $('#right').click(function(){

        $('.sec01_img').animate({

            opacity: 0,

        },500,function(){

            $('.sec01_img').animate({

                opacity: 1,

            });

        });

    });

    setInterval(function(){

        $('#right').trigger('click')

    },5000);


    $('#left').click(function(){

        $('#img_wrap').animate({
            left: 0,
        },500,function(){

            $('#img_wrap').css({

                left: -mask_w,

            }).find('.sec01_img').last().prependTo('#img_wrap');

        });

    });


    $('#left').click(function(){

        $('.sec01_img').animate({

            opacity: 0,

        },500,function(){

            $('.sec01_img').animate({

                opacity: 1,

            });

        });

    });




    // section02

    var mask_w = $('.img_wrap02').width();

    $('#right02').click(function(){

        $('#sec02_wrap').animate({
            left: -mask_w*2,
        },500,function(){

            $('#sec02_wrap').css({
                left: -mask_w,
            }).find('.img_wrap02').first().appendTo('#sec02_wrap');

        });

    });

    $('#left02').click(function(){

        $('#sec02_wrap').animate({
            left:0,
        },500,function(){

            $('#sec02_wrap').css({
                left: -mask_w,
            }).find('.img_wrap02').last().prependTo('#sec02_wrap');

        });

    });

   



    // section03

    $(window).scroll(function(){

        sct = $(window).scrollTop();

        if(sct>800){
            $('#sec03').css('opacity',1);
        }else{
            $('#sec03').css('opacity',0);
        }

    });

    // section04

    $(window).scroll(function(){

        sct = $(window).scrollTop();

        if(sct>1600){
            $('#sec04').css('opacity',1);
        }else{
            $('#sec04').css('opacity',0);
        }

    });

    // section05

    $(window).scroll(function(){

        sct = $(window).scrollTop();

        if(sct>3000){
            $('#sec05').css('opacity',1);
        }else{
            $('#sec05').css('opacity',0);
        }

    });



   





});//end
