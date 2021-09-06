//CAROUSEL

$(document).ready( function(){
    
    $('.banners').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
        

    });

    $('.products-clothes').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    });

    $('.banners-second').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:false,
                loop:true
            }
        }
    });

    $('.products-shoes').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });
});

// MINI CART 

$('.mini-cart').on('click', function(){
    $(this).find('#mini-cart-wrapper').toggle(); //toggle mostra e oculta o elemento
});


// MENU

$('.btn-mobile').on('click', function(){
    let nav = $('.menu-nav ul');
    nav.toggle();

});

