new Vue({
  el: '#desafio',
  data: {
      name: 'Gabriel',
      idade: 21,
      linkImg: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg'
  },
  methods: {
    multiply(){
      this.idade *= 3
      return this.idade
    },
    getRandomNumber(){
      return Math.random()
    }
  }
})