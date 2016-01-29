'use strict';
require.config({
	paths: {
		router: '../js/router',
		text: '../lib/text',
		webcomponents: '../lib/webcomponents',
		page: '../lib/page',
		underscore: '../lib/lodash',
		jquery: '../lib/jquery',
		bootstrap: '../lib/bootstrap',
		router: './router'
	}
});
window.app = {};
require(['webcomponents', 'jquery', 'underscore'], function(webcomponents, $, _) {
	require(['bootstrap'], function(Bootstrap) {
		require(['router']);
	});
});