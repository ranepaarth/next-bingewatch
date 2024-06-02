import FaqSection from "@/components/home-page/faq-section/faq-section";
import HeroSection from "@/components/home-page/hero-section/hero-section";
import HomeHeader from "@/components/home-page/home-page-header/home-header";
import TvSection from "@/components/home-page/tv-section/tv-section";
import { CodeXml, Github } from "lucide-react";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

type HomeProps = {
  params: {
    locale: string;
  };
};

const Home = ({ params }: HomeProps) => {
  unstable_setRequestLocale(params.locale);

  return (
    <div className="flex flex-col gap-1 bg-zinc-700 items-center">
      <main className="flex flex-col gap-1 bg-zinc-700 items-center w-full h-full">
        <section className="w-full relative">
          <div className="relative w-full bg-[url(/images/hero-image.jpg)] h-[calc(100vh-170px)] sm:h-[calc(100vh-150px)] lg:h-dvh bg-cover bg-no-repeat">
            <div className="absolute bg-gradient-radial from-black/50 to-black/70 z-10 inset-0"></div>
            <div className="z-20 w-full max-w-screen-xl mx-auto flex flex-col items-center h-full">
              <HomeHeader />
              <HeroSection />
            </div>
          </div>
        </section>
        <TvSection />
        <FaqSection />
      </main>
      <footer className="bg-black w-full">
        <div className="max-w-xl px-4 py-2 text-neutral-600 mx-auto flex justify-between text-sm group">
          <p className="group-hover:text-white transition-colors duration-200 ease-in-out">
            ranepaarth&copy;2024
          </p>
          <div className="flex items-center gap-4">
            <Link href={"https://github.com/ranepaarth"} target="_blank">
              <Github className="hover:text-white transition-colors duration-200 ease-in-out" />
            </Link>
            <Link
              href={"https://github.com/ranepaarth/next-bingewatch"}
              target="_blank"
            >
              <CodeXml className="hover:text-white transition-colors duration-200 ease-in-out" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
