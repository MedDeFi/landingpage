import React from 'react';

export default function PatientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <header className="w-full px-6 py-4 bg-white shadow-sm border-b">
        <h1 className="text-2xl font-bold">Patient Portal</h1>
        <p className="text-sm text-gray-500">Access your records, appointments, and care options.</p>
      </header>

      <main className="flex-1 px-6 py-8">
        {children}
      </main>

      <footer className="w-full px-6 py-4 bg-white border-t text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Costa Rica Medical Tourism — Patient Portal
      </footer>
    </div>
  );
}
