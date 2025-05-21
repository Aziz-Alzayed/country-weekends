import { CountryCode, WeekendDays } from './types';

export declare function getWeekendDays(countryCode: CountryCode): WeekendDays;

export declare function isWeekend(date: Date, countryCode: CountryCode): boolean;

export * from './types';
