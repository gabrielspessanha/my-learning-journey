package empresa;
import java.util.Scanner;
public class Principal {

	public static void main(String[] args) {
		
		Scanner tecladoPeso = new Scanner(System.in);
		System.out.println("Digite seu peso: ");
		int peso = tecladoPeso.nextInt();
		
		
		Scanner tecladoAltura = new Scanner(System.in);
		System.out.println("Digite sua altura: ");
		double altura = tecladoAltura.nextDouble();
		
		altura *= altura;
		
		double imc = peso/altura;
		
		System.out.printf("O seu IMC é : %.2f", imc);
	}

}
