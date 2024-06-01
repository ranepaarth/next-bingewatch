import FaqSection from "@/components/home-page/faq-section";
import HeroSection from "@/components/home-page/hero-section";
import HomeHeader from "@/components/home-page/home-header";
import TvSection from "@/components/home-page/tv-section";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

type HomeProps = {
  params: {
    locale: string;
  };
};

const Home = ({ params }: HomeProps) => {
  unstable_setRequestLocale(params.locale);

  return (
    <main className="flex flex-col gap-1 bg-zinc-700 items-center w-full h-full">
      <section className="w-full relative">
        <div className="relative w-full bg-[url(/images/hero-image.jpg)] h-[calc(100vh-170px)] sm:h-[calc(100vh-150px)] lg:h-dvh bg-cover bg-no-repeat p-6">
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
  );
};

export default Home;
