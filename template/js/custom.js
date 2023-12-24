$(function(){

    'use strict';

    // Toggle Side Nav
    $(".buttonn").click(function(){
        $(".sidenav").animate({right: '0'} , 1000);
    });
    $(".closenav").click(function(){
        $(".sidenav").animate({right: '-310px'} , 1000);
    });

    // Button tab Nav Link 
    $('.sidenav .side-link .button-tab a').click(function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + $(this).data('tab')).fadeIn();
        $('.bind').not('.' +$(this).data('tab')).hide();
    })

    $('#signType').change(function(){
        if($('#signType').val() == '1'){
            $('.hide-div-1').show();
        } else{
            $('.hide-div-1').hide();
        }
    });
    $('#signType').change(function(){
        if($('#signType').val() == '2'){
            $('.hide-div-2').show();
        } else{
            $('.hide-div-2').hide();
        }
    });
    $('#signType').change(function(){
        if($('#signType').val() == '3'){
            $('.hide-div-3').show();
        } else{
            $('.hide-div-3').hide();
        }
    });
    $('#signType').change(function(){
        if($('#signType').val() == '4'){
            $('.hide-div-4').show();
        } else{
            $('.hide-div-4').hide();
        }
    });

      // responsive search
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

    $('.headerOwl').owlCarousel({
        rtl:true,
        autoplaySpeed: 500,
        animateOut:'fadeOut',
        autoplay:true,
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owlProd').owlCarousel({
        rtl:true,
        autoplaySpeed: 2000,
        animateOut:'fadeOut',
        autoplay:true,
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });

    $('.owlCom').owlCarousel({
        rtl:true,
        autoplaySpeed: 2000,
        animateOut:'fadeOut',
        autoplay:true,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:7
            }
        }
    });

    $('#owlStore').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        rtl:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    });

    
    $(function () {
        var typed = new Typed(".type", {
             strings: ["خدمــات تعلمية",
                       "محاضــرات دراسية",
                       "خدمــات ترفيهية",
                 ],
             typeSpeed: 60,
             backSpeed: 50,
             loop: true
         });
      });
      

    // Rating 
    $('.owlProd .clickRate li').click(function(){
        $('.owlProd .clickRate li').removeClass('fillStar');
        var $i = 0;
        for ($i = 0; $i <= $('.owlProd .clickRate li').index(this) ; $i++) {
            $('.owlProd .clickRate li').eq($i).addClass('fillStar');
        }
    });

    // PlaY owl-imgs In Section owl-imgs
    $('.owl-imgs .thumbnails img').on('click', function () {
        $('.owl-imgs .master-img img').hide().attr('src' , $(this).attr('src')).fadeIn(500);
    });

    // Toggle Input Pluse And Minus
    $(document).ready(function() {
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });
   
});