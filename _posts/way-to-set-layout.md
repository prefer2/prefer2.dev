---
title: flex & overflow로 레이아웃 잡기
date: "2023-04-07"
description: "그 어떤 레이아웃이라도 잘 잡을 수 있어...!"
tags:
  - css
  - layout
  - flex
  - overflow
---

## flex

flex는 `flex-grow`, `flex-shrink`, `flex-basis`의 줄임 표현

꼭 필요한 경우가 아니라면 이를 따로 쓰는 것보다 flex로 줄여쓰는 것이 코드도 적고 알아보기 좋다.

shorthand correctly resets any unspecified components to accommodate [common uses](https://drafts.csswg.org/css-flexbox/#flex-common).

줄임 표현을 쓸 때 예상과 다를 수 있다. 이를 고려해서 줄임표현을 잘 사용해야 한다. flex: 숫자의 flex-basis값은 auto가 아니라 0이다.

[https://drafts.csswg.org/css-flexbox/#flex-common](https://drafts.csswg.org/css-flexbox/#flex-common)

### flex-grow

공간이 넘칠 때 어떻게 비율을 가져갈 것인지

`flex-item` 요소가, `flex-container` 요소 내부에서 할당 가능한 공간의 정도를 선언한다.

보통 flex-shrink, flex-basis 속성을 함께 사용한다. 일반적으로 모든 값이 설정되었음을 보장하기 위해 flex 속성을 이용해 축약형으로 사용한다. 기본값은 0이다.

### flex-shrink

공간이 부족할 때 어떻게 비율을 가져갈 것인지

`flex-item` 요소의 크기가 `flex-container` 요소의 크기보다 클 때 flex-shrink 속성을 사용하는데, 설정된 숫자값에 따라 `flex-container` 요소 내부에서 `flex-item` 요소의 크기가 **축소**된다.

### flex-basis

초기 값 설정. 이 기본값으로부터 grow, shrink하는 것

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)

🐸 flex를 연습할 수 있는 귀여운 사이트

[https://github.com/thomaspark/flexboxfroggy/](https://github.com/thomaspark/flexboxfroggy/)

---

## overflow

요소의 콘텐츠가 너무 커서 요소의 블록 서식 맥락에 맞출 수 없을 때의 처리법을 지정

넘치는 요소를 잘라내기, 스크롤바로 보여주기, 그대로 노출 옵션이 있다.

overflow가 효력을 가지기 위해서는 반드시 height를 설정하거나, white-space를 nowrap으로 설정해야 한다.

This property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.

overflow의 첫번째 값은 overflow-x, 두번째 값은 overflow-y다. 축약해서 표현도 가능하다.

기본 값은 visible

### options

- visible: 콘텐츠를 자르지 않으며 안쪽 여백 상자 밖에도 그릴 수 있다
- hidden: 넘친 곳을 잘라낸다
- scroll: 잘라내고 넘치는 부분을 스크롤바로 확인 가능하다
- auto: 사용자 에이전트(브라우저)가 결정

---

## 어떻게 레이아웃을 잡을까

반응형으로 잘 대응하기 위해서는 크기를 지정하는 것이 아니라 flex로 잡아두는 것이 편하다

고정 위치와 스크롤 될 부분을 분리하여 영역을 잡는다

flex로 위치를 잡고, 넘칠 것을 overflow로 조절해주기

때로는 그냥 absolute로 위치를 잡는 것이 편할지두
