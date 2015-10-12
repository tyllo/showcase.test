import paths from '../paths'
import modRewrite from 'connect-modrewrite'

export default {
  port: 3030,
  ghostMode: true,
  server: {
    open: true,
    notify: false,
    baseDir: paths.dest,
    index: "index.html",
    middleware: [
      modRewrite(['!\\.\\w+$ /index.html [L]'])
    ],
  },
}
