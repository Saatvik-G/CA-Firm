"use client";

import React from "react";

export interface CALogoProps {
  size?: number | string;
  height?: number | string;
  className?: string;
  showIndiaText?: boolean;
}

export function CALogo({
  size,
  height = 48,
  className = "",
}: CALogoProps) {
  const h = size || height;
  const heightStyle = typeof h === "number" ? `${h}px` : h;

  return (
    <div
      className={`inline-flex items-center shrink-0 ${className}`}
      style={{ height: heightStyle }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ca-logo.png"
        alt="Official ICAI Chartered Accountants Emblem"
        className="h-full w-auto object-contain max-h-full transition-all dark:brightness-125 dark:contrast-110"
        style={{ height: heightStyle }}
      />
    </div>
  );
}

export interface CALogoBadgeProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function CALogoBadge({
  size = "md",
  className = "",
}: CALogoBadgeProps) {
  const heights = {
    sm: 36,
    md: 48,
    lg: 60,
    xl: 84,
  };

  return <CALogo height={heights[size]} className={className} />;
}
