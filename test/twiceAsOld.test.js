import { describe, it, expect } from "vitest";
import { calculateAgeTwiceAsOld } from "../src/twiceAsOld.js";


describe('calculateAgeTwiceAsOld', () => {
    it('should calculate when the father will be twice the age of his son', () => {
        expect(calculateAgeTwiceAsOld(36, 7)).toBe(22);
    });

    it('should calculate when the father has been twice the age of his son', () => {
        expect(calculateAgeTwiceAsOld(55, 30)).toBe(5);
    });

    it('should calculate that the father is already twice as old as his son and return 0', () => {
        expect(calculateAgeTwiceAsOld(42, 21)).toBe(0);
    });
    
    it('should calculate when the father will be twice the age of his son', () => {
        expect(calculateAgeTwiceAsOld(22, 1)).toBe(20);
    });

    it('should calculate when the father will be twice the age of his son', () => {
        expect(calculateAgeTwiceAsOld(29, 0)).toBe(29);
    });

});

