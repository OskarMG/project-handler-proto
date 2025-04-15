'use client';

import React, { useState } from 'react';

/// Components ⚙️
type InputProps = {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
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

function Button({ children, className }: ButtonProps) {
  return (
    <button className={`rounded-md py-3 text-base text-white focus:outline-none ${className}`}>
      {children}
    </button>
  );
}

/// Default function ✅
export default function Home() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); };
  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPass(e.target.value); };

  return (
    <div className="flex flex-col h-screen justify-center bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-white m-6">
        Welcome to <br /> Project Handler
      </h1>
      <form className="flex flex-col self-center min-w-sm min-h-24 p-8 rounded-md border-2 border-white">
        <div className="mt-6 flex flex-col gap-4">
          <Input type="text" onChange={handleEmailChange} placeholder="Username or Email" />
          <Input type="password" onChange={handlePassChange} placeholder="Password" />
          <Button className="bg-blue-500 hover:bg-blue-600">{email || 'Submit Email'}</Button>
          <Button className="bg-green-500 hover:bg-green-600">{pass || 'Submit Password'}</Button>
        </div>
      </form>
    </div>
  );
}