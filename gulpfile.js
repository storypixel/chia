var http = require('http');
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var less = require('gulp-sass');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var lrserver = lr();
var minifyCSS = require('gulp-minify-css');
var embedlr = require('gulp-embedlr');
var ecstatic = require('ecstatic');
 
var livereloadport = 35729,
    serverport = 5001;
 
gulp.task('scripts', function() {
    return gulp.src(['src/**/*.js'])
        .pipe(browserify())
        .pipe(concat('dest.js'))
        .pipe(gulp.dest('dist/build'))
        .pipe(refresh(lrserver));
});
 
gulp.task('styles', function() {
    return gulp.src(['css/style.sass'])
        .pipe(sass())
        .on('error', console.log)
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/build'))
        .pipe(refresh(lrserver));
});
 
gulp.task('serve', function() {
  //Set up your static fileserver, which serves files in the build dir
  http.createServer(ecstatic({ root: __dirname + '/dist' })).listen(serverport);
 
  //Set up your livereload server
  lrserver.listen(livereloadport);
});
 
 
gulp.task('html', function() {
    return gulp.src("*.html")
        .pipe(embedlr())
        .pipe(gulp.dest('dist/'))
        .pipe(refresh(lrserver));
})
 
gulp.task('assets', function() {
    return gulp.src("assets/**")
        .pipe(gulp.dest('dist/assets/'))
        .pipe(refresh(lrserver));
});
 
// Requires gulp >=v3.5.0
gulp.task('watch', function () {
    gulp.watch('src/**', ['scripts']);
    gulp.watch('css/**', ['styles']);
    gulp.watch('**/*.html', ['html']);
    gulp.watch('assets/**', ['assets']);
});
 
gulp.task('default', ['scripts', 'styles', 'html', 'assets', 'serve', 'watch']);
