"use client";

import ShapeGrid from "./ShapeGrid";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0">

      {/* Interactive Grid */}
      <div className="absolute inset-0">
        <ShapeGrid
          speed={0.23}
          squareSize={40}
          direction="diagonal"
          borderColor="#Fff"
          hoverFillColor="#fff"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B0F15]/70 pointer-events-none" />

    </div>
  );
}