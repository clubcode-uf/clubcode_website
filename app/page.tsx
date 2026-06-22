import type { SVGProps } from "react";
import Navbar from "../components/Navbar";
import DottedSurface from "../components/DottedSurface/DottedSurface";
import CodeCarousel from "../components/CodeCarousel";
import Typewriter from "../components/Typewriter";
import HomeIntro from "../components/HomeIntro";

const DiscordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.51.07.07 0 0 0-.08.04c-.21.38-.45.88-.62 1.27a18.3 18.3 0 0 0-5.49 0 12.6 12.6 0 0 0-.63-1.27.08.08 0 0 0-.08-.04A19.7 19.7 0 0 0 3.65 4.37a.07.07 0 0 0-.03.03C.53 9.02-.32 13.53.1 17.99a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 5.99 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.29 1.22-1.98a.08.08 0 0 0-.04-.11 13.1 13.1 0 0 1-1.87-.89.08.08 0 0 1-.01-.13c.13-.09.25-.19.37-.29a.08.08 0 0 1 .08-.01c3.92 1.79 8.18 1.79 12.06 0a.08.08 0 0 1 .09.01c.12.1.24.2.37.29a.08.08 0 0 1-.01.13c-.6.35-1.22.65-1.88.89a.08.08 0 0 0-.04.11c.36.69.77 1.35 1.22 1.98a.08.08 0 0 0 .08.03 19.8 19.8 0 0 0 6-3.03.08.08 0 0 0 .03-.05c.5-5.16-.84-9.63-3.57-13.59a.06.06 0 0 0-.04-.03ZM8.02 15.28c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42s2.17 1.1 2.15 2.42c0 1.34-.95 2.42-2.15 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42s2.17 1.1 2.15 2.42c0 1.34-.95 2.42-2.15 2.42Z" />
  </svg>
);

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect width="18" height="18" x="3" y="3" rx="5" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" stroke="none" />
  </svg>
);

const codeValues = [
  {
    letter: "C",
    title: "Collaborate",
    description:
      "Work together across disciplines to build meaningful projects and learn from each other.",
  },
  {
    letter: "O",
    title: "Organize",
    description:
      "Structure our efforts through teams, events, and shared resources to stay effective.",
  },
  {
    letter: "D",
    title: "Divide",
    description:
      "Break down complex problems into manageable tasks and distribute work across teams.",
  },
  {
    letter: "E",
    title: "Execute",
    description:
      "Ship real projects, host events, and make a tangible impact on campus and beyond.",
  },
];

const socialLinks = [
  {
    label: "Discord",
    href: "https://discord.gg/dHkGccbKGT",
    icon: DiscordIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/clubcode_uf/",
    icon: InstagramIcon,
  },
];

const Page = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <DottedSurface />
      </div>
      <Navbar />
      <main className="min-h-[calc(100vh-72px)] px-[clamp(1.5rem,5vw,4.5rem)] py-[clamp(2.5rem,6vh,5rem)] font-mono text-zinc-100">
        <section className="mx-auto flex min-h-[calc(100vh-152px)] w-full max-w-6xl flex-col justify-between gap-[clamp(3.5rem,9vh,6rem)]">
          <div className="grid items-center gap-[clamp(3rem,7vw,6rem)] lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-tight tracking-normal text-zinc-100">
                Club C.O.D.E.
              </h1>
              <Typewriter
                text="Collaborate. Organize. Divide. Execute."
                loopDelay={4000}
                className="mt-[clamp(1rem,2vw,1.75rem)] block text-[clamp(1rem,2vw,1.375rem)] text-[#3ab5fb]"
              />

              <div className="mt-[clamp(3rem,7vh,5rem)]">
                <CodeCarousel values={codeValues} />
              </div>
            </div>

            <HomeIntro />
          </div>

          <div className="flex flex-wrap justify-center gap-[clamp(1rem,2.5vw,2rem)]">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/60 px-5 text-sm font-semibold text-zinc-200 transition hover:border-[#3ab5fb] hover:bg-[#3ab5fb]/10 hover:text-white"
              >
                <Icon className="size-5" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer className="px-[clamp(1.5rem,5vw,4.5rem)] pb-8 text-center font-mono text-sm font-semibold text-zinc-300">
        Made with 💙 by Club C.O.D.E. Web Dev Team © 2026.
      </footer>
    </>
  );
};

export default Page;
