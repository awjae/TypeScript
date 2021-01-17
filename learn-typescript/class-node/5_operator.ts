function logMessage(value: any) {
    console.log(value);
} 

logMessage('hello');
//logMessage(100); //error

// union type
function logMessage2(value: string | number) {
    console.log(value);
}
logMessage2('hello');
logMessage2(100);

var seho2: string | number | boolean;
function logMessage3(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must br string or number'); 
}
logMessage3('hello');
logMessage3(100);

interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    // someone.name; // union type 은 공통된 속성만 가져올 수 있다.
    // someone.skill;
    // someone.age;
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });
// 인터섹션 & : 모두 포함한..
function askSomeone2(someone: Developer & Person) {
    someone.name; 
    someone.skill;
    someone.age;
}
askSomeone2({ name: '캡틴', skill: '웹 개발', age: 24 });

var seho: string | number | boolean;
var capt: string & number & boolean;