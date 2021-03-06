module.exports = function (grunt) {
    'use strict';
    var gruntConfig = {
        // uglify
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'gh-pages/js/default.js': [
                        'dev/js/*.js'
                    ]
                }
            }
        },
        imageoptim: {
            myTask: {
                options: {
                    jpegMini: false,
                    imageAlpha: true,
                    quitAfter: true
                },
                src: ['dev/img', 'gh-pages/img']
            }
        },
        // less
        less: {
            development: {
                options: {
                    paths: ["gh-pages/css"],
                    compress: true
                },
                files: {
                    'gh-pages/css/component.css': ["dev/css/less/component.less"]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'gh-pages/index.html': 'dev/index.html'
                }
            }
        }
    };
    /**/
    grunt.initConfig(gruntConfig);
    var keys = Object.keys(gruntConfig);
    var tasks = [];
    for (var i = 1, l = keys.length; i < l; i++) {
        tasks.push(keys[i]);
    }
    // Plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-imageoptim');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // Tarefas que serão executadas
    grunt.registerTask('default', tasks);
};
