const stats = [
  {
    number: "2+",
    label: "Years Experience",
  },
  {
    number: "20+",
    label: "Projects Completed",
  },
  {
    number: "10+",
    label: "Happy Clients",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
      <div className="grid grid-cols-3 divide-x rounded-xl border border-slate-100 bg-white shadow-sm">

        {stats.map((item) => (
          <div
            key={item.label}
            className="px-3 py-6 text-center sm:px-8"
          >
            <h3 className="text-2xl font-bold text-violet-500 sm:text-3xl">
              {item.number}
            </h3>

            <p className="mt-1 text-[10px] uppercase tracking-wide text-slate-500 sm:text-xs">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}