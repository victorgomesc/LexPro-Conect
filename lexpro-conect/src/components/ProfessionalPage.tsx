"use client"

import axios from 'axios';
import Link from 'next/link';
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
      <h1 className="text-5xl font-bold mb-4 text-center">Lista de Clientes</h1>
      {clients.length === 0 ? (
        <p className="text-gray-500">Nenhum cliente encontrado.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-12 p-10">
          {clients.map((client) => (
            <Link key={client.id} href={`/user-page?id=${client.id}`}>
            <div
            key={client.id}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <h2 className="text-xl font-semibold mb-2">{client.name}</h2>
            <p className="text-gray-600 mb-2">
              <strong>CPF:</strong> {client.cpf}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> {client.email}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Data de Nascimento:</strong> {client.dateOfBirth}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Telefone:</strong> {client.phone}
            </p>
            <p className="text-gray-600">
              <strong>Endereço:</strong> {client.address}
            </p>
          </div>
          </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProfessionalPage
