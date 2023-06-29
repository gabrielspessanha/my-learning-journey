package contaCorrente;

public class main {

	public static void main(String[] args) {
		Conta gabriel = new Conta();
		gabriel.correntista = "Gabriel pessanha";
		gabriel.saldo = 75;
		gabriel.limiteSaque = 1004;
		
		gabriel.info();
		gabriel.depositar(300);
		gabriel.info();
		gabriel.sacar(20);
		
		Conta gabrielle = new Conta();
		gabrielle.correntista = "Gabrielle Gomes";
		gabrielle.saldo = 300;
		gabrielle.limiteSaque = 2000;
		
		gabrielle.info();
		
		gabrielle.transferir(gabriel, 37);
		
		gabriel.info();
		gabrielle.info();
	}
}
