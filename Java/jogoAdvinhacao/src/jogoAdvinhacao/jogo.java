package jogoAdvinhacao;
import java.util.Scanner;
public class jogo {

	public static void main(String[] args) {
		int palpite;
		
		
		
		do {
			Scanner tecladopalpite = new Scanner(System.in);
			System.out.println("Quantos inimigos os espartanos irão enfrentar: ");
			palpite = tecladopalpite.nextInt();
			
			if (palpite < 10000) {
				System.out.println("Um pouco mais... ");
			}else if(palpite > 10000) {
				System.out.println("Um pouco menos...");
			}else {
				System.out.println("parabens!! está correto");
				break;
			}
		}while (palpite != 10000);
	}

}