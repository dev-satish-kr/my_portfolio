const skills = [
  ["React.js", 90],
  ["JavaScript", 85],
  ["HTML / CSS", 95],
  ["Tailwind CSS", 90],
  ["Node.js", 75],
  ["ServiceNow", 70],
];

const tools = [
  "React",
  "JavaScript",
  "Tailwind",
  "Git",
  "GitHub",
  "Node.js",
  "MongoDB",
  "ServiceNow",
];

export default function Skills() {
  return (
    <section className="bg-slate-50 px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-violet-500">
            Tools & Skills
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            My Expertise
          </h2>

          <div className="mt-8 space-y-5">
            {skills.map(([name, percentage]) => (
              <div key={name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span>{name}</span>
                  <span>{percentage}%</span>
                </div>

                <div className="h-1.5 rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-violet-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="flex aspect-square items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-semibold shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {tool}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}