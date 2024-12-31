"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function WishContent() {
  const searchParams = useSearchParams();
  const feedback = searchParams.get("feedback") || "No feedback provided";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Happy New Year 2025! 🎉
      </h1>
      <p className="text-lg text-gray-600">
        Thank you for sharing your experience: <strong>{feedback}</strong>
      </p>
    </div>
  );
}

export default function WishPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WishContent />
    </Suspense>
  );
}
