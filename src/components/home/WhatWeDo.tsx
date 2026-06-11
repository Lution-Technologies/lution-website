import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Custom Application Development",
    description:
      "Bespoke web and mobile apps designed around your workflow, not a template.",
  },
  {
    title: "Fully Managed Hosting & Ops",
    description:
      "We handle infrastructure, deployment, monitoring, and updates so you don't have to.",
  },
  {
    title: "AI-Native Engineering",
    description:
      "Modern AI woven into the build process and the product — faster delivery, smarter software.",
  },
];

export default function WhatWeDo() {
  return (
    <Section id="what-we-do">
      <Container>
        <h2 className="text-brand-fg text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          What we do
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/5 border-white/10 rounded-2xl border p-6 sm:p-8"
            >
              <h3 className="text-brand-fg text-xl font-semibold tracking-tight sm:text-2xl">
                {service.title}
              </h3>
              <p className="text-brand-muted mt-4 text-base sm:text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
