import { useFinanceStore } from '../store/useFinanceStore';
import { Trash2 } from 'lucide-react';

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useFinanceStore();

  if (transactions.length === 0) {
    return <p className="text-slate-400 text-center py-4">No transactions yet.</p>;
  }

  return (
    <div className="space-y-3">
      {transactions.map((tx) => (
        <div key={tx.id} className="flex justify-between items-center p-4 bg-white rounded-lg border border-slate-100 hover:border-slate-200 transition">
          <div>
            <p className="font-medium text-slate-800">{tx.description}</p>
            <p className="text-xs text-slate-500">{tx.category} • {new Date(tx.date).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className={`font-semibold ${tx.category === 'Income' ? 'text-green-600' : 'text-slate-800'}`}>
              {tx.category === 'Income' ? '+' : '-'}${tx.amount.toFixed(2)}
            </span>
            <button 
              onClick={() => deleteTransaction(tx.id)}
              className="text-slate-400 hover:text-red-500 transition"
            >
              <Trash2 
              size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};