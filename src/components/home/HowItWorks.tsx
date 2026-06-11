import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Discover",
    description:
      "We learn your goals, your constraints, and the problem worth solving.",
  },
  {
    title: "Design & build",
    description:
      "Rapid, iterative development with you in the loop the whole way.",
  },
  {
    title: "Launch & manage",
    description:
      "We deploy, monitor, and keep it running and improving.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <h2 className="text-brand-fg text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          How it works
        </h2>
        <ol className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="bg-white/5 border-white/10 rounded-2xl border p-6 sm:p-8"
            >
              <div className="from-brand-cyan to-brand-magenta bg-gradient-to-r bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl">
                {index + 1}
              </div>
              <h3 className="text-brand-fg mt-4 text-xl font-semibold tracking-tight sm:text-2xl">
                {step.title}
              </h3>
              <p className="text-brand-muted mt-4 text-base sm:text-lg">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
