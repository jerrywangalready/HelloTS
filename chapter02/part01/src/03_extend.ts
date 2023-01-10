(function (){

    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log('汪汪汪!');
        }
    }

    class Dog extends Animal{

        run() {
            console.log(`${this.name}在跑`)
        }

        sayHello() {
            console.log('汪汪汪!');
        }
    }

    class Cat extends Animal{

    }


})();