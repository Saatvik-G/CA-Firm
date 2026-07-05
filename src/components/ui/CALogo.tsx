"use client";

import React from "react";

export interface CALogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  height?: number | string;
  className?: string;
  color?: string;
  checkColor?: string;
  isDark?: boolean;
}

export function CALogo({
  size,
  height = 38,
  className = "",
  color,
  checkColor = "#7CB342",
  isDark = false,
  ...props
}: CALogoProps) {
  const actualHeight = size || height;
  const actualWidth = typeof actualHeight === "number" ? actualHeight * 1.35 : actualHeight;
  const strokeColor = color || (isDark ? "#FFFFFF" : "currentColor");

  return (
    <svg
      height={actualHeight}
      width={actualWidth}
      viewBox="0 0 160 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      {...props}
    >
      {/* ICAI CA Emblem letter C & A */}
      <g fill={strokeColor}>
        {/* Sweeping C */}
        <path d="M 72 18 C 50 18, 25 32, 21 60 C 17 88, 42 102, 68 102 C 86 102, 98 92, 105 80 L 92 73 C 87 83, 78 91, 66 91 C 48 91, 33 79, 36 60 C 39 39, 57 29, 72 29 C 80 29, 88 32, 93 37 L 102 27 C 94 20, 84 18, 72 18 Z" />
        
        {/* Letter A Structure */}
        <path d="M 96 15 L 68 102 L 80 102 L 98 42 L 116 102 L 128 102 L 102 15 Z" />
        
        {/* Accent Parallel Line on Right Leg of A */}
        <path d="M 106 32 L 123 102 L 128 102 L 110 32 Z" />
      </g>

      {/* Signature ICAI Green Checkmark */}
      <path
        d="M 84 76 L 96 104 L 102 104 L 144 44 L 131 44 L 97 93 L 88 74 Z"
        fill={checkColor}
      />
    </svg>
  );
}

export interface CALogoBadgeProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  isDark?: boolean;
}

export function CALogoBadge({
  size = "md",
  className = "",
  isDark = false,
}: CALogoBadgeProps) {
  const heights = {
    sm: 28,
    md: 36,
    lg: 44,
    xl: 64,
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <CALogo height={heights[size]} isDark={isDark} />
    </div>
  );
}
