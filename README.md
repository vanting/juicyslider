Juicy Slider (Fullscreen jQuery Slideshow)
======================================================

Juicy Slider is a responsive slideshow plugin for jQuery. Unlike other plugins that rely on CSS3 browser support, it adjusts image size by computing the corresponding aspect ratio of images and viewport using javascript. This approach makes it more compatible with older browsers. The current implementation uses jQuery UI to set various transition effects.

![Screenshot](https://raw.github.com/vanting/juicyslider/master/screenshot.png)

[Live Demos](http://juicyslider.gopagoda.com/): 

* [default settings](http://juicyslider.gopagoda.com/default_settings.html)
* [using php image loader](http://juicyslider.gopagoda.com/php_loader.php)
* [no autoplay](http://juicyslider.gopagoda.com/no_autoplay.html)
* [drop effect](http://juicyslider.gopagoda.com/drop_effect.html)
* [puff effect](http://juicyslider.gopagoda.com/puff_effect.html)
* [contain mode](http://juicyslider.gopagoda.com/contain_mode.html)

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

Now, create a container with ID **juicyslider** to hold your pictures. The **nav** and **mask** DIVs are optional.

	<div id="juicyslider">
        <ul>
            <li><img src="data/1.jpg" alt=""></li>
            <li><img src="data/2.jpg" alt=""></li>
            <li><img src="data/3.jpg" alt=""></li>
            <li><img src="data/4.jpg" alt=""></li>
            <li><img src="data/5.jpg" alt=""></li>
        </ul>
        <div id="next-btn" class="nav">
            <a href="#" class="next-icon"></a>
        </div>
        <div class="mask"></div>
    </div>

Note, with PHP support, you can just drop your images to the **data/** folder and they will be included by the php script (php_loader.php). Otherwise, manually edit the list of images in the HTML file.

Then initialize the plugin like this:


    $('#juicyslider').juicyslider();

or

	$('#juicyslider').juicyslider({
    	// these are the defaults
    	mode: "cover", 								// or "contain"
    	mask: "raster", 							// or "square", "strip", "none"
     	bgcolor: "#000",
     	autoplay: 3000, 							// 0 for no autoplay, any other postive number for play interval in (ms)
     	show: {effect: 'fade', duration: 1000}, 	// effect params refer to jQuery UI
    	hide: {effect: 'fade', duration: 1000},		// try 'puff' or 'drop' for the effect arg
    });

Here you go!

For more details, please check out the live [demos](http://juicyslider.gopagoda.com/).


## Credits

The images are by [Mark Sebastian](http://www.flickr.com/photos/markjsebastian/) and they are licensed under the [Creative Commons Attribution-ShareAlike 2.0 Generic License](http://creativecommons.org/licenses/by-sa/2.0/deed.en).


## License

The Juicy Slider is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)


