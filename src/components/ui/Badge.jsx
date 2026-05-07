export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-accent text-white shadow-sm">
      {children}
    </span>
  );
}
