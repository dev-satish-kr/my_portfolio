import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Modern Business Website",
    category: "Corporate Website",
    image: "/projects/project1.jpg",
  },
  {
    title: "Fintech Dashboard",
    category: "Web Application",
    image: "/projects/project2.jpg",
  },
  {
    title: "E-Commerce Website",
    category: "E-commerce",
    image: "/projects/project3.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-50 px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-violet-500">
              Featured Projects
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Selected Work
            </h2>
          </div>

          <a
            href="#"
            className="hidden items-center gap-2 text-sm font-semibold text-violet-500 sm:flex"
          >
            View All Projects
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {project.category}
                  </p>
                </div>

                <button className="rounded-full border border-slate-200 p-2 text-violet-500">
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}