
// day01

/* 개요
자바스크립트의 기본 문법
1. 변수란?
2. 자료형과 연산자
++ 호이스팅 / let 과 var의 차이점
*/

// ======== 1. 변수란 ? ========

// 변수란 값을 담는 박스 - > 값을 저장하기 위해 이름을 가진 저장 공간

// 변수 선언 let, const, var
// = 은 같다 x - > 오른쪽 값을 왼쪽의 변수에 담는다.
// 변수의 값은 유니크 해야 한다.
// 코드 흐름 위 - > 아래
let color = "black";
let color2 = "green";
// let은 값 변경 가능
color = "blue";

// const로 선언하면 한 번 할당한 값은 바뀌지 않는다.
const color3 = "red";
//color3 = "yellow";

var color4 = "white";
color4 = "gray";
var color4 = "orange"; // < --- 변수를 한 번 더 선언했는데도 에러가 나오지 않고 값이 출력됨 /

// 로그 출력 함수 console.log()
console.log(color, color2, color3, color4);


// ★ var 보다는 let, const를 사용하자 ! 

// ======== 2. 자료형과 연산자 ========

// 자료형
// string : 문자열 타입 / 큰 따옴표, 작은 따옴표 안에 들어가 있는 값
// 숫자 : 숫자 타입
// boolean : 논리 연산 true/false
// 그 외 : 배열, 객체 등 (뒤에 배움 !!)

// 연산자
// 기본 연산자 +,-,*,/,%, ++, --
// 단축 연산자 +=, -=, *=, /=, %=
// 관계 연산자 ==,===,!=,>,<,>=,<=
// === : ex) A === B - > A와 B의 값, 자료형이 같은지 비교
// 논리 연산자 &&, ||, !

// 증가 연산
let a = 1
a++ // a=a+1과 같음
console.log(a) // 2

// 감소 연산
let b = 2
b-- // b=b-1과 같음
console.log(b) // 1

//단축된 연산
let c = 1
c+=3 // c=c+3을 줄여서 표현
console.log(c) // 4

let d = 3
d-=2 // d=d-2를 줄여서 표현
console.log(d) // 1

// NOT 연산자 : 값의 반대되는 값 반환
let f = true
console.log(!f) //false

// 같다라는 표현 == 
let x = 2
let y = 2
console.log(x == y) // true

// 다르다는 표현 !=
console.log(x != y) // false


// 값을 다시 담아줄 때는 = 을 써서 담아주자
let password = 1
password + 10 // <-- x 
password = password +2
console.log(password) // 3 

let pw = 2
//pw = pw >= 3 || pw > 1  
//pw = pw > 3 && pw > 1
console.log(pw) 

// ======== 3. 변수/자료형 문제 ========

// 1. 변수 값 변경하기

let A = 30
let B = 50
console.log(A,B) // 30,50
let C = A
A = B
B = C
console.log(A,B) // 50,30


// 2. 연산 결과 값 예측하기
/*
20+30 // 50
"20"+"30" // 2030
"Hello"+""+2021 // Hello2021
1+2*3 // 7
(1+3)**2 // 8
1/0 // 0으로 나눌 수 없음 ! 
6%2 // 0
7.5%2 // 1.5 
5==5 // true
5===5 // true
5=="5" // true - > JavaScript의 타입 변환 규칙 적용됨
5==="5" // false - > 값은 같지만 데이터유형이 다름
5!=5.0 // false
5!==5.0 // false
"true"===true // false 
5<=5.0 // true
5>=5 // true
true || true // true
true || false // true 
true && true // true
true && false // false
!true //false
!false // true 
*/

// ========★ 호이스팅 : let과 var의 차이 ========
// 호이스팅이란 ?
// 코드가 실행되기 전에 변수를 최상단으로 올림
// 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미
// var로 선언한 변수의 경우 호이스팅시 변수의 선언과 초기화(undefined로)를 같이 진행
// let과 const로 선언한 변수의 경우 호이스팅 시 변수를 초기화하지 않는다.
// let 은 TDZ이 존재하여 변수가 선언되기 전에는 쓸 수 없게 한다.
// -------- var의 문제들 --------
console.log(aa,bb) // undefined
var aa = 1
bb =1
var bb
console.log(aa,bb) // 1 

// var 는 함수만 지역변수로 호이스팅 되고
// 나머지는 다 전역변수로 올림
/*
for (var i = 1; i<5; i++){
    console.log(i) //1,2,3,4
}
console.log(i) // 1,2,3,4,5 
*/
// 같은 변수에 다른 값을 2번 할당해도 에러가 나지 않고 출력됨
var cc = 1
console.log(cc) // 1
var cc = 2
console.log(cc) // 2

// let은 var의 문제를 대체하기 위해 나옴 !!

/*
let dd = 1
console.log(dd) 
let dd = 2 // Identifier 'dd' has already been declared
console.log(dd) 
*/
/*
for (let i = 1; i<5; i++){
    console.log(i) 
}
console.log(i) // i is not defined
*/
/*
console.log(ee) // Cannot access 'ee' before initialization
let ee = 2
console.log(ee)
*/