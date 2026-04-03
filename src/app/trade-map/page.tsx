"use client";

import dynamic from "next/dynamic";

const TradeMap = dynamic(() => import("@/components/TradeMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100vh-3.5rem)] flex items-center justify-center bg-bg-primary">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-accent-green/30 border-t-accent-green rounded-full animate-spin mx-auto mb-3" />
        <p className="font-mono text-sm text-text-muted">Loading trade map...</p>
      </div>
    </div>
  ),
});

export default function TradeMapPage() {
  return (
    <div className="w-full h-[calc(100vh-3.5rem)]">
      <TradeMap />
    </div>
  );
}
