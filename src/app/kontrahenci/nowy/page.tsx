
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useContractors } from '@/context/ContractorsContext';

export default function NewContractor() {
  const { addContractor } = useContractors();
  const router = useRouter();
  const [form, setForm] = useState({
    CompanyName: '',
    CompanyVat: '',
    CompanyCountry: '',
    CompanyZip: '',
    CompanyCity: '',
    CompanyAddress: '',
    CompanyRegistrationDate: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const canSave = Object.values(form).every((v) => v);

  const handleSave = async () => {
    if (!canSave) return;
    await addContractor({ ...form, Users: 0 });
    router.push('/kontrahenci');
  };

  const fields = [
    ['Nazwa firmy', 'CompanyName'],
    ['VAT', 'CompanyVat'],
    ['Kraj', 'CompanyCountry'],
    ['Kod pocztowy', 'CompanyZip'],
    ['Miasto', 'CompanyCity'],
    ['Ulica i numer', 'CompanyAddress'],
    ['Data rejestracji (YYYY-MM-DD)', 'CompanyRegistrationDate'],
  ] as const;

  return (
    <div className="bg-white p-6 rounded-2xl shadow max-w-3xl">
      <h1 className="text-xl font-bold mb-4">Nowy kontrahent</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {fields.map(([label, name]) => (
          <div key={name}>
            <label className="block text-sm font-medium mb-1">{label}</label>
            <input
              name={name}
              value={form[name]}
              onChange={onChange}
              className="border rounded p-2 w-full"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleSave}
        disabled={!canSave}
        className={`mt-6 py-2 px-6 rounded text-white font-semibold ${
          canSave ? 'bg-brand-primary hover:opacity-90' : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Zapisz
      </button>
    </div>
  );
}
