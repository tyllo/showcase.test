"use strict";

/******************************************
 *                 script
 =========================================*/
/******************************************
 *         components/product-aside
 =========================================*/

'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

;(function (data) {

  var vm = new Vue({
    el: '#product-filter',
    data: app,

    methods: {
      toggle: function toggle($event, model) {
        $event.preventDefault();
        this.$set(model, !this.$data[model]);
        return false;
      }
    },

    computed: {
      brends: function brends() {
        var array = this.$data.products.map(function (item) {
          return item.brend;
        });
        return [].concat(_toConsumableArray(new Set(array)));
      },
      OSs: function OSs() {
        var array = this.$data.products.map(function (item) {
          return item.OS;
        });
        return [].concat(_toConsumableArray(new Set(array)));
      }
    }
  });
})(app);
/******************************************
 *            components/card
 =========================================*/

'use strict';

;(function (app) {

  var vm = new Vue({
    el: '#products',
    data: app,

    filters: {
      currencyRU: function currencyRU(data, value, keys) {
        var pattern = /(\d)(?=(\d\d\d)+([^\d]|$))/g;
        if (data != undefined) return data.toString().replace(pattern, '$1 ');
      }
    }
  });
})(app);
/******************************************
 *         components/product-nav
 =========================================*/

'use strict';

;(function (app) {

  var vm = new Vue({
    el: '#product-nav',
    data: app,

    methods: {
      // сортировка товара по feild
      toggleOrder: function toggleOrder(order) {
        this.$set('order', order);
        this.$set('reverse', !this.reverse);
      },
      // фильтрация товара по sort
      toggleFilter: function toggleFilter() {
        if (this.filter === true) this.$set('filter', '');else this.$set('filter', true);
      },
      toggleClass: function toggleClass(order, reverse) {
        if (order != this.order) return;
        return this.reverse === reverse;
      }
    }
  });
})(app);
//# sourceMappingURL=script.js.map
