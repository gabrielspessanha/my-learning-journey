using System;
internal class Program
{
    private static void Main(string[] args)
    {   
        MeuMetodo();
        string name = RetornaNome("Gabriel", "Pessanha", 8 );
        Console.WriteLine(name);
    }

    static void MeuMetodo()
    {
        Console.WriteLine("C# é legal");
    }
    

    static string RetornaNome(string name, string lastName, int idade = 21){
        return name +" "+ lastName +" Tem "+ idade + " anos";
    }
}