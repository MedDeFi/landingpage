import type { Metadata } from "next";
import DoctorClientPage from "@/components/DoctorClientPage";

export const metadata: Metadata = {
  title: "Doctors | MedDeFi",
  description: "Join the MedDeFi waitlist for doctors.",
};

export default function DoctorPage() {
  return <DoctorClientPage />;
}
