/* global require, requirejs */
(function (require, requirejs) {

	'use strict';

	require.config({
		paths: {
			'mm': '/matchmedia'
		},
		waitSeconds: 0 // this is needed to prevent timeout errors
	});

	requirejs(['mm!(screen and (max-width: 500px))?/assets/js/scripts/maxwidth.js']);
	requirejs(['mm!(screen and (min-width: 1200px))?/assets/js/scripts/minwidth.js']);
	requirejs(['mm!((min-width: 768px) and (max-width: 979px))?/assets/js/scripts/min-maxwidth.js']);
	requirejs(['mm!(all and (orientation:landscape))?/assets/js/scripts/landscape.js']);
	requirejs(['mm!(all and (orientation:portrait))?/assets/js/scripts/portrait.js']);
	requirejs(['mm!()']);

}(require, requirejs));