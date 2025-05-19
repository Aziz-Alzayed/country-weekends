# Country Weekends 🌍📅

[![npm version](https://img.shields.io/npm/v/country-weekends.svg)](https://www.npmjs.com/package/country-weekends)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![CI Status](https://github.com/yourusername/country-weekends/actions/workflows/ci.yml/badge.svg)](https://github.com/yourusername/country-weekends/actions)

A lightweight TypeScript library providing weekend days for every country, including regional variations.

## Features

- ✅ 195+ countries with verified weekend patterns
- 🌐 Regional variations (states/provinces)
- 🕒 Timezone-aware weekend detection
- 📦 Zero dependencies
- 🧠 TypeScript & JavaScript support

## Installation

```bash
npm install country-weekends
# or
yarn add country-weekends
```

## Usage

### Basic Usage

```typescript
import { getWeekendDays, isWeekend } from 'country-weekends';

// Get weekend days for a country
getWeekendDays('AE'); // → [5, 6] (Friday/Saturday in UAE)

// Check if a date is weekend
isWeekend(new Date(), 'US'); // → true/false
```

### Advanced Usage

```typescript
// Handle regional variations
getWeekendDays('IN-TN'); // → [0] (Sunday in Tamil Nadu, India)

// Get all supported country codes
import { countryWeekends } from 'country-weekends';
Object.keys(countryWeekends); // → ['US', 'AE', ...]
```

## Data Coverage

| Region       | Countries | Special Cases         |
|--------------|-----------|------------------------|
| Middle East  | 18        | Islamic weekends       |
| Europe       | 44        | -                      |
| Americas     | 35        | Puerto Rico            |
| Asia-Pacific | 48        | Indian states          |
| Africa       | 54        | 8 unique patterns      |

## API Reference

### `getWeekendDays(countryCode: string): number[]`
Returns an array of weekend day numbers (0=Sunday, 6=Saturday)

### `isWeekend(date: Date, countryCode: string): boolean`
Determines if a date falls on a weekend for the specified country

### `countryWeekends: Record<string, number[]>`
Complete dataset of all country weekend patterns

## Contributing

Found missing data or incorrect weekends?

- Check open issues
- Submit a PR with verified sources
- Include official government/central bank references

## Support & Contact

🌐 [Official Website](aziz.alzayed.tech@gmail.com)

✉️ [Email Support](aziz.alzayed.tech@gmail.com)

🐛 [Issue Tracker](https://github.com/yourusername/country-weekends/issues)

## License

ISC © Aziz Alzayed

## Real-World Examples

### Business Day Calculation

```typescript
function addBusinessDays(date: Date, days: number, countryCode: string): Date {
  // Implementation using isWeekend()
}
```

### React Hook Example

```typescript
function useWeekendStatus(countryCode: string) {
  const [isWeekend, setIsWeekend] = useState(false);
  // Hook implementation
}
```