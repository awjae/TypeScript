function add(a: number, b: number) {
    return a + b;
}
//add(10, '20');
//에러의 사전방지

var result = add(10, 20);
result.toLocaleString();

