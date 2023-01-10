(function f() {
    // 定义一个表示人的类
    class Person {
        // private name: string;
        private age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        get name() {
            return this.name;
        }

        set name(value: string) {
            this.name = value;
        }
    }

    const per = new Person('孙悟空', 18);

    /**
     * 现在属性是在对象中设置的, 属性可以任意的被修改
     */
    per.name = '猪八戒';
    // per.age = 38;


    console.log(per)


    class A {
        public num: number;
        private name: string; // 当前类使用
        protected pro: number; // 当前类和子类使用

        constructor(num: number) {
            this.num = num;
        }

    }

    class B extends A {
        test() {
            console.log(this.num);
            // console.log(this.name);
            console.log(this.pro);
        }
    }

    class C {
        constructor(public name: string, public age: number) {

        }

    }

    // C1 = C
    class C1 {

        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

    }



    const c = new C('abc', 123);

})()