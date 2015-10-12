import gulp from 'gulp'
import errorHandler from '../helpers/errorHandler'
import config from '../config/styles'

import sass from 'gulp-sass'
import bourbon from 'node-bourbon'
import reset from 'node-reset-scss'
import base64 from 'gulp-base64'
import concat from 'gulp-group-concat'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'

gulp.task('styles', () =>
  gulp
    .src(config.src)
    .pipe(errorHandler())
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['styles'].concat(
        bourbon.includePaths,
        reset.includePath
      )
     }))
    .pipe(base64({
      baseDir: config.dest,
      extensions: ['svg', 'png', /\.jpg#datauri$/i],
      maxImageSize: 10*1024,
    }))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(concat({
      [config.concat]: '**/*.css'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
)
