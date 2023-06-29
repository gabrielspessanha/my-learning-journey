package notas;

public class main {

	public static void main(String[] args) {
		notas gabriel = new notas();
		gabriel.nome = "Gabriel";
		gabriel.nota1 = 10;
		gabriel.nota2 = 7;
		gabriel.nota3 = 7;
		
		
		notas gabrielle = new notas();
		gabrielle.nome = "Gabrielle";
		gabrielle.nota1 = 10;
		gabrielle.nota2 = 7;
		gabrielle.nota3 = 5;
		
		gabriel.mediaAritmetica();
		gabriel.mediaPonderada();
		gabrielle.mediaAritmetica();
		gabrielle.mediaPonderada();
	}

}
