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
		},
		polymer_: {
			cwd: 'bower_components/polymer',
			src: '*.html',
			dest: 'dist/lib/',
			expand: true
		},
		webcomponentsjs_: {
			cwd: 'bower_components/webcomponentsjs',
			src: 'webcomponents.js',
			dest: 'dist/lib/',
			expand: true
		},
		lodash_: {
			cwd: 'bower_components/lodash/dist',
			src: 'lodash.js',
			dest: 'dist/lib/',
			expand: true
		},
		bootstrap_: {
			cwd: 'bower_components/bootstrap/dist/css',
			src: 'bootstrap.min.css',
			dest: 'dist/lib/',
			expand: true
		}
	});
};