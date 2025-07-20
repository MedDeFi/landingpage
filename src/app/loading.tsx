import React from "react";
await new Promise((resolve) => setTimeout(resolve, 1000));

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        <span className="block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
        <span className="text-lg text-gray-700 font-semibold">Loading...</span>
      </div>
    </div>
  );
} 