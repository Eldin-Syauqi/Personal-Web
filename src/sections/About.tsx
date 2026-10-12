import SectionTitle from "../components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function About() {
  return (
    <div id="about" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-16">
      <SectionTitle title="About Me" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <Card className="md:col-span-1 text-center">
          <CardHeader>
            <div className="text-5xl">🌍</div>
            <CardTitle>The Digital Nomad Life</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm opacity-80">
              Chasing global horizons and the freedom to work from anywhere. Right now, I'm engineering robust systems while moving from one breathtaking destination to the next.
            </p>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-4">
          <p className="text-lg leading-relaxed">
            My journey into technology is uniquely driven. I started in an entirely different academic field, <span className="font-semibold text-primary">Islamic Theology</span>. My passion for digital problem-solving inspired me to self-teach software development and pivot to my true calling.
          </p>
          <p className="text-lg leading-relaxed">
            Through dedication, I learned to build scalable, high-performance applications across the <span className="font-semibold text-secondary">Full Stack Web ecosystem</span>, with a specialization in <span className="font-semibold text-accent">Mobile App iOS Development</span>.
          </p>
          <p className="text-lg leading-relaxed">
            That hard work has brought me to this point: working remotely with international teams while traveling around the world.
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            <Badge variant="outline">Full-Stack Tech</Badge>
            <Badge variant="outline">iOS Development</Badge>
            <Badge variant="outline">Remote Work</Badge>
            <Badge variant="outline">Islamic Theology Alumnus</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
