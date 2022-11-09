const { src, watch, dest, series, parallel} = require('gulp');
const cleanCSS = require('gulp-clean-css');
 
function styles() {
    return src('assets/styles/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist'));
}

function check() {
    watch([
        'assets/styles/*.css'
    ]).on('change', series(styles));
}

exports.watch = series(styles, check);
