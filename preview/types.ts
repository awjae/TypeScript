//String, Number, Boolean, Object, Array, Any // Void, Never 

//Tuple : 길이가 지정된 배엻 형식
let arr: [string, number] = ['hi', 10];

//Enum 값들의 집합
//이넘은 런타임시에 실제 객체 형태로 존재합니다. 예를 들어 아래와 같은 이넘 코드가 있을 때
enum Avengers { Capt, IronMan, Thor }
let hero: Avengers = Avengers.Capt;
enum ResponseYN {
  No = 0,
  Yes = 1,
}
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
enum LogLevel {
  ERROR, WARN, INFO, DEBUG
}
// 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
type LogLevelStrings = keyof typeof LogLevel;

//this 정의
interface Vue {
  el: string;
  count: number;
  init(this: Vue): () => {};
}
let vm: Vue = {
  el: '#app',
  count: 10,
  init: function(this: Vue) {
    return () => {
      return this.count;
    }
  }
}
let getCount = vm.init();
let count = getCount();
console.log(count); // 10

class Handler {
  info: string;
  onClick(this: void, e: Event) {
      // `this`의 타입이 void이기 때문에 여기서 `this`를 사용할 수 없습니다.
      console.log(this);
      console.log('clicked!');
  }
}
let handler = new Handler();
handler.onClick(new Event('click'));


//인터페이스 vs ts  :  type과 interface의 쓰임새를 생각하고 각각에 맞게 사용해주는 게 좋다고 생각
//인터페이스의 경우에는 선언적 확장이 가능하다는 점
//type은 경우 그저 interface처럼 구현을 한다기보다는 값을 담아두기 위해 사용
//interface는 하나의 규격이기 때문에 그것을 이용해 구현하고자 할 때 사용하면 될 거라 생각
type PositionType = {
  x: number;
  y: number;
};
interface PositionInterface {
  x: number;
  y: number;
}
interface ZpositionInterface extends PositionInterface {
  z: number;
}
type ZpositionType = PositionType & { z: number };
interface PositionInterface {
  z: number;
}


// 합집 교집
let age: number | string;
interface Person {
  이름: string;
  age: number;
}
interface 개발자 {
  이름: string;
  skill: number;
}
type Capt = Person & 개발자;

//Class
class Developer {
  readonly name: string;
  constructor(theName: string) {
      this.name = theName;
  }
}
let john = new Developer("John");
// john.name = "John"; // error! name is readonly.


//제네릭 : 자바랑 같은 개념 / 여러 타입에서 동작하는 컴포넌트를 생성하는데 사용 : 타입 변수의 다형성  * any는 타입추론을 아예 수행하지않는다
class Generic<T> {
  private test: Array<T>;
  constructor(test: Array<T>) {
    this.test = test;
  }
  get testLength () {
    return this.test.reduce((curr, acc) => <any>curr + <any>acc);
  }
}
let a = new Generic(['a','a','a']);
let b = new Generic([1,2,3,4]);
console.log(a.testLength, b.testLength)