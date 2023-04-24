---
title: Recoil 맛보기
date: "2023-04-24"
description: recoil 너는 누구냐
tags:
  - recoil
  - 상태관리
---

![Untitled](https://user-images.githubusercontent.com/67692759/236611257-bcb158e6-26aa-42d7-8cba-00b95baba711.png)

### atom

상태(state)의 일부. atom값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다.

### selector

파생된 state를 저장함. 파생된 상태는 상태의 **변화**다.

가장 큰 특징은 멱등성. 순수함수이다.

때문에 selector를 비동기 함수로 사용하는 것

### snapshot

atom 상태 읽기 전용. snapshot은 계속 변하는 상태의 ‘한 순간’이다. snapshot은 상태가 변할 때마다 생성된다.

### useReacoilCallback

[https://recoiljs.org/docs/api-reference/core/useRecoilCallback/](https://recoiljs.org/docs/api-reference/core/useRecoilCallback/)

useCallback과 비슷하지만, Recoil 상태(state)에서 callback이 동작하도록 API를 제공한다.

- 비동기적으로 Recoil 상태를 업데이트 할때
- Recoil 상태의 snapshot에 접근할 수 있는 callback을 만들기 위해

### useCallback과는 어떤 차이?

```tsx
const log1 = useCallback(() => {
  console.log("called with ", "nothing");
});
const log2 = useRecoilCallback(({ snapshot }) => () => {
  console.log("called with ", snapshot);
});
```

useRecoilCallback에서 첫번째 인수는 스냅샷 관련 기능을 전달하기 위해 한 번 더 감싸진 ‘실행할 함수를 만드는 함수’를 사용한다. 여기서 생성된 함수의 인수로 전달되는 객체에는 gotoSnapshot 함수, set 함수, reset 함수가 포함되어 있다.

### atomFamily

[https://recoiljs.org/docs/api-reference/utils/atomFamily/](https://recoiljs.org/docs/api-reference/utils/atomFamily/)

우선 family란 비슷한 기능을 하는 별개의 atom이 필요한 경우 필요한 만큼 각각 선언하는 대신 하나의 형태를 선언해 놓고 팩토리처럼 언제든 새롭게 만들어 사용할 수 있는 기능.

But, what if your state isn’t global? What if your state is associated with a particular instance of a control, or with a particular element?

An Atom Family represents a collection of atoms. When you call `atomFamily()`
 it will return a function which provides the `RecoilState` atom based on the parameters you pass in.

대분류를 만들고 그 안의 소분류들을 사용하고 싶을때 쓰는느낌. family라는 말 그대로 하나로 묶이는 그룹을 만들어서 사용하기.

### selectorFamily

파생 상태를 id별로 다르게 하는 방식

allows you to pass parameters to the `get` and `set` callbacks of a `selector`

매개변수가 있는 쿼리를 실행할 때 사용한다. props를 기반으로 쿼리를 실행하고 싶을 때

굳이 저장하지 않아도 되는 상태값에 따라서 다른 쿼리 결과를 내고 싶을 때 사용
