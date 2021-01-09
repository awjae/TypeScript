//ts 의 변수의 대해서...

//ts 문자열
let str: string = 'hello';

//ts 숫자
let num: number = 10;

//ts 배열
let arr: Array<number> = [1,2,3];
let heros: Array<string> = ['Cat', 'Thpr', 'Hulk', 10];
let items: number[] = [1,2,3];

//ts 튜플 : 모든 배열의 인덱스에 타입을 정의 되어있는것
let address: [string, number] = ['gangnam', 100];

//ts 객체
let obj: object = {};
let person : object = {
    name : 'capt',
    age: 100
}
let person2: {name: string, age: number} = {
    name: 'thor',
    age:1000
}
// ts 진위값
let show: boolean = true;