---
title: "[WIL] 2024.02"
date: "2024-03-03"
description: "이번달은 너무 빨리 끝나버렸다"
tags:
  - wil
  - feb
  - typescript
  - bf cache
---

![image](https://github.com/prefer2/algorithm/assets/67692759/b3cffcb3-769c-48eb-92f1-1f8f7016a4d7)

## typescript array 값들중 하나인지 좁히기

하고싶었던 것, 가능한 값들을 array로 뽑아두고 ⇒ 이것들을 타입화 하기

요렇게 하면 type narrowing 할때 includes를 사용하지 못함(include가 타입관련된 정보를 바라보지 않음) 어쩌면 원하는 값들을 배열로 관리하는것이 적절하지 않은 방법이었을지도 모르겠다는 생각이 든다

[https://elvanov.com/2535](https://elvanov.com/2535)

[https://fettblog.eu/typescript-array-includes/](https://fettblog.eu/typescript-array-includes/)

[https://stackoverflow.com/questions/74077651/includes-method-doesnt-support-type-narrowing](https://stackoverflow.com/questions/74077651/includes-method-doesnt-support-type-narrowing)

---

## returnUrl, redirectUrl

백엔드와 어떻게 소통할 것인가, 뿐만 아니라 우리가 외부 서비스에게 어떻게 제공할 것인가

서비스마다 사용하는 용어가 달라서 혼란(backUrl, cancelUrl, successUrl 등등…)

---

## fiddler, charlse

[https://stackify.com/fiddler-vs-charles/](https://stackify.com/fiddler-vs-charles/)

학교에서는 wireshark만 써봤었는데 이런 훌륭한 툴들이…!

---

## typescript satisfies

[https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html)

[https://engineering.ab180.co/stories/satisfies-safe-upcasting](https://engineering.ab180.co/stories/satisfies-safe-upcasting)

---

## bf cache

[https://web.dev/articles/bfcache?hl=ko](https://web.dev/articles/bfcache?hl=ko)

bfcache는 사용자가 다른 페이지로 이동할 때 페이지의 전체 스냅샷(자바스크립트 힙 포함)을 저장하는 메모리 내 캐시. 메모리에 전체 페이지가 있으므로 사용자가 다시 돌아오기로 하면 브라우저에서 빠르고 쉽게 페이지를 복원할 수 있다.

bfcache를 사용하면 탐색 속도가 향상될 뿐만 아니라 리소스를 다시 다운로드할 필요가 없으므로 데이터 사용량도 줄어든다

setTimeout과 같은 비동기 처리는 어떻게? ⇒ promise 실행을 일시 중지하고 페이지가 bfcache에서 복원될 때 처리 작업을 재개한다

bfcache를 관찰하는 API

- bfcache는 브라우저에서 지원하는 최적화이기 때문에 이를 관찰하기 위해서는 몇가지 이벤트를 보면 된다
- `pageshow`, `pagehide`
- chromium기반 브라우저에서는 최신 생명주기인 `freezes`, `resume`을 사용할 수 있다

`pageshow` 속성은 페이지가 처음 로드될 때 그리고 bfcache로부터 복원될때마다 load 이벤트 직후에 실행된다. `persisted`라는 속성으로 pageshow시 bfcache로부터 복원되었는지 확일할 수 있다

```tsx
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    console.log("This page was restored from the bfcache.");
  } else {
    console.log("This page was loaded normally.");
  }
});
```

`pagehide` 이벤트는 페이지가 정상적으로 로드 해제되거나 bfcache에 넣을려고 할때 실행된다. pagehide에도 `persisted` 속성이 있는데 bfcache에 들어가면 true가 된다. 다만 이 값이 true라고 해서 페이지가 캐시된다는 보장은 없다(저장을 했다일뿐이지 사용을 한다는 보장은 하지 못한다)

테스트 방법

- application > cache > back-forward cache

---

## 짧은 회고

여기에는 적을 수 없는 인프라 관련 학습을 많이 하는 중이다(안하던거라 재미있긴함) 네트워크나 큰 그림에 대한 공부를 학교다닐때 많이 했어야했는데 네트워크 싫어병에 걸려서 안했던게 후회된다. 2월도 얼래벌래 끝나버렸다. 3월은 이사라는 아주아주아주 큰 이벤트가 나를 기다리고 있기 때문에 기대중이다. 기대된다 3월!!!
