import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: "#1C1D22" }}>
      <div className="flex flex-col items-center gap-10 text-center max-w-2xl">

        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Lution Technologies"
          width={520}
          height={140}
          priority
          className="w-full max-w-md"
        />

        {/* Tagline */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Something big is coming.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#a0a0b0" }}>
            Custom applications, built for you, fully managed.
            <br />
            Fast development. AI-native. Built to last.
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-px" style={{ background: "linear-gradient(to right, #00FFFF, #FF00FF)" }} />

        {/* CTA */}
        <a
          href="mailto:hello@lutiontech.com"
          className="px-8 py-3 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-80"
          style={{ background: "linear-gradient(to right, #00FFFF, #FF00FF)", color: "#1C1D22" }}
        >
          Get in touch
        </a>

        {/* Footer */}
        <p className="text-xs" style={{ color: "#555566" }}>
          © {new Date().getFullYear()} Lution Technologies LLC. All rights reserved.
        </p>
      </div>
    </main>
  );
}
