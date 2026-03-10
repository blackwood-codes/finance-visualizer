import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFinanceStore } from '../store/useFinanceStore';

// Define the validation schema
const schema = z.object({
  description: z.string().min(3, "Too short"),
  amount: z.number().positive("Must be more than 0"),
  category: z.enum(['Food', 'Rent', 'Entertainment', 'Income', 'Utilities']),
});

export const AddTransactionForm = () => {
  const addTransaction = useFinanceStore((state) => state.addTransaction);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    addTransaction({
      ...data,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("description")} placeholder="Description" className="w-full p-2 border border-slate-300 rounded bg-white text-slate-900 placeholder-slate-400" />
      {errors.description && <p className="text-red-500 text-xs">{errors.description.message as string}</p>}
      
      <input type="number" {...register("amount", { valueAsNumber: true })} placeholder="Amount" className="w-full p-2 border border-slate-300 rounded bg-white text-slate-900 placeholder-slate-400" />
      
      <select {...register("category")} className="w-full p-2 border border-slate-300 rounded bg-white text-slate-900 placeholder-slate-400">
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
        <option value="Income">Income</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
      </select>
      
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Add Transaction
      </button>
    </form>
  );
};