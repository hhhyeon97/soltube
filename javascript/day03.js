
// day03

/* 개요
자바스크립트의 기본 문법
6.객체
7. If문
8. if문 문제
*/

// ============= 객체 ============= 

// 객체란 ?
// 영어로는 object라고 불린다.
// 객체는 관련 있는 정보를 묶어서 하나의 데이터를 표현하는 것
//데이터와 해당 데이터에 대한 동작(기능)을 함께 담을 수 있는 컨테이너
//객체는 중괄호 {}를 사용하여 정의되며, 키(key)와 값(value)의 쌍으로 이루어진 속성(properties)들의 집합
//객체는 값 뿐만 아니라 함수를 포함할 수 있다.
//예시의 greet 함수는 객체 내부에 정의되어 있으며, 객체의 속성으로 사용될 수 있다.

// 객체 정의 예시

let patient = {
    name : "gamza",
    age : 28,
    disease : "cold"
}

console.log(patient) // { name: 'gamza', age: 28, disease: 'cold' }

// 함수 포함 가능 예시
// 객체 생성
let person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  // 객체의 속성에 접근
  console.log(person.name); // "John"
  console.log(person.age); // 30
  
  // 객체의 메서드 호출
  person.greet(); // "Hello, my name is John"

// 객체의 키를 통해 데이터에 접근 가능 (점 표기법 또는 대괄호 표기법 사용)
//console.log(person.name); // John
//console.log(person['name']); // John

// 데이터 변경 가능
//person.age = 40
//person["age"] = 40
//person.greet();

// 객체에 있는 함수 호출 가능
//console.log(person.greet()) // Hello, my name is John

// 배열에 객체 형태 담기 ( 배열이랑 객체를 자주 같이 사용한다.)
let patientList = [{name:"kim",age:15},{name:"lee",age:37},{name:"park",age:25}]
console.log(patientList)
/*
[
  { name: 'kim', age: 15 },
  { name: 'lee', age: 37 },
  { name: 'park', age: 25 }
]
*/

console.log("첫번째 환자는 - > ",patientList[0]) // 첫번째 환자는 - >  { name: 'kim', age: 15 }
console.log("첫번째 환자의 나이는 - > ",patientList[0].age) // 첫번째 환자의 나이는 - >  15
console.log("첫번째 환자의 나이는 - > ",patientList[0]["age"]) // 첫번째 환자의 나이는 - >  15
console.log("두번째 환자의 이름 : ",patientList[1].name) // 두번째 환자의 이름 :  lee


// 객체와 객체지향 프로그래밍(OOP)은 다른 뜻이다.
// 객체는 단순히 자료형이고 OOP는 프로그래밍의 한 방식이다.
/*
객체(Object):

객체는 데이터와 그 데이터에 관련된 동작(메서드)을 함께 묶어서 표현하는 자료구조
JavaScript에서 객체는 중괄호 {}를 사용하여 정의되며, 속성(key-value 쌍)과 메서드를 포함할 수 있다.
예를 들어, { name: "John", age: 30 }와 같이 속성과 값을 가지는 자료구조가 객체이다.

객체지향 프로그래밍(Object-Oriented Programming, OOP):

객체지향 프로그래밍은 컴퓨터 프로그램을 객체들의 모임으로 파악하고,
객체 간의 상호작용을 통해 프로그램을 구성하는 프로그래밍 패러다임(방법론)이다.
OOP는 코드를 객체 단위로 구조화하고, 객체 간의 상호작용을 통해 프로그램을 작성한다.
주요한 개념으로는 클래스(Class), 객체(Object), 상속(Inheritance), 다형성(Polymorphism), 캡슐화(Encapsulation) 등이 있다.
대표적인 객체지향 프로그래밍 언어로는 Java, C++, Python 등이 있다.
객체지향 프로그래밍은 객체의 개념을 기반으로 하지만, 객체 자체와는 구별된다.
객체지향 프로그래밍은 코드의 구조와 설계 방법론을 의미하며, 객체는 그것을 실현하기 위한 도구이다.
JavaScript도 객체지향 프로그래밍을 지원하며, 객체지향적인 개발 방법을 채택할 수 있다.
*/




// ============= if문 ============= 

// if문은 여러 케이스를 처리하기 위해 쓰인다.
// if문에 조건을 쓸 때 비교연산자와 논리연산자가 많이 쓰인다.

// if 문의 형태 
/*
if(조건문){
    조건이 충족하면 할일들
}
*/

if(false){
    console.log("조건은 참입니다!")
}else {
    console.log("거짓입니다!")
}

// 조건이 여러개일 때는 else if 를 사용하면 된다.
let age = 21
if(age > 20){
    console.log("운전 가능")
}else if(age >=18){
    console.log("오토바이 운전 가능")
}
else {
    console.log("운전 불가능")
}
// if문 안에 if문을 넣을 수도 있다.
let license = false

if(age >20){
    if(license == true){
        console.log("운전 가능")
    }else{
        console.log("면허를 따야 합니다..")
    }
}else {
    console.log("운전 불가능")
}

// if문 문제 풀기 

// 1. 0,음수,양수 판별 프로그램 만들기

// 사용자 입력 받기
/*
let input = prompt("숫자를 입력하세요:");

// 입력된 값이 숫자인지 확인
if (!isNaN(input)) {
  let number = parseFloat(input);

  // 입력된 숫자 판단하기
  if (number === 0) {
    console.log("입력된 숫자는 0입니다.");
  } else if (number > 0) {
    console.log("입력된 숫자는 양수입니다.");
  } else {
    console.log("입력된 숫자는 음수입니다.");
  }
} else {
  console.log("입력된 값이 숫자가 아닙니다.");
}
*/

// 2. 점수에 따라 등급을 매기는 프로그램 만들기
/*
let report = 80

if (report >= 90) {
  console.log("A")
} else if (report >= 80 && report < 90) {
  console.log("B")
} else if (report >= 70 && report < 80) {
  console.log("C")
} else if (report >= 60 && report < 70) {
  console.log("D")
} else {
  console.log("F")
}
*/

// 좀 더 디벨롭
/*
let report = prompt("레포트 점수");

// 입력값이 빈 문자열인 경우
if (report === "") {
  console.log("입력된 값이 없습니다.");
} else {
  // 입력값을 숫자로 변환
  let score = parseFloat(report);

  // 점수가 0 이상 100 이하인지 확인
  if (score >= 0 && score <= 100) {
    if (score >= 90 && score <= 100) {
      console.log("A");
    } else if (score >= 80 && score < 90) {
      console.log("B");
    } else if (score >= 70 && score < 80) {
      console.log("C");
    } else if (score >= 60 && score < 70) {
      console.log("D");
    } else {
      console.log("F");
    }
  } else {
    console.log("범위에 없는 점수입니다.");
  }
}
*/

// 3. if문+배열 활용 문제 

let skills = ["HTML", "CSS", "JS", "React"]

if (skills.includes("HTML") && skills.includes("React")) {
  console.log("합격!")
} else if (skills.includes("HTML") || skills.includes("React")) {
  console.log("예비")
} else {
  console.log("탈락")
}


