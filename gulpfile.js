/**
 * Created by zc1415926 on 2016/1/14.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function(){
    gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 10 version'))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
    gulp.watch('sass/**/*.scss', ['css']);
});

gulp.task('default', ['watch']);