"use client"

import React, { useState } from 'react'
import axios from "axios";

interface ClientProps {
  name: string;
  cpf: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  address: string;

}

const SignupForm: React.FC<ClientProps> = () => {


    const [name, setName] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [dateOfBirth, setDateOfBirth] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newClient = {
          name,
          cpf,  
          email,
          dateOfBirth,
          phone,
          address,
        }

      try {
        await axios.post("https://localhost:5074/api/v1/client", newClient);
        
        alert('Tarefa cadastrada com sucesso!');
      } catch (error) {
        console.error('Erro ao conectar com o servidor:', error);
        alert('Erro ao cadastrar cliente. Tente novamente mais tarde.');
      }
    };

  
  return (
    <div className="bg-slate-100 w-screen h-screen flex items-center justify-center">
        <div className='w-7/12'>
            <form name='Cadastro' className='text-black text-2xl' onSubmit={handleSubmit}>
                <div className='flex flex-col w-1/2'>
                <label className='text-black text-2xl p-4'>Digite seu nome completo:</label>
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Digite seu nome...' 
                    className='input-form' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label>Digite seu CPF:</label>
                <input 
                    type='text' 
                    name='cpf' 
                    placeholder='Digite seu nome...' 
                    className='input-form' 
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                />
                <label>Digite seu melhor email:</label>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Digite seu melhor email' 
                    className='input-form' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Sua data de nascimento</label>
                <input 
                    type='date' 
                    name='dateOfBirth' 
                    placeholder='Digite seu nome...' 
                    className='input-form' 
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    required
                />

                <label>Digite seu telefone:</label>
                <input 
                    type='text' 
                    name='phone' 
                    placeholder='Digite seu melhor email' 
                    className='input-form' 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />

                <label>Digite seu endereço:</label>
                <input
                    type="text"
                    name="address"
                    placeholder="Digite seu endereço"
                    className="input-form"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />


            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 mt-4"
            >
              Enviar
            </button>
                </div>
            </form>
        </div>
    </div>
  );
};


export default SignupForm;
