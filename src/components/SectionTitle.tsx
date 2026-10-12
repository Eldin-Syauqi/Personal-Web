export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-14 text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-purple-700 dark:text-purple-300">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500" />
      {subtitle && <p className="mx-auto mt-4 max-w-2xl opacity-70">{subtitle}</p>}
    </div>
  );
}
