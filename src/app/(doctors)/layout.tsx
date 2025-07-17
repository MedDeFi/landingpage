import { generateMetadata, metadataConfig } from '@/lib/metadata';

export const metadata = generateMetadata(metadataConfig.doctors);

export default function DoctorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 