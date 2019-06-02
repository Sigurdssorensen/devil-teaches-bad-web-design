const routes = [
  { path: '/', component: appLandingPage },
  { path: '/lesson-one', component: appLessonOne }
]

const router = new VueRouter({
  routes
})

const App = new Vue({
  el: '#app',
  router,
  data() {
    return {
      text: 'test'
    }
  }
});