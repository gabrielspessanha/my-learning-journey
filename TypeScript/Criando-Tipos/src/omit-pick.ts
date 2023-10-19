type Pessoa = {
  nome: string;
  idade: number;
  email: string;
};

type PessoaSemEmail = Omit<Pessoa, 'email'>;

const pessoa: PessoaSemEmail = {
  nome: 'Alice',
  idade: 25
};

type Pessoa2 = {
  nome: string;
  idade: number;
  email: string;
};

type PessoaComNomeEIdade = Pick<Pessoa, 'nome' | 'idade'>;

const pessoa2: PessoaComNomeEIdade = {
  nome: 'Alice',
  idade: 25
};
