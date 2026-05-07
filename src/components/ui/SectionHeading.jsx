export default function SectionHeading({ children }) {
  return (
    <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark dark:text-indigo-100 mb-12 text-center tracking-tight">
      {children}
    </h2>
  );
}
