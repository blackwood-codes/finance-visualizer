import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}
//an array of transactions and two "actions" (functions) to modify that array.
interface FinanceState {
  transactions: Transaction[];
  addTransaction: (tx: Transaction) => void;
  deleteTransaction: (id: string) => void;
}

//call this hook inside any React component to access the data without "prop drilling
export const useFinanceStore = create<FinanceState>()(
  persist(
    (set) => ({
      transactions: [],
      addTransaction: (tx) => 
        set((state) => ({ transactions: [tx, ...state.transactions] })),
      deleteTransaction: (id) => 
        set((state) => ({ 
          transactions: state.transactions.filter((t) => t.id !== id) 
        })),
    }),
    { name: 'finance-storage' } // This automatically saves to localStorage!
  )
);