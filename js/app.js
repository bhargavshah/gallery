define([
	'jquery',
	'underscore',
	'backbone',
	'router'
	], function($, _, Backbone, Router) {
		var initialize = function() {
			$('body').css('background-color','red');
			console.log(_);
			console.log(Backbone);
			Router.initialize();
		};

		return {
			initialize : initialize
		}
	});