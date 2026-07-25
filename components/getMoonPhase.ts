// Helper function to calculate moon phase ratio (0.0 to 1.0)
export function getMoonPhase(date = new Date()): number {
  const LUNAR_MONTH = 29.53058770576; // Average synodic month in days
  const KNOWN_NEW_MOON = new Date("2024-01-11T11:57:00Z").getTime();

  const diffDays = (date.getTime() - KNOWN_NEW_MOON) / (1000 * 60 * 60 * 24);
  const currentPhase = (diffDays % LUNAR_MONTH) / LUNAR_MONTH;

  return (currentPhase + 1) % 1;
}
