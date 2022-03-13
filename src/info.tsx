import React from 'react';
import axios from "axios";
import './App.css';

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number,
    title: string,
    completed: boolean,
}

function Info() {
    axios.get(url)
        .then(response => {
            const todo = response.data as Todo

            const id = todo.id
            const title = todo.title
            const finished = todo.completed

            logTodo(id, title, finished)
        })

    function logTodo (id: number, title: string, finished: boolean) {
        // console.log(`
        //         Todo ID: ${id}
        //         Todo title: ${title}
        //         Todo finished: ${finished}
        //     `)
    }

    let str: string
    let x: boolean
    x=true
    console.log(str='1')


    //alias or type
    type MyType = number | string
    const xxx: MyType = 7

    let vvv = JSON.parse('3')
    let vvvNumber: number = JSON.parse('3')
    console.log(vvvNumber)


    // Arrays
    // 1 списки - имеет любую длинну
    const arr: string[] = [] // тип строка
    const arrNum: Array<number> = [] // тип число
    const arrAnyType = [] // любой тип
    const arrAutoType = ['abc'] // тип строка
    // Вложенные массивы
    const arrInArr: string[][] = []
    arrInArr.push(['abc'])

    const arr2: (string | number)[] = [1, 'abc']
    // альтернативная запись
    type MyArr = (string | number)
    const arr3: MyArr[] = []


    // 2 кортежи(tuple) - имеет установленную длинну и типизированные элементы
    const tulpe1: [string, boolean, number] = ['abc', true, 2]



    // Объекты
    // автоматическая типизация
    const obj = {a: 1, b: 'abc', c: true}

    // ручная типизация
    const obj2: {a: number, b: string, c: boolean} = {a: 1, b: 'abc', c: true}

    //типизация алиасами
    type MyObj = {readonly a: number; b: string; c: boolean;}
    const obj3: MyObj = {a: 1, b: 'abc', c: true}

    //типизация интерфейсами
    // обязательно точки с запятой в конце - чтобы отличать от объектов
    interface MyInterface {
        readonly a: number; // только для чтения
        b: string;
        c: boolean;
        d?: number | string;
        methodTest(): number;
        methodTest2?: () => number;
        //плюс дополнительные ключи
        [key: string]: any;
    }

    const obj4: MyInterface = {
        a: 1,
        b: 'abc',
        c: true,
        // d: 0,
        methodTest() {
            return 4
        },
        ccc: 123,
        vv: '123',
    }


    // Объеденение интерфейсов
    // автоматическое объединение
    interface IPerson {
        name: string;
    }

    interface IPerson {
        age: number;
    }

    const myPerson: IPerson = {
        name: "John",
        age: 23
    }

    //ручное объединеие
    interface IAccount extends IPerson{
        login: string;
        skills: string[]
    }

    const myAccount: IAccount = {
        login: 'str',
        name: 'John',
        age: 23,
        skills: ['abc']
    }


    // объединеие типов
    type NewType = MyType & MyArr;

    const devArr: NewType[] = []


    // Функции
    // 1 Var
    const fn1 = (num: number): string => {
        return `${num}`
    }

    // 2 Var
    const fn2: (num: number) => string = (num) => {
        return `${num}`
    }

    // callBack
    const fn3 = (cb: (num: number) => string) => {
        return (num: number) => `${num}`
    }

    // callBack with Alias
    type MyCb = (num: number) => string

    const fn4 = (cb?: MyCb) => {
        if (cb === undefined) {
            return cb = String
        }
        cb(12)
    }

    // параметры по умолчанию
    function createPoint(x = 0, y = 0): [number, number] {
        return [x, y]
    }
    createPoint()
    //
    // //REST
    const f2 =(...nums: number[]): string => {
        return nums.join('-')
    }

    //func and obj
    interface IPrintObj {
        label: string
    }
    function printReport(obj: IPrintObj): void {
        console.log(obj.label)
    }

    const drink = {
        label: 'pepsi',
        price: 90
    }

    const phone = {
        label: 'iPhone',
        category: 'phone'
    }

    printReport(drink); // нет ошибки
    printReport(phone); // нет ошибки
    // printReport({label: 'Huawei', price; 1000}); // ошибка

    // Перегрузки
    //сложные функции можно разбивать на протсые
    // const pickCard = (x: number | {suit: string, card: number}[]): {suit: string, card: number} | number = {};
    //1я простая
    function pickCard(x: number): {suit: string, card: number};
    //2я простая
    function pickCard(x: {suit: string, card: number}[]): number;

    function pickCard (x: number | object): any {
        if (typeof x === 'object') return 5 // или сложные вычисления
        else if (typeof x === 'number') return {suit: 'string', card: 5} // или сложные вычисления
    }

    pickCard(7)
    pickCard([{suit: 'string', card: 5}])


    // GENERICS
    //операции со значением
    const valueFactory = (x: number): number => x
    const myValue = valueFactory(11)

    //операции с типами
    type TypeFactory<X> = X
    type MyType2 = TypeFactory<number>

    interface IValueContainer<Value> {
        value: Value
    }

    type StringContainer = IValueContainer<string>
    const xxxxx: StringContainer = {
        value: 'abc'
    }

    class ArrayOfNumber {
        constructor(public collection: number[]) {}

        get(index: number): number {
            return this.collection[index]
        }
    }

    class ArrayOfString {
        constructor(public collection: string[]) {}

        get(index: number): string {
            return this.collection[index]
        }
    }


    // Универсальный класс, чтобы не повторяться как в ArrayOfNumber и ArrayOfString
    class ArrayOfAnything<T> {
        constructor(public collection: T[]) {}

        get(index: number): T {
            return this.collection[index]
        }
    }

    const stringNew = new ArrayOfAnything<string>(['a', 'b', 'c'])
    const numberNew = new ArrayOfAnything<number>([1, 2, 3])




    // Function + GENERIC
    function printString(arr: string[]): void {
        for (const i of arr) {
            console.log(i)
        }
    }

    function printNumber(arr: number[]): void {
        for (const i of arr) {
            console.log(i)
        }
    }

    // без повторения кода
    function printAnything<T>(arr: T[]): void {
        for (const i of arr) {
            console.log(i)
        }
    }

    printAnything<number>([1, 2, 3])
    printAnything<string>(['a', 'b', 'c'])


    function fillArray<T>(len: number, elem: T): T[] {
        return new Array<T>(len).fill(elem)
    }

    const arr1 = fillArray(3, 'abc')
    console.log(arr1)


    interface ILengthwise {
        length: number;
    }

    function printLength<T extends ILengthwise>(arg: T) {
        return arg.length
    }

    printLength<string>('1')


    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key]
    }

    const myObj123 = {
        a: 1,
        b: 2,
        c: 3,
    }

    console.log(getProperty(myObj123, 'a'))








    return (
        <div className="App">
            <h1>Test</h1>
        </div>
    );
}

export default Info;
