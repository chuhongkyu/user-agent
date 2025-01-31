"use client";

import { useEffect, useState } from "react";

function Container() {
  const [userAgent, setUserAgent] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserAgent(window.navigator.userAgent);
    }
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold mb-2">Browser UserAgent</h2>
      <p className="break-words text-gray-700">{userAgent || "Loading..."}</p>
    </div>
  );
}

export default Container;
