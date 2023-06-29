package contaCorrente;

public class Conta {
	String correntista;
	float saldo;
	float limiteSaque;
	
	void sacar(float valor) {
		saldo -= valor;
		System.out.println("valor "+ valor + " sacado com Sucesso!");
	}
	void depositar(float valor) {
		saldo += valor;
		System.out.println("valor "+ valor +" Depositado com Sucesso!");
	}
	
	void info() {
		System.out.println("Correntista: "+ correntista);
		System.out.println("Saldo: "+ saldo);
		System.out.println("limite de Saque: "+ limiteSaque);
	}
	
	void transferir(Conta destino, float valor) {
		destino.depositar(valor);
		System.out.println("valor "+ valor +" Depositado com Sucesso! para "+ destino.correntista);

		saldo -= valor;
	}
}
