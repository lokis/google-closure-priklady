var gulp = require('gulp');
var clean = require('gulp-clean');
var gutil = require('gulp-util');
var rename = require('gulp-rename');

var htmlreplace = require('gulp-html-replace');
var closureCompiler = require('gulp-closure-compiler');


sources = {
    js: {
        my: 'simple.js',
        build: 'compiled.js'
    },
    html: {
        main: 'index.html',
        build: 'build.html'
    }
};


gulp.task('compile-js', ['clean'], function () {
    return gulp.src(sources.js.my)
        .pipe(closureCompiler({
            compilerPath: '../bower_components/closure-compiler/lib/vendor/compiler.jar',
            fileName: sources.js.build,
            compilerFlags: {
                compilation_level: 'ADVANCED_OPTIMIZATIONS',
                output_wrapper: '(function(){%output%})();'
            }
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('build-html-main', ['clean'], function () {
    return gulp.src(sources.html.main)
        .pipe(htmlreplace({
            'js-my': {
                src: sources.js.build,
                tpl: '<script src="%s"></script>'
            }
        }))
        .pipe(rename(sources.html.build))
        .pipe(gulp.dest('.'))
        .on('error', gutil.log)
});

gulp.task('clean', function () {
    var src = [sources.js.build, sources.html.build];
    return gulp.src(src, {read: false})
        .pipe(clean());
});


gulp.task('build', ['build-html-main', 'compile-js']);

gulp.task('default', ['build']);