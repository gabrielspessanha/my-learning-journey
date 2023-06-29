package com.empresa;

public class principal {

	public static void main(String[] args) {
		aluno mario = new aluno();
		mario.cpf="11111232312";
		mario.nome="Super Mario";
		mario.matricula = 1001;
		mario.cogumelos = 43;
		
		
		aluno luigi = new aluno();
		luigi.cpf="222.222.222-2";
		luigi.nome="Super Luigi";
		luigi.matricula=1002;
		luigi.cogumelos = 23;
		
		
		aluno Yoshi = new aluno();
		Yoshi.cpf = "333.333.333-3";
		Yoshi.nome = "Super Yoshi";
		Yoshi.matricula = 3003;
		Yoshi.cogumelos = 103;
		aluno antigo;
		
		mario.info();
		luigi.info();
		Yoshi.info();
	}

}
