const appHome = Vue.component('app-home', {
  data () {
    return {
      displayPopup: false,
      signupButtonDeactivated: true,
      name: '',
      password: '',
      nameLabelFocus: false,
      passwordLabelFocus: false
    }
  },
  methods: {
    togglePopup () {
      this.displayPopup = !this.displayPopup
      this.displayPopup ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
    },
    checkIfAuthenticated () {
      if (this.$store.getters.getAuthStatus) {
        this.authenticateUser()
      } else {
        this.togglePopup()
      }
    },
    authenticateUser () {
      this.$store.dispatch('setName', this.name.toLowerCase())
      this.$store.dispatch('setPassword', this.password.toLowerCase())
      this.$store.dispatch('authenticate', true)
      this.togglePopup()
      this.$router.push('/dashboard')
    },
    checkRequiredFields () {
      if (this.name !== '' && this.password !== '') {
        this.signupButtonDeactivated = false
      } else {
        this.signupButtonDeactivated = true
      }
    },
    labelFocus (element) {
      if (element === 'name') {
        if (this.name === '') {
          this.nameLabelFocus = !this.nameLabelFocus
        }
      } else {
        if (this.password === '') {
          this.passwordLabelFocus = !this.passwordLabelFocus
        }
      }
    }
  },
  template: `
  <div id="home">
    <div v-if="displayPopup" class="sign-up-popup">
      <div @click="togglePopup" class="popup-backdrop"></div>
      <div class="card card-popup">
        <div>
          <h4>Create account</h4>
          <p>Hi there! We hate paperwork too, so let's keep it short and friendly</p>
          <form class="signup-form">
            <div class="floating-input">
              <label :class="{'float-label': nameLabelFocus}" class="subtitle-2" for="username">Name</label>
              <input @focus="labelFocus('name')" @blur="labelFocus('name')" v-model="name" @input="checkRequiredFields" class="signup-popup-item" type="text" name="name" id="username">
            </div>
            <div class="floating-input">
              <label :class="{'float-label': passwordLabelFocus}" class="subtitle-2" for="userpassword">Password</label>
              <input @focus="labelFocus('password')" @blur="labelFocus('password')" v-model="password" @input="checkRequiredFields" class="signup-popup-item" type="password" name="password" id="userpassword">
            </div>
            <div class="button-row">
              <div>
                <button type="button" @click="authenticateUser" :class="{'disabled-button': signupButtonDeactivated}" class="button signup-popup-item" :disabled="signupButtonDeactivated">Go to Dashboard</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <section>
      <div>
        <header>
          <h3 class="page-header-tagline">The Devil Teaches Bad Web Design</h3>
        </header>
        <p>Become a expert web designer by learning what makes
          <br>
          for a horrible experience from the Devil himself!</p>
        <div class="button-row">
          <button @click="checkIfAuthenticated" class="button">
          get started
          </button>
        </div>
      </div>
    </section>
  </div>
  `
});