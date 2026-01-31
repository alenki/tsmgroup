export const clients: string[] = Array.from(
  { length: 43 },
  (_, i) => `Client ${String(i + 1).padStart(2, '0')}`
);
