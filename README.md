Juicy Slider
======================================================

Juicy Slider is a responsive slider/slideshow plugin for jQuery. Unlike other plugins that rely on CSS3 support of browser, this plugin adjusts image size by computing the corresponding aspect ratio of images and viewport using javascript. This makes it compatible with older browsers and more consistent. The current release uses jQuery UI to set its transition effects.

## Features

* Lightweight - the minified script is less than 2KB
* Robust - compatible with almost all browsers
* Customizable - various effects, masks and options to create your own style
* Responsive - respond to the change of viewport size
* Open - it is open source and free!

![Screenshot](https://raw.github.com/vanting/juicyslider/master/screenshot.png)

[Live Demos](http://redslim.ga/juicyslider/): 

* [default settings](http://redslim.ga/juicyslider/default_settings.html)
* [no autoplay](http://redslim.ga/juicyslider/no_autoplay.html)
* [drop effect](http://redslim.ga/juicyslider/drop_effect.html)
* [puff effect](http://redslim.ga/juicyslider/puff_effect.html)
* [contain mode](http://redslim.ga/juicyslider/contain_mode.html)

## Requirement

* jQuery 1.7+ 
* jQuery UI 1.9+ 


## Browser Support
* Chrome
* Firefox
* Safari
* Opera
* IE8, 9, 10
* Mobile Chrome
* Mobile Safari


## Installation

First, include the scripts and style sheet in your header.

	<head>
        <link rel="stylesheet" href="css/juicyslider.css" type="text/css" />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/jquery-ui.min.js"></script>
        <script type="text/javascript" src="js/juicyslider.js"></script>
    </head>

Now, create a container with the class **juicyslider** to hold your pictures. You can assign any ID to the container as you like. The **nav** and **mask** DIVs are for creating navigation buttons and mask overlay but optional.

	<div id="myslider" class="juicyslider">
        <ul>
            <li><img src="data/1.jpg" alt=""></li>
            <li><img src="data/2.jpg" alt=""></li>
            <li><img src="data/3.jpg" alt=""></li>
            <li><img src="data/4.jpg" alt=""></li>
            <li><img src="data/5.jpg" alt=""></li>
        </ul>
        <div class="nav next"></div>
		<div class="nav prev"></div>
        <div class="mask"></div>
    </div>

Then initialize the plugin like this:


    $('#myslider').juicyslider();

or

	$('#myslider').juicyslider({
    	// these are the defaults
    	mode: "cover", 								// "cover" or "contain"
		width: '100%',      						// set null to make the slider as wide/tall as the window,
        height: '100%',     						// otherwise set any other values in px or % unit
    	mask: "raster", 							// "raster", "square", "strip" or "none"
     	bgcolor: "#000",
     	autoplay: 4000, 							// 0 for no autoplay, any other postive number for play interval in (ms)
		shuffle: false, 							// set true to shuffle the picture order
     	show: {effect: 'fade', duration: 1500}, 	// effect params refer to jQuery UI
    	hide: {effect: 'fade', duration: 1500},		// try 'puff' or 'drop' for the effect arg
    });

Here you go!

For more details, please check out the live [demos](http://redslim.ga/juicyslider/).


## Credits

The images are by [Mark Sebastian](http://www.flickr.com/photos/markjsebastian/) and they are licensed under the [Creative Commons Attribution-ShareAlike 2.0 Generic License](http://creativecommons.org/licenses/by-sa/2.0/deed.en).


## License

The Juicy Slider is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)

