// app/wish/page.js
"use client";  // Ensure this is a client-side component

import { useSearchParams } from "next/navigation";

export default function Wish() {
  const searchParams = useSearchParams();
  const feedback = searchParams.get("feedback");

  const getMessage = () => {
    switch (feedback) {
      case "Amazing":
        return "You had an amazing 2025! Wishing you an even more incredible 2026! 🎉";
      case "Great":
        return "Glad to hear you had a great 2025! May 2026 be even better! ✨";
      case "Could Be Better":
        return "2025 could have been better, but here's to a fantastic 2026! 🎊";
      case "Not Good":
        return "Wishing you a brighter and happier 2026 ahead! 🌟";
      default:
        return "Happy New Year 2026! 🎆";
    }
  };

  return (
<>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
        
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Best Wishes for the New Year 2026 🎉
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-4">{getMessage()}</p>
      <button
        onClick={() => window.history.back()}  // Go back using browser history
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
      >
        Go Back
      </button>
    </div>
    </>
  );
}
