


// es6 

// 상황에 따라서 이전 문법과 최신 문법을 적재적소에 활용할 줄 알아야 한다요 ... !

// ============= 1. 객체 초기화 ==============

/*
let name = "gamza"
let age = 20
let cute = true
*/

// 이전 방식
//let person = {name:name, age:age, cute:cute}

// es6 
//let person = { name, age, cute }

//console.log(person)


// =============== 2. 구조 분해 할당 ===============

// 2-1. 객체 

let blackpink = {
    name : "블랙핑크",
    num : 4
}

// 이전 방식
/*
let name = blackpink.name
let num = blackpink.num
console.log(name,num)  // 블랙핑크 4
*/

// es6
let {name, num} = blackpink
console.log(name,num)  // 블랙핑크 4


// 2-2. 배열

let array = [1,2,3]

// 이전 방식
/*
let a = array[0]
let b = array[1]
let c = array[2]

console.log(a,b,c) //1,2,3
*/

// es6
//let [a,b,c] = array
//console.log(a,b,c) // 1 2 3


// b,c만 쓰고 싶을 땐
// 3. ================ Spread ==================

// 배열에서 활용

// 1. 원하는 부분만 
let [a,...rest] = array
console.log(rest) // [2,3]

// 2. 배열 합칠 때 
let A =[1,2]
let B =[3,4]
let C =[5,6]
//이전 
let result = A.concat(B,C)
console.log(result) //[ 1, 2, 3, 4, 5, 6 ]

//es6
let result2 = [...A,...B,...C]
console.log(result2) //[ 1, 2, 3, 4, 5, 6 ]


// 객체에서도 ... 사용 가능
let person2 = {
    name2 : "swpotato",
    age2 : 20,
    cute2 : true
}

let {name2,...restInfo} = person2
console.log(name2, restInfo) // swpotato { age2: 20, cute2: true }




// ============= 4. 템플릿 리터럴 =================

let nameIs = "gamza"
let age = 20

// 이전 방식
//console.log("제 이름은 "+nameIs,"입니다. 제 나이는 "+age+"살 입니다.")
// es6
console.log(`제 이름은 ${nameIs} 입니다. 제 나이는 ${age}살 입니다.`)


// =========== 5. 함수 선언 방식 =================

// 일반 함수 사용 예시 
function foo() {
    console.log("hello")
}
foo()
// es6 문법 예시 
// => 가 function 역할 / 100% 대체는 불가 
let foo2 = ()=>{
    console.log("hello")
}
foo2()


// 예시 ) 
/*
function foo3(){
    return "haha"
}
*/
// 위 함수를 es6 방식으로 표현하면 더 간단하게 표현 가능
// 함수가 한 줄이면 return 생략 가능
//함수가 한 줄이고 리턴만 있으면 {} 생략 가능 
let foo4 = ()=>"haha"

console.log(foo4())


// 일반 함수에는 있지만 화살표 함수에는 없는게 있음
// this 
/*
let age2 = 15
let person = {
    name: "park",
    age2: 20,
    getInfo:function(){
        console.log(this.age2)
    }
}

person.getInfo() 
*/
// this 안 쓸 때 
// object안에 age 값이 아닌 전역변수 age 값인 15가 나옴
// this 사용시 
// 20 출력

// this : 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수
// 전역에서 사용할 때와 함수 안에서 사용할 때를 구분할 수 있음


// 화살표 함수에서는 this.age2를 확인하려고 하면 undefined가 나옴
// 화살표 함수는 스스로 this를 생성할 수 없다.
let age2 = 15
let person = {
    name: "park",
    age2: 20,
    getInfo:()=>{
        console.log(this.age2)
    }
}
person.getInfo() 

// 결론 : this를 써야 하는 경우엔 일반 함수를 쓰자 !!! 


