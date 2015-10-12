import gulp from 'gulp'
import config from '../config'

// http://www.browsersync.io
import BrowserSync from 'browser-sync'
let browserSync = BrowserSync.create()
let reload = browserSync.reload

gulp.task('watch', () => {
  // gulp.watch(config.scripts.watch, ['webpack']).on('change', reload)
  gulp.watch(config.scripts.watch, ['scripts', reload])
  gulp.watch(config.styles.watch, ['styles', reload])
  gulp.watch(config.jade.watch, ['jade', reload])
  gulp.watch(config.copy.watch, ['copy', reload])
});
