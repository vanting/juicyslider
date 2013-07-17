/*
 * Juicy Slider Core
 * 
 * Version: v1.0.0
 * (c) 2013 by Van Ting
 * 
 * Implment as jQuery plugin.
 * 
 */

(function($) {

    $.fn.juicyslider = function(options) {

        var settings = $.extend({
            // these are the defaults.
            mode: "cover", // or "contain"
            mask: "raster", // or "square", "strip", "none"
            bgcolor: "#000",
            autoplay: 4000, // 0 for no autoplay, any other postive number for play interval in (ms)
            show: {effect: 'fade', duration: 1500}, // effect params refer to jQuery UI
            hide: {effect: 'fade', duration: 1500},
        }, options);

        // set bg color
        $('body').css('background-color', settings.bgcolor);
        
        // set mask
        this.find('.mask').css('background-image', settings.mask == 'none' ? 'none' : 'url(./img/' + settings.mask + '.png)');
        
        var slides = this.find('li');
        var amount = slides.length;
        var i = 0;

        var nextSlide = function(event) {
            if (event)
                event.preventDefault();
  
            $(slides[i]).hide(settings.hide);
            i = (i < amount - 1) ? i + 1 : 0;
            // must make displayable before detecting the dimension
            $(slides[i]).css({display: 'block'});
            resizeImg();
            $(slides[i]).css({display: 'none'});           
            $(slides[i]).show(settings.show);
        }

        // set the next button
        this.find('#next-btn').click(nextSlide);
        
        // set autoplay interval 
        if (settings.autoplay > 0)
            setInterval(nextSlide, settings.autoplay);

        /*
         * handling bg images resize
         */
        var theWindow = $(window);

        function resizeImg() {

            winw = theWindow.width();
            winh = theWindow.height();
            winRatio = winw / winh;

            bgimg = $(slides[i]).find("img");      // the current visible image

            var doResize = function() {

                imgRatio = bgimg.width() / bgimg.height();

                if ((winRatio < imgRatio && settings.mode == 'contain') || (winRatio >= imgRatio && settings.mode == 'cover')) {

                    bgimg.removeClass('maxh').addClass('maxw').css({
                        /* get new height after adjust above */
                        top: (winh - winw/imgRatio) / 2,
                        left: 0
                    });
                } else {
                    bgimg.removeClass('maxw').addClass('maxh').css({
                        /* get new width after adjust above */
                        top: 0,
                        left: (winw - imgRatio*winh) / 2
                    });
                }
            };

            bgimg.get(0).complete ? doResize() : bgimg.load(doResize);
        }
        theWindow.resize(resizeImg).trigger('resize');

        // for chaining
        return this;
    };
}(jQuery));
