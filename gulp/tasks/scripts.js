import gulp from 'gulp'
import errorHandler from '../helpers/errorHandler'
import config from '../config/scripts'

import sourcemaps from 'gulp-sourcemaps'
import babel from 'gulp-babel'
import concat from 'gulp-group-concat'

gulp.task('scripts', () =>
  gulp
    .src(config.src)
    .pipe(errorHandler())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(babel({
      // optional: ['runtime'],
    }))
    .pipe(concat({
      [config.concat]: '**/*.js'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
)
