export default function StatCard({ value, label }) {
  return (
    <div className="bg-primary-50 dark:bg-dark-card p-6 rounded-2xl text-center border border-primary-100 dark:border-primary-900/30 hover:shadow-soft transition-shadow">
      <div className="text-4xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-2">{value}</div>
      <div className="text-sm font-medium text-slate-600 dark:text-slate-400">{label}</div>
    </div>
  );
}
