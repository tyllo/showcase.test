
/******************************************
 *         components/product-nav
 =========================================*/

;(function (app) {

  let vm = new Vue({
      el: '#product-nav',

      data: app,

      ready() {
        this.$add('order', 'brend')
        this.$add('reverse', false)
        this.$add('filter', '')
      },

      methods: {
        // сортировка товара по feild
        toggleOrder(order) {
          this.$set('order', order)
          this.$set('reverse', !this.reverse)
        },
        // фильтрация товара по sort
        toggleFilter() {
          if(this.$data['filter'] === true)
            this.$set('filter', '')
          else
            this.$set('filter', true)
        },
        toggleClass(order, reverse) {
            if (order != this.order) return;
            return this.reverse === reverse
        },
      },
  })
})(app);
