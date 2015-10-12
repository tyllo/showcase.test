import gulp from 'gulp'
import errorHandler from '../helpers/errorHandler'
import config from '../config/copy'
import imagemin from 'gulp-imagemin'

gulp.task('copy', () => {
  gulp.start('copy:scripts')
  gulp.start('copy:styles')
  gulp.start('copy:fonts')
  gulp.start('copy:images')
})

gulp.task('copy:scripts', () =>
  gulp
    .src(config.scripts.src)
    .pipe(errorHandler())
    .pipe(gulp.dest(config.scripts.dest))
)
gulp.task('copy:styles', () =>
  gulp
    .src(config.styles.src)
    .pipe(errorHandler())
    .pipe(gulp.dest(config.styles.dest))
)
gulp.task('copy:fonts', () =>
  gulp
    .src(config.fonts.src)
    .pipe(errorHandler())
    .pipe(gulp.dest(config.fonts.dest))
)
gulp.task('copy:images', () =>
  gulp
    .src(config.images.src)
    .pipe(errorHandler())
    .pipe(
      imagemin({
         optimizationLevel: 2,
        // for .jpg
        progressive: true,
        // for .gif
        interlaced: true,
        svgoPlugins: [{removeViewBox: false}],
        // use: [pngquant()]
      })
    )
    .pipe(gulp.dest(config.images.dest))
)
