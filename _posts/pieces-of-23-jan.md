---
title: 1월의 조각 모음
date: "2023-02-05"
description: "1월의 기록들을 모아봤어, 연진아"
tags:
  - monthly
---

이것저것 읽고 여기저기 적어놓기만 해서 아쉬웠던 학습 기록들을 모아볼려고 한다. 어디에라도 올린다고 생각하고 작성하다보면 정리도 더 잘하지 않을까 싶다. 1월은 얼마 못 모았지만 2월은 더 열심히 모아보도록 하자! 모아놓으면 나중에 또 볼 수도 있고 좋겠지?

---

## webpack prefetch preload

Webpack 4.6부터는 prefetch와 preload가 지원된다.
동적 import문의 경로 앞에 `/* webpackPrefetch: true */`를 추가하면 된다.
HomePage 컴포넌트에서 LoginButton 컴포넌트를 렌더링하고, 이 컴포넌트를 클릭하면 LoginModal 컴포넌트를 요청하여 로드하는 경우

```
import (/* webpackPrefetch: true */ './path/to/LoginModal.js')
```

### 언제 preload, 언제 prefetch

- preload: 현재 페이지에서 무조건 사용되는 리소스일때. Web font, hero image 등
- prefetch: navigate를 하다보면 나중에 언젠가 쓰일 리소스

둘 다 HTTP 캐시에 저장된다.
크롬 네트워크에서 Priority 행을 추가하여 우선순위가 어떻게 되는지를 확인할 수 있다.

### preload, prefetch 관련 좋은 글

[Preload, Prefetch And Priorities in Chrome | by Addy Osmani | reloading | Medium](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)

---

## 성능 면에서 SSR, CSR

![image-7](https://user-images.githubusercontent.com/67692759/216808691-7f4a6796-a9e9-4546-96d9-8f24100c17e1.png)

---

## 성능 측정하는 도구들

Dev

- lighthouse
- webpageTest -> 다양한 환경에서 성능을 측정할 수 있음

Field(실제 사용자 모니터링)

- Google Analytics
- Web vitals

### web vitals

실제 유저들이 사용하는 성능을 측정하는?

[web vitals github](https://github.com/GoogleChrome/web-vitals)

[web.dev web vitals](https://web.dev/vitals/)

---

## useState, useReducer

[번역 useState 지옥에서 벗어나기](https://velog.io/@eunbinn/a-cure-for-react-useState-hell)
이 글을 읽으며 어떻게하면 useReducer를 잘 쓸지 생각해보았다. 최근에는 useReducer를 사용한 경험이 많이 없는 것 같다(redux스럽다고 생각해서인지… useCallback, useMemo쓰기 싫어서인지… 세트로 돌아가는 상태를 다루지 않아서인지…) 글 중간에 React 공식 문서에서 알려주는 useReducer 예시가 나오는데 오호 싶다.
[Hooks FAQ – React](https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down)

### 상태 관리

Kent 형님의 context 관련 영상. 다시보니 또 새롭네. Back to basic!
[YouTube](https://www.youtube.com/watch?v=zpUMRsAO6-Y)

이 책을 읽어보고 싶으다. 한글 번역이 없어서 큰맘먹고 사야한다. [Micro State Management with React Hooks | Kato, Daishi - 교보문고](https://product.kyobobook.co.kr/detail/S000061587593)

## Korean FE Article Team

여러 프론트엔드 글들을 번역하는 팀이다. 메일로 구독해서 보고있는중. 좋은 글들을 잘 뽑아서 번역도 깔끔하게 해서 올려준다. 올라오는 주기도 짧은듯? 나도 나중에 기회가 되면 참여해보고 싶다.

[Korean FE Article Team](https://kofearticle.substack.com/)
