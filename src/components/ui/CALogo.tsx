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
  height = 44,
  className = "",
  color,
  saffronColor = "#F37321",
  greenColor = "#52B743",
  isDark = false,
  showIndiaText = true,
  ...props
}: CALogoProps) {
  const actualHeight = size || height;
  const strokeColor = color || (isDark ? "#FFFFFF" : "#145582");

  return (
    <svg
      height={actualHeight}
      viewBox={showIndiaText ? "0 0 210 145" : "0 0 210 115"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-auto shrink-0 ${className}`}
      {...props}
    >
      {/* ICAI New CA Emblem Body (Blue / White) */}
      <g fill={strokeColor}>
        {/* Sweeping C Loop */}
        <path d="M 82 14 C 55 14, 25 30, 20 60 C 15 90, 42 104, 74 104 C 95 104, 108 94, 116 80 L 103 72 C 97 83, 87 91, 73 91 C 53 91, 35 78, 38 60 C 41 38, 60 27, 78 27 C 88 27, 97 30, 103 36 L 112 25 C 103 18, 93 14, 82 14 Z" />
        
        {/* Letter A Apex and Legs */}
        <path d="M 108 10 L 76 104 L 89 104 L 110 40 L 131 104 L 144 104 L 114 10 Z" />
        
        {/* Accent Parallel Stroke on Right Leg of A */}
        <path d="M 119 30 L 139 104 L 144 104 L 123 30 Z" />

        {/* INDIA Text below */}
        {showIndiaText && (
          <text
            x="85"
            y="136"
            textAnchor="middle"
            fill={strokeColor}
            fontSize="24"
            fontWeight="900"
            letterSpacing="6"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            INDIA
          </text>
        )}
      </g>

      {/* Tricolor Wings */}
      {/* Top Saffron Wing */}
      <path
        d="M 88 47 L 160 26 L 134 60 L 104 52 Z"
        fill={saffronColor}
      />

      {/* Bottom Green Wing */}
      <path
        d="M 106 56 L 172 29 L 144 70 L 118 62 Z"
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
  showIndiaText = true,
}: CALogoBadgeProps) {
  const heights = {
    sm: 34,
    md: 46,
    lg: 56,
    xl: 78,
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <CALogo height={heights[size]} isDark={isDark} showIndiaText={showIndiaText} />
    </div>
  );
}
