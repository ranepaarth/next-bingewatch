"use client";

import tvOverlay from "@/assets/tv-skeleton.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const videos = [
  {
    id: 1,
    title: "next-techiekart",
    src: "https://res.cloudinary.com/dxfnfzh4q/video/upload/v1716580200/github/next-techiekart-ecomm/uc2yp2cj9tmjtednsz9e.mp4",
    liveLink: "https://next-techiekart-ecomm.vercel.app/",
  },
  {
    id: 2,
    title: "next-auth-advanced",
    src: "https://res.cloudinary.com/dxfnfzh4q/video/upload/v1717275591/github/next-auth-advanced/wssxrn1ozarxibd46o2e.mp4",
    liveLink: "https://next-auth-advanced-black.vercel.app/",
  },
  {
    id: 3,
    title: "next-tweetx",
    src: "https://res.cloudinary.com/dxfnfzh4q/video/upload/v1717275939/github/next-tweetx-react/zsjby6ogsnn0vcvqor4m.mp4",
    liveLink: "https://tweetx-deploy.vercel.app/",
  },
];

const TvSectionVideo = () => {
  const [active, setActive] = useState(1);

  const handleChevronRightClick = () => {
    setActive((prev) => (active < videos.length ? prev + 1 : 1));
  };
  const handleChevronLeftClick = () => {
    setActive((prev) => (prev <= 1 ? videos.length : prev - 1));
  };

  return (
    <div className="flex w-full max-w-[700px] items-center justify-center relative">
      <button
        onClick={handleChevronLeftClick}
        className="p-2 hover:bg-neutral-800/70 rounded-full transition-colors duration-200 ease-in-out absolute z-20 left-0"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <Image
        src={tvOverlay}
        alt="tv"
        width={2080}
        height={1440}
        quality={60}
        className="z-10 w-[90%]"
        priority
      />
      <div className="absolute w-full">
        {videos.map(
          (video) =>
            active === video.id && (
              <div
                key={video.id}
                className="flex items-center justify-center w-full flex-col"
              >
                <video
                  className="w-[75%]"
                  autoPlay
                  loop
                  muted
                  width={2080}
                  height={1440}
                  preload="metadata"
                >
                  <source src={video.src} className="h-full" />
                </video>
                <div className="bg-black/60 absolute inset-0 z-"></div>
                <Link
                  href={video.liveLink}
                  target={"_blank"}
                  className="z-30 absolute font-medium text-lg hover:underline"
                >
                  {video.title}
                </Link>
              </div>
            )
        )}
      </div>
      <button
        onClick={handleChevronRightClick}
        className="p-2 hover:bg-neutral-800/70 rounded-full transition-colors duration-200 ease-in-out absolute z-20 right-0"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
};

export default TvSectionVideo;
