/**
 * Created by Narayana Bojja
 */

/**
 * Gulp clean tasks.
 */

'use strict';

var path = require('path'),
    gulp = require('gulp-help')(require('gulp')),
    del = require('del'),
    runSequence = require('run-sequence'),
    conf = require('./conf');

/**
 * Gulp clean lib directory task.
 */
gulp.task('clean-dist', function () {
    return del([
        conf.paths.dist
    ]);
});

/**
 * Gulp task to clean temporary .js files which are created inside src folder.
 */
gulp.task('clean-source-tmp', function () {
    return del([
        path.join(conf.paths.src, conf.path_pattern.map)
    ]);
});


/**
 * Gulp task to clean lib directory and bower directory.
 * Run clean-lib and  clean-bower tasks in parallel.
 * @param done - done callback function.
 */
gulp.task('clean-build', function(done){
    runSequence(['clean-dist', 'clean-source-tmp'],done);
});
