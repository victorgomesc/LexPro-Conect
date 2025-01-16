import React from 'react'

const SignupForm = () => {
  return (
    <div className="bg-slate-100 w-screen h-screen flex items-center justify-center">
        <div className='w-7/12'>
            <form name='Cadastro' className='text-black text-2xl '>
                <div className='flex flex-col w-1/2'>
                <label className='text-black text-2xl p-4'>Digite seu nome completo:</label>
                <input 
                    type='text' 
                    name='fullName' 
                    placeholder='Digite seu nome...' 
                    className='input-form' 
                />

                <label>Digite seu CPF:</label>
                <input 
                    type='text' 
                    name='fullName' 
                    placeholder='Digite seu nome...' 
                    className='input-form' 
                />

                <label>Sua data de nascimento</label>
                <input 
                    type='date' 
                    name='data' 
                    placeholder='Digite seu nome...' 
                    className='input-form' 
                />

                <label>Digite seu melhor email:</label>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Digite seu melhor email' 
                    className='input-form' 
                />

                <label>Digite seu telefone:</label>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Digite seu melhor email' 
                    className='input-form' 
                />
                
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignupForm
