function logText(text) {
    console.log(text);
    return text;
}
logText(19); // 숫자 19
logText('하이'); // 문자열 '하이'
logText(true); // 진위값 true

// 제네릭 : 호출하는 시점에 타입이 정해진다.
function logText2<T>(text: T): T {
    console.log(text);
    return text;
}
logText2<string>('하이');

//같은 실행을 하지만 타입이 다름에 따른 이슈 사항, 타입으로 뭐가 들어갈껏을 사용하는 시점에 정해...
function logText3(text: string) {
    console.log(text);
    text.split('').reverse().join('');
    return text;
}
function logNumber(num: number) {
    console.log(num);
    return num;
}

function logText4(text: string | number) {
    console.log(text);
    return text;
}

const a = logText4('a');
logText4(40);

function logTex5t<T>(text: T[]):T[] {
    console.log(text.length) // 타입을 통해 힌트를 줄 수도 있다.
    return text;
}


interface Dropdown {
    value: string;
    selected: boolean;
}

interface Dropdown2<T> {
    value: T;
    selected: boolean;
}

// 제네릭 타입 제한2 : 2정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T):T {
    console.log(text.length) 
    return text;
}
logTextLength(10);
logTextLength({length : 10});

// 제네릭 타입 제한3 : keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}
// ShoppingItem중 한가지.. (타입의 범위를 줄인다)
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");
