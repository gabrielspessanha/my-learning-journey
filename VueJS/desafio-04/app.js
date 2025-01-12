new Vue({
	el: '#desafio',
	data: {
		classe1: ''
	},
	methods: {
		iniciarEfeito() {
			this.classe1 = this.classe1 == 'destaque'? 'encolher': 'destaque'
		},
		iniciarProgresso() {

		}
	},
	watch:{
		resetClasse(){
			setInterval(()=>{
				iniciarEfeito()
			},5000)
		}
	}
})
