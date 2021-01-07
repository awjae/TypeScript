// function sum(a, b) {
//     return a + b;
// }
// sum(10, '20'); // 1020
//var result = sum(10, 20);

// @ts-check

//JSDoc
//JSDoc로 VSCode가 preview를 제공함
/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum(a, b) {
    return a + b;
}
sum(10, 20);
sum(10, '20'); // 하지만 에러를 표출해주지않는다 
// js 로 타입추론이 가능하긴하지만 역시 ts가 더 강력하다