import React from "react";
import { OnboardingProgress } from "./OnboardingProgress";
import { OnboardingIntro } from "./OnboardingIntro";

function ProfileComponent() {
  return (
    <main className="bg-white flex flex-col px-5">
      <OnboardingProgress />
      <OnboardingIntro />
    </main>
  );
}

export default ProfileComponent;
