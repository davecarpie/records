Vue.component('record', {
  props: ['record'],
  template: `
    <div class="record-container">
      <img class="artwork" v-bind:src="record.artworkUrl" />
      <div class="details">
        <h1 class="record-name">{{ record.title}}</h1>
        <h2 class="record-artist">{{ record.artist }}</h2>
      </div>
    </div>
    `
})

var app = new Vue({
  el: '#app',
  data: {
    filterText: "",
    records: [
      { title: "The Color and the Shape", artist: "Foo Fighters", artworkUrl: "https://upload.wikimedia.org/wikipedia/en/0/0d/FooFighters-TheColourAndTheShape.jpg"},
      { title: "Wasting Light", artist: "Foo Fighters", artworkUrl: "https://upload.wikimedia.org/wikipedia/en/0/05/Foo_Fighters_Wasting_Light_Album_Cover.jpg"},
      { title: "Melodrama", artist: "Lorde", artworkUrl: "https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png" }
    ]
  },
  computed: {
    filteredRecords: function() {
      return this.records.filter(r => r.title.toLowerCase().includes(this.filterText.toLowerCase()) || r.artist.toLowerCase().includes(this.filterText.toLowerCase()))
    }
  }
})