/**
 * Created by Narayana Bojja
 */

/**
 *  This file contains the variable declarations used in all gulp files
 */

// Read package.json
var pkg = require('../package.json');

// Generates Today date
var todayDate = new Date().toJSON().slice(0,10);

// Generates Title with project name
var title = '/*'+pkg.name + '- Created by Narayana Bojja on ' + todayDate + '*/\n';



/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
    src: 'dist',
    dist: 'out',
    jsTmp: '.jsTmp',
    cssTmp: '.cssTmp',
    js: '/js',
    gulp: 'gulp',
    gulpFile: 'gulpfile.js',
    typings: {
        references: 'typings/references.d.ts'
    },
    bundle: pkg.name + '.js',
    karmaConf: __dirname + '/../karma.conf.js',
    tsconfig_json: __dirname + '/../tsconfig.json'
};

/**
 *  The main file patterns goes here
 */
exports.path_pattern = {
    ts: '**/*.ts',
    js: '**/*.js',
    map: '**/*.map'
};

/**
 *  The main names of your project handle these with care
 */
exports.files = {
    BUNDLE_JS: pkg.name + '.js',
    BUNDLE_MIN_JS: pkg.name + '.min.js',
    PROJECT_NAME: pkg.name,
    MAIN_HTML: 'index.html'
};

exports.header = {
    title : title
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function (title) {
    'use strict';

    return function (err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};
