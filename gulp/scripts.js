/**
 * Created by Narayana Bojja
 */

/**
 * Gulp script build tasks.
 */

'use strict';

var path = require('path');
var gulp = require('gulp-help')(require('gulp'));
//var concat = require("gulp-concat");
var conf = require('./conf');
var map = require("map-stream");
var tslint = require("gulp-tslint");
var runSequence = require('run-sequence');

var $ = require('gulp-load-plugins')();




//checking ts files code quality.
gulp.task("tslint", function(){
  return gulp.src("src/lib/*.ts")
         .pipe(tslint())
         //.pipe(tslint.report("verbose"))
         .pipe(map(function(file, done) {
           // Add the tslint errors in prose format
           if (file.tslint.output) {
               file.contents = new Buffer(
                   JSON.parse(file.tslint.output)
                       .map(tslint.proseErrorFormat).join("\n")
               );
           } else {
               file.contents = new Buffer("");
           }

           done(null, file);
       }))
       // Concat and save the errors
       .pipe($.concat("tslint_report.txt"))
       .pipe(gulp.dest('tslinterrors'));

 });


// Compiling Javascripts(minifies js)
gulp.task('scripts', function() {
    return gulp.src(path.join(conf.paths.src, conf.path_pattern.js))
        .pipe($.concat(conf.files.BUNDLE_JS))                        // Compressed javascript file
        .pipe($.rename(conf.files.BUNDLE_MIN_JS))                    // Minimised javascript file
        .pipe($.uglify())                                            // It is configured to minify js files
        .pipe($.header(conf.header.title))                           // Generates header
        .pipe(gulp.dest(conf.paths.dist + conf.paths.js));         // This folder contains minimised js file
});
/**
 * Gulp build scripts task.
 * Run clean build -> show tslint errors and update tsconfig.json in parallel -> run npm, build bower in parallel and run inject js ->  run build css  -> run inject css.
 * @param done - done callback function.
 */
gulp.task('build-scripts',function(done) {
    runSequence('clean-build','tslint',['scripts'], done);
});
