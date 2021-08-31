
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

    $('.banners-second').owlCarousel({
        items:4,
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    $('.products-shoes').owlCarousel({
        items:3,
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    $('.products-clothes').owlCarousel({
        items:4,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
});

// MINI CART 

$('.mini-cart').on('click', function(){
    $(this).find('#mini-cart-wrapper').toggle(); //toggle mostra e oculta o elemento
});


    
