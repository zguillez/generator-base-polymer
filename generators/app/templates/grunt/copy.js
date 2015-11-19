'use strict';
module.exports = function(grunt) {
	grunt.config.set('copy', {
		htacess: {
			cwd: 'src/',
			src: '.htaccess',
			dest: 'dist/',
			expand: true
		},
		index: {
			cwd: 'src/',
			src: 'index.html',
			dest: 'dist/',
			expand: true
		},
		requirejs: {
			cwd: 'bower_components/requirejs',
			src: 'require.js',
			dest: 'dist/lib/',
			expand: true
		},
		requirejs_text: {
			cwd: 'bower_components/text',
			src: 'text.js',
			dest: 'dist/lib/',
			expand: true
		},
		polymer: {
			cwd: 'bower_components/polymer',
			src: '*.html',
			dest: 'dist/lib/',
			expand: true
		},
		webcomponentsjs: {
			cwd: 'bower_components/webcomponentsjs',
			src: 'webcomponents-lite.min.js',
			dest: 'dist/lib/',
			expand: true
		},
		lodash: {
			cwd: 'bower_components/lodash',
			src: 'lodash.min.js',
			dest: 'dist/lib/',
			expand: true
		},
		page: {
			cwd: 'bower_components/page/',
			src: '*.js',
			dest: 'dist/lib/page/',
			expand: true
		},
		babel_core: {
			cwd: 'node_modules/babel-core',
			src: 'browser.min.js',
			dest: 'dist/lib/',
			expand: true
		},
		jquery: {
			cwd: 'bower_components/jquery/dist',
			src: 'jquery.min.js',
			dest: 'dist/lib/',
			expand: true
		},
		bootstrap: {
			cwd: 'bower_components/bootstrap/dist/js',
			src: 'bootstrap.min.js',
			dest: 'dist/lib/',
			expand: true
		},
		bootstrap_css: {
			cwd: 'bower_components/bootstrap/dist/css',
			src: 'bootstrap.min.css',
			dest: 'dist/lib/',
			expand: true
		},
		scripts: {
			cwd: 'src/scripts/',
			src: ['**/*.js'],
			dest: 'dist/js/',
			expand: true
		},
		templates: {
			cwd: 'src/templates/html',
			src: '*.html',
			dest: 'dist/modules/',
			expand: true
		},
		modules: {
			cwd: 'src/scripts/modules',
			src: '*.html',
			dest: 'dist/modules/',
			expand: true
		},
		styles: {
			cwd: 'src/styles/css',
			src: '*.css',
			dest: 'dist/css/',
			expand: true
		},
		images: {
			cwd: 'src/images',
			src: ['*.jpg', '*.png', '*.gif', '*.svg'],
			dest: 'dist/images/',
			expand: true
		},
		data: {
			cwd: 'src/data',
			src: ['*.*'],
			dest: 'dist/data/',
			expand: true
		}
	});
};