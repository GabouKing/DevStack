'use client';

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { useTranslations } from "next-intl";
import { ProjectsCarousel, type Project } from "@/components/ProjectsCarousel";

const projects: Project[] = [
  {
    id: "portfolio",
    image: "/logo.svg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: "Projects.items.portfolio",
  },
  {
    id: "ecommerce",
    image: "/logo.svg",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    description: "Projects.items.ecommerce",
  },
  {
    id: "dashboard",
    image: "/logo.svg",
    technologies: ["React", "Node.js", "Docker"],
    description: "Projects.items.dashboard",
  },
];

export default function Page() {
  const tProjects = useTranslations("Projects");

  const mappedProjects: Project[] = projects.map((project) => ({
    ...project,
    description: tProjects(project.description.replace("Projects.", "")),
  }));

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
          <header className="space-y-3">
            <span className="px-4 py-1.5 border border-slate-700 rounded-full text-[11px] font-medium text-slate-400 bg-white/5">
              {tProjects("title")}
            </span>
          </header>

          <ProjectsCarousel projects={mappedProjects} />
        </section>
      </div>

      <Footer />
    </main>
  );
}
