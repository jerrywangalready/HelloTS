class Person {
    name: String = '孙悟空';
    readonly address: String = 'adada';
    static age: number = 18;
    static readonly abb: number = 100;

    sayHello() {
        console.log('hello')
    }

    static sayBye() {
        console.log('bye!')
    }
}

const per = new Person();

console.log(per.name);