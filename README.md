Require.js matchMedia plugin
=========================
<blockquote>
	<p>A Require.js plugin for loading files conditionally, based on <a href="dev.w3.org/csswg/cssom-view/#dom-window-matchmedia">`window.matchMedia`</a>.</p>
</blockquote>

A demo can be found at: http://github.e-sites.nl/require-matchmedia-plugin (or check this <a href="http://quick.as/lrghgd8">video</a>)

<em>Disclaimer: this plugin is still work in progress! Hell, it's even my first require.js plugin...so please be gentle with me.</em>

##Syntax
```js
requirejs([' [script-alias] ! ( [mediaquery] ) ? [path] ']);
```

##Getting started
Include Require.js in your project if you haven't done that already. After that, make sure you include the following options in your config.

```js
require.config({
	paths: {
		'mm': '/matchmedia'
	},
	waitSeconds: 0 // this is needed to prevent timeout errors
});
```

##Examples
```js
requirejs(['mm!(screen and (max-width: 500px))?scripts/maxwidth']);
requirejs(['mm!(screen and (min-width: 1200px))?scripts/minwidth']);
requirejs(['mm!((min-width: 768px) and (max-width: 979px))?scripts/min-maxwidth.js']);
requirejs(['mm!(all and (orientation:landscape))?scripts/orientation-landscape']);
requirejs(['mm!(all and (orientation:portrait))?scripts/orientation-portrait']);
requirejs(['mm!(only screen and (min-device-pixel-ratio:2), only screen and (min-resolution: 192dpi))?scripts/retina.js']);
```

##Browser support
Basically all browsers that have <a href="http://caniuse.com/matchmedia">`window.matchMedia` support</a>. If not available you can use <a href="https://github.com/paulirish/matchMedia.js/">this polyfill</a>.

##Feedback / comments
Contact me on <a href="https://twitter.com/_boye">Twitter</a> or file an <a href="https://github.com/e-sites/require-matchmedia-plugin/issues">issue</a>.

##License
Copyright (C) 2014 e-sites, <a href="http://www.e-sites.nl/">http://e-sites.nl/</a> Licensed under the MIT license.
