
'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function ContractorDetails() {
  const { id } = useParams();
  const [form, setForm] = useState({
    company: '',
    vat: '',
    country: '',
    zip: '',
    city: '',
    street: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow max-w-3xl">
      <h2 className="text-xl font-bold mb-4">Dane kontrahenta – {id}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nazwa firmy</label>
          <input name="company" value={form.company} onChange={handleChange} className="border rounded p-2 w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">VAT</label>
          <input name="vat" value={form.vat} onChange={handleChange} className="border rounded p-2 w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Kraj</label>
          <input name="country" value={form.country} onChange={handleChange} className="border rounded p-2 w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Kod pocztowy</label>
          <input name="zip" value={form.zip} onChange={handleChange} className="border rounded p-2 w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Miasto</label>
          <input name="city" value={form.city} onChange={handleChange} className="border rounded p-2 w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Ulica i numer</label>
          <input name="street" value={form.street} onChange={handleChange} className="border rounded p-2 w-full" />
        </div>
      </div>
    </div>
  );
}
