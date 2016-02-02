

/*===============================
/styx.hu/templates/ja_cagox/acm/slideshow/js/script.js
================================================================================*/;
(function($){$(document).ready(function(){if($('.full-screen').length>0){var heightscreen=$(window).height()-$('.t3-header').outerHeight(),widthscreen=$('.full-screen').width(),pdcenter=(heightscreen-$('.hero-content').height())/2;$('.full-screen').height(heightscreen);$(window).resize(function(){var heightscreen=$(window).height()-$('.t3-header').outerHeight(),widthscreen=$('.full-screen').width(),pdcenter=(heightscreen-$('.hero-content').height())/2;$('.full-screen').height(heightscreen);});}});})(jQuery);


/*===============================
/styx.hu/templates/ja_cagox/acm/video/js/script.js
================================================================================*/;
(function($){$(document).ready(function(){if($('.full-screen').length>0){var heightscreen=$(window).height()-$('.block-header:first-child').outerHeight()-$('.block-topbar:first-child').outerHeight(),widthscreen=$('.full-screen').width(),pdcenter=(heightscreen-$('.hero-content').height())/2;$('.full-screen').height(heightscreen);$(window).resize(function(){var heightscreen=$(window).height()-$('.t3-header').outerHeight()-$('.uber-header').outerHeight()-$('.uber-bar').outerHeight()-$('.slideshow-thumbs .carousel-indicators').height(),videoscreen=$('.video-wrapper').outerHeight(),widthscreen=$('.full-screen').width(),pdcenter=(heightscreen-$('.hero-content').height())/2,pdvideo=(videoscreen-$('.hero-content').height())/2;$('.full-screen').height(heightscreen);});}});})(jQuery);


/*===============================
/styx.hu/templates/ja_cagox/js/video.background.js
================================================================================*/;
(function($){$(document).ready(function($){playVideo=function(e){var $embed=e.parents('.block-content').find('iframe');var src=$embed.attr('src')+'?autoplay=1&html5=1&showinfo=0';var autoEmbed='<iframe src="'+src+'" width="'+$embed.attr('width')+'" height="'+$embed.attr('height')+'" frameborder="0" allowfullscreen></iframe>';$('.box-video').prepend(autoEmbed).fadeIn(300,function(){$('.block-video .mask').css("display","block");});}
closeVideo=function(){$('.box-video').fadeOut(100,function(){$('iframe',this).remove().fadeOut(200);$('.block-video .mask').css("display","none");});}
$('.play-video').on('click',function(e){playVideo($(this));e.preventDefault();});$('.close-video').on('click',function(e){closeVideo();});$('.block-video .mask').on('click',function(e){closeVideo();});});})(jQuery);