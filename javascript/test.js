for (let i = 1; i <= 50; i++) {
    let stringValue = i.toString()
    let result = ""
    for (let j = 0; j < stringValue.length; j++) {
      if (stringValue[j] === "3" || stringValue[j] === "6" || stringValue[j] === "9") {
        result += "짝"
      }
    }
    console.log(result.length > 0 ? result : i)
  }
  

  function isPrime(num) {
    // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
    // num > i
    for (let i = 2; i<num; i++) {
      if (num % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
        return false;
      }
    }
    // 소수는 1보다 큰 정수임으로
    // 1보다 작으면 false를 리턴한다
    return num > 1;
  }
  
  console.log(isPrime(12))

  console.log("=====================")

  for (let c = 1; c <= 50; c++) {
    // 현재 숫자에 포함된 '3', '6', '9'의 개수를 세는 변수 초기화
    let count369 = 0;
  
    // 숫자를 문자열로 변환하여 각 자리마다 '3', '6', '9'가 포함되어 있는지 확인하고 개수를 세기
    let numStr = c.toString();
    for (let i = 0; i < numStr.length; i++) {
      if (numStr[i] === '3' || numStr[i] === '6' || numStr[i] === '9') {
        count369++; // '3', '6', '9'가 포함된 경우 count369 증가
      }
    }
  
    // 삼항 연산자를 사용하여 결과 설정
    let result = (count369 === 1) ? '짝' : (count369 === 2) ? '짝짝' : c;
  
    console.log(result); // 결과 출력
  }

