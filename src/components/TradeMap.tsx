"use client";

import { useState, useCallback } from "react";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer } from "@deck.gl/layers";
import { Map } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { researchPoints, type ResearchPoint } from "@/data/tradeflows";

const INITIAL_VIEW = {
  longitude: -98,
  latitude: 39,
  zoom: 3.8,
  pitch: 0,
  bearing: 0,
};

const DARK_MAP_STYLE = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

const typeColors: Record<string, [number, number, number]> = {
  current: [34, 197, 94],
  education: [59, 130, 246],
  conference: [245, 158, 11],
  collaboration: [168, 85, 247],
};

interface HoverInfo {
  x: number;
  y: number;
  object?: ResearchPoint;
}

export default function TradeMap() {
  const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredPoints = activeFilter === "all"
    ? researchPoints
    : researchPoints.filter((p) => p.type === activeFilter);

  const onHover = useCallback((info: any) => {
    setHoverInfo(info.object ? { x: info.x, y: info.y, object: info.object } : null);
  }, []);

  const layers = [
    new ScatterplotLayer<ResearchPoint>({
      id: "glow",
      data: filteredPoints,
      getPosition: (d) => d.position,
      getFillColor: (d) => [...typeColors[d.type], 50],
      getRadius: (d) => d.size * 40000,
      radiusMinPixels: 10,
      radiusMaxPixels: 35,
      pickable: false,
    }),
    new ScatterplotLayer<ResearchPoint>({
      id: "points",
      data: filteredPoints,
      getPosition: (d) => d.position,
      getFillColor: (d) => [...typeColors[d.type], 220],
      getRadius: (d) => d.size * 20000,
      radiusMinPixels: 4,
      radiusMaxPixels: 16,
      pickable: true,
      onHover,
      stroked: true,
      getLineColor: [255, 255, 255, 60],
      getLineWidth: 1,
      lineWidthMinPixels: 1,
    }),
  ];

  const filters = [
    { key: "all", label: "All", color: "bg-accent-green" },
    { key: "current", label: "Current", color: "bg-green-500" },
    { key: "education", label: "Education", color: "bg-blue-500" },
    { key: "conference", label: "Conferences", color: "bg-orange-400" },
    { key: "collaboration", label: "Collaborators", color: "bg-purple-500" },
  ];

  return (
    <div className="relative w-full h-full">
      <DeckGL
        initialViewState={INITIAL_VIEW}
        controller={true}
        layers={layers}
        style={{ position: "absolute" as const, top: "0", left: "0", right: "0", bottom: "0" }}
      >
        <Map mapStyle={DARK_MAP_STYLE} />
      </DeckGL>

      {/* Tooltip */}
      {hoverInfo?.object && (
        <div
          className="absolute z-50 pointer-events-none px-3 py-2 rounded border border-border bg-bg-primary/95 backdrop-blur-sm"
          style={{ left: hoverInfo.x + 12, top: hoverInfo.y - 12 }}
        >
          <p className="text-sm font-semibold text-text-primary">{hoverInfo.object.name}</p>
          <p className="text-xs text-text-secondary mt-0.5">{hoverInfo.object.detail}</p>
        </div>
      )}

      {/* Filters — bottom center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-1 px-2 py-1.5 rounded-full border border-border bg-bg-primary/80 backdrop-blur-sm">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setActiveFilter(f.key)}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeFilter === f.key
                ? "bg-white/10 text-text-primary"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            {f.key !== "all" && <span className={`w-1.5 h-1.5 rounded-full ${f.color}`} />}
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
