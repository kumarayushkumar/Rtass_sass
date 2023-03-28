const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildScss() {
    return src('scss/**/*.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(dest('css', { sourcemaps: '.' }))
}

function watchScss() {
    watch(['scss/**/*.scss'], buildScss)
}

exports.default = series(buildScss, watchScss)
