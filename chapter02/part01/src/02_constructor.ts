class Dog {
    name: string;
    age: number;

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age
    }

    bark() {

        alert('汪汪汪!');
    }
}

const dog = new Dog('小花', 5);

console.log(dog);