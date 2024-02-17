

/* 개요
자바스크립트의 기본 문법
11. 함수
함수문제풀기
*/

// 함수 : 어떤 일의 단위 
// 자주 쓰는 내용들을 묶어 함수로 만들어 두고 필요할 때 호출해서 사용할 수 있다.

// 함수 형태
/*
function 함수명 (매개변수){
    내용 입력
    return 반환
}
*/

// 예시 버거 함수
function makeBurger(type, size, num) { // 매개변수는 순차적으로 !! 불고기,L,0이란 값이 각 매개변수에 순서대로 들어감 !
    console.log("매개변수 값은 ? ", type)
    console.log("빵 올라가요")
    console.log("상추 올라가요")
  
    if (num < 1) {
      return "버거 개수가 0개 입니다."
    }
  
  
    if (type == "불고기") {
      console.log("고기패티 올라가요")
    } else if (type == "새우") {
      console.log("새우패티 올라가요")
    }
    console.log("빵 덮을게요")
    console.log(type, "버거", size, "사이즈", num + "개 준비완료")
    return "완료되었습니다!"
  }
  
  function serveCoke() {
    console.log("콜라 사이즈 선택")
    console.log("얼음 펐어요")
    console.log("콜라 담았어요")
  }
  
  function serveFF() {
    console.log("감튀 사이즈 선택")
    console.log("감튀 담았어요")
  }
  
  let result = makeBurger("불고기", "L", 0)
  
  console.log("버거 프로세스 결과", result)

  // 매개변수 : 함수에 전달해야 할 내용이 있을 때
  // 이 함수가 실행될 때 알아야 하는 내용이 있을 때
  // 매개변수를 통해 전달한다.

  // return : 반환값, 함수 완료 후 반환되어야 하는 값이 있을 때 사용

  // 함수는 반드시 불러야 실행된다. 호출해 !!!

  // 함수의 또 다른 이름들

  // method: 메서드, 함수와 같은 뜻이다.
  // 익명 함수 Anonymous function : 일시적으로 쓰이고 말 함수들에 대해선 익명함수로 만들어준다.
  // 람다식 함수 : => 를 사용하여 함수를 정의하는 경우이다. - > 추후 배울 예정
  // 콜백 함수 : 다른 함수의 매개변수로 전달된 함수
  // 주로 어떤 함수에 매개변수로 들어가 어떤 특정한 조건이 되었을 때만 호출이 된다.
  // (클릭 이벤트나 타이머이벤트 등)


// 함수안에 함수를 부를 수도 있다.
function makeSet() {
    makeBurger("새우", "M", 2)
    serveFF()
    serveCoke()
  }
  
  makeSet()


  // 문제 풀기

  // 함수 문제

// 1
function greet(name) {
    console.log("안녕 내 이름은 " + name + "야")
    return name
  }
  //greet("감자")
  let result1 = greet("감자")
  console.log("이름 : " + result1)
  
  // 2
  function meetAt(year, month, day) {
    if (year != null) {
      if (month != null) {
        if (day != null) {
          return `${year}/${month}/${day}`;
        }
        return `${year}년 ${month}월`;
      }
      return `${year}년`;
    }
  }
  let result6 = meetAt(2024, 2, 9);
  console.log(result6); // 출력: 2024/2/9
  
// 3 
// arr 값들 중 가장 작은 값을 리턴

function findSmallestElement(arr) {

    if (arr.length == 0) {
      return 0
    }
    // 배열의 첫 번째 요소를 초기 최소값으로 설정
    let smallest = arr[0];
  
    // 배열의 나머지 요소와 비교하여 더 작은 값을 찾음
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  
  }
  
  console.log(findSmallestElement([1, 2, 3, 4, -10]))  


//4 

function calc(money) {
    let bills = [50000, 10000, 5000, 1000, 500, 100];
    let result = '';
  
    for (let i = 0; i < bills.length; i++) {
      let count = Math.floor(money / bills[i]);
      money %= bills[i];
      if (count > 0) {
        result += `${bills[i]}원 X ${count} `;
      }
    }
  
    return result.trim(); // 문자열 앞뒤 공백 제거
  }
  
  console.log(calc(65300));