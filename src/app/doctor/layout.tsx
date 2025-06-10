export default function DoctorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="doctors-section min-h-screen px-6 py-8 bg-white text-gray-800">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold">For Doctors</h1>
        <p className="text-sm text-gray-500">Expand your medical reach internationally 🌎</p>
      </header>

      <section>{children}</section>

      <footer className="mt-12 pt-4 border-t text-center text-sm text-gray-400">
        &copy; 2025 Costa Rica Medical Tourism
      </footer>
    </div>
  );
}
