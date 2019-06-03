const store = new Vuex.Store({
  state: {
    authenticated: false,
    navbarWidth: '250px',
    name: '',
    password: '',
    chapterData: {
      0: {
        id: 0,
        available: true,
        title: 'Chapter 1 - Mazikeen',
        img: 'chapter_img_mazikeen.png',
        body: 'Challenge Mazikeen',
        time: '15m',
        bodyHeight: 0,
        tip: 'If you are unable to complete the lesson you can click the skip button located towards the end of the navigation bar to your left.',
        task: 'fill in the form to defeat Mazikeen',
        chat: {
          0: {
            who: 'Lucifer',
            img: 'lucifer_chat_one.png',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          },
          1: {
            who: 'Mazikeen',
            img: 'mazikeen_chat_one.png',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          },
          2: {
            who: 'Lucifer',
            img: 'lucifer_chat_two.png',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          },
          3: {
            who: 'Mazikeen',
            img: 'lucifer_and_mazikeen.png',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          }
        }
      },
      1: {
        id: 1,
        available: false,
        title: 'Chapter 2 - Misran',
        img: 'chapter_img_misran.png',
        body: 'Currently Unavailable',
        time: '10m',
        bodyHeight: 0,
        tip: ''
      },
      2: {
        id: 2,
        available: false,
        title: 'Chapter 3 - Takehiko',
        img: 'chapter_img_takehiko.png',
        body: 'Currently Unavailable',
        time: '10m',
        bodyHeight: 0,
        tip: ''
      },
      3: {
        id: 3,
        available: false,
        title: 'Chapter 4 - Presence',
        img: 'chapter_img_the_presence.png',
        body: 'Currently Unavailable',
        time: '10m',
        bodyHeight: 0,
        tip: ''
      }
    }
  },
  mutations: {
    'SET_AUTH_STATUS' (state, payload) {
      state.authenticated = payload
    },
    'SET_NAVBAR_WIDTH' (state, payload) {
      state.navbarWidth = payload
    },
    'SET_NAME' (state, payload) {
      state.name = payload
    },
    'SET_PASSWORD' (state, payload) {
      state.password = payload
    }
  },
  actions: {
    authenticate: ({ commit }, payload) => {
      commit('SET_AUTH_STATUS', payload)
    },
    setNavbarWidth: ({ commit }, payload) => {
      commit('SET_NAVBAR_WIDTH', payload)
    },
    setName: ({ commit }, payload) => {
      commit('SET_NAME', payload)
    },
    setPassword: ({ commit }, payload) => {
      commit('SET_PASSWORD', payload)
    }
  },
  getters: {
    getAuthStatus: state => {
      return state.authenticated
    },
    getNavbarWidth: state => {
      return state.navbarWidth
    },
    getName: state => {
      return state.name
    },
    getPassword: state => {
      return state.password
    },
    getChapterData: state => {
      console.log('inside store')
      return state.chapterData
    }
  }
})