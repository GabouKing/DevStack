import Image from "next/image";

type ProjectCardProps = {
  image: string;
  technologies: string[];
  description: string;
};

export function ProjectCard({ image, technologies, description }: ProjectCardProps) {
  return (
    <article className="flex flex-col bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden">
      <div className="relative w-full aspect-video bg-[#161b22]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-[#1f2937] text-slate-300 text-xs rounded-md border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-sm leading-relaxed text-slate-400">{description}</p>
      </div>
    </article>
  );
}

