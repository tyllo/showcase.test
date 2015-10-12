import paths from '../paths'

export default {
  src: [
    '!' + paths.src + '/templates/**/*.jade',
    '!' + paths.src + '/components/**/*.jade',
    paths.src + '/**/*.jade',
  ],
  dest:  paths.dest,
  watch: [
    paths.src + '/components/**/*.*',
    paths.src + '/**/*.jade',
  ],
  uglify: paths.uglify.jade,
  minifyOpt: {
    conditionals: true,
    //spare:true
  }
}
