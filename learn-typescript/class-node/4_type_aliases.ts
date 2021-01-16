// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

var seho: Person = {
    name: '세포',
    age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string, done: boolean };
function getTodo(todo: Todo) {

}


//타입별칭과 인터페이스의 차이점은 확장 가능/ 불가능 여부 입니다. 
// 가능한 type 보단 interface로 선언해라