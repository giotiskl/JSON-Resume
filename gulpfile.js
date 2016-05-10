var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    sass    = require('gulp-sass'),
    plumber = require('gulp-plumber');

//Scripts task
//Concatenates and uglifies all scripts
gulp.task('scripts', function() {
    gulp.src(['res/js/vendor/**/*.js', 'res/js/app.js', 'res/js/*.js'])
        .pipe(plumber())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

//SASS task
//Compiles and compresses all SASS files
gulp.task('sass', function() {
    gulp.src('./res/css/styles.scss')
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('build/css'));
});

//Watch task
//Compiles javascript and SASS on save
gulp.task('watch', function() {
    gulp.watch('res/js/*.js', ['scripts']);
    gulp.watch('res/css/**/*.scss', ['sass']);
});

//Build task
gulp.task('build', ['scripts', 'sass']);

//Main task
gulp.task('default', ['scripts', 'sass', 'watch']);
