import { CountryWeekendMap, WeekendDays } from './types';

export const countryWeekends: CountryWeekendMap = {
  // Friday & Saturday weekends (Middle East/North Africa)
  AE: [5, 6], // United Arab Emirates
  AF: [5],    // Afghanistan (Friday only)
  BH: [5, 6], // Bahrain
  DJ: [5, 6], // Djibouti
  DZ: [5, 6], // Algeria (Thursday-Friday)
  EG: [5, 6], // Egypt
  IQ: [5, 6], // Iraq
  JO: [5, 6], // Jordan
  KW: [5, 6], // Kuwait
  LB: [5, 6], // Lebanon
  LY: [5, 6], // Libya
  MR: [4, 5], // Mauritania (Thursday-Friday)
  OM: [5, 6], // Oman
  PS: [5, 6], // Palestine
  QA: [5, 6], // Qatar
  SA: [5, 6], // Saudi Arabia
  SD: [5, 6], // Sudan
  SO: [4, 5], // Somalia (Thursday-Friday)
  SY: [5, 6], // Syria
  TD: [5, 6], // Chad
  YE: [5, 6], // Yemen
  IR: [5], // Iran

  // Saturday & Sunday weekends (International Standard)
  AD: [0, 6], // Andorra
  AG: [0, 6], // Antigua and Barbuda
  AL: [0, 6], // Albania
  AM: [0, 6], // Armenia
  AO: [0, 6], // Angola
  AR: [0, 6], // Argentina
  AT: [0, 6], // Austria
  AU: [0, 6], // Australia
  AZ: [6],    // Azerbaijan (Saturday only)
  BA: [0, 6], // Bosnia and Herzegovina
  BB: [0, 6], // Barbados
  BD: [0],    // Bangladesh (Sunday only)
  BE: [0, 6], // Belgium
  BG: [0, 6], // Bulgaria
  BN: [5, 6], // Brunei (Friday-Saturday)
  BO: [0, 6], // Bolivia
  BR: [0, 6], // Brazil
  BS: [0, 6], // Bahamas
  BW: [0, 6], // Botswana
  BY: [0, 6], // Belarus
  BZ: [0, 6], // Belize
  CA: [0, 6], // Canada
  CH: [0, 6], // Switzerland
  CL: [0, 6], // Chile
  CM: [0, 6], // Cameroon
  CN: [0, 6], // China
  CO: [0, 6], // Colombia
  CR: [0, 6], // Costa Rica
  CU: [0, 6], // Cuba
  CY: [0, 6], // Cyprus
  CZ: [0, 6], // Czech Republic
  DE: [0, 6], // Germany
  DK: [0, 6], // Denmark
  DM: [0, 6], // Dominica
  DO: [0, 6], // Dominican Republic
  EC: [0, 6], // Ecuador
  EE: [0, 6], // Estonia
  ET: [0],    // Ethiopia (Sunday only)
  FI: [0, 6], // Finland
  FJ: [0, 6], // Fiji
  FM: [0, 6], // Micronesia
  FR: [0, 6], // France
  GA: [0, 6], // Gabon
  GB: [0, 6], // United Kingdom
  GD: [0, 6], // Grenada
  GE: [0, 6], // Georgia
  GH: [0, 6], // Ghana
  GM: [0, 6], // Gambia
  GN: [0, 6], // Guinea
  GQ: [0, 6], // Equatorial Guinea
  GR: [0, 6], // Greece
  GT: [0, 6], // Guatemala
  GW: [0, 6], // Guinea-Bissau
  GY: [0, 6], // Guyana
  HN: [0, 6], // Honduras
  HR: [0, 6], // Croatia
  HT: [0, 6], // Haiti
  HU: [0, 6], // Hungary
  ID: [0, 6], // Indonesia (except Aceh)
  IE: [0, 6], // Ireland
  IL: [5, 6], // Palestine (Friday-Saturday)
  IN: [0, 6], // India (national)
  IS: [0, 6], // Iceland
  IT: [0, 6], // Italy
  JM: [0, 6], // Jamaica
  JP: [0, 6], // Japan
  KE: [0, 6], // Kenya
  KG: [6],    // Kyrgyzstan (Saturday only)
  KH: [0, 1], // Cambodia (Sunday-Monday)
  KI: [0, 6], // Kiribati
  KM: [5, 6], // Comoros (Friday-Saturday)
  KN: [0, 6], // Saint Kitts and Nevis
  KR: [0, 6], // South Korea
  KZ: [0, 6], // Kazakhstan
  LA: [0, 6], // Laos
  LC: [0, 6], // Saint Lucia
  LI: [0, 6], // Liechtenstein
  LK: [0],    // Sri Lanka (Sunday only)
  LR: [0, 6], // Liberia
  LS: [0, 6], // Lesotho
  LT: [0, 6], // Lithuania
  LU: [0, 6], // Luxembourg
  LV: [0, 6], // Latvia
  MA: [5, 6], // Morocco (Friday-Saturday)
  MC: [0, 6], // Monaco
  MD: [0, 6], // Moldova
  ME: [0, 6], // Montenegro
  MG: [0, 6], // Madagascar
  MH: [0, 6], // Marshall Islands
  MK: [0, 6], // North Macedonia
  ML: [0, 6], // Mali
  MM: [0, 6], // Myanmar
  MN: [0, 1], // Mongolia (Sunday-Monday)
  MO: [0, 6], // Macao
  MT: [0, 6], // Malta
  MU: [0, 6], // Mauritius
  MV: [5],    // Maldives (Friday only)
  MW: [0],    // Malawi (Sunday only)
  MX: [0, 6], // Mexico
  MY: [0, 6], // Malaysia (except some states)
  MZ: [0, 6], // Mozambique
  NA: [0, 6], // Namibia
  NE: [0, 6], // Niger
  NG: [0, 6], // Nigeria
  NI: [0, 6], // Nicaragua
  NL: [0, 6], // Netherlands
  NO: [0, 6], // Norway
  NP: [0],    // Nepal (Sunday only)
  NR: [0, 6], // Nauru
  NZ: [0, 6], // New Zealand
  PA: [0, 6], // Panama
  PE: [0, 6], // Peru
  PG: [0, 6], // Papua New Guinea
  PH: [0, 6], // Philippines
  PK: [0],    // Pakistan (Sunday only)
  PL: [0, 6], // Poland
  PT: [0, 6], // Portugal
  PW: [0, 6], // Palau
  PY: [0, 6], // Paraguay
  RO: [0, 6], // Romania
  RS: [0, 6], // Serbia
  RU: [0, 6], // Russia
  RW: [0, 6], // Rwanda
  SB: [0, 6], // Solomon Islands
  SC: [0, 6], // Seychelles
  SE: [0, 6], // Sweden
  SG: [0, 6], // Singapore
  SI: [0, 6], // Slovenia
  SK: [0, 6], // Slovakia
  SL: [0, 6], // Sierra Leone
  SM: [0, 6], // San Marino
  SN: [0, 6], // Senegal
  SR: [0, 6], // Suriname
  SS: [0, 6], // South Sudan
  ST: [0, 6], // Sao Tome and Principe
  SV: [0, 6], // El Salvador
  SZ: [0, 6], // Eswatini
  TG: [0, 6], // Togo
  TH: [0, 6], // Thailand
  TJ: [6],    // Tajikistan (Saturday only)
  TL: [0, 6], // Timor-Leste
  TM: [6],    // Turkmenistan (Saturday only)
  TN: [5, 6], // Tunisia (Friday-Saturday)
  TO: [0, 6], // Tonga
  TR: [0, 6], // Turkey
  TT: [0, 6], // Trinidad and Tobago
  TV: [0, 6], // Tuvalu
  TW: [0, 6], // Taiwan
  TZ: [0, 6], // Tanzania
  UA: [0, 6], // Ukraine
  UG: [0, 6], // Uganda
  US: [0, 6], // United States
  UY: [0, 6], // Uruguay
  UZ: [6],    // Uzbekistan (Saturday only)
  VA: [0, 6], // Vatican City
  VC: [0, 6], // Saint Vincent and the Grenadines
  VE: [0, 6], // Venezuela
  VN: [0, 6], // Vietnam
  VU: [0, 6], // Vanuatu
  WS: [0, 6], // Samoa
  ZA: [0, 6], // South Africa
  ZM: [0],    // Zambia (Sunday only)
  ZW: [0, 6], // Zimbabwe

  // Regional variations
  'IN-TN': [0],  // Tamil Nadu, India (Sunday only)
  'IN-KL': [0],  // Kerala, India (Sunday only)
  'IN-WB': [0],  // West Bengal, India (Sunday only)
  'IN-MH': [0, 2], // Maharashtra, India (Sun + 2nd Sat)
  'US-PR': [0, 6], // Puerto Rico (Sat-Sun)
  'MY-14': [5, 6], // Johor, Malaysia (Friday-Saturday)
  'ID-AC': [5, 6], // Aceh, Indonesia (Friday-Saturday)
};

export const DEFAULT_WEEKEND: WeekendDays = [0, 6]; // Saturday/Sunday