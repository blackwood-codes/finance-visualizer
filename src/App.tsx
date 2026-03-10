import { LayoutDashboard, ReceiptEuro, Wallet, PieChart as PieChartIcon } from 'lucide-react';
// We will build these components next
import { AddTransactionForm } from './components/AddTransactionForm'; 
import { TransactionList } from './components/TransactionList';
import { CategoryChart } from './components/CategoryChart';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* 1. Sidebar - Fixed on desktop */}
      <aside className="w-64 bg-white border-r border-slate-200 p-6 hidden md:block">
        <div className="flex items-center gap-2 mb-10">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Wallet className="text-white w-6 h-6" />
          </div>
          <h1 className="text-lg! font-bold text-slate-800">FinanceFlow</h1>
        </div>
        {/* Navigation Links */}
        <nav className="space-y-2">
          <button className="flex items-center gap-3 w-full p-3 bg-blue-50 text-blue-600 rounded-lg font-medium">
            <LayoutDashboard size={20} /> Dashboard
          </button>
          <button className="flex items-center gap-3 w-full p-3 text-slate-500 hover:bg-slate-50 rounded-lg transition">
            <ReceiptEuro size={20} /> Transactions
          </button>
        </nav>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 p-4 md:p-10 space-y-8 overflow-y-auto">
        <header className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-slate-800">Overview</h2>
          <span className="text-sm text-slate-500">{new Date().toLocaleDateString()}</span>
        </header>

        {/* 3. Grid System for Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Form & Stats */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-medium mb-4 text-slate-900">Quick Add</h3>
                <AddTransactionForm />
            </div>
          </div>

          {/* Right Column: Charts & List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-medium mb-4 text-slate-900">Spending by Category</h3>
              <CategoryChart />
              <div className="h-40 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-slate-400">
                Chart Component Goes Here
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-medium mb-4 text-slate-900">Recent Transactions</h3>
              <TransactionList />
              <div className="space-y-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-12 bg-slate-50 rounded-lg animate-pulse" />
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}