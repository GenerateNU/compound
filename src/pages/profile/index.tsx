import ProfileComponent from "@/components/ProfileComponent";
import ProfileSetup from "@/components/ProfileSetup";
import SkipSection from "@/components/Skip";
export default function Home() {
  return (
    <div>
      <ProfileSetup />
      <ProfileComponent />
      {/* <SkipSection /> */}
    </div>
  );
}
