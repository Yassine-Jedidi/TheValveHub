
export const KSA_STATES = [
  "Al-Bahah",
  "Al-Jawf",
  "Al-Qassim",
  "Asir",
  "Eastern Province",
  "Ha'il",
  "Jazan",
  "Madinah",
  "Makkah",
  "Najran",
  "Northern Borders",
  "Riyadh",
  "Tabuk",
] as const;

export type KSAState = (typeof KSA_STATES)[number];
