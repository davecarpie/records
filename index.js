Vue.component('record', {
  props: ['record'],
  template: `
    <div>
      <h1>{{ record.title}}</h1>
      <h2>{{ record.artist }}</h2>
      <img v-bind:src="record.artworkUrl" />
    `
})

var app = new Vue({
  el: '#app',
  data: {
    records: [
      { title: "The Color and the Shape", artist: "Foo Fighters", artworkUrl: "https://upload.wikimedia.org/wikipedia/en/0/0d/FooFighters-TheColourAndTheShape.jpg"},
      { title: "Melodrama", artist: "Lorde", artworkUrl: "https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png" }
    ]
  }
})