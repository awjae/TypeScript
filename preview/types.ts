//String, Number, Boolean, Object, Array, Any // Void, Never 

//Tuple : 길이가 지정된 배엻 형식
let arr: [string, number] = ['hi', 10];

//Enum 값들의 집합
enum Avengers { Capt, IronMan, Thor }
let hero: Avengers = Avengers.Capt;

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