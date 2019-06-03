const router = new VueRouter({
  routes
})

const App = new Vue({
  el: '#app',
  router,
  store,
  computed: {
    navbarWidth () {
      return this.$store.getters.getNavbarWidth
    }
  }
});