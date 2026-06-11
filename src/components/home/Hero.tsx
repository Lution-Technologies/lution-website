import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <Section className="bg-brand-bg">
      <Container className="flex flex-col items-center text-center">
        <Image
          src="/logo.svg"
          alt="Lution Technologies"
          width={440}
          height={118}
          priority
          className="mb-10 h-auto w-64 sm:w-80"
        />
        <h1 className="text-brand-fg text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Custom software, built for you — fully managed.
        </h1>
        <p className="text-brand-muted mt-6 max-w-2xl text-lg sm:text-xl">
          We design, build, and run high-value applications for individuals,
          businesses, and enterprises. AI-native development, fast iteration,
          built to last.
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
