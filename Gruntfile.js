module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            default: {
                files: {
                    'assets/css/style.css': 'assets/sass/style.scss'
                },
                options: {
                    spawn: false
                }
            }
        },
        watch: {
            default: {
                files: [
                    'assets/sass/*.scss',
                    'assets/js/*.js',
                    '!assets/js/*.min.js'
                ],
                tasks: 'default'
            }
        },
        cssmin: {
            default: {
                src: [
                    'assets/css/style.css'
                ],
                dest: 'assets/css/style.min.css'
            }
        },
        bower_concat: {
            all: {
                dest: 'assets/js/_bower.js',
                cssDest: 'assets/css/_bower.css',
                bowerOptions: {
                    relative: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-bower-concat');

    grunt.registerTask('default', ['sass', 'cssmin']);
};