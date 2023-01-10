/*
泛型
 */

// 定义
function fn<T>(a: T): T {
    return a;
}

// 使用
let result = fn(10);// 自动推断
let result2 = fn<string>('hello');// 手动指定


// 多泛型
function fn2<T, K>(a: T, b: K): T {
    console.log(b);
    return a;
}

fn2<number, string>(123, 'hello');

interface Inter {
    length: number;
}

function fn3<T extends Inter>(a: T): number {
    return a.length;

}

fn3('123');
fn3({name: 'ly', length: 2})


class MyClass<T> {
    name: T;

    constructor(name: T) {
        this.name = name;
    }
}

const mc = new MyClass<string>('孙悟空');

