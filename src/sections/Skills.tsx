import SectionTitle from "../components/SectionTitle";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { iosTools, skillGroups } from "../data";

const levelStyle: Record<string, string> = {
  Familiar: "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-200",
  Learning: "border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-200",
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 bg-base-200 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="What I work with"
          title="Skills & Tech Stack"
          subtitle="The skills and technologies I use to build digital products, from web to mobile."
        />

        <p className="-mt-8 mb-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden="true" /> Familiar: comfortable using it
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500" aria-hidden="true" /> Learning: actively studying
          </span>
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title} className="reveal overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
              <div aria-hidden="true" className="h-1.5 bg-gradient-to-r from-purple-600 to-fuchsia-500" />
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-xl">
                    {group.emoji}
                  </span>
                  {group.title}
                </CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 rounded-xl bg-base-200 p-3 transition hover:bg-purple-50 hover:ring-2 hover:ring-purple-300 dark:hover:bg-purple-950"
                      >
                        <Icon className="h-7 w-7" aria-hidden="true" />
                        <span className="text-center text-sm font-medium">{skill.name}</span>
                        <Badge variant="outline" className={levelStyle[skill.level]}>
                          {skill.level}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="reveal mt-6 overflow-hidden border-0 bg-gradient-to-r from-purple-800 to-fuchsia-700 text-center text-white">
          <CardHeader className="items-center">
            <CardTitle>📱 iOS Development Environment</CardTitle>
            <CardDescription className="text-white opacity-90">
              Working with Xcode, Swift, and the iOS Simulator to build, test, and prepare native apps.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-2">
              {iosTools.map((tool) => (
                <Badge key={tool} variant="secondary" className="border-white/30 bg-white/15 text-white">
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
