var gulp = require('gulp');
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();


function style() {

    //donde esta mi scss 
    return gulp.src('./themes/**/*.scss')

        //pasamos el archivo y lo compilamos
        .pipe(sass())
        .pipe(gulp.dest('./dist'))

        .pipe(browserSync.stream())


}

function watch(){
    browserSync.init({

        server:{
            baseDir:'./'
        }
    })

    gulp.watch('./themes/**/*.scss',style)
    gulp.watch('./docs/**/*.html').on('change', browserSync.reload);

}

exports.style=style;
exports.watch=watch;