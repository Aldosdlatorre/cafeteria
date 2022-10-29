const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');



function css(done){
    //Compilar SASS
    //1.- Identificar archivo, 2.- Compilar, 3.- Guardar
    src('src/scss/app.scss')
    .pipe( sourcemaps.init() )
        .pipe( sass({outputStyle:'compressed'}) )
        .pipe( postcss([ autoprefixer() ]))
        .pipe( sourcemaps.write('.'))
        .pipe( dest('build/css') )

    done();
}

function watcher(done){

    watch('src/scss/**/*.scss', css)

    done();
}

exports.css = css;
exports.watcher = watcher;
exports.default = series(css, watcher);