---
title: Javascript로 백준 풀기
date: "2023-01-24"
description: "우리 자스도 백준 풀 줄 알아요"
tags:
  - algorithm
  - 백준
---

체감상 점점 많은 기업들이 프론트엔드 코테의 경우 javascript로만 문제 풀이 언어를 제한하는 것 같다. 또 몇년 전까지만 하더라도 코테 언어로 javascript를 지원하는 회사들이 정말 유명한 회사 몇곳을 제외하고는 없었는데 플랫폼의 발전과 프론트엔드 분야의 성장(?)으로 대부분 javascript를 지원하고 있다. 물론 프로그래머스로만으로도 충분히 코딩테스트 대비를 할 수 있지만 압도적으로 많은 문제 수와 특이한 형식에 입출력에 익숙해지려면 백준으로의 연습도 필요하다고 생각한다(실제로 몇몇 기업의 경우 javascript지만 백준 형식으로 node.js형식 압출력을 받는다)
개인적으로는 코테를 보며 때려 맞추는 형식을 많이 취한다는 느낌이 들었다. 프로그래머스의 경우 모든 입력값들을 보여주지는 않지만 그래도 몇개의 테스트케이스가 맞았는지는 보여진다. 백준은 이와 달리 맞았는지 틀렸는지만 보여지기 때문에 때려 맞추는 습관을 없애기 위해서 백준으로서의 연습이 필요하다고 느꼈다.
처음에 거부감이 들 수 있지만 한 번 템플릿을 만들어 놓고 써먹으면 되기 때문에 백준으로도 javascript 문제 푸는 방법을 소개하고자 한다.

## Local 환경

폴더를 하나 만들고 안에 input.txt, solution.js 파일을 만든다. 앞으로 입력값은 input.txt에 정답 코드는 solution.js에 작성하면 된다. 이렇게 받은 입력값은 모두 문자열 형식임을 주의하면서 문제를 풀자.

```js
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const solution = () => {
  // 답안 작성
};

solution();
```

실행은 터미널에서 `node solution.js`로 한다.

## 백준 제출

입력값을 가져오는 부분만 수정해주면 된다.

```js
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); // 입력 부분 수정

const solution = () => {
  // 답안 작성
};

solution();
```

## 백준으로 풀 때 주의할 점

분명 알고리즘은 맞는 것 같은데 시간초과가 빈번하게 일어난다. 이럴때는 역시 입출력이 문제일 확률이 높다. console.log는 매우 느린 작업이다(IO 작업) for문을 돌며 그때 그때 답을 출력하면 시간초과가 날 확률이 높다. answer 배열을 만들어서 마지막에 `answer.join(‘\n’)` 형식으로 출력하자.
