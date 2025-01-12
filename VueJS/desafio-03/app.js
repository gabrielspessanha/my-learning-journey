new Vue({
  el: "#desafio",
  data: {
    valor: 0,
  },
  computed: {
    resultado() {
      return this.valor != 7 ? "Número Diferente de 7" : "Número Igual a 7";
    },
  },
  watch: {
    resultado() {
      setTimeout(() => {
        this.valor = 0;
      }, 2000);
      alert(`Número novo: ${novo}  Número antigo: ${antigo} `);
    },
  },
});
