---
title: React.memo 톺아보기
date: "2023-01-06"
description: useMemo, useCallback은 서비스~
tags:
  - react
  - memo
---

> props이 변경되지 않았을 경우 리렌더링 되지 않도록 해준다

```jsx
const MemoizedComponent = memo(SomeComponent, arePropsEqual?)
```

부모가 리렌더링되더라도 props이 변경되지 않는다면 리렌더링하지 않는다. 성능 최적화를 위한 방법일 뿐 무조건 리렌더링 안된다는 보장은 없다.

```jsx
const Greeting = memo(function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
});

export default Greeting;
```

## 언제 memo를 사용해야 할까

대부분 불필요. 같은 prop으로 리렌더링이 많이 일어날 때 사용한다. prop이 항상 변경된다면 불필요하다. 객체나 함수를 넘기는 경우라면 useMemo, useCallback을 같이 사용해야할 일이 있을것이다. 물론 내부의 state가 변경되거나 context가 변경되거나 props이 변경된다면 이 컴포넌트도 리렌더링된다.

아래 규칙들을 따르다보면 memo를 사용할 일이 별로 없다.

- 컴포넌트가 다른 컴포넌트를 감싸고 있는 형식이라면 children 사용하기. 겉의 컴포넌트가 리렌더링 되더라도 React는 children이 리렌더링이 필요하지 않다는 것을 알고 있다.
- 가능하다면 state를 올리기보다는 local state 사용하기.
- 렌더링 로직을 순수하게 유지하기. 리렌더링이 문제를 일으킨다면 컴포넌트를 잘못짜고 있는걸지도 모른다! memoization을 추가하기 보다 이런 오류를 수정하자
- state를 업데이트하는 불필요한 effect를 피하기. 대부분의 성능 문제는 effect로 인해 업데이트되는 체이닝때문에 렌더링이 반복해서 일어날 때 일어난다.
- effect의 불필요한 의존성 배열 없애기.

응답이 느린것처럼 보인다면 [profiler](https://beta.reactjs.org/blog/2018/09/10/introducing-the-react-profiler)를 사용해서 어떤 컴포넌트를 memorization하면 가장 좋을지 찾아보자. [일반적인 memorization은 자동으로 일어날 수 있도록](https://www.youtube.com/watch?v=lGEMwh32soc) 연구하고 있다(React Forget 컴파일러 신기방기. 어떤 식으로 memo를 관리해야할지 살펴보기 좋은 영상인듯)

## props 변경 최소화하기

memo를 사용하면 props가 얕은 비교시 동일하지 않으면 리렌더링한다. [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 비교를 통해 prop을 비교함을 뜻한다. `Object.is(3, 3)`은 `true`지만 `Object.is({ }, { })`는 `fasle`임에 주목하자.

memo를 최대한으로 잘 사용하려면, props가 변경되는 것을 최소화해야한다. 만약 props가 객체 형식이라면 `useMemo`를 사용하여 객체가 항상 새로 생성되는 것을 막자. 함수 형식이라면 `useCallback`을 사용하자.

```jsx
function Page() {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(42);

  const person = useMemo(() => ({ name, age }), [name, age]);

  return <Profile person={person} />;
}

const Profile = memo(function Profile({ person }) {
  // ...
});
```

더 좋은 방법은 prop으로 최대한 적은 정보를 받는 것이다. 전체 정보를 받기보다 개별의 정보를 받을 수 있게 변경할 수 있다

```jsx
function Page() {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(42);
  return <Profile name={name} age={age} />;
}

const Profile = memo(function Profile({ name, age }) {
  // ...
});
```

## useMemo VS useCallback

두 훅 모두 어떤 것을 기억하고자(memoize) 할 때 사용한다. 두 훅의 차이는 어떤 것을 캐싱하고자 하는지에 있다.

- useMemo: 함수의 호출 결과를 캐싱한다
- useCallback: 함수 자체를 캐싱한다. 넘겨지는 함수를 호출하지 않고 이 자체를 캐싱한다.

```jsx
// Simplified implementation (inside React)
function useCallback(fn, dependencies) {
  return useMemo(() => fn, dependencies);
}
```

## 언제 useMemo와 useCallback을 사용해야 할까

![kent 형님의 useCallback관련 트위터.png]("https://user-images.githubusercontent.com/67692759/210934059-9ab4cc52-a400-4de6-9304-8458f2ae2eae.png")

의존성 배열이 있다면 React가 이전 함수들에게 참조를 가지고 있을 수 있다. 왜냐하면 memorization은 이전과 동일한 의존성이 주어진다면, 가지고 있던 옛 버전의 복사본을 return하는 것을 뜻하기 때문이다. 이것은 React가 의존성 배열도 동일성 체크를 위해 가지고 있음을 뜻한다(물론 클로저에 의해서 일어나는 일이니 당연한 말이다)

그렇다면 성능상으로 꼭 이점이 되지 않을지도 모르는 두 훅을 언제 사용해야 할까? 두 훅이 React에 내장되어 있는 이유는 아래와 같다.

1. 참조 동일성 (Referential equality)
2. 계산적으로 비용이 많이 드는 계산 (Computationally expensive calculations)

### 참조 동일성

```jsx
function Foo({ bar, baz }) {
  const options = { bar, baz };
  React.useEffect(() => {
    buzz(options);
  }, [options]); // we want this to re-run if bar or baz change
  return <div>foobar</div>;
}
function Blub() {
  return <Foo bar="bar value" baz={3} />;
}
```

useEffect의 의존성 배열을 체크하고, 자바스크립트의 특성 때문에 매 렌더링마다 option은 새로운 값이 된다. 즉 bar, baz가 변경될때만 불러지는 것이 아니라 매 렌더링마다 불러지게 되는 것이다.

이를 아래와 같이 변경하여 원하는 형식으로 동작하도록 할 수 있다.

```jsx
function Foo({ bar, baz }) {
  React.useEffect(() => {
    const options = { bar, baz };
    buzz(options);
  }, [bar, baz]);
  return <div>foobar</div>;
}
function Blub() {
  const bar = React.useCallback(() => {}, []);
  const baz = React.useMemo(() => [1, 2, 3], []);
  return <Foo bar={bar} baz={baz} />;
}
```

### 계산적으로 비용이 많이 드는 계산

예를 들어 동기적으로 계산을 해야하는 복잡한 함수를 생각해보자.

```jsx
function RenderPrimes({ iterations, multiplier }) {
  const primes = calculatePrimes(iterations, multiplier);
  return <div>Primes! {primes}</div>;
}
```

iterations와 multiplier는 매우 느릴 수 있다. 같은 결과값을 두번 계산할 필요 없이 useMemo를 사용하여 기존의 값을 사용할 수 있다.

```jsx
function RenderPrimes({ iterations, multiplier }) {
  const primes = React.useMemo(
    () => calculatePrimes(iterations, multiplier),
    [iterations, multiplier]
  );
  return <div>Primes! {primes}</div>;
}
```

![Untitled](https://user-images.githubusercontent.com/67692759/210934131-cbf3a1d9-6955-4e73-a59e-d521daeb2768.png)

kent 형님께서 추상화/최적화가 나에게 고쳐달라고 소리칠 때 까지 기다리라고 하셨다. 기다리자.

[https://beta.reactjs.org/reference/react/memo](https://beta.reactjs.org/reference/react/memo)

[https://overreacted.io/ko/before-you-memo/](https://overreacted.io/ko/before-you-memo/)

[https://dkrnfls.tistory.com/413](https://dkrnfls.tistory.com/413)

[https://kentcdodds.com/blog/usememo-and-usecallback](https://kentcdodds.com/blog/usememo-and-usecallback)
