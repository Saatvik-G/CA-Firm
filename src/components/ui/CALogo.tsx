"use client";

import React from "react";

export interface CALogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  color?: string;
  checkColor?: string;
}

export function CALogo({
  size = 32,
  className = "",
  color = "#0B3C5D",
  checkColor = "#73B526",
  ...props
}: CALogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 350 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Sweeping CA Navy Blue Body */}
      <g fill={color}>
        {/* The 'C' curve sweeping into 'A' left leg */}
        <path d="M 165 42 C 120 42, 60 70, 50 140 C 40 210, 100 248, 155 248 C 195 248, 222 225, 235 195 L 210 185 C 198 208, 178 224, 150 224 C 115 224, 76 195, 82 140 C 88 88, 130 66, 168 66 C 185 66, 202 72, 215 84 L 232 64 C 214 48, 192 42, 165 42 Z" />
        
        {/* 'A' Apex & Left/Right Structure */}
        <path d="M 215 35 L 155 240 L 180 240 L 225 90 L 270 240 L 295 240 L 228 35 Z" />
        
        {/* Parallel accent line on right leg of A */}
        <path d="M 235 75 L 285 240 L 295 240 L 243 75 Z" />
      </g>

      {/* Signature Green Checkmark Tick */}
      <path
        d="M 195 190 L 215 250 L 228 250 L 315 118 L 290 118 L 218 225 L 202 180 Z"
        fill={checkColor}
      />
    </svg>
  );
}

export interface CALogoBadgeProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "dark" | "light" | "blue" | "transparent";
  className?: string;
}

export function CALogoBadge({
  size = "md",
  variant = "blue",
  className = "",
}: CALogoBadgeProps) {
  const sizeClasses = {
    sm: "w-8 h-8 rounded-lg p-1",
    md: "w-10 h-10 rounded-xl p-1.5",
    lg: "w-12 h-12 rounded-xl p-2",
    xl: "w-24 h-24 rounded-2xl p-4",
  };

  const svgSizes = {
    sm: 22,
    md: 28,
    lg: 34,
    xl: 68,
  };

  const bgClasses = {
    blue: "bg-blue-900 border border-blue-700/60 shadow-md",
    dark: "bg-slate-900 border border-slate-800 shadow-md",
    light: "bg-white border border-slate-200 shadow-sm",
    transparent: "",
  };

  const logoColor = variant === "light" ? "#0F3A5D" : "#FFFFFF";

  return (
    <div
      className={`inline-flex items-center justify-center transition-transform hover:scale-105 ${sizeClasses[size]} ${bgClasses[variant]} ${className}`}
    >
      <CALogo size={svgSizes[size]} color={logoColor} checkColor="#7CB342" />
    </div>
  );
}
