"use client";

import React from "react";

const OnboardingPage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background text-foreground px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Signed In Successfully 🎉</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Welcome to MediConnect! Let’s set up your profile or book your first appointment.
        </p>
      </div>
    </main>
  );
};

export default OnboardingPage;
