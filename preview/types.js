//String, Number, Boolean, Object, Array, Any // Void, Never 
//Tuple : 길이가 지정된 배엻 형식
let arr = ['hi', 10];
//Enum 값들의 집합
//이넘은 런타임시에 실제 객체 형태로 존재합니다. 예를 들어 아래와 같은 이넘 코드가 있을 때
var Avengers;
(function (Avengers) {
    Avengers[Avengers["Capt"] = 0] = "Capt";
    Avengers[Avengers["IronMan"] = 1] = "IronMan";
    Avengers[Avengers["Thor"] = 2] = "Thor";
})(Avengers || (Avengers = {}));
let hero = Avengers.Capt;
var ResponseYN;
(function (ResponseYN) {
    ResponseYN[ResponseYN["No"] = 0] = "No";
    ResponseYN[ResponseYN["Yes"] = 1] = "Yes";
})(ResponseYN || (ResponseYN = {}));
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
let vm = {
    el: '#app',
    count: 10,
    init: function () {
        return () => {
            return this.count;
        };
    }
};
let getCount = vm.init();
let count = getCount();
console.log(count); // 10
class Handler {
    onClick(e) {
        // `this`의 타입이 void이기 때문에 여기서 `this`를 사용할 수 없습니다.
        console.log(this);
        console.log('clicked!');
    }
}
let handler = new Handler();
handler.onClick(new Event('click'));
// 합집 교집
let age;
//Class
class Developer {
    constructor(theName) {
        this.name = theName;
    }
}
let john = new Developer("John");
// john.name = "John"; // error! name is readonly.
//제네릭 : 자바랑 같은 개념 / 여러 타입에서 동작하는 컴포넌트를 생성하는데 사용 : 타입 변수의 다형성  * any는 타입추론을 아예 수행하지않는다
class Generic {
    constructor(test) {
        this.test = test;
    }
    get testLength() {
        return this.test.reduce((curr, acc) => curr + acc);
    }
}
let a = new Generic(['a', 'a', 'a']);
let b = new Generic([1, 2, 3, 4]);
console.log(a.testLength, b.testLength);
