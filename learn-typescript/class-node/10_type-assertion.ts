// 타입 단언 type-assertion

var a: any;
a = 20;
a = 'a';
var b = a as string;

// DOM API 조작
var div = document.querySelector('div') as HTMLDivElement;
if (div) {
    div.innerText 
}