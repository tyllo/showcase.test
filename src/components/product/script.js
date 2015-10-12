
/******************************************
 *            components/products
 =========================================*/

;(function (app) {

  let mv = new Vue({
      el: '#products',

      data: app,

      filters: {
        currencyRU (data, value, keys) {
          let pattern = /(\d)(?=(\d\d\d)+([^\d]|$))/g
          if (data != undefined )
            return data.toString().replace(pattern, '$1 ')
        }
      },
  })
})(app);
