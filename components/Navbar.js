const appNavbar = Vue.component('app-navbar', {
  data () {
    return {
      collapsed: false,
      navbarWidth: '250px'
    }
  },
  computed: {
    computedNavbarWidth () {
      return this.navbarWidth
    },
    authenticated () {
      return this.$store.getters.getAuthStatus
    },
    getName () {
      return this.$store.getters.getName
    }
  },
  methods: {
    collapseNavigation () {
      this.collapsed = !this.collapsed
      this.collapsed ? this.navbarWidth = '86px' : this.navbarWidth = '250px'
      this.$store.dispatch('setNavbarWidth', this.navbarWidth)
    }
  },
  template: `
  <nav :style="{ 'flex-basis': computedNavbarWidth }">
    <section>
      <div v-if="authenticated" class="profile">
        <i class="material-icons">account_circle</i>
        <p class="subtitle-2" v-if="!collapsed">{{ getName }}</p>
      </div>
      <ul>
        <router-link tag="li" to="/">
          <i v-if="collapsed" class="material-icons">home</i>
          <a v-if="!collapsed">HOME</a>
        </router-link>
        <router-link v-if="authenticated" tag="li" to="/dashboard">
          <i v-if="collapsed" class="material-icons">dashboard</i>
          <a v-if="!collapsed">DASHBOARD</a>
        </router-link>
        <router-link tag="li" to="/about">
          <i v-if="collapsed" class="material-icons">info</i>
          <a v-if="!collapsed">ABOUT</a>
        </router-link>
      </ul>
      <div id="collapse-button">
        <i v-if="!collapsed" @click="collapseNavigation" class="material-icons" id="expand-button">input</i>
        <p v-if="!collapsed" @click="collapseNavigation" class="body-2">Collapse Navigation</p>
        <i v-if="collapsed" @click="collapseNavigation" class="material-icons">input</i>
      </div>
    </section>
  </nav>
  `
});