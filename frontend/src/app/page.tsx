'use client';

import React, { useState } from 'react';
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

/// Default function ✅
export default function Home() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  const isFormValid = ValidateEmail(email) && pass !== '';
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); };
  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPass(e.target.value); };

  return (
    <div className="flex flex-col h-screen justify-center bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-white m-6">
        Welcome to <br /> Project Handler
      </h1>
      <div className="flex flex-col self-center min-w-sm min-h-24 p-8 rounded-md border-2 border-white">
        <div className="mt-6 flex flex-col gap-4">
          <Input type="text" onChange={handleEmailChange} placeholder="Username or Email" />
          <Input type="password" onChange={handlePassChange} placeholder="Password" />
          <Button 
            disabled={!isFormValid}
            className={`bg-${isFormValid ? 'blue' : 'gray'}-500 hover:bg-${isFormValid ? 'blue-600' : 'gray-500'}`}
            onClick={() => { 
              console.log(isFormValid) 
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
