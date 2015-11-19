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