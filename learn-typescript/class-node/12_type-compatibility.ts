// 타입 호환성
interface Developer {
    name: string;
    skill: string;
}

interface Person1 {
    name: string;
}

class Person2 {
    name: string;
    skill: string;
}

var developer: Developer;
var person: Person1;
// developer = person;
person = developer;
developer = new Person2();

// 함수
var add = function (a: number) {
    // ...
    //console.log(a);
}
var sum = function (a: number, b: number) {
    //return a + b;
}

// add = sum;
sum = add;

// 제네릭
interface Empty<T> {
    //..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;
