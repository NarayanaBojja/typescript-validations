/**
 * Created by Narayana Bojja
 */

/**
 * Gulp build task.
 */

'use strict';

var gulp = require('gulp-help')(require('gulp')),
    runSequence = require('run-sequence'),
    $ = require('gulp-load-plugins')(),
    conf = require('./conf');


/**
 * Gulp build task.
 * Tsd-install -> nsp -> build scripts -> run CI test via gulp test task.
 * @param done - done callback function.
 */
gulp.task('build', function (done) {
    runSequence('build-scripts',done);
});
