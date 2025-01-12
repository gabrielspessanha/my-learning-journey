new Vue({
    el: '#desafio',
    data: {
        value: ''
    },
    methods:{
        showAlert(){
            alert("Você clicou no botão de alerta")
        },
        getValueByKeydown(event){
            this.value = event.target.value
        }
    }
})