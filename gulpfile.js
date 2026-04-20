var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));

var paths = {
    scss: 'app/scss/**/*.scss',
    css: 'app/css/**/*.css',
    html: 'app/*.html',
    js: 'app/js/**/*.js'
};

/*
    GULP TASKS
*/

// BrowserSync settings
function browserSyncTask(done) {
    browserSync.init(null, {
        server: {
            baseDir: 'app'
        }
    });
    done();
}

// A real task takes in two additional gulp methods, gulp.src and gulp.dest
function sassTask() {
    return gulp.src(paths.scss) // What files to use
        .pipe(sass()) // Sends file through plugin // using gulp-sass
        .pipe(gulp.dest('app/css')); // Where to output the files
}

/*
    GULP WATCH
    Watches files, executes tasks on changes
*/

function watchFiles() {
    gulp.watch(paths.scss, sassTask);
    gulp.watch([paths.css, paths.html, paths.js]).on('change', browserSync.reload);
}

/*
    SERVER TASK
    Default task to serve up a server and start watching files for changes
*/

var serve = gulp.series(sassTask, browserSyncTask, watchFiles);

exports.sass = sassTask;
exports.watch = watchFiles;
exports.serve = serve;
exports.default = serve;