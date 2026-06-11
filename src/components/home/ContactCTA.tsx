import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function ContactCTA() {
  return (
    <Section id="contact">
      <Container className="flex flex-col items-center text-center">
        <h2 className="text-brand-fg text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Have a project in mind?
        </h2>
        <p className="text-brand-muted mt-6 max-w-2xl text-lg sm:text-xl">
          Tell us what you&apos;re building — we&apos;ll help you get there.
        </p>
        <a
          href="mailto:hello@lutiontech.com"
          className="bg-gradient-to-r from-brand-cyan to-brand-magenta text-brand-bg mt-10 inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
      </Container>
    </Section>
  );
}
