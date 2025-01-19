namespace Client.Models;

public class ClientModel {
    public ClientModel(string name, string cpf, string email, DateTime dateOfBirth, string phone, string address){
        Name = name;
        Cpf = cpf;
        Email = email;
        DateOfBirth = dateOfBirth;
        Phone = phone;
        Address = address;
        Id = Guid.NewGuid();
    }
    public Guid Id { get; init; }
    public string Name { get; private set; }

    public string Cpf { get;  private set; }

    public string Email { get; private set; }

    public DateTime DateOfBirth { get; private set; }

    public string Phone { get; private set; }

    public string Address { get; private set; }

    public void ChangeName(string name){
        Name = name;
    }
    
    public void ChangeCpf(string cpf){
        Cpf = cpf;
    }

    public void ChangeEmail(string email){
        Email = email;
    }

    public void ChangeDateOfBirth(DateTime dateOfBirth){
        DateOfBirth = dateOfBirth;
    }

    public void ChangePhone(string phone){
        Phone = phone;
    }


    public void ChangeAddress(string address){
        Address = address;
    }

    public void SetInactive(){
        Name = "desativado";
    }
}

