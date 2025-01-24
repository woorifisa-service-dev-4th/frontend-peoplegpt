// app/seed/page.js
'use client';
import { useState } from 'react';

export default function SeedPage() {
  const [status, setStatus] = useState(null);

  const handleSeed = async () => {
    try {
      const response = await fetch('/api/seed', {
        method: 'POST'
      });
      const data = await response.json();
      setStatus(data.message);
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error initializing database');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Database Initialization</h1>
      <button 
        onClick={handleSeed}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Initialize Database
      </button>
      {status && (
        <div className={`mt-4 p-4 rounded ${status.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {status}
        </div>
      )}
    </div>
  );
}