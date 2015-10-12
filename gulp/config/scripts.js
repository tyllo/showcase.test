import paths from '../paths'

export default {
  src:[
    paths.src + paths.scripts + '/**/*.js',
    paths.components + '/**/*.js',
  ],
  dest:   paths.assets + paths.scripts,
  watch: [
    paths.src + paths.scripts + '/**/*.js',
    paths.components + '/**/*.js',
  ],
  concat: 'script.js',
  uglify: paths.uglify.scripts
}
