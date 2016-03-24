# generator-base-polymer

[![npm version](https://badge.fury.io/js/generator-base-polymer.svg)](https://badge.fury.io/js/generator-base-polymer)
[![Build Status](http://img.shields.io/travis/zguillez/generator-base-polymer.svg)](https://travis-ci.org/zguillez/generator-base-polymer)
[![Code Climate](http://img.shields.io/codeclimate/github/zguillez/generator-base-polymer.svg)](https://codeclimate.com/github/zguillez/generator-base-polymer)
[![Dependency Status](https://gemnasium.com/zguillez/generator-base-polymer.svg)](https://gemnasium.com/zguillez/generator-base-polymer)
[![Installs](https://img.shields.io/npm/dt/generator-base-polymer.svg)](https://coveralls.io/r/zguillez/generator-base-polymer)
![](https://reposs.herokuapp.com/?path=zguillez/generator-base-polymer)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)
[![Join the chat at https://gitter.im/zguillez/generator-base-polymer](https://badges.gitter.im/zguillez/generator-base-polymer.svg)](https://gitter.im/zguillez/generator-base-polymer?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> [Zguillez](https://zguillez.io) | Guillermo de la Iglesia

### Yeoman generator for Polymer webapp development. With RequireJS, Bootstrap, Sass and templating with Jade. Routing with Page.js

![](http://zguillez.github.io/img/polymer.png)

# Getting Started

### Install Yeoman

	npm install -g yo

### Yeoman Generators

To install generator-base-backbone from npm, run:

	npm install -g generator-base-polymer
	
	//or:
	sudo npm install -g generator-base-polymer

Finally, initiate the generator:

	yo base-polymer

If you have error on install try to update dependences manually:

```bash
sudo npm update
```
```bash
bower update
```

## Requeriments

### [NodeJS](https://nodejs.org/)

For update npm

	sudo npm install npm -g

### [Bower](http://bower.io/)

	npm install -g bower

### [Sass](http://sass-lang.com/)

	sudo gem install sass
	
**Documentation:**

* [https://nodejs.org/](https://nodejs.org/)
* [http://bower.io/](http://bower.io/)
* [http://sass-lang.com/](http://sass-lang.com/)

# Usage

Develop code on folder **/src**

	/src
		/data
		/images
		/scripts
			/modules
		/styles
		/templates
		
### Compile code

Use grunt task to compile code and deploy webapp

	grunt serve
	
THis will launch server on port 9000

	http://localhost:9000/
	
Distribute code is compileded on forder **/dist**

	/dist
		/css
		/data
		/images
		/js
		/lib
		/modules
		
## Styling

Sass files (\*.sass, \*.scss) must be located on **/src/styles** folder root.

* Grunt task **sass.js** will process the files into CSS files to folder **/src/styles/css**.
* Grunt task **copy.js** will copy all CSS files into **/src/styles/css** to folder **/dist/css** for ditribution.
* You can also create and edit CSS files in **/src/styles/css**.

## Templating with Jade

* The NodeJS template engine JADE is implemented. Jade files (\*.jade) must be located on **/templates** folder root.

Example:

	// src/templates/footer.jade
	
	dom-module(id='element-footer')
	template
		style.
			footer {
				font-size: 0.8em;
			}

		header
			div(class='row')
				p @{{year}}
		
	script.
		Polymer({
			is: 'element-footer',
			properties: {
				year: {
					type: String,
					value: '2015'
				}
			}
		});

Compiled:

	// src/templates/html/footer.html
	
	<dom-module id="element-footer">
	    <template>
	        <style>
	        footer {
	            font-size: 0.8em;
	        }
	        </style>
	        <header>
	            <div class="row">
	                <p>@{{year}}</p>
	            </div>
	        </header>
	    </template>
	    <script>
	    Polymer({
	        is: 'element-footer',
	        properties: {
	            year: {
	                type: String,
	                value: '2015'
	            }
	        }
	
	    });
	    </script>
	</dom-module>
			
* Grunt task **copy.js** will copy all HTML files into **/templates/html** to folder **/dist/modules** for ditribution.

* You can create files directly from folfer **/html** without Jade template.

* You can also create components without templates on folder **/scripts/modules**. This files will copied also on folder **/dist/modules**

Example:

	// src/scripts/modules/main.html
	
	<link rel="import" href="modules/header.html">
	<link rel="import" href="modules/content.html">
	<link rel="import" href="modules/footer.html">
	<element-header></element-header>
	<element-content></element-content>
	<element-footer></element-footer>
	
**Documentation:**

* [http://jade-lang.com/](http://jade-lang.com/)

# Routing

Routing is made with Page.js micro client-side router and JQuery. Router is loaded in Main.js file:

	// src/scripts/main.js
	
	'use strict';
	require.config({
		paths: {
			router: '../js/router',
			text: '../lib/text',
			webcomponents: '../lib/webcomponents-lite.min',
			page: '../lib/page/page',
			underscore: '../lib/lodash.min',
			jquery: '../lib/jquery.min',
			bootstrap: '../lib/bootstrap.min',
			router: './router'
		}
	});
	window.app = {};
	require(['webcomponents', 'jquery', 'underscore'], function(webcomponents, $, _) {
		require(['bootstrap'], function(Bootstrap) {
			require(['router']);
		});
	});

Place routing path in file router.js

	// src/scripts/router.js
	
	define(['page', 'jquery'], function(Page, $) {
		'use strict';
		Page.base('');
		Page('/', index);
		Page();
	
		function index(ctx) {
			if (ctx.hash !== '') {
				Page(ctx.hash);
			} else {
				landing();
			}
		}
	
		function landing() {
			loadComponent('modules/main.html');
		}
	
		function loadComponent(path) {
			$.get(path, function(data) {
				$('#app').html(data);
			});
		}
	});

`Page(ctx.hash);` in index function is needed for resolve inssue with page reload with hash...

A *.htcaccess* file is needed for remove the /#/ hash from urls:

	RewriteEngine On
	RewriteBase /
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteRule ^([^/]+)/?$ /#/$1 [L,NC]

**Documentation:**

* [https://visionmedia.github.io/page.js/](https://visionmedia.github.io/page.js/)

# Dependencies

Grunt task **copy.js** will read all bower.js files from **/bower_components** subfolders, and copy the file path from **main** node, like:

	//bower_components/requirejs/bower.json
	{
	  ...
	  "main": "require.js",
	  ...
	} 

And put this files into folder **/dist/lib/**.

If any installed dependency has no bower.json file (like lodash) you must edit the **copy.js** task to manually copy it:

	grunt.config.set('copy', {
		...
		lodash_: {
			cwd: 'bower_components/lodash/dist',
			src: 'lodash.js',
			dest: 'dist/lib/',
			expand: true
		},
		...
	});

If an unnecesaary file is copied (like boostrap.less):

	//bower_components/bootstrap/bower.json
	{
	  ...
	  "main": [
    	"less/bootstrap.less",
    	"dist/js/bootstrap.js"
	  ],
	  ...
	} 
	
you can delete it with the **clean-dist.js** task:

	//grunt/clean-dist.js
	grunt.registerTask('clean-dist', 'Clean dist folder', function() {
		...
		grunt.config.set('clean.files.src', ['dist/lib/bootstrap.less']);
		...
	});

# Contributing and issues

Contributors are welcome, please fork and send pull requests! If you have any ideas on how to make this project better then please submit an issue or send me an [email](mailto:mail@zguillez.io).

# License

©2016 Zguillez.io

Original code licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License) Open Source projects used within this project retain their original licenses.

# Changelog
### v1.2.0 (January 29, 2016)

- Add livereload 
- Auto copy dependecies fron bower.json file

### v1.1.0 (January 12, 2016)
- Fix yo install version

### v1.0.0 (Novembre 18, 2015) 
Initial Polymer skeleton

Features:

* Polymer
* Jade templating
* Jquery
* Sass
* Page.js
* Grunt tasks

[![Analytics](https://ga-beacon.appspot.com/UA-1125217-30/zguillez/generator-base-polymer?pixel)](https://github.com/igrigorik/ga-beacon)