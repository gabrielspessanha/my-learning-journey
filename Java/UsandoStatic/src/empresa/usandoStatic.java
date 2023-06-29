package empresa;

public class usandoStatic {
	String nome;
	String modelo;
	float velocidade;
	static final double PI = 3.1415;
	
	float calcularMilhasParaMetros(float milhas) {
		return milhas*1600;
	}
}

