export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
      <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
      {subtitle && <p className="mt-4 opacity-70 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
