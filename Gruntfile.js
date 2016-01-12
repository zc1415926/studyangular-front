/**
 * Created by ZC on 2016/1/12.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expand'
                },
                files: {
                    'css/app.css' : 'sass/app.scss'
                }
            }
        },
        watch: {
            files: ['sass/app.scss'],
            tasks: ['sass'],
            options: {
                spawn: false,
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'watch']);

};