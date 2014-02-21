Require.js matchMedia plugin
=========================
<blockquote>
	<p>A Require.js plugin for loading files conditionally, based on `window.matchMedia`.</p>
</blockquote>

A demo can be found at: http://github.e-sites.nl/require-matchmedia-plugin

<em>Disclaimer: this plugin is still work in progress! Hell, it's even my first require.js plugin...so please be gentle with me.</em>

##Syntax
```js
requirejs([' [script-alias] ! ([mediaquery]) ? [path] ']);
```

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
requirejs(['mm!(all and (orientation:landscape))?scripts/orientation-landscape']);
requirejs(['mm!(all and (orientation:portrait))?scripts/orientation-portrait']);
```

##Feedback / comments
Contact me on <a href="https://twitter.com/_boye">Twitter</a> or file an <a href="https://github.com/e-sites/require-matchmedia-plugin/issues">issue</a>.

##License
Copyright (C) 2014 e-sites, <a href="http://www.e-sites.nl/">http://e-sites.nl/</a> Licensed under the MIT license.