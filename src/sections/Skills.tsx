import SectionTitle from "../components/SectionTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { skillGroups, iosTools } from "../data";

export default function Skills() {
  return (
    <div id="skills" className="bg-base-200 py-20 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Skills & Tech Stack"
          subtitle="The skills and technologies I use to build digital products, from web to mobile."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <CardTitle>{group.emoji} {group.title}</CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name} className="flex flex-col items-center gap-2 bg-base-200 rounded-lg p-3">
                        <Icon className="w-7 h-7" />
                        <span className="text-sm font-medium text-center">{skill.name}</span>
                        <Badge variant="outline">{skill.level}</Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6 bg-primary text-primary-content text-center">
          <CardHeader>
            <CardTitle>📱 iOS Development Environment</CardTitle>
            <CardDescription className="opacity-90">
              Working with Xcode, Swift, and the iOS Simulator to build, test, and prepare native apps.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-2">
              {iosTools.map((tool) => (
                <Badge key={tool} variant="secondary">{tool}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
