import gulp from 'gulp'
import config from '../config/jade'
import errorHandler from '../helpers/errorHandler'

import jade from 'jade'
import gulpJade from 'gulp-jade'
import babel from 'jade-babel'

import sass from'gulp-sass'
import bourbon from 'node-bourbon'

// фильтр :sass для jade файлов
jade.filters.sass = (str) => 
  sass.compiler.renderSync({
    includePaths: ['styles'].concat(
      bourbon.includePaths
    ),
    data: str,
    outputStyle: 'compressed'
  }).css.toString()

// фильтр :babel для script ES2015
jade.filters.babel = babel({});

// фильтр :json для jade файлов
jade.filters.json = (str) =>
  JSON.stringify(JSON.parse(str))

const YOUR_LOCALS = {}

gulp.task('jade', () => 
  gulp
    .src(config.src)
    .pipe(errorHandler())
    .pipe(gulpJade({
      locals: YOUR_LOCALS,
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest(config.dest))
)
