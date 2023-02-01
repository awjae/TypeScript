//String, Number, Boolean, Object, Array, Any // Void, Never 
//Tuple : 길이가 지정된 배엻 형식
var arr = ['hi', 10];
//Enum 값들의 집합
var Avengers;
(function (Avengers) {
    Avengers[Avengers["Capt"] = 0] = "Capt";
    Avengers[Avengers["IronMan"] = 1] = "IronMan";
    Avengers[Avengers["Thor"] = 2] = "Thor";
})(Avengers || (Avengers = {}));
var hero = Avengers.Capt;
var vm = {
    el: '#app',
    count: 10,
    init: function () {
        var _this = this;
        return function () {
            return _this.count;
        };
    }
};
var getCount = vm.init();
var count = getCount();
console.log(count); // 10
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.onClick = function (e) {
        // `this`의 타입이 void이기 때문에 여기서 `this`를 사용할 수 없습니다.
        console.log(this);
        console.log('clicked!');
    };
    return Handler;
}());
var handler = new Handler();
handler.onClick(new Event('click'));
