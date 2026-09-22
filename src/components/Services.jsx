import {
  Monitor,
  Smartphone,
  Code2,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Design",
    text: "Clean, modern and conversion-focused website designs.",
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    text: "User-centered designs that improve engagement.",
  },
  {
    icon: Code2,
    title: "Web Development",
    text: "Fast, responsive and SEO-friendly websites.",
  },
  {
    icon: Rocket,
    title: "Website Redesign",
    text: "Transform your website into a modern digital experience.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <p className="text-xs font-bold uppercase tracking-widest text-violet-500">
          Services
        </p>

        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          What I Do
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-50 text-violet-500">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.text}
                </p>

                <div className="mt-6 h-0.5 w-8 bg-violet-500 transition-all group-hover:w-16" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}