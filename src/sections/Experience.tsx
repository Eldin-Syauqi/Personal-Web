import { FiCheckCircle } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 bg-base-200 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="My journey"
          title="Experience"
          subtitle="The roles and internships that shaped how I build software."
        />

        <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact [&_hr]:bg-purple-300">
          {experiences.map((exp, index) => {
            const Logo = exp.logo;
            return (
              <li key={`${exp.company}-${exp.period}`}>
                {index !== 0 && <hr />}
                <div className="timeline-start mb-10 md:text-end">
                  <p className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-800">
                    {exp.period}
                  </p>
                  <p className="mt-1 text-sm opacity-70">{exp.location}</p>
                </div>
                <div className="timeline-middle">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-400 bg-base-100 text-purple-700 shadow">
                    <Logo className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="timeline-end mb-10 w-full">
                  <Card className="reveal transition hover:-translate-y-0.5 hover:shadow-lg">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                      <CardTitle>{exp.role}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm">
                            <FiCheckCircle className="mt-0.5 shrink-0 text-purple-600" aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                {index !== experiences.length - 1 && <hr />}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
