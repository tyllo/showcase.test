import gulp from 'gulp'
import config from '../config'

// http://www.browsersync.io
import BrowserSync from 'browser-sync'
let browserSync = BrowserSync.create()
let reload = browserSync.reload

gulp.task('browserSync', () =>
  browserSync.init(config.browserSync)
)
