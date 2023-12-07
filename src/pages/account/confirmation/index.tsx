import { OnboardingIntro } from "@/components/OnboardingIntro";
import { OnboardingProgress } from "@/components/OnboardingProgress";
import { useState } from "react";

export default function Home() {
  const [avatar, setAvatar] = useState(0);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [financialInterests, setFinancialInterests] = useState([
    "Creating a budget",
    "Real estate",
  ]);

  async function createUser() {}

  return (
    <div>
      <main className="bg-white flex flex-col px-5">
        <OnboardingIntro />
      </main>
    </div>
  );
}
