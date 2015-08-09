define(['jquery',
	'underscore',
	'backbone'
	], function($, _, Backbone) {
		var Router = Backbone.Router.extend({
			routes : {
				'' : 'home',
				'edit/:id' : 'editPicture'
				'add' : 'addPicture'
			}
		});

		var initialize = function() {
			var router = new Router();

			router.on('route:home', function() {
				$('body').css('background-color','yellow');
			});

			router.on('route:editPicture', function() {

			});

			router.on('route:addPicture', function() {

			});

			router.navigate('', {trigger:true});

			Backbone.history.start();
		}

		return {
			initialize : initialize
		}
	});