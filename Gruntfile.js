module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'style.css': 'sass/style.scss'
				}
			}
		}
//		uglify: {
//			options: {
//				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//			},
//			build: {
//				src: 'src/<%= pkg.name %>.js',
//				dest: 'build/<%= pkg.name %>.min.js'
//			}
//		}
	});

	// Load the plugin that provides the "uglify" task.
	// grunt.loadNpmTasks('grunt-contrib-uglify');

	// Load the plugin that provides the "watch" task.
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Load the plugin that provides the "sass" task.
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default task(s).
//	grunt.registerTask('default', ['uglify']);
	grunt.registerTask('default', ['sass', 'watch']);
	grunt.registerTask('sassify', ['sass:dist']);

};
