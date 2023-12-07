import { useEffect } from "react";
import UpdatedComponent from "@/components/PostDashboard";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("email") === "") {
      alert(
        "Must be authenticated to view this page. Redirecting to login / sign up..."
      );
      router.push("/account");
    }
  }, []);

  return (
    <div>
      <UpdatedComponent />
    </div>
  );
}
