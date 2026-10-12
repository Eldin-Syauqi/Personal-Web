import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { buttonVariants } from "../components/ui/button";
import { projects } from "../data";

export default function Projects() {
  return (
    <div id="projects" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-16">
      <SectionTitle
        title="Featured Projects"
        subtitle="A selection of products I have built, from web platforms to native iOS apps."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden flex flex-col">
            <div className={`h-40 flex items-center justify-center text-7xl ${project.color}`}>
              {project.emoji}
            </div>
            <CardHeader>
              <Badge variant="secondary" className="w-fit">{project.category}</Badge>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <a href={project.demo} className={buttonVariants({ size: "sm" })}>
                <FiExternalLink /> Live Demo
              </a>
              <a href={project.github} className={buttonVariants({ variant: "outline", size: "sm" })}>
                <FiGithub /> Source Code
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
