"use client";

import { useEffect, useRef } from "react";
import { researchPoints } from "@/data/tradeflows";

const typeColors: Record<string, string> = {
  current: "#22c55e",
  education: "#3b82f6",
  conference: "#f59e0b",
  collaboration: "#a855f7",
};

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    import("globe.gl").then((GlobeModule) => {
      const GlobeGL = GlobeModule.default;

      const globe = GlobeGL()
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
        .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
        .backgroundImageUrl("//unpkg.com/three-globe/example/img/night-sky.png")
        .showAtmosphere(true)
        .atmosphereColor("#22c55e")
        .atmosphereAltitude(0.15)
        // Points
        .pointsData(researchPoints)
        .pointLat((d: any) => d.position[1])
        .pointLng((d: any) => d.position[0])
        .pointColor((d: any) => typeColors[d.type] || "#22c55e")
        .pointAltitude((d: any) => d.size * 0.008)
        .pointRadius((d: any) => d.size * 0.08)
        .pointLabel((d: any) => `
          <div style="background:rgba(10,10,10,0.9);border:1px solid #2a2a2a;border-radius:6px;padding:8px 12px;font-family:Inter,sans-serif;">
            <div style="font-weight:600;font-size:13px;color:#f0f0f0;">${d.name}</div>
            <div style="font-size:11px;color:#888;margin-top:2px;">${d.detail}</div>
          </div>
        `)
        // Rings on current position
        .ringsData(researchPoints.filter((p) => p.type === "current"))
        .ringLat((d: any) => d.position[1])
        .ringLng((d: any) => d.position[0])
        .ringColor(() => () => "#22c55e")
        .ringMaxRadius(3)
        .ringPropagationSpeed(2)
        .ringRepeatPeriod(1500)
        // Arcs from NDSU to collaborators
        .arcsData(
          researchPoints
            .filter((p) => p.type === "collaboration")
            .map((p) => ({
              startLat: 46.88,
              startLng: -96.79,
              endLat: p.position[1],
              endLng: p.position[0],
              name: p.name,
            }))
        )
        .arcColor(() => ["#22c55e44", "#a855f744"])
        .arcDashLength(0.4)
        .arcDashGap(0.2)
        .arcDashAnimateTime(2000)
        .arcStroke(0.5)
        (containerRef.current);

      // Size
      const width = containerRef.current!.clientWidth;
      const height = containerRef.current!.clientHeight;
      globe.width(width).height(height);

      // Point of view: centered on US
      globe.pointOfView({ lat: 38, lng: -98, altitude: 2.2 }, 0);

      // Auto-rotate
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5;
      globe.controls().enableZoom = true;

      globeRef.current = globe;

      // Resize handler
      const onResize = () => {
        if (containerRef.current && globeRef.current) {
          globeRef.current
            .width(containerRef.current.clientWidth)
            .height(containerRef.current.clientHeight);
        }
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    });

    return () => {
      if (globeRef.current) {
        globeRef.current._destructor?.();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full" />
      {/* Legend overlay */}
      <div className="absolute bottom-4 left-4 z-10 flex gap-3 px-3 py-2 rounded-full border border-border bg-bg-primary/70 backdrop-blur-sm">
        {[
          { color: "bg-green-500", label: "Current" },
          { color: "bg-blue-500", label: "Education" },
          { color: "bg-orange-400", label: "Conference" },
          { color: "bg-purple-500", label: "Collaborator" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1.5 text-xs text-text-muted">
            <span className={`w-2 h-2 rounded-full ${item.color}`} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
