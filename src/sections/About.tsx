import { FiClock, FiMessageCircle, FiTarget } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const values = [
  {
    icon: FiClock,
    title: "Timeliness",
    text: "I plan my work, respect deadlines, and tell you early when something changes.",
  },
  {
    icon: FiTarget,
    title: "Attention to detail",
    text: "Clean code, consistent design, and careful testing before anything ships.",
  },
  {
    icon: FiMessageCircle,
    title: "Clear communication",
    text: "Simple updates, honest answers, and no surprises along the way.",
  },
];

const highlight = "font-semibold text-purple-700 dark:text-purple-300";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20">
      <SectionTitle eyebrow="Who I am" title="About Me" />

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        <Card className="reveal relative overflow-hidden text-center md:col-span-1">
          <div aria-hidden="true" className="h-1.5 bg-gradient-to-r from-purple-600 to-fuchsia-500" />
          <CardHeader className="items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-4xl">🌍</div>
            <CardTitle>The Digital Nomad Life</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm opacity-80">
              Chasing global horizons and the freedom to work from anywhere. Right now, I&apos;m engineering robust
              systems while moving from one breathtaking destination to the next.
            </p>
          </CardContent>
        </Card>

        <div className="reveal space-y-4 md:col-span-2">
          <p className="text-lg leading-relaxed">
            My journey into technology is uniquely driven. I started in an entirely different academic field,{" "}
            <span className={highlight}>Islamic Theology</span>. My passion for digital problem-solving inspired me to
            self-teach software development and pivot to my true calling.
          </p>
          <p className="text-lg leading-relaxed">
            Through dedication, I learned to build scalable, high-performance applications across the{" "}
            <span className={highlight}>Full Stack Web ecosystem</span>, with a specialization in{" "}
            <span className={highlight}>Mobile App iOS Development</span>.
          </p>
          <p className="text-lg leading-relaxed">
            That hard work has brought me to this point: working remotely with international teams while traveling
            around the world.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline">Full-Stack Tech</Badge>
            <Badge variant="outline">iOS Development</Badge>
            <Badge variant="outline">Remote Work</Badge>
            <Badge variant="outline">Islamic Theology Alumnus</Badge>
          </div>
        </div>
      </div>

      {/* Key values */}
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <div
              key={value.title}
              className="reveal rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-500 text-white">
                <Icon aria-hidden="true" size={22} />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
              <p className="mt-1 text-sm opacity-70">{value.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
