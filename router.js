const routes = [
  { path: '/', name: 'home', component: appHome },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: appDashboard,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: appAbout
  },
  {
    path: '/chapter',
    name: 'chapter',
    props: true,
    component: appChapter,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated) {
        next()
      } else {
        next('/')
      }
    }
  }
]

