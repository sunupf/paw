const { src, watch, dest, series, parallel} = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
 
function styles() {
    return src('assets/styles/*.scss')
        .pipe(sass())
        // .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist'));
}

function check() {
    watch([
        'assets/styles/*.scss'
    ]).on('change', series(styles));
}

exports.watch = series(styles, check);
