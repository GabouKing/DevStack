'use client';

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

export type Project = {
  id: string;
  image: string;
  technologies: string[];
  description: string;
};

type ProjectsCarouselProps = {
  projects: Project[];
};

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerPage);

  function handlePrev() {
    setCurrentIndex((prev) => Math.max(0, prev - itemsPerPage));
  }

  function handleNext() {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + itemsPerPage));
  }

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-[#0b1120] text-slate-300 hover:bg-slate-900 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-[#0b1120] text-slate-300 hover:bg-slate-900 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <span className="text-xs text-slate-500">
          {currentIndex + 1} -{" "}
          {Math.min(currentIndex + itemsPerPage, projects.length)} /{" "}
          {projects.length}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            technologies={project.technologies}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

