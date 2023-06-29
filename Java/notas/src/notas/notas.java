package notas;

public class notas {
	String nome;
	int nota1;
	int nota2;
	int nota3;
	
	public void mediaAritmetica() {
		double media = (nota1 + nota2 + nota3)/3;
		System.out.println("Média do aluno(a) "+ nome +" foi: " + media);
		
	}
	
	public void mediaPonderada() {
		double mediaP = (2*nota1 + 3*nota2 + 4*nota3)/9;
		System.out.println("Média ponderada do aluno(a) "+ nome +" foi: "+mediaP);
		System.out.println();
	}
}
