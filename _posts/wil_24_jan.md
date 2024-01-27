---
title: "[WIL] 2024.01"
date: "2024-01-28"
description: "한달에 한번 돌아오겠습니다"
tags:
  - wil
  - jan
  - redux
  - node
  - logging
  - browser
  - debug
---

![image](https://github.com/prefer2/prefer2.dev/assets/67692759/dff7b89c-84e1-4232-b0eb-2969d6c841f0)

## unwrap

[https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-results](https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-results)

createAsyncThunk로 생성한 thunk는 무조건 promise를 반환한다. 이렇게 반환한 promise는 unwrap 프로퍼티가 있는데 이를 통해 fullfiled된 액션의 payload를 받거나, error를 던지거나, rejected action에서 rejectWithValue로 생성한 payload를 받을 수 있다

```tsx
const onClick = () => {
  dispatch(fetchUserById(userId))
    .unwrap()
    .then((originalPromiseResult) => {
      // handle result here
    })
    .catch((rejectedValueOrSerializedError) => {
      // handle error here
    });
};
```

```tsx
const onClick = async () => {
  try {
    const originalPromiseResult = await dispatch(
      fetchUserById(userId)
    ).unwrap();
    // handle result here
  } catch (rejectedValueOrSerializedError) {
    // handle error here
  }
};
```

언제 사용할까?

action의 fullfilled, rejected 후의 행동이 각 컴포넌트 별로 다를 때(공통적으로 처리가 어려울 때)

If you need to access the error or success payload immediately after a mutation, you can chain `.unwrap()`.

```tsx
addPost({ id: 1, name: "Example" })
  .unwrap()
  .then((payload) => console.log("fulfilled", payload))
  .catch((error) => console.error("rejected", error));
```

> However, it's common to want to write logic that looks at the success or failure of the actual request that was made. Redux Toolkit adds a `.unwrap()` function to the returned `Promise`, which will return a new `Promise` that either has the actual `action.payload` value from a `fulfilled` action, or throws an error if it's the `rejected` action. This lets us handle success and failure in the component using normal `try/catch` logic. So, we'll clear out the input fields to reset the form if the post was successfully created, and log the error to the console if it failed.

---

## Node exporter

[https://github.com/prometheus/node_exporter](https://github.com/prometheus/node_exporter)

[https://prometheus.io/docs/guides/node-exporter/](https://prometheus.io/docs/guides/node-exporter/)

모니터링 데이터를 프로메테우스로 수집하고, 수집한 정보를 한 곳에 모아(통합), 그라파나로 시각화한다고 이해정도만 한 정도…

TL님이 시간 있을때 한번 공부해보면 좋을 것 같다고 추천해주셨다. 최근 새로운 프로젝트를 진행하면서 로그를 추가해줄 일이 있었는데 회사의 로깅 시스템은 정말 잘 되어있는것 같다. 쭉 보다보니 회의때 듣던 이게 무슨 단어이지 싶은 단어들이 많이 나타나는게 아주 공부할게 많은 것 같다. 물론 이미 추상화가 잘되어 있고 미들웨어로 쓱싹하면 로그가 짠하고 나타나지만 공부하면 나쁠거 없지!

[https://d2.naver.com/helloworld/1044388](https://d2.naver.com/helloworld/1044388)

옛날 글이고 지금은 무려 nelo4지만 여기에 적을 수 있는 유일한 글인것 같아 남겨놓기

---

## 브라우저 디버깅

모던리액트 deep dive 중 내용

- 소스탭 > 감시, 범위(스코프), 호출스택, 전역 리스너 등을 확인할 수 있다. 실행하는 파일을 직접 볼 수 있는 것 뿐만 아니라 어떻게 실행되는지 자세하게 알 수 있다. 심지어 감시에 변수 값을 넣어서 원하는 값으로 변경하는 기능도 가능
- 메모리탭
  - 힙 스냅샷 > 비교를 통해 useMemo, useCallback과 같은 값들이 유지되는지 확인할 수 있다 ⇒ 실제로 함수가 재생성되는지 함수명을 기명함수로 두어 확인
  - 타임라인 할당 계측 ⇒ 시간의 흐름에 따른 메모리 변화, 어떤 변수가 일으켰는지

디버깅을 브라우저로 기깔나게 하시는걸 보고… 자스에서도 console.log 디버깅이 아닌 디버깅이 가능한걸 배우고 있는 요즘이다. hover하면 해당 값이 어떤 값 들어갔는지도 잘 볼 수 있고 소스탭을 잘 사용해보자

---

## 짧은 회고

공개될려면 좀 멀었지만 신규 서비스가 하나 완성되었다. 함께 진행하신 분과 하면서 배운게 여러가지인데 코드를 이쁘게 짜는걸 보며 감동받았다. 훅 분리나 로직 분리를 보면서 대박이다라는 생각을 속으로만 계속 하는중ㅋㅋ 나는 아직 예외처리같은 부분은 많이 부족하다고 느꼈는데 불필요한 코드를 작성하는 것은 아닌가라는 생각을(이걸 더하면 지저분해지는 것이 아닐까라는 생각) 줄이고 방어코드를 잘 작성해야겠다. 내가 작성하는 코드의 영향범위를 잘 파악하고 자신감을 가지자! 팀원분들의 좋은점은 많이 배우고 싶다.

집을 구하는 중인데 덕분에 부동산 용어나 돈의 개념에 대해서 생각이 많아지는 요즘이다. 돈의 속성이라는 책이 기본서라는데 한번 읽어봐야하는가 싶다. 좋은 집을 잘 구할 수 있으면 좋겠다.

+) 매주 글작성은 너무 무리라 한달 단위로 변경할래
