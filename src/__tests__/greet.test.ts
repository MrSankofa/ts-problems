import {greet} from '../index';
import { Person } from '../Person';



describe("Typescript Pain points", () => {

    let practiceString = "fedabc";
    let practiceIntegers = [3, 2, 1, 6, 5, 4];

    let obj = {
        firstName: "brett",
        lastName: "jones",
        age: 23,
        id: 123123
    }

    let personList = [ 
        new Person({...obj}), 
        new Person(  {firstName: "courtney",
        lastName: "jones",
        age: 35,
        id: 1234123}), 
        new Person({firstName: "autumn",
            lastName: "jones",
            age: 23,
            id: 49382181})];

    const frequencyObj = {};
    const frequencyMap = new Map();
    const frequencySet = new Set();

    const genericString = "brett";


    beforeEach(() => {
        practiceString = "fedabc";
        practiceIntegers = [3, 2, 1, 6, 5, 4];
        personList = [ 
            new Person({...obj}), 
            new Person(  {firstName: "courtney",
            lastName: "jones",
            age: 35,
            id: 1234123}), 
            new Person({firstName: "autumn",
                lastName: "jones",
                age: 23,
                id: 49382181})];
    });


    test("greet function returns correct message", () => {
        expect(greet("World")).toBe("Hello, World!");
    });

    test("Character Frequency", () => {

        // const underTest = new Map();
        const underTest: Record<string, number> = {};

        for( const letter of genericString.split("")) {
            // underTest.set(letter, (underTest.get(letter) | 0) + 1)
            underTest[letter] = (underTest[letter] || 0) + 1;
        }

        expect(underTest["b"]).toBe(1);
        expect(underTest["r"]).toBe(1);
        expect(underTest["e"]).toBe(1);
        expect(underTest["t"]).toBe(2);

        // expect(underTest.get("b")).toBe(1);
        // expect(underTest.get("r")).toBe(1);
        // expect(underTest.get("e")).toBe(1);
        // expect(underTest.get("t")).toBe(2);
    });

    test("setToMap", () => {
        for (const letter of genericString.split("")) {
            frequencySet.add(letter);
        }

        frequencySet.forEach((value) => {
            frequencyMap.set(value, value);
        })

        expect(frequencyMap.get("b")).toBeTruthy();
        expect(frequencyMap.get("r")).toBeTruthy();
        expect(frequencyMap.get("e")).toBeTruthy();
        expect(frequencyMap.get("t")).toBeTruthy();


    });

    test("List to Primitive", () => {

        expect(practiceIntegers.reduce((pv, cv) => pv + cv, 0)).toBe(21);

    });

    test("Sort letters in string", () => {
        practiceIntegers = practiceIntegers.sort((a,b) => a - b);

        expect(practiceIntegers[0]).toBe(1);
        expect(practiceIntegers[1]).toBe(2);
        expect(practiceIntegers[2]).toBe(3);
        expect(practiceIntegers[3]).toBe(4);
        expect(practiceIntegers[4]).toBe(5);
        expect(practiceIntegers[5]).toBe(6);
    });

    test("Sort letters in string in reverse", () => {
        practiceIntegers = practiceIntegers.sort((a,b) => b - a);

        expect(practiceIntegers[0]).toBe(6);
        expect(practiceIntegers[1]).toBe(5);
        expect(practiceIntegers[2]).toBe(4);
        expect(practiceIntegers[3]).toBe(3);
        expect(practiceIntegers[4]).toBe(2);
        expect(practiceIntegers[5]).toBe(1);
    });

});
