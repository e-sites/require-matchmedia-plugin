/**
 * RequireJS plugin for loading files conditionally (based on window.matchMedia)
 * 
 * @author: Boye Oomens <boye@e-sites.nl>
 * @version: 0.0.1 (2014/02/21)
 * 
 * Released under the MIT license
 */
define(function () {

	'use strict';

	return {

		load: function(name, req, onLoad) {
			var partial, mq, path, _check;

			if ( !window.matchMedia ) {
				throw new Error('no matchMedia support found, please provide a polyfill');
			}

			/**
			 * Name partials
			 * @type {Array}
			 */
			partial = name.split('?');

			/**
			 * The actual MediaQueryList based on the given media query
			 * @type {Object}
			 */
			mq = window.matchMedia( partial[0].replace(/\((.+)\)/, '$1') );
			
			/**
			 * Path to script
			 * @type {String}
			 */
			path = partial[1];

			/**
			 * Handler that keeps checking for matches and initiates the request if necessary
			 * @private
			 */
			_check = function () {
				if ( mq.matches ) {
					req([req.toUrl(path)], function (mod) {
						onLoad(mod);
					});
				}
			};

			// Check for matches instantly
			_check();

			// Keep listening for matches
			mq.addListener(_check);
		}

	};

});