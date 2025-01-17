namespace Client.Models;

public class ClientModel {
    public ClientModel(string name, string cpf, string email){
        Name = name;
        Cpf = cpf;
        Email = email;
        Id = Guid.NewGuid();
    }
    public Guid Id { get; init; }
    public string Name { get; private set; }

    public string Cpf { get; set; }

    public string Email { get; set; }

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