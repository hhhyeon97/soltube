
// day04

/* 개요
자바스크립트의 기본 문법
switch / 삼항연산식
9.for문
*/

// ============ switch문 =============

/* 조건문 
- 조금 더 간결하고 의미가 명확해 보임
- case가 값으로 딱 정해진 경우에만 사용 가능
- 조건이 비교식일 경우 사용 불가 
*/

let menu = 8
// if (menu == 1) {
//   console.log("물건 사기")
// } else if (menu == 2) {
//   console.log("잔고 확인")
// } else if (menu == 3) {
//   console.log("히스토리 확인")
// } else {
//   console.log("홈으로 돌아가기")
// }

// 위의 if 문과 아래의 switch문은 같은 결과를 나타낸다.

switch (menu) {
  case 1:
    console.log("물건 사기")
    break;
  case 2:
    console.log("잔고 확인")
    break;
  case 3:
    console.log("히스토리 확인")
    break;
  default:
    console.log("홈으로 돌아가기")
}
// default는 if문의 else와 같은 역할
// 일치하는 case가 없을 때 실행 된다.

// case마다 break를 지정해줘야 한다.
// break 지정 안 할 시 조건에 만족하는 케이스
// 아래에 있는 케이스들도 들리게 되어
// 일치하지 않는 결과들도 띄우게 된다.

// case에 비교식을 지정할 수 없어서 범위에 대한 제한이 있다.


// ============ 삼항연산식 =============

let fruits = 2

/*
if (fruits <= 5){
    console.log("범위 안의 숫자입니다.")
} else {
    console.log("범위 밖의 숫자입니다.")
}
*/

// 삼항 연산자인 ?는 조건부 연산자이다.
// if문을 간단하게 표현할 수 있다.
// 조건에 따라 실행하는 내용이 하나일 때 쓰기 좋다.
// 조건에 따라 실행하는 내용이 다르다
// 삼항연산식 형태 : 조건식?참일 때 : 거짓일 때

let answer = fruits <=5?"범위 안의 숫자입니다." : "범위 밖의 숫자입니다."
console.log(answer)


// ================= 반복문 for문/while문=================

// for문은 정확히 몇 번 회전해야 하는지 범위를 알 때 사용하고
// while문은 주로 정확한 범위가 아닌 상태에 따른 반복일 때 사용된다.


// for문 형태

/* for (초기식,조건식,증감식){
    실행할 블록
}
*/

// i++  = i=i+1
for (let i=1; i<=10; i++){
    console.log("hi!",i);
}

// 짝수 출력해보기

//방법 1
for(let i=1;i<=10; i++){
    if(i%2==0){
        console.log(i)
    }
}
// 2,4,6,8,10

//방법 2
for(let i=0; i<=10; i+=2){
    console.log(i)
}
// 0,2,4,6,8,10

// 둘 중 좀 더 실행이 빠른 건
// 방법2이다. 
// 하지만 방법2가 아닌 방법1이 쓰여야 할 때도 있다.
// 적재적소 ...!!! 
// 결과는 같지만 뭐가 좀 더 효율적인 코드인지 생각해보는 것도 중요하다.


// 구구단 표현하기

// 이중 for문 사용

for(let i=2;i<=9;i++){
    for(let j=1;j<=9;j++){
        console.log(i+"*"+j+"="+i*j)
    }
}

// for문은 배열이랑 자주 같이 활용된다.

let fruit = ["banana","apple","grape","mango"]

for(let i=0;i<fruit.length;i++){
    console.log(fruit[i])
}

// while문

let a = 1
while(a<=10){
    console.log("while문 실행",a)
    a++;
}


/*
let buttonclick = false;
while(buttonclick == true){
    console.log("while문 실행")
}
*/


// 반복문 문제

// 1. 1 ~ 100까지 더하는 for문을 만들고 결과 출력하기

let sum = 0
for(let x=1;x<=100;x++){
    sum += x;
}
console.log(sum) // 5050

// 2. 1 ~ 100까지 홀수만 출력하기

let sum1 = 0
for(let z=1;z<=100;z+=2){
    console.log(z)
}

// 3. 1 ~ 50까지 369 결과 프린트하기
// ex) 1 2 짝 4 5 짝 .... 28 짝 짝 짝 짝 짝짝 .. 


for (let c = 1; c <= 50; c++) {
    let result = ''; // 결과 문자열 초기화
    let num = c; // 현재 숫자 저장
  
    // 현재 숫자에 포함된 3, 6, 9의 개수를 세는 반복문
    while (num > 0) {
      if (num % 10 === 3 || num % 10 === 6 || num % 10 === 9) {
        result += '짝'; // 3, 6, 9에 해당하는 경우 '짝' 추가
      }
      num = Math.floor(num / 10); // 다음 자릿수로 이동
    }
  
    // '짝'이 추가되지 않은 경우에는 숫자를 그대로 추가
    if (result === '') {
      result = c;
    }
  
    console.log(result); // 결과 출력
  }

  // 4. 주어진 숫자가 소수이면 true / 아니면 false를 출력하는 프로그램 구현

  function isPrime(number) {
    // 1 이하의 수는 소수가 아님
    if (number <= 1) {
      return false;
    }
  
    // 2는 소수
    if (number === 2) {
      return true;
    }
  
    // 2를 제외한 모든 짝수는 소수가 아님
    if (number % 2 === 0) {
      return false;
    }
  
    // 제곱근까지의 모든 홀수로 나누어 떨어지는지 확인
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        return false;
      }
    }
  
    // 위의 조건들을 모두 통과하면 소수임
    return true;
  }
  
  // isPrime 함수 호출
  console.log(isPrime(2));  //true

// =============================================
// 3. 선생님 풀이
for(let i=1;i<=50;i++){
    let stringValue = i.toString() // 숫자 타입을 string 타입으로 바꾸는 함수 
    let result = ""
    for(let j=0;j<stringValue.length;j++){
      if(stringValue[j] == "3" ||stringValue[j] == "6" ||stringValue[j] == "9" ){
        result+="짝"
      }
    }
    console.log(result.length>0?result:i)
  }

// 4. 선생님 풀이
let n =11
let isPrime = true

if (n ===1){// 1은 소수가 아님 
    isPrime = false
}
for(let i=2;i<n;i++){
  if(n % i == 0){
    isPrime =  false 
  }
}
console.log(isPrime)


// ========== for in / for of ===============

// for ... of

let chu = ['apple', 'mango', 'grape']

// for (let i = 0; i < chu.length; i++) {
//   console.log("i like ", chu[i])
// }

let sentence = '안녕하세요'

for (let char of sentence) {
  console.log("char", char)
}

// for ... in

let person = {
  name: "kong",
  age: 20,
  cute: true,
}

// 키 값을 조회하고 싶을 때 / 동적인 객체의 값에 접근할 때 
// for in 사용
for (let key in person) {
  console.log("key", key)
}
/* 결과 
key name
key age
key cute
*/


