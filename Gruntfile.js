//var path = 'app/webroot/';

module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
	
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
        	build: {
        		files: {
        			'public_html/css/main.min.css': ['public_html/css/build/**/*.css']
        		}
        	}
        },
        uglify: {
		    build: {
		        files: {
		            'public_html/js/main.min.js': ['public_html/js/build/**/*.js'],             
		        }
		    }
		},
		watch: {
			scripts: {
				files: ['public_html/js/build/**/*.js', 'public_html/css/build/**/*.css'],
				tasks: ['uglify', 'cssmin'],
				options: {
				  spawn: false
				}
			}
		}
    });

    grunt.registerTask('default', []);

};