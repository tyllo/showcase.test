import paths from '../paths'

export default {
  scripts: {
    src: [
      './bower_components/vue/dist/vue.min.js',
      './bower_components/nouislider/distribute/nouislider.min.js',
    ],
    dest: paths.assets + paths.scripts + '/vendor/',
    watch: [],
  },
  styles: {
    src: [
      './bower_components/nouislider/distribute/nouislider.min.css',
    ],
    dest:  paths.assets + paths.styles + '/',
    watch: [],
  },
  fonts: {
    src:  paths.src + paths.fonts + '/icon/fonts/*',
    dest: paths.assets + paths.fonts + '/',
  },
  images: {
    src:   paths.src + paths.images + '/**/*.*',
    dest:  paths.assets + paths.images,
    watch: paths.src + paths.images + '/**/*',
  },
}
