export default function DoctorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="doctors-section min-h-screen text-gray-800">
      

      <section>{children}</section>

      <footer className="mt-12 pt-4 border-t text-center text-sm text-gray-400">
        @MediDefi
      </footer>
    </div>
  );
}
