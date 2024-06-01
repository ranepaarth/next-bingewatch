import React from "react";
import GetStartedInput from "../shared/get-started-input";

const GetStarted = () => {
  return (
    <article className="h-full flex items-center justify-center flex-col gap-4 z-20 text-center">
      <h3 className="text-3xl font-bold lg:text-5xl">
        Unlimited movies, TV shows and more
      </h3>
      <p className="text-lg">Watch anywhere. Cancel anytime.</p>
      <p className="text-lg min-w-11/12 max-w-full">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <GetStartedInput />
    </article>
  );
};

export default GetStarted;
