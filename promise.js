// 예시 1: 성공적인 Promise 처리
let promise1 = new Promise((resolve, reject) => {
    let success = true;  // 성공을 의미하는 변수

    if (success) {
        resolve("작업 성공");
    } else {
        reject("작업 실패");
    }
});

promise1
    .then(result => {
        console.log(result);  // "작업 성공" 출력
    })
    .catch(error => {
        console.log(error);  // 작업이 실패하면 이곳이 실행
    });

// 예시 2: 실패한 Promise 처리
let promise2 = new Promise((resolve, reject) => {
    let success = false;  // 실패를 의미하는 변수

    if (success) {
        resolve("작업 성공");
    } else {
        reject("작업 실패");
    }
});

promise2
    .then(result => {
        console.log(result);  // 이 코드는 실행되지 않음
    })
    .catch(error => {
        console.log(error);  // "작업 실패" 출력
    });

// 예시 3: async와 await 사용
function example() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("작업 완료"), 2000);  // 2초 후 작업 성공
    });
}

async function execute() {
    console.log("작업 시작");
    let result = await example();  // `example` 함수의 결과를 기다림
    console.log(result);  // "작업 완료" 출력
}

execute();

// 예시 4: async와 await로 오류 처리
async function executeWithError() {
    try {
        let result = await example(false);  // false일 경우 실패
        console.log(result);  // 실행되지 않음
    } catch (error) {
        console.log(error);  // "작업 실패" 출력
    }
}

executeWithError();

// 예시 5: Promise.all 사용
let promise3 = new Promise((resolve) => setTimeout(resolve, 1000, '작업 1 완료'));
let promise4 = new Promise((resolve) => setTimeout(resolve, 2000, '작업 2 완료'));

Promise.all([promise3, promise4])
    .then(results => {
        console.log(results);  // ["작업 1 완료", "작업 2 완료"]
    })
    .catch(error => {
        console.log(error);  // 하나라도 실패하면 여기로 진입
    });

// 예시 6: Promise.race 사용
let promise5 = new Promise((resolve) => setTimeout(resolve, 1000, '작업 1 완료'));
let promise6 = new Promise((resolve) => setTimeout(resolve, 500, '작업 2 완료'));

Promise.race([promise5, promise6])
    .then(result => {
        console.log(result);  // "작업 2 완료" (먼저 완료된 작업)
    })
    .catch(error => {
        console.log(error);  // 실패한 경우
    });
