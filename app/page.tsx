// app/page.tsx
"use client";  // Ensure this is a client-side component

import { useRouter } from "next/navigation";  // Correct hook for routing in the app router

export default function Home() {
  const router = useRouter();

  // Update feedback type to string instead of 'any'
  const handleFeedback = (feedback: string) => {
    // Navigate to the wish page with the query parameter 'feedback'
    router.push(`/wish?feedback=${feedback}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Welcome to 2025 🎉
      </h1>
      <p className="text-base md:text-lg text-gray-600 mb-8">
        How was your experience in 2024?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-md sm:max-w-lg">
        <button
          onClick={() => handleFeedback("Amazing")}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-300"
        >
          Amazing
        </button>
        <button
          onClick={() => handleFeedback("Great")}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Great
        </button>
        <button
          onClick={() => handleFeedback("Could Be Better")}
          className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
        >
          Could Be Better
        </button>
        <button
          onClick={() => handleFeedback("Not Good")}
          className="w-full px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-300"
        >
          Not Good
        </button>
      </div>
    </div>
  );
}
