export function normalizeProductType(type: string): string {
  const normalized = type.toLowerCase();

  if (normalized.includes('persiana')) {
    return 'Persiana';
  }

  if (normalized.includes('tradicional') || normalized.includes('visillo')) {
    return 'Tradicional';
  }

  return 'Roller';
}

export function formatMeters(value: number): string {
  return Number(value || 0).toFixed(2);
}
