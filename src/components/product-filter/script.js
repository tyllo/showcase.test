
/******************************************
 *         components/product-filter
 =========================================*/

;(function (app) {

  let vm = new Vue({
      el: '#product-filter',

      data: app,

      ready() {
        this.$add('brend', false)
        this.$add('OS', false)
        this.$add('processor', false)
      },

      methods: {
        toggle($event, model) {
          $event.preventDefault();
          this.$set(model, !this.$data[model])
          return false;
        },
      },

      computed: {
        brends() {
          let array = this.products.map( (item) => item.brend)
          return [...new Set(array)]
        },
        OSs() {
          let array = this.products.map( (item) => item.OS)
          return [...new Set(array)]
        }
      }
  })
})(app);
