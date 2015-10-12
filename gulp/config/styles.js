import paths from '../paths'

let dir = '/scss'

export default {
  src: [
    paths.src + dir + '/*.+(scss|sass)',
    paths.components + '/**/*.+(scss|sass)',
  ],
  dest:  paths.assets + paths.styles,
  watch: [
    paths.src + dir + '/*.+(scss|sass)',
    paths.components + '/**/*.+(scss|sass)',
  ],
  concat: 'style.css',
  settings: {
    includePaths: [
      './bower_components',
      './src/scss'
    ],
    errLogToConsole: true,
  },
  autoprefixer: {
    browsers: ['last 5 versions']
  },
  uglify: paths.uglify.styles
}
