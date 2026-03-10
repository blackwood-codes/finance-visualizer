import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useFinanceStore } from '../store/useFinanceStore';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export const CategoryChart = () => {
  const transactions = useFinanceStore((state) => state.transactions);

  // 1. Transform data: Group by category and sum amounts
  const chartData = transactions
    .filter(tx => tx.category !== 'Income') // Usually, we only chart expenses
    .reduce((acc: any[], tx) => {
      const existing = acc.find(item => item.name === tx.category);
      if (existing) {
        existing.value += tx.amount;
      } else {
        acc.push({ name: tx.category, value: tx.amount });
      }
      return acc;
    }, []);

  if (chartData.length === 0) return <div className="text-center text-slate-400 p-10">Add expenses to see the breakdown</div>;

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60} // Makes it a "Donut" chart (looks more modern)
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};