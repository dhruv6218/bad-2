'use client';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { AuthLayout } from '../../layouts/AuthLayout';

export default function ResetPasswordPage() {
  const { updatePassword } = useAuth();
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState<string | null>(null);

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await updatePassword(password);
    setMsg(error ? error : 'Password updated');
  };

  return (
    <AuthLayout>
      <form onSubmit={handle} className="bg-white p-8 rounded-3xl shadow-apple border border-gray-200">
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="New password" className="w-full border p-3 rounded-xl mb-4" required />
        <button className="w-full bg-brand-blue text-white py-3 rounded-xl">Update Password</button>
        {msg && <p className="mt-4 text-sm">{msg}</p>}
      </form>
    </AuthLayout>
  );
}
