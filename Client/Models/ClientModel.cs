namespace Client.Models;

public class ClientModel {
    public ClientModel(string name, string cpf){
        Name = name;
        Cpf = cpf;
        Id = Guid.NewGuid();
    }
    public Guid Id { get; init; }
    public string Name { get; private set; }

    public string Cpf { get; set; }

    public void ChangeName(string name){
        Name = name;
    }

    public void SetInactive(){
        Name = "desativado";
    }
}

/*
Implementar as sseguintes informações
    Nome Completo
    CPF
    Data de nascimento
    Número de registro na OAB 
    Especialidade(s)
    Email
    Telefone
    Endereço
    Graduação
*/