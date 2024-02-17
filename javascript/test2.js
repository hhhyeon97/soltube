

// ========= 문제 풀기 ==========

// 1. 기존 문법을 es6문법으로 변경하기

let name = "noona's fruite store"

let fruits = ["bannana", "apple", "mango"]

let address = "Seoul"

/*
let store = { name: name, fruits: fruits, address: address }
*/

let store = { name, fruits, address }

console.log(store)

// 2. es6문법을 이용하여 출력하기 

console.log(`제 가게 이름은 ${name} 입니다. 위치는 ${address}에 있습니다.`)


// 3. 다음 코드를 destructoring을 이용하여 해결하기

/*
function calculate(obj) { // 함수 안을 바꾸시오 
    return a + b + c
  }
  
  calculate({ a: 1, b: 2, c: 3 })
*/

function calculate(obj) {
    let {a,b,c} =obj
    return a + b + c
  }
  
console.log(calculate({ a: 1, b: 2, c: 3 }))


// 4. 다음 문제에 정답이 true가 되게 하세요


/*
let name = "noona store"

let fruits = ["bannana", "apple", "mango"]

let address = {
  country: "Korea",
  city: "Seoul"
}

function findStore(obj) {
  let { name, address: { city } } = obj
  return name = "noona store" && city == "Seoul"
}

console.log(findStore({ name, fruits, address }))
*/


// 5. 다음과 같이 프린트 되게 코드를 바꾸세요

/* 
function getNumber() {
  let array = [1, 2, 3, 4, 5, 6]  // 여기서부터 바꾸세요
  return { first, third, forth }
}

console.log(getNumber())
// 결과값 {first: 1, third: 3, forth: 4}
*/

function getNumber() {
    let array = [1, 2, 3, 4, 5, 6]
    let [first, , third, forth] = array
    return { first, third, forth }
  }
  
  console.log(getNumber()) 

// 6. 다음의 결과가 true가 되게 하세요

function getCalendar(first, ...rest) {
    return (
      first === "January" &&
      rest[0] === "Febuary" &&
      rest[1] === "March" &&
      rest[2] === undefined
    );
  }
//console.log(getCalendar()); // 여기를 바꾸세요
  
console.log(getCalendar("January", "Febuary", "March")) // true
  

// 7. 두 배열 중 최소값을 찾는 함수를 완성하세요

/*
function getMinimum() {
    let a = [45, 23, 78]
    let b = [54, 11, 9]
    return Math.min() // 여기를 바꾸세요
  }
  
  console.log(getMinimum()) //Infinity
*/


function getMinimum() {
    let array1 = [45, 23, 78]
    let array2 = [54, 11, 9]
    return Math.min(...array1,...array2)
  }
  
  console.log(getMinimum()) //9


// 8. 다음의 함수를 화살표 함수로 바꾸세요
/*
function sumNumber() {
    //여기서부터 바꾸세요
    const sum = function(a, b) {
      return a + b;
    }
    return sum(40, 10);
  }
  
  console.log(sumNumber())
*/

function sumNumber() {
    const sum = (a, b) => a + b
    return sum(40, 10);
  }  
console.log(sumNumber())

// 9. 다음 함수를 화살표 함수로 바꾸세요

/*
function sumNumber() {
    //여기를 바꾸세요
    return addNumber(1)(2)(3);
    function addNumber(a) {
      return function(b) {
        return function(c) {
          return a + b + c;
        };
      };
    }
  }
  console.log(sumNumber());
*/

/* 내가 푼 방법
function sumNumber() {
    let addNumber = (a, b, c) => a + b + c;
    return addNumber(1, 2, 3)
}  

console.log(sumNumber());
*/

// 선생님 풀이 

function sumNumber() {
    let addNumber = (a) => (b) => (c) => a + b + c;
    return addNumber(1)(2)(3);
}

console.log(sumNumber());

