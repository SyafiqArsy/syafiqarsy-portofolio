"use client";

import React from "react";

interface ChromaGridProps {
  children: React.ReactNode;
  className?: string;
}

export default function ChromaGrid({
  children,
  className = "",
}: ChromaGridProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        ${className}
      `}
    >
      {children}
    </div>
  );
}