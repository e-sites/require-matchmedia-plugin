/* global require, requirejs */
(function (require, requirejs) {

	'use strict';

	require.config({
		paths: {
			'mm': '../../matchmedia'
		},
		waitSeconds: 0 // this is needed to prevent timeout errors
	});

	requirejs(['mm!(screen and (max-width: 500px))?scripts/maxwidth.js']);
	requirejs(['mm!(screen and (min-width: 1200px))?scripts/minwidth.js']);
	requirejs(['mm!((min-width: 768px) and (max-width: 979px))?scripts/min-maxwidth.js']);
	requirejs(['mm!(all and (orientation:landscape))?scripts/landscape.js']);
	requirejs(['mm!(all and (orientation:portrait))?scripts/portrait.js']);
	requirejs(['mm!(only screen and (min-device-pixel-ratio:2), only screen and (min-resolution: 192dpi))?scripts/retina.js']);

}(require, requirejs));