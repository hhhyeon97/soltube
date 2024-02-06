
// day02

/* 개요
자바스크립트의 기본 문법
4. 배열
*/

// ======== 4. 배열 ========

// 배열이란 ?
//여러 값을 하나의 변수에 담고 싶을 때 사용
//들어온 순서대로 저장하는 자료 구조
//배열은 대괄호 []로 정의되며, 각 요소는 쉼표로 구분된다.

// 배열에 들어간 아이템에는 모두 인덱스 번호가 부여된다.
//인덱스를 사용하여 개별 요소에 접근할 수 있다.
//첫 번째 요소는 인덱스 0으로 시작한다.

// ===== 배열 예시 =====

//numbers 배열에는 숫자가, fruits 배열에는 문자열이,
// mixedArray 배열에는 숫자, 문자열, 불리언, 객체 등 다양한 유형의 값이 포함되어 있음.
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];
let mixedArray = [1, 'hello', true, { name: 'John' }];

// 배열 호출
console.log(fruits); // [ 'apple', 'banana', 'orange' ]

// 인덱스를 사용해 개별 요소에 접근 
console.log(numbers[0]); // 출력: 1
console.log(fruits[1]);  // 출력: 'banana'

// 인덱스를 사용해 값 변경
fruits[0] = "cherry" 
console.log(fruits)

fruits[2] = "tomato"
console.log(fruits)


// ======== 배열 함수 =========
//JavaScript 배열은 동적이다.
//이것은 배열의 크기가 미리 정해져 있지 않으며,
//필요에 따라 요소를 추가하거나 제거할 수 있다는 것을 의미한다.
// 배열에 저장된 각 값은 일반적으로 "요소(Element)" 또는 "아이템(Item)"이라고 부른다. 

// length : 배열의 길이를 구할 때 사용하는 속성

// pop() : 배열 내의 마지막 아이템 제거
// push(아이템) : 배열 마지막에 아이템 추가
// includes(아이템) : 배열에 아이템이 있는지 판별 / 있다면 true, 아니면 false 반환
// indexOf(아이템) : 아이템의 인덱스 번호를 구할 때 사용
// slice(시작점,끝점) : 시작점~끝점(미포함)까지 배열을 복사해서 리턴
// splice(시작점,개수) : 시작점부터 개수만큼 실제 배열에서 아이템 제거

// 사용법 참고 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


// ====== 배열 함수 예시 ====== 

fruits.pop()
console.log(fruits) // [ 'cherry', 'banana' ]

fruits.push("pineapple")
console.log(fruits) // [ 'cherry', 'banana', 'pineapple' ]

console.log(fruits.includes("cherry")) // true
console.log(fruits.includes("pear")) // false

console.log(fruits.indexOf("cherry")) // 0


// 1부터 잘린 값이 반환됨
console.log(fruits.slice(1)) // [ 'banana', 'pineapple' ]

fruits.push("apple")
console.log(fruits) // [ 'cherry', 'banana', 'pineapple', 'apple' ]

// 1부터 3(미포함)까지를 잘라 반환 - > 끝점 전까지를 자른다 - > 1,2를 잘른 것 !
console.log(fruits.slice(1,3)) // [ 'banana', 'pineapple' ]

// splice() : 시작점으로부터 몇개의 아이템을 제거할 지 정하기 
// 시작점 2 , 개수 1 - > 인덱스 2번에 해당하는 값을 자른다는 의미
fruits.splice(2,1)
// 잘린 후의 배열 확인 
console.log(fruits) // [ 'cherry', 'banana', 'apple' ]
fruits.splice(2,2)  // 2부터 2개의 값을 자름 
console.log(fruits) // [ 'cherry', 'banana' ] 


// ===== slice/splice 차이 =====
// slice는 기존의 배열을 건들이지 않고 새로운 배열을 만듦
// splice는 실제로 기존 배열이 잘림

// numbers = [1,2,3,4,5] 
numbers.slice(1,3)

// 실제로 잘린 게 아님 !
console.log(numbers) // [ 1, 2, 3, 4, 5 ]

// numbers.slice(1,3) 의 값을 출력하고 싶다면 변수에 담아서 출력
let a = numbers.slice(1,3)
console.log(a)  // [ 2, 3 ]


// 결론
// 기존 배열을 바꿔야 하면 splice,
// 잘린 값을 빼서 새 배열을 만들고 싶으면 slice 활용 


