function ocorrencia (frase){
  var ocorrencias = {}
  frase = frase.split(' ')
  for (var i = 0; i < frase.length; i++) {
    var palavra = frase[i];
    if (ocorrencias[palavra]) {
      ocorrencias[palavra]++;
    } else {
      ocorrencias[palavra] = 1;
    }
  }

  return ocorrencias;
}



const words = 'Eu gosto de gatos e gosto de cachorros também'

console.log(ocorrencia(words))