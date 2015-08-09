requirejs.config({
	paths:  {
		jquery : '../lib/jquery',
		underscore : '../lib/underscore',
		backbone : '../lib/backbone'
	}
});

requirejs([
	'jquery',
	'app'
	], function($, App) {
		$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
		  options.url = 'http://rest.learncode.academy/api/trialname' + options.url;
		});

		App.initialize();
	})