// 定义类型变量
// 数字类型
let a: number;
a = 123;
// 字符串
let b: string;
b = '124';
// 布尔
let flag: boolean;
flag = true;
// 字面量
let w: 10;
// 联合类型
let sex: "male" | "female";
let h: boolean | string;
// any表示任意类型, 相当于对该变量关闭了TS的类型检测
let anyType: any;
// 未知类型, 实际上是一个类型安全的any, 不能直接赋值给其他类型变量
let e: unknown;
e = 10;
e = "hello";
e = false;
// 类型断言, 可以将unknown类型赋值给其他类型
b = e as string;
b = <string>e;

// void
function fn(): void {
    console.log("fn")
}

// never 永远不会返回结果
function fn2(): never {
    throw  new Error('报错了 ')
}

// 对象object
let o: object;
o = {};
o = function () {

};
let ob: { name: string, age?: number };// 指定包含的属性名和类型, ?表示该属性可选
ob = {name: 'lily'};
let op: { name: string, [propName: string]: any } // 任意字符串型的属性都可以增加

let d: (a: number, b: number) => number; // 定义一个返回值是number型的方法,同时定义参数

// array
let aa: string[];
let ab: number[];
let ac: Array<number>;

// 元组tuple,就是固定长度的数组
let ha: [string, string]
ha = ['hello', 'abc'];

// enum枚举
enum Gender {
    Male, Female
}

let i: { name: string, gender: Gender }
i = {
    name: 'sada',
    gender: Gender.Female
}
console.log(i.gender === Gender.Female)

// &用法
let j: { name: string } & { age: number }
j = {name: 'sun', age: 12}

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5
let m: myType
m = 5

// 在定义时直接赋值,可以省略类型关键字
let c = false;

// 定义参数和返回值类型
function sum(a: number, b: number): number {
    return a + b;
}