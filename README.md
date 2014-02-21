Require.js matchMedia plugin
=========================

RequireJS plugin for loading files conditionally, based on `matchMedia`. <br>
A demo can be found at: http://github.e-sites.nl/require-matchmedia-plugin

<em>Disclaimer: this plugin is still work in progress</em>

##Syntax


##Examples
```js
requirejs(['mm!(screen and (max-width: 500px))?scripts/maxwidth']);
requirejs(['mm!(screen and (min-width: 1200px))?scripts/minwidth']);
requirejs(['mm!(all and (orientation:landscape))?scripts/orientation-landscape']);
requirejs(['mm!(all and (orientation:portrait))?scripts/orientation-portrait']);
```
