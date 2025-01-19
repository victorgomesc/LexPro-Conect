"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Client {
    id: string;
    name: string;
    cpf: string;
    email: string;
    dateOfBirth: string;
    phone: string;
    address: string;
  }

const ProfessionalPage: React.FC = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchClients = async () => {
        try {
          const response = await axios.get("https://localhost:5074/client");
          setClients(response.data);
        } catch (err) {
          console.error("Erro ao buscar clientes:", err);
          setError("Erro ao buscar clientes. Tente novamente mais tarde.");
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        fetchClients();
      }, []);
    
      if (loading) {
        return <div className="text-center">Carregando...</div>;
      }
    
      if (error) {
        return <div className="text-center text-red-500">{error}</div>;
      }
  return (
    <div className="bg-gray-100 min-h-screen p-8 text-black">
      <h1 className="text-2xl font-bold mb-4">Lista de Clientes</h1>
      {clients.length === 0 ? (
        <p className="text-gray-500">Nenhum cliente encontrado.</p>
      ) : (
        <ul className="space-y-4">
          {clients.map((client) => (
            <li
              key={client.id}
              className="p-4 bg-white rounded-lg shadow-md flex flex-col space-y-2"
            >
              <p>
                <strong>Nome:</strong> {client.name}
              </p>
              <p>
                <strong>CPF:</strong> {client.cpf}
              </p>
              <p>
                <strong>Email:</strong> {client.email}
              </p>
              <p>
                <strong>Data de Nascimento:</strong> {client.dateOfBirth}
              </p>
              <p>
                <strong>Telefone:</strong> {client.phone}
              </p>
              <p>
                <strong>Endereço:</strong> {client.address}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProfessionalPage
