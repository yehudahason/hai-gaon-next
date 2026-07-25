import React from "react";

export interface MoonPhaseProps {
  /**
   * Phase value from 0.0 to 1.0
   * 0.0 = New Moon
   * 0.25 = First Quarter
   * 0.5 = Full Moon
   * 0.75 = Last Quarter
   * 1.0 = New Moon
   */
  phase: number;
  size?: number;
  className?: string;
  lightColor?: string;
  darkColor?: string;
}

export const MoonPhase: React.FC<MoonPhaseProps> = ({
  phase,
  size = 80,
  className = "",
  lightColor = "#f8fafc",
  darkColor = "#111",
}) => {
  // Normalize phase to [0, 1)
  const normalizedPhase = ((phase % 1) + 1) % 1;

  // Calculate rendering parameters
  const isWaxing = normalizedPhase < 0.5;
  const radius = 48;

  // Map phase fraction to a 0 -> 1 -> 0 scale for the ellipse rx
  // 0.0 - 0.25 -> rx drops from 48 to 0 (crescent)
  // 0.25 - 0.50 -> rx grows from 0 to 48 (gibbous)
  const sweep = Math.cos(normalizedPhase * 2 * Math.PI);
  const rx = Math.abs(sweep) * radius;

  // Determine path orientation and ellipse color based on cycle half
  const pathData = isWaxing
    ? `M 50 2 A ${radius} ${radius} 0 0 1 50 98 Z` // Right hemisphere
    : `M 50 2 A ${radius} ${radius} 0 0 0 50 98 Z`; // Left hemisphere

  const ellipseFill = sweep > 0 ? darkColor : lightColor;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-label={`Moon phase: ${Math.round(normalizedPhase * 100)}%`}
    >
      <defs>
        <clipPath id="moon-clip">
          <circle cx="50" cy="50" r={radius} />
        </clipPath>
      </defs>

      <g clipPath="url(#moon-clip)">
        {/* Dark Moon Base */}
        <rect width="100" height="100" fill={darkColor} />

        {/* Illuminated Hemisphere */}
        <path d={pathData} fill={lightColor} />

        {/* Dynamic Shadow/Light Ellipse */}
        <ellipse cx="50" cy="50" rx={rx} ry={radius} fill={ellipseFill} />
      </g>
    </svg>
  );
};

export default MoonPhase;
