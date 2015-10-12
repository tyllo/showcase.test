
/******************************************
 *         components/product-nav
 =========================================*/

;(function (app) {

  let vm = new Vue({
      el: '#product-nav',
      data: app,

      methods: {
        // сортировка товара по feild
        toggleOrder(order) {
          this.$set('order', order)
          this.$set('reverse', !this.reverse)
        },
        // фильтрация товара по sort
        toggleFilter() {
          if(this.filter === true)
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
