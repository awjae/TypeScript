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