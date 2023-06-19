package empresa;
import java.util.Scanner;
public class principal {

	public static void main(String[] args) {
		Scanner numero = new Scanner(System.in);
		System.out.println("Digite sua idade: ");
		int idade = numero.nextInt();
		
		if (idade <10) {
			System.out.println("Criança");
		}
		else if (idade < 18) {
			System.out.println("Adolescente");
		}
		else {
			System.out.println("Adulto");
		}

	}

}
