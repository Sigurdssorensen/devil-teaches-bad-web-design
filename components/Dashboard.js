const appDashboard = Vue.component('app-dashboard', {
  data () {
    return {
      chapter: ''
    }
  },
  computed: {
    chapterData () {
      console.log('chapterdata')
      return this.$store.getters.getChapterData
    }
  },
  methods: {
    requestChapter (available, index) {
      if (available) {
        this.$router.push({ name: 'chapter', params: { chapterNumber: index } })
      }
    }
  },
  template: `
  <div id="dashboard">
    <section>
        <div id="dashboard-navigation-container">
            <div>
                <h3>Dashboard</h3>
            </div>
            <div>
                <router-link tag="button" to="/chapter" class="button">CONTINUE TO CHAPTER 1</router-link>
                <input id="searchbody" type="text" name="searchbody" placeholder="Feature coming soon.." disabled>
            </div>
        </div>
    </section>
    <section>
        <div>
            <article
              v-for="(chapter, index) in chapterData"
              
              :chapter="chapter"
              :index="index"
              :key="chapter.id"
              :style="{backgroundImage: 'url(../assets/' + chapter.img + ')'}"
              @mouseover="chapter.bodyHeight = 25"
              @mouseleave="chapter.bodyHeight = 0" 
              @click="requestChapter(chapter.available, index)"
              class="card card-action">
                <section>
                  <p>{{ chapter.title }}</p>
                  <div>
                    <i class="material-icons">access_time</i>
                    <p class="caption">{{ chapter.time }}</p>
                  </div>
                </section>
                <section
                :style="{height: chapter.bodyHeight + '%'}"
                :class="{ available: chapter.available }">
                  <i v-if="chapter.available" class="material-icons" :style="{color: 'white'}">play_circle_filled</i>
                  <i v-else class="material-icons" :style="{color: '#424242'}">play_circle_filled</i>
                  <p>{{ chapter.body }}</p>
                </section>
            </article>
        </div>
    </section>
    <section>
        <div>
            <article id="statistics-view" class="card">
                <p>Statistics will become available after you have finished the first chapter</p>
            </article>
        </div>
    </section>
  </div>
  `
});