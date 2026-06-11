import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-white/10 border-t py-10">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="text-brand-fg text-base font-semibold tracking-tight">
          Lution Technologies
        </div>
        <a
          href="mailto:hello@lutiontech.com"
          className="text-brand-muted hover:text-brand-fg text-sm transition-colors"
        >
          hello@lutiontech.com
        </a>
        <p className="text-brand-muted text-sm">
          © {year} Lution Technologies LLC. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
