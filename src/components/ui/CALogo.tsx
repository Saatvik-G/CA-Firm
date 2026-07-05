"use client";

import React from "react";

export interface CALogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  height?: number | string;
  className?: string;
  color?: string;
  saffronColor?: string;
  greenColor?: string;
  isDark?: boolean;
  showIndiaText?: boolean;
}

export function CALogo({
  size,
  height = 42,
  className = "",
  color,
  saffronColor = "#F37321",
  greenColor = "#52B743",
  isDark = false,
  showIndiaText = false,
  ...props
}: CALogoProps) {
  const actualHeight = size || height;
  // Width ratio: 1.35 if no text, 1.35 if text included
  const actualWidth = typeof actualHeight === "number" ? Math.round(actualHeight * (showIndiaText ? 1.35 : 1.35)) : actualHeight;
  const strokeColor = color || (isDark ? "#FFFFFF" : "#145582");

  return (
    <svg
      height={actualHeight}
      width={actualWidth}
      viewBox={showIndiaText ? "0 0 170 140" : "0 0 170 115"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      {...props}
    >
      {/* ICAI New CA Emblem Body (Blue / White) */}
      <g fill={strokeColor}>
        {/* Sweeping C */}
        <path d="M 72 16 C 48 16, 22 30, 18 58 C 14 86, 38 100, 66 100 C 84 100, 96 90, 103 78 L 91 71 C 86 81, 77 89, 65 89 C 47 89, 32 77, 35 58 C 38 37, 56 27, 71 27 C 79 27, 87 30, 92 35 L 101 25 C 93 18, 83 16, 72 16 Z" />
        
        {/* Letter A Main Structure */}
        <path d="M 96 12 L 67 100 L 79 100 L 98 40 L 117 100 L 129 100 L 102 12 Z" />
        
        {/* Accent Parallel Line on Right Leg of A */}
        <path d="M 106 30 L 124 100 L 129 100 L 110 30 Z" />

        {/* Optional INDIA Text below */}
        {showIndiaText && (
          <text
            x="76"
            y="132"
            textAnchor="middle"
            fill={strokeColor}
            fontSize="22"
            fontWeight="800"
            letterSpacing="5"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            INDIA
          </text>
        )}
      </g>

      {/* New ICAI Tricolor Wings */}
      {/* Top Wing - Saffron / Orange */}
      <path
        d="M 79 46 L 138 27 L 116 57 L 91 50 Z"
        fill={saffronColor}
      />

      {/* Bottom Wing - Green */}
      <path
        d="M 93 54 L 148 29 L 124 66 L 104 59 Z"
        fill={greenColor}
      />
    </svg>
  );
}

export interface CALogoBadgeProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  isDark?: boolean;
  showIndiaText?: boolean;
}

export function CALogoBadge({
  size = "md",
  className = "",
  isDark = false,
  showIndiaText = false,
}: CALogoBadgeProps) {
  const heights = {
    sm: 32,
    md: 42,
    lg: 52,
    xl: 72,
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <CALogo height={heights[size]} isDark={isDark} showIndiaText={showIndiaText} />
    </div>
  );
}
