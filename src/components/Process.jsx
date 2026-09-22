const steps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand goals, audience and requirements.",
  },
  {
    number: "02",
    title: "Plan",
    text: "Research, strategy and project structure.",
  },
  {
    number: "03",
    title: "Design",
    text: "Create visually engaging and user-friendly experiences.",
  },
  {
    number: "04",
    title: "Develop",
    text: "Build fast, responsive and optimized websites.",
  },
  {
    number: "05",
    title: "Deliver",
    text: "Testing, deployment and ongoing support.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <p className="text-xs font-bold uppercase tracking-widest text-violet-500">
          My Process
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          A Simple, Effective Process
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-5">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-600">
                {step.number}
              </div>

              <h3 className="mt-5 font-bold">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}