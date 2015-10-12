
/******************************************
 *         components/product-aside
 =========================================*/

;(function (data) {

  let vm = new Vue({
      el: '#product-filter',
      data: app,

      methods: {
        toggle($event, model) {
          $event.preventDefault();
          this.$set(model, !this.$data[model])
          return false;
        },
      },

      computed: {
        brends() {
          let array = this.$data.products.map( (item) => item.brend)
          return [...new Set(array)]
        },
        OSs() {
          let array = this.$data.products.map( (item) => item.OS)
          return [...new Set(array)]
        }
      }
  })
})(app);
