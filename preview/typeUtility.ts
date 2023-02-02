// 유틸리티 타입
// 이미 정의해 놓은 타입을 변환할 때 사용하기 좋은 타입 문법
// 기존의 인터페이스, 제네릭 등의 기본 문법으로 충분히 타입을 변환할 수 있지만 유틸리티 타입을 쓰면 훨씬 더 간결한 문법으로 타입을 정의 가능

//1. 특정 타입의 부분 집합
interface Address {
  email: string;
  address: string;
}
type MayHaveEmail = Partial<Address>;
const me: MayHaveEmail = {}; // 가능
const you: MayHaveEmail = { email: 'test@abc.com' }; // 가능
const all: MayHaveEmail = { email: 'capt@hero.com', address: 'Pangyo' }; // 가능

//2. 특정 타입에서 몇 개의 속성을 선택(pick)하여 타입
interface Hero {
  name: string;
  skill: string;
}
const human: Pick<Hero, 'name'> = {
  name: '스킬이 없는 사람',
};

//3. Omit 지정된 속성 제외
interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}
const phoneBook: Omit<AddressBook, 'address'> = {
  name: '재택근무',
  phone: 12342223333,
  company: '내 방'
}