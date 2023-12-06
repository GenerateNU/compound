import { OnboardingIntro } from "@/components/OnboardingIntro";
import { OnboardingProgress } from "@/components/OnboardingProgress";
import { useState } from "react";

export default function Home() {
  const [avatar, setAvatar] = useState(0);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [financialInterests, setFinancialInterests] = useState([
    "creating a personal budget",
  ]);

  async function createUser() {
    const res = await fetch("/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar,
        firstName,
        lastName,
        financialInterests,
        email: "43.dpham@gmail.com",
      }),
    });

    if (res.ok) {
      console.log("user details updated");
    } else {
      console.log("error updating user");
    }
  }

  return (
    <div>
      <main className="bg-white flex flex-col px-5">
        <OnboardingProgress />
        <OnboardingIntro />
        <button
          onClick={() => {
            createUser();
          }}
        >
          test
        </button>
      </main>
    </div>
  );
}
