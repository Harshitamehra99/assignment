const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compile SCSS to CSS
gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss') // Adjust the path as needed
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css')); // Output directory for compiled CSS
});

// Watch for changes
gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});

// Default task
gulp.task('default', gulp.series('sass', 'watch'));
