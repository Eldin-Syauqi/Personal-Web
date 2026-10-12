import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { projects } from "../data";

const covers = [
  "from-purple-500/25 to-fuchsia-500/20",
  "from-sky-500/25 to-indigo-500/20",
  "from-emerald-500/25 to-teal-500/20",
  "from-amber-500/25 to-orange-500/20",
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20">
      <SectionTitle
        eyebrow="My work"
        title="Featured Projects"
        subtitle="A selection of products I have built, from web platforms to native iOS apps."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="group reveal flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className={`flex h-40 items-center justify-center bg-gradient-to-br text-7xl ${covers[index % covers.length]}`}
            >
              <span className="transition duration-300 group-hover:scale-110" aria-hidden="true">
                {project.emoji}
              </span>
            </div>
            <CardHeader>
              <Badge variant="secondary" className="w-fit">
                {project.category}
              </Badge>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-purple-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-800"
              >
                <FiExternalLink aria-hidden="true" /> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-base-300 px-4 py-2 text-sm font-semibold transition hover:border-purple-500 hover:text-purple-700"
              >
                <FiGithub aria-hidden="true" /> Source Code
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
