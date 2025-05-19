"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const data_1 = require("../src/data");
describe('Country Weekends Library', () => {
    describe('getWeekendDays', () => {
        it('should return correct weekend days for known countries', () => {
            // Middle East countries (Friday-Saturday)
            expect((0, src_1.getWeekendDays)('AE')).toEqual([5, 6]);
            expect((0, src_1.getWeekendDays)('SA')).toEqual([5, 6]);
            // Western countries (Saturday-Sunday)
            expect((0, src_1.getWeekendDays)('US')).toEqual([0, 6]);
            expect((0, src_1.getWeekendDays)('GB')).toEqual([0, 6]);
            // Special cases
            expect((0, src_1.getWeekendDays)('IR')).toEqual([5]); // Friday only
            expect((0, src_1.getWeekendDays)('NP')).toEqual([0]); // Sunday only
            expect((0, src_1.getWeekendDays)('DZ')).toEqual([5, 6]); // Friday-Saturday 
        });
        it('should handle case-insensitive country codes', () => {
            expect((0, src_1.getWeekendDays)('ae')).toEqual([5, 6]);
            expect((0, src_1.getWeekendDays)('Sa')).toEqual([5, 6]);
        });
        it('should return default weekend for unknown country codes', () => {
            expect((0, src_1.getWeekendDays)('XX')).toEqual(data_1.DEFAULT_WEEKEND);
            expect((0, src_1.getWeekendDays)('')).toEqual(data_1.DEFAULT_WEEKEND);
        });
        it('should handle regional variations', () => {
            expect((0, src_1.getWeekendDays)('IN-TN')).toEqual([0]);
            expect((0, src_1.getWeekendDays)('US-PR')).toEqual([0, 6]);
        });
    });
    describe('isWeekend', () => {
        it('should correctly identify weekend days', () => {
            // Friday in UAE (should be weekend)
            const friday = new Date('2023-06-02'); // Friday
            expect((0, src_1.isWeekend)(friday, 'AE')).toBe(true);
            // Saturday in US (should be weekend)
            const saturday = new Date('2023-06-03');
            expect((0, src_1.isWeekend)(saturday, 'US')).toBe(true);
            // Sunday in Nepal (should be weekend)
            const sunday = new Date('2023-06-04');
            expect((0, src_1.isWeekend)(sunday, 'NP')).toBe(true);
        });
        it('should correctly identify weekdays', () => {
            // Sunday in Israel (should be weekday)
            const sunday = new Date('2023-06-04');
            expect((0, src_1.isWeekend)(sunday, 'IL')).toBe(false);
            // Thursday in Algeria (should be weekday)
            const thursday = new Date('2023-06-01');
            expect((0, src_1.isWeekend)(thursday, 'DZ')).toBe(false);
        });
        it('should handle edge cases', () => {
            // Invalid date
            const invalidDate = new Date('invalid');
            expect((0, src_1.isWeekend)(invalidDate, 'US')).toBe(false);
            // Unknown country code
            const saturday = new Date('2023-06-03');
            expect((0, src_1.isWeekend)(saturday, 'XX')).toBe(true); // Defaults to Sat/Sun
        });
    });
    describe('Data Validation', () => {
        it('should have valid ISO country codes', () => {
            const validCountryCodes = Object.keys(data_1.countryWeekends)
                .filter(code => code.length === 2 || code.includes('-'));
            // Basic pattern check (either XX or XX-XX format)
            validCountryCodes.forEach(code => {
                expect(code).toMatch(/^([A-Z]{2}|[A-Z]{2}-[A-Z0-9]{1,3})$/);
            });
        });
        it('should have valid weekend day numbers', () => {
            Object.values(data_1.countryWeekends).forEach(days => {
                expect(Array.isArray(days)).toBe(true);
                days.forEach(day => {
                    expect(day).toBeGreaterThanOrEqual(0);
                    expect(day).toBeLessThanOrEqual(6);
                });
            });
        });
        it('should have no duplicates in weekend days array', () => {
            Object.values(data_1.countryWeekends).forEach(days => {
                const uniqueDays = [...new Set(days)];
                expect(days.length).toBe(uniqueDays.length);
            });
        });
    });
});
