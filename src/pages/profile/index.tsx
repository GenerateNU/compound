import ProfileComponent from "@/components/ProfileComponent";
import ProfileSetup from "@/components/ProfileSetup";
import SkipSection from "@/components/Skip";
import ProgressComponent from "@/components/ProgressThing";
import FinancialLiteracyComponent from "@/components/FinancialLiteracyComponent";
import Dashboard from "@/components/Dashboard";
import ProfileCustomization from "@/components/FinancialInfo";

export default function Home() {
  return (
    <div>
      <ProfileCustomization></ProfileCustomization>
      {/* <ProfileSetup />
      <ProfileComponent />
      <ProgressComponent /> */}
      {/* <SkipSection /> */}
      {/* <FinancialLiteracyComponent /> */}
      <Dashboard />
    </div>
  );
}
