import { FiCheckCircle } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { experiences } from "../data";

export default function Experience() {
  return (
    <div id="experience" className="bg-base-200 py-20 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Experience"
          subtitle="The roles and internships that shaped how I build software."
        />

        <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
          {experiences.map((exp, index) => {
            const Logo = exp.logo;
            return (
              <li key={exp.company}>
                {index !== 0 && <hr />}
                <div className="timeline-start mb-10 md:text-end">
                  <p className="font-semibold">{exp.period}</p>
                  <p className="text-sm opacity-70">{exp.location}</p>
                </div>
                <div className="timeline-middle">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-base-300 bg-base-100">
                    <Logo className="w-5 h-5" />
                  </div>
                </div>
                <div className="timeline-end mb-10 w-full">
                  <Card>
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit">{exp.type}</Badge>
                      <CardTitle>{exp.role}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm">
                            <FiCheckCircle className="mt-0.5 shrink-0 text-primary" />
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
    </div>
  );
}
