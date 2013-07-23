/*
 * Juicy Slider Core
 * 
 * (c) 2013 by Van Ting
 * 
 * Implment as jQuery plugin.
 * 
 */

(function($) {

    $.fn.juicyslider = function(options) {

        var 
        settings = $.extend({
            // these are the defaults.
            mode: "cover", // "cover" or "contain"
            width: '100%', // set null to make the slider as wide/tall as the window,
            height: '100%', // otherwise set any other values in px or % unit
            mask: "raster", // "raster", "square", "strip" or "none"
            bgcolor: "#000",
            autoplay: 4000, // 0 for no autoplay, any other postive number for play interval in (ms)
            show: {effect: 'fade', duration: 1500}, // effect params refer to jQuery UI
            hide: {effect: 'fade', duration: 1500}, // try 'puff' or 'drop' for the effect arg
        }, options),               
        slides = this.find('li'),
        amount = slides.length,
        i = 0,
        nextSlide = function(event) {
            if (event)
                event.preventDefault();

            $(slides[i]).hide(settings.hide);
            i = (i < amount - 1) ? i + 1 : 0;
            // must make displayable before detecting the dimension
            $(slides[i]).css({display: 'block'});
            resizeImg();
            $(slides[i]).css({display: 'none'});
            $(slides[i]).show(settings.show);
        },
        theWindow = $(window),
        viewport = this;

        // set bg color
        this.css('background-color', settings.bgcolor);

        // set mask
        this.find('.mask').css('background-image', settings.mask == 'none' ? 'none' : 'url(./img/' + settings.mask + '.png)');

        // set the next button
        this.find('.nav.next').click(nextSlide);

        // set autoplay interval 
        if (settings.autoplay > 0)
            setInterval(nextSlide, settings.autoplay);

        /*
         * handling bg images resize
         */
        function resizeImg() {

            // set width and height of the slider
            viewport.width(settings.width == null ? theWindow.width() : settings.width);
            viewport.height(settings.height == null ? theWindow.height() : settings.height);
            vieww = viewport.width();
            viewh = viewport.height();
            viewRatio = vieww / viewh;

            bgimg = $(slides[i]).find("img");      // the current visible image

            var doResize = function() {

                imgRatio = bgimg.width() / bgimg.height();

                if ((viewRatio < imgRatio && settings.mode == 'contain') || (viewRatio >= imgRatio && settings.mode == 'cover')) {

                    bgimg.removeClass('maxh').addClass('maxw').css({
                        /* get new height after adjust above */
                        top: (viewh - vieww / imgRatio) / 2,
                        left: 0
                    });
                } else {
                    bgimg.removeClass('maxw').addClass('maxh').css({
                        /* get new width after adjust above */
                        top: 0,
                        left: (vieww - imgRatio * viewh) / 2
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
