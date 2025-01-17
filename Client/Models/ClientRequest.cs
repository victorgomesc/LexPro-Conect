namespace Client.Models;

public record ClientRequest(
    string name, 
    string cpf, 
    string email, 
    DateTime dateOfBirth, 
    string phone,
    string address
    );
