import paths from './paths'

import styles from './config/styles'
import scripts from './config/scripts'
import jade from './config/jade'
import copy from './config/copy'
import browserSync from './config/browserSync'

export default {
  src:     paths.src,
  dest:    paths.dest,
  assets:  paths.assets,

  copy:    copy,
  scripts: scripts,
  styles:  styles,
  jade:    jade,
  browserSync: browserSync
}
