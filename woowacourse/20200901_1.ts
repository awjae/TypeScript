let fo: number = 10; 
/**
 * 암묵적인 것 보다는 명시적인 것이 좋다. 읽기 쉬운...
 * number : 프리미티브 타입 => string, boolean, undefinded, function, arr
 */

type Age = number;
let age: Age = 10;
let weight: number = 23;
age = weight
/**
 * 타입 앨리어스 (실제 number 타입인데 앨리어스일 뿐! 이 경우는 의미만.. 표현력 향상)
 * 타입은 일종의 단위인데 이단위를 별도로 만들 수 있다.
 */

type Foo = {
    age : number;
    name : string;
}
const foo: Foo = {
    age : 10,
    name : 'kim',
}

interface Bar {
    age : Age;
    name : string;
}
const bar: Bar = {
    age : 10,
    name : 'kim',
}
/**
 * type Alice ? interface ? 어떨떄 무엇을 사용?
 */