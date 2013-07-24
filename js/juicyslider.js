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
            shuffle: false, // set true to shuffle the picture order
            show: {effect: 'fade', duration: 1500}, // effect params refer to jQuery UI
            hide: {effect: 'fade', duration: 1500}, // try 'puff' or 'drop' for the effect arg
        }, options),               
        slides = this.find('li'),
        amount = slides.length,
        current = 0,
        turnSlide = function(event) {
            var step = 1;
            if (event) {
                event.preventDefault();
                step = event.data.step;
            }
            if (settings.shuffle) 
                step = Math.floor(Math.random()*(amount - 1) + 1);
            
            $(slides[current]).hide(settings.hide);
            current = (((current + step) % amount) + amount) % amount;
            // must make displayable before detecting the dimension
            $(slides[current]).css({display: 'block'});
            resizeImg();
            $(slides[current]).css({display: 'none'});
            $(slides[current]).show(settings.show);
        },
        theWindow = $(window),
        viewport = this;

        // set bg color
        this.css('background-color', settings.bgcolor);

        // set mask
        this.find('.mask').css('background-image', settings.mask == 'none' ? 'none' : 'url(./img/' + settings.mask + '.png)');

        // set the next button
        this.find('.nav.next').click({step:1}, turnSlide);
        this.find('.nav.prev').click({step:-1}, turnSlide);

        // set autoplay interval 
        if (settings.autoplay > 0)
            setInterval(turnSlide, settings.autoplay);

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

            bgimg = $(slides[current]).find("img");      // the current visible image

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
