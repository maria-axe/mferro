$(document).ready( function(){
    var owl = $('.banners');
        owl.owlCarousel({
        items:1,
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

    var owl = $('.banners-second');
        owl.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

    var owl = $('.products-shoes');
        owl.owlCarousel({
        items:3,
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

});
    
