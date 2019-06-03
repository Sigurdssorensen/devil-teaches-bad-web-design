const appChapter = Vue.component('app-chapter', {
  props: ['chapterNumber'],
  data () {
    return {
      displayTip: true,
      tipTimer: 15,
      contentHeight: '93%',
      activeChat: true,
      chatIndex: 0
    }
  },
  methods: {
    toggleTip () {
      this.displayTip = !this.displayTip
      this.displayTip ? this.contentHeight = '93%' : this.contentHeight = '94%'
    }
  },
  computed: {
    chapterData () {
      return this.$store.getters.getChapterData
    },
    getContentHeight () {
      return this.contentHeight
    },
    getChatImg () {
      return '../assets/' + this.chapterData[this.chapterNumber].chat[this.chatIndex].img
    },
    getTipTimer () {
      return this.tipTimer
    }
  },
  mounted () {
    const that = this
    setTimeout(function () {
      that.displayTip = false
    }, 12000)
    setTimeout(function () {
      that.chatIndex++
      setTimeout(function () {
        that.chatIndex++
        setTimeout(function () {
          that.chatIndex++
        }, 20000)
      }, 20000)
    }, 20000)
  },
  template: `
  <div id="chapter">
    <section v-if="displayTip" id="chapter-tip">
      <div class="card">
        <div>
          <p><strong>Tip: </strong>{{ chapterData[chapterNumber].tip }}</p>
          <i @click="toggleTip" class="material-icons">close</i>
        </div>
        <div>
          <button class="button">Show me where</button>
          <button @click="toggleTip" class="button border-button">Dismiss</button>
        </div>
      </div>
    </section>
    <section id="chapter-task">
      <div class="card">
        <p><strong>Task:</strong> {{ chapterData[chapterNumber].task }}</p>
        <div>
          <i class="material-icons">access_time</i>
          <p class="caption">{{ chapterData[chapterNumber].time }}</p>
        </div>
      </div>
    </section>
    <section v-if="activeChat" id="chapter-chat">
      <div class="card">
        <div>
          <h5>{{ chapterData[chapterNumber].chat[chatIndex].who }} speaks... </h5>
          <p>{{ chapterData[chapterNumber].chat[chatIndex].body }}</p>
        </div>
        <img :src="getChatImg" alt="Person speaking"/>
      </div>
    </section>
    <section id="chapter-content">
      <div :style="{ height: getContentHeight }">
        <p class="subtitle">Step 1/3</p>
        <h6>Create your free underworld account</h6>
        <p>Enjoy your first month free unlimited membership with access to all pain and suffering.</p>
        <input type="text">
        <input type="text">
      </div>
    </section>
  </div>
  `
});