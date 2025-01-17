"use client"

import React, { useState } from 'react'

const SignupForm = () => {


    const [formData, setFormData] = useState({
        name: '',
        cpf: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        address: '',
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

      try {
        const response = await fetch('https://localhost:5001/client', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            cpf: formData.cpf,
            email: formData.email,
            dateOfBirth: formData.dateOfBirth,
            phone: formData.phone,
            address: formData.address,
          }),
        });
  
        if (response.ok) {
          alert('Cliente cadastrado com sucesso!');
          setFormData({
            name: '',
            cpf: '',
            dateOfBirth: '',
            email: '',
            phone: '',
            address: '',
          });
        } else {
          const errorData = await response.json();
          alert(`Erro ao cadastrar cliente: ${errorData.message}`);
        }
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
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label>Digite seu CPF:</label>
                <input 
                    type='text' 
                    name='cpf' 
                    placeholder='Digite seu nome...' 
                    className='input-form' 
                    value={formData.cpf}
                    onChange={handleChange}
                    required
                />
                <label>Digite seu melhor email:</label>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Digite seu melhor email' 
                    className='input-form' 
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label>Sua data de nascimento</label>
                <input 
                    type='date' 
                    name='dateOfBirth' 
                    placeholder='Digite seu nome...' 
                    className='input-form' 
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                />

                <label>Digite seu telefone:</label>
                <input 
                    type='text' 
                    name='phone' 
                    placeholder='Digite seu melhor email' 
                    className='input-form' 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <label>Digite seu endereço:</label>
                <input
                    type="text"
                    name="address"
                    placeholder="Digite seu endereço"
                    className="input-form"
                    value={formData.address}
                    onChange={handleChange}
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
