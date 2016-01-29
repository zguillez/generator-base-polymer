'use strict';
module.exports = function (grunt) {
	grunt.config.set('merge-copy', {
		main: {
			options: {
				destination: 'dist/lib',
				directories: ['dist/lib'],
				patterns: '*.*'
			}
		}
	});
};
