// enum : 특정 값 의 집합
// 별도의 값을 넣지 않으면 숫자형...
// enum Shoes {
//     Nike,
//     Adidas
// }
enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes)

// 예제
function askQuestion(answer: string) {
    if (answer === 'yes') {
        console.log('정답입니다')
    }
    if (answer === 'no') {
        console.log('오답입니다.')
    }
}
askQuestion('예스');
askQuestion('y');
askQuestion('Yes');