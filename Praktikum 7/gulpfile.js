const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
 
gulp.task('default', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});