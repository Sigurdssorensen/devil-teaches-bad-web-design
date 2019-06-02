const appLandingPage = Vue.component('app-landing-page', {
  data() {
    return {
      text: [
        'example text for section ',
        'example text for section ',
        'example text for section '
      ]
    }
  },
  template: `
  <div 
    class="flex-container">
    <section
      v-for="(element, index) in text"
      :key="index-1"
      style="order: 'index'">
      <p>{{ text + index }}</p>
    </section>
  </div>
  `
});