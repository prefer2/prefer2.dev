---
title: 2월의 조각 모음
date: "2023-02-28"
description: "이월은 이런 것들을 봤구나 2열~"
tags:
  - monthly
---

## You Don’t Need Next.js (and SSR)

[You Don’t Need Next.js (and SSR). Next is an amazing framework but there… | by Harshal Patil | webf](https://blog.webf.zone/you-dont-need-next-js-and-ssr-7c6bd27e78d8)

자극적인 제목과 강려크한 내용.

---

## css

### typewind

[GitHub - ben-rogerson/twin.macro: 🦹‍♂️ Twin blends the magic of Tailwind with the flexibility of css-in-js (emotion, styled-components, stitches and goober) at build time.](https://github.com/ben-rogerson/twin.macro)

오 신기해. tailwind에 타입 시스템을 적용하는 방식. 신박하다.
[Typewind – Typesafe Tailwind](https://typewind.vercel.app/)

---

## 타입스크립트로 에러 처리하기

[번역 타입스크립트에서 전문가처럼 에러 처리하기. 원문… | by Jisu Yuk | Feb, 2023 | Medium](https://medium.com/@yujso66/%EB%B2%88%EC%97%AD-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-%EC%A0%84%EB%AC%B8%EA%B0%80%EC%B2%98%EB%9F%BC-%EC%97%90%EB%9F%AC-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0-39d14f5cc6a2)
언제나 에러 처리는 어렵다. 특히 타입스크립트에서의 에러 처리는 조심해야 할 점들이 많다. 에러를 받아서 자연스럽게 error.message같은 값들을 사용하게 되지만, 타입스크립트에서 error 객체는 unknown타입이기 때문에 적절한 타이핑이 필요하다. 타입스크립트가 알아먹을 수 있는 에러를 정의하여 사용하고, 적절한 타입을 선언하여 중복을 피하자.

---

## 성능 성능

[DogGae](https://codingmoondoll.tistory.com/)

### 이미지

![can i use webp](https://user-images.githubusercontent.com/67692759/221886429-412253d7-0cbc-4ecf-8111-9eb01f6a23e2.png)

[YouTube](https://www.youtube.com/watch?v=Z_28syzkv-0)
[(번역) HTML 이미지 최적화](https://velog.io/@lky5697/fast-images)

fetchPriority: 이미지 fetch 속성을 경정할 수 있음 [HTMLImageElement.fetchPriority - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority)
[Optimizing resource loading with Priority Hints](https://web.dev/priority-hints/)

Next.js의 Image는 어떤식으로 최적화를 진행했을까?

### 웹폰트

[YouTube](https://www.youtube.com/watch?v=4YCBBoSg2fk)

### 브라우저 렌더링 최적화

[YouTube](https://www.youtube.com/watch?v=yJo9lZAEqb0&list=PLAwxTw4SYaPl09X4Rljhy7dZinRCzbHz6)

[CSS GPU Animation: Doing It Right — Smashing Magazine](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/)
[(번역) 빠른 페이지 로드를 위한 자바스크립트 최적화의 궁극적인 가이드](https://velog.io/@sehyunny/js-optimization-for-quick-page-load)

---

## custom hook in react

[YouTube](https://www.youtube.com/watch?v=J-g9ZJha8FE)

프론트엔드에서의 패턴. 어떻게 컴포넌트를 나누고 훅 분리를 할 것인지.
Layer를 나눠야 하는 이유

- 관심사 분리
- 코드의 중복 제거
- 테스트에 용이
  [번역 잘 알려진 UI 패턴을 사용하여 리액트 애플리케이션 모듈화하기](https://velog.io/@eunbinn/modularizing-react-apps)
  [PresentationDomainDataLayering](https://martinfowler.com/bliki/PresentationDomainDataLayering.html)

![refactoring adding function](https://user-images.githubusercontent.com/67692759/221886686-2871b200-c040-451d-9f2c-d69c4ace4483.png)

---

## preload, prefetch, preconnect

- link tag
  - preload: 현재 화면에 필요한 리소스=
  - prefetch: 현재 화면에 필요한 것❌, 이후 페이지에 필요한 리소스
  - preconnect: 같은 도메인에 여러개의 리소스를 요청할 때

[되돌아보는 index.html - Part 1 | SOSOLOG](https://so-so.dev/web/index-html-1/)

---

## 모듈 번들러

vite에 대해서 알아봐야 할지두?
[(번역) 이제는 웹팩과 작별할 때일까?](https://velog.io/@sehyunny/is-it-time-to-say-goodbye-to-webpack)

---

## SSR

react로 ssr
[How to Enable Server-Side Rendering for a React App | DigitalOcean](https://www.digitalocean.com/community/tutorials/react-server-side-rendering)
[React로 Next.js 처럼 Server-side-rendering 구현하기 | by DylanJu | Medium](https://minoo.medium.com/next-js-%EC%B2%98%EB%9F%BC-server-side-rendering-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-7608e82a0ab1)
프레임워크 없이 만드는 SSR
[프레임워크 없이 만드는 SSR | 개발자 황준일](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Server-Side-Rendering/)

---

## 짧은 회고

2월이 어떻게 지나갔는지 모르겠다. 어버버하고 지내다 보니 2월이 끝난 기분이다. 거의 매일 코딩테스트나 면접을 보느라 개인 공부를 못했다. 그래도 면접 질문 답변을 정리하다보니 관련 내용들은 스스로 정리가 된 기분이다 (근데 면접에서는 안물어봐줌ㅠ) 코테 연습은 어려운 문제를 잘 푸는 것도 중요하지만 쉬운 문제를 빠르고 정확하게 푸는 연습을 더 해야할 것 같다.
