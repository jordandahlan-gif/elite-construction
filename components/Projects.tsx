import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Kitchen Renovation",
      image: "/project-kitchen.jpg",
    },
    {
      title: "Basement Finishing",
      image: "/project-basement.jpg",
    },
    {
      title: "Bathroom Remodel",
      image: "/project-bathroom.jpg",
    },
  ];

  return (
    <section className="bg-white px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber-600">
          Recent Projects
        </p>

        <h2 className="text-4xl font-bold">
          Renovation work built with care and attention to detail.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}