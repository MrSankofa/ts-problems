export class Person {

    id: number;
    firstName: string;
    lastName: string;
    age: number;


    constructor({ id, firstName, lastName, age }: { id: number; firstName: string; lastName: string; age: number }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}