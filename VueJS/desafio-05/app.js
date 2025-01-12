new Vue({
    el: '#app',
    data: {
        jogador: 100,
        monstro: 100,
        jogando: false,
        fimPartida: false,
        logs: [],
        classLog: 'player'
    },
    computed: {
        vidaJogador(){
            return {
                width: `${this.jogador}%`,
            }
        },
        vidaMonstro(){
            return {
                width: `${this.monstro}%`,
            }
        },
    },
    methods:{
        pegarNumeroAleatorio(tipo){
            let min = tipo === 'normal'? 10 : 15
            let max = tipo === 'especial'? 30 : 20
            const dano = Math.floor(Math.random() * (max - min + 1)) + min
            return dano
        },
        iniciarJogo(){
            this.jogando = true
            this.jogador = 100
            this.monstro = 100
            this.fimPartida = false
            this.logs = []
        },
        verifcarVida(vida){
            if( vida <= 0 ){
                return "Morto"
            }
        },

        mostrarVencedor(winner){
            this.jogando = false
            this.fimPartida = true  
        },

        registrarLog(texto, cls){
            this.logs.unshift({ texto, cls})
        },

        atack(tipo){
            let dano = this.pegarNumeroAleatorio(tipo)
            this.monstro -= dano
            if(this.monstro <= 0) this.monstro = 0
            this.registrarLog(`JOGADOR ATINGIU MONSTRO COM ${dano}`, 'player')
            let status = this.verifcarVida(this.monstro)
            if(status == "Morto"){
                this.mostrarVencedor('jogador')
                return
            }

            dano = this.pegarNumeroAleatorio('normal') 
            this.jogador -= dano
            if(this.jogador <= 0) this.jogador = 0
            this.registrarLog(`MONSTRO ATINGIU JOGADOR COM ${dano}`, 'monster')
            status = this.verifcarVida(this.jogador)
            if(status == "Morto"){
                this.mostrarVencedor('monstro')
                return
            }
        },
        curar(){
            let cura = this.pegarNumeroAleatorio('normal')
            this.jogador += cura
            this.registrarLog(`JOGADOR RECEBEU ${cura} DE CURA`, 'healling')
            if(this.jogador >= 100){
                this.jogador = 100
                alert("Vida no Maximo!")
            }
            let dano = this.pegarNumeroAleatorio('normal') 
            this.jogador -= dano
            if(this.jogador <= 0) this.jogador = 0
            this.logs.push(`MONSTRO ATINGIU JOGADOR COM ${dano}`)
            let status = this.verifcarVida(this.jogador)
            if(status == "Morto"){
                this.mostrarVencedor('monstro')
                return
            }
            
        }
    }
})