import FaqSection from "@/components/home-page/faq-section";
import GetStarted from "@/components/home-page/get-started";
import HomeHeader from "@/components/home-page/home-header";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col gap-1 bg-zinc-700 items-center w-full h-full">
      <section className="w-full relative">
        <div className="relative w-full bg-[url(/images/hero-image.jpg)] h-[calc(100vh-170px)] sm:h-[calc(100vh-150px)] lg:h-dvh bg-cover bg-no-repeat p-6">
          <div className="absolute bg-gradient-radial from-black/50 to-black/70 z-10 inset-0"></div>
          <div className="z-20 w-full max-w-screen-xl mx-auto flex flex-col items-center h-full">
            <HomeHeader />
            <GetStarted />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col text-center justify-center bg-black py-20 px-10 gap-6 my-1">
        <h3 className="text-3xl font-bold">Enjoy on your TV</h3>
        <p className="text-lg text-pretty">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </p>
      </section>
      <FaqSection />
    </main>
  );
};

export default Home;
