const { series } = require('gulp');
const { src, dest } = require('gulp');

const Vinyl = require('vinyl');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
    return src('src/html/index.html')
    .pipe(dest('public/'));
}


exports.build = build;
exports.default = series(clean, build);