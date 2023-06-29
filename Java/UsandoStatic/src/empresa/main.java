package empresa;

public class main {

	public static void main(String[] args) {
		
		usandoStatic carro = new usandoStatic();
		carro.modelo = "Com Escada";
		carro.nome = "FiatUno";
		carro.velocidade = 300;
		
		float fiatvelociade = carro.calcularMilhasParaMetros(13);
		System.out.println( carro.nome + " percorreu em metros: "+ fiatvelociade+" metros");
		
		double gol = carro.PI;
	
		
		System.out.println(gol);
	}

}
 