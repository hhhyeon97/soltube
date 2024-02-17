

// 배열 함수
/*
forEach : 반환값이 없다, 단순 for문과 같이 작동
map : 반환값을 배열에 담아 반환
filter : 조건에 충족하는(true) 아이템만 배열에 담아 반환
some : 조건에 충족하는 아이템이 하나라도 있으면 true 반환, 아니면 false 반환
every : 모든 배열에 아이템이 조건을 충족하면 true 반환, 아니면 false 반환
find : 조건에 충족하는 아이템 하나만 반환(여러개라면 첫번째것만 반환)
findIndex : 조건에 충족하는 아이템의 인덱스값 반환 (여러개라면 첫번째 아이템의 인덱스번호만 반환)
*/

let names = ["Jane", "John", "Emily", "Michael", "Sophia", "Daniel", "Olivia", "William", "Isabella", "Ethan"];

/*
for(let i =0; i<names.length; i++){
    console.log(names[i])
}
*/


// ============== forEach 예시 ================ 

// 방법 1 
/*
function printName(item){
    console.log(item)
}
*/
// forEach가 알아서 회전을 하면서 매번 아이템을 하나씩 넘김
//names.forEach(printName)

// 방법 2
// printName 함수는 다른데도 쓰일게 아니므로
// 익명함수로 대체 
// 익명함수는 불필요하게 메모리를 차지하지 않고 사용되고 사라짐
// 일회성 느낌 !

/*
names.forEach(function (item){
    console.log(item)
})
*/

// 방법 3 
// es6 문법으로 교체
// 코드가 더 간결해짐 
// forEach는 index도 넘겨줌 !! 
names.forEach((item,index)=>{console.log(item,index)})


// ================ map ================
// forEach는 반환값이 없음
// map은 반드시 배열을 반환한다 !
// 배열에 무슨 값을 넣어줄지는 return부분에서 결정

let data = names.map((item)=>{
    return item+"하하"
})
console.log(data)


// 활용 예시 
// map은 내가 원하는 데이터만 가져오고 싶을 때 많이 쓰인다 !!

let ceoList = [
    {name: "Elon Musk", age: 22, ceo: true},
    {name: "Tim Cook", age: 31, ceo: true},
    {name: "Satya Nadella", age: 47, ceo: true}
];
// 필요한 부분만 가져올 수 있음 ! 
let data2 = ceoList.map((item)=>{
    return item.name
})
console.log(data2)

// ================ filter ================
// 조건을 넣고 조건에 대해 참인 것만 반환됨
// true / false로 떨어지는 조건으로 넣어야 함 !

let data3 = ceoList.filter((item)=>{
    return item.age==22
})
console.log(data3) // [ { name: 'Elon Musk', age: 22, ceo: true } ]

let data4 = names.filter((item)=>{
    return item.startsWith("J")
})
console.log(data4) // [ 'Jane', 'John' ]


// ================ some ================
// 조건에 만족하는 게 하나라도 있으면 true 반환 

let data5 = names.some((item)=>{
    return item.startsWith("J")
})
console.log(data5) // true

// ================ every ================
// 배열 안에 있는 모든 아이템이 조건을 충족하면 true , 
// 아니면 false 반환

let data6 = names.every((item)=>{
    return item.length>0
})
console.log(data6) // true


// ================ find ================
// filter는 결과를 배열에 담아서 주고
// find는 해당 값만 준다.
// filter는 조건에 속하는 요소를 전부 반환
// find는 첫번째로 찾은 하나만 반환

// find는 정확한 값 딱 하나만 찾을 때 좋음 !

let data7 = names.find((item)=>{
    return item.startsWith("J")
})
console.log(data7) // Jane

// ================ findIndex ================
// 조건에 충족하는 아이템의 인덱스 번호를 찾아준다.
// 여러개라면 첫번째 아이템의 인덱스 번호만 반환 !

let data8 = names.findIndex((item)=>{
    return item=="Jane"
})
console.log(data8) // 0 
