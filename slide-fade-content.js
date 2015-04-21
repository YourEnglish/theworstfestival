// Ajax Slide & Fade Content with jQuery v2.0 @ http://perishablepress.com/slide-fade-content/
// DEMO @ http://perishablepress.com/wp/wp-content/demos/slide-fade-content/
// DEMO @ http://perishablepress.com/demos/slide-fade-content/
// verandering om opnieuw te publishen

/* jQuery Color Fade v0.1 * Released under the CC BY 3.0 License (http://creativecommons.org/licenses/by/3.0/) * https://github.com/matthewbj/jQuery-Color-Fade */
(function(b){var c={init:function(a){var c=b.extend({fadeColor:"yellow",fadeTime:800,delayTime:600},a),d={position:"relative","z-index":1},e={height:"100%",width:"100%","background-color":c.fadeColor,position:"absolute",top:0,left:0,"z-index":"-1"};return this.each(function(a){b(this).css(d).append('<div id="colorFadeDiv'+a+'" class="colorFadeClass"></div>');b("#colorFadeDiv"+a).css(e).delay(c.delayTime).fadeOut(c.fadeTime)})},refade:function(a){a=b.extend({fadeColor:"yellow",fadeTime:800,delayTime:600},
a);b(this).find(".colorFadeClass").css("background-color",a.fadeColor).show().delay(a.delayTime).fadeOut(a.fadeTime)}};b.fn.colorFade=function(a){if(c[a])return c[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof a||!a)return c.init.apply(this,arguments);b.error("Method "+a+" does not exist on jQuery.colorFade")}})(jQuery);

// slide & fade content
jQuery(document).ready(function($) {
	$('.more1').on('click', function() {
		var href = $(this).attr('href');
		if ($('#ajax1').is(':visible')) {
			$('#ajax1').css({ display:'block' }).animate({ height:'0' }).empty();
		}
		$('#ajax1').css({ display:'block' }).animate({ height:'200px' },function() {
			$('#ajax1').html('<img id="loader" src="loader.gif">');
			$('#loader').css({ border:'none', position:'relative', top:'24px', left:'48px', boxShadow:'none' }); // http://loadinfo.net/
			$('#ajax1').load('slide-fade-content1.html ' + href, function() {
				$('#ajax1').hide().fadeIn('slow');
			});
		});
	});
});
// slide & fade content
jQuery(document).ready(function($) {
	$('.more2').on('click', function() {
		var href = $(this).attr('href');
		if ($('#ajax2').is(':visible')) {
			$('#ajax2').css({ display:'block' }).animate({ height:'0' }).empty();
		}
		$('#ajax2').css({ display:'block' }).animate({ height:'200px' },function() {
			$('#ajax2').html('<img id="loader" src="loader.gif">');
			$('#loader').css({ border:'none', position:'relative', top:'24px', left:'48px', boxShadow:'none' }); // http://loadinfo.net/
			$('#ajax2').load('slide-fade-content2.html ' + href, function() {
				$('#ajax2').hide().fadeIn('slow');
			});
		});
	});
});