import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

interface ValueProp {
  title: string;
  description: string;
}

const valueProps: ValueProp[] = [
  {
    title: "Fast iteration",
    description: "Working software in weeks, not quarters.",
  },
  {
    title: "End-to-end ownership",
    description:
      "One team from design through deployment and maintenance.",
  },
  {
    title: "Built to last",
    description:
      "Maintainable, well-architected code — not throwaway prototypes.",
  },
  {
    title: "Transparent partnership",
    description:
      "Clear communication and clear pricing, no black boxes.",
  },
];

export default function WhyLution() {
  return (
    <Section id="why-lution">
      <Container>
        <h2 className="text-brand-fg text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Why Lution
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {valueProps.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border-white/10 rounded-2xl border p-6 sm:p-8"
            >
              <h3 className="text-brand-fg text-xl font-semibold tracking-tight sm:text-2xl">
                {item.title}
              </h3>
              <p className="text-brand-muted mt-4 text-base sm:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
