'use client';

import Loading from './components/Loading';
import React, { useState, useEffect } from 'react';
import { ValidateEmail } from './utils/ValidateEmail';

/// Components ⚙️
type InputProps = {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

type ButtonProps = {
  disabled: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

function Input({ type, onChange, placeholder }: InputProps) {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className="rounded-md border border-gray-300 p-4 text-white bg-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

function Button({ disabled = false, className, onClick, children }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-md py-3 text-base text-white focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}

type FormProps = { onSubmit: () => void }

const Form = ({ onSubmit }: FormProps) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const isFormValid = ValidateEmail(email) && pass !== '';
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value);

  return (
    <div className="flex flex-col self-center min-w-sm p-8 rounded-md border-2 border-white">
      <div className=" flex flex-col gap-4">
        <Input type="text" onChange={handleEmailChange} placeholder="Username or Email" />
        <Input type="password" onChange={handlePassChange} placeholder="Password" />
        <Button 
          disabled={!isFormValid}
          className={`bg-${isFormValid ? 'blue' : 'gray'}-500 hover:bg-${isFormValid ? 'blue-600' : 'gray-500'}`}
          onClick={() => { onSubmit() }}
        >
          Login
        </Button>
      </div>
    </div>
  )
}


/// Default function ✅
export default function Home() {
  const [isLoading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate network request
    setLoading(false)
  };

  return (
    <div className="flex flex-col h-screen justify-center bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-white m-6">
        Welcome to <br /> Project Handler
      </h1>
    {
      isLoading ? ( <Loading /> ) : ( <Form onSubmit={()=> handleLogin()} /> )
    }
    </div>
  );
}
