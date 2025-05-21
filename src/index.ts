import { CountryCode, WeekendDays } from './types';
import { countryWeekends, DEFAULT_WEEKEND } from './data';

export function getWeekendDays(countryCode: CountryCode): WeekendDays {
  return countryWeekends[countryCode.toUpperCase()] || DEFAULT_WEEKEND;
}

export function isWeekend(date: Date, countryCode: CountryCode): boolean {
  const day = date.getDay(); // 0 (Sunday) to 6 (Saturday)
  return getWeekendDays(countryCode).includes(day);
}

// Optional: Export type definitions
export * from './types';