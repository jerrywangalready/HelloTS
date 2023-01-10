(function () {

    // 描述一个对象的类型
    type myType = {
        name: string,
        age: number
    }

    /**
     * 接口用来定义一个类的结构, 用来定义一个类中应该包含哪些属性和方法
     *  同时接口也可以当成类型声明去使用
     *
     *  和类型不同的是, 可以定义同名的接口, 对属性或者方法进行补充
     */
    interface MyInterface {
        name: string;
        age: number;
    }

    interface MyInterface {
        gender: string
    }

    const obj: MyInterface = {
        name: 'sss',
        age: 111,
        gender: 'ga'
    }

    /**
     * 接口可以再定义类的时候去限制类的结构,
     *      接口中的所有属性都不能有实际的值
     *      接口只定义对象的结构, 而不考虑实际值
     *              在接口中所有的方法都是抽象方法
     */
    interface MyInt {
        name: string;

        sayHello(): void;
    }

    /**
     * 定义类时, 可以是类去实现一个接口,
     *      实现接口就是使类满足接口的要求
     */
    class MyClass implements MyInt {

        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(): void {
            console.log('Hello');
        }

    }

})();