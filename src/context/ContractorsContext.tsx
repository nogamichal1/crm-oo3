
'use client';
import { createContext, useContext, useState } from 'react';

export type ContractorDB = {
  CompanyId: string;
  CompanyName: string;
  CompanyVat: string;
  CompanyCountry: string;
  CompanyZip: string;
  CompanyCity: string;
  CompanyAdress: string;
  CompanyRegistrationDate: string; // ISO
  Users: number;
};

type ContractorsContextType = {
  contractors: ContractorDB[];
  updateContractor: (id: string, data: Partial<ContractorDB>) => void;
};

const sample: ContractorDB[] = [
  {
    CompanyId: 'C-001',
    CompanyName: 'Hogs Logistics Sp. z o.o.',
    CompanyVat: 'PL1234567890',
    CompanyCountry: 'Polska',
    CompanyZip: '01-234',
    CompanyCity: 'Warszawa',
    CompanyAdress: 'ul. Przykładowa 1',
    CompanyRegistrationDate: '2023-05-12',
    Users: 12,
  },
  {
    CompanyId: 'C-002',
    CompanyName: 'Freight Automation SA',
    CompanyVat: 'PL9876543210',
    CompanyCountry: 'Polska',
    CompanyZip: '00-001',
    CompanyCity: 'Kraków',
    CompanyAdress: 'ul. Testowa 5',
    CompanyRegistrationDate: '2024-01-03',
    Users: 5,
  },
  {
    CompanyId: 'C-003',
    CompanyName: 'Test Company',
    CompanyVat: 'PL1112223334',
    CompanyCountry: 'Polska',
    CompanyZip: '02-020',
    CompanyCity: 'Poznań',
    CompanyAdress: 'ul. Sample 7',
    CompanyRegistrationDate: '2023-12-24',
    Users: 3,
  },
];

const ContractorsContext = createContext<ContractorsContextType>({
  contractors: [],
  updateContractor: () => {},
});

export function ContractorsProvider({ children }: { children: React.ReactNode }) {
  const [contractors, setContractors] = useState<ContractorDB[]>(sample);

  const updateContractor = (id: string, data: Partial<ContractorDB>) => {
    setContractors((prev) => prev.map((c) => (c.CompanyId === id ? { ...c, ...data } : c)));
  };

  return (
    <ContractorsContext.Provider value={{ contractors, updateContractor }}>
      {children}
    </ContractorsContext.Provider>
  );
}

export function useContractors() {
  return useContext(ContractorsContext);
}
