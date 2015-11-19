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