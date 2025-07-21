import type { Metadata } from "next";
// 1. Import your reusable helper function and config
import { generateMetadata as generatePageMetadata, metadataConfig } from "@/lib/metadata"; // Adjust path if needed
import DoctorClientPage from "@/components/DoctorClientPage";

// 2. Export a dynamic generateMetadata function that Next.js will use
export function generateMetadata(): Metadata {
  // 3. Call your helper with the specific configuration for this page
  return generatePageMetadata(metadataConfig.doctors);
}

export default function DoctorPage() {
  return <DoctorClientPage />;
}