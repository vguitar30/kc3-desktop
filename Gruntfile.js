module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-nw-builder');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	
	grunt.initConfig({
		qunit: {
            files: [
				'tests/system.html'
			]
        },
		nwjs: {
			options: {
				platforms: ['win64'],
				buildDir: './build/Release',
			},
			src: ['./src/**/*']
		},
	});
	
	grunt.registerTask('test', [
		'qunit'
	]);
	
	grunt.registerTask('build', [
		'nwjs',
	]);
	
};
