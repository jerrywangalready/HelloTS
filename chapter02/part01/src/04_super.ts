(function () {
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello() {
            console.log('动物在叫~');
        }
    }

    class Dog extends Animal {

        age: number;

        constructor(name: string, age: number) {
            super(name);
            this.age = age;
        }

        sayHello() {
            super.sayHello();

        }
    }

    const dog = new Dog('旺财', 13);
    dog.sayHello();


})();