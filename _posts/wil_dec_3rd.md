---
title: "[WIL] 12월 3주차"
date: "2023-12-17"
description: "텀이 조금 많이 기네?"
tags:
  - wil
  - dec
  - git
  - typescript
---

![image](https://github.com/prefer2/prefer2.dev/assets/67692759/dd5b5098-31ff-42af-8d22-dea4ac775e58)

### on-premise

온프레미스(on-premise)는 IT 서비스를 운영하는 회사가 자체적으로 보유한 공간에 물리적으로 하드웨어 장비를 가지고 직접 운영하는 방식. on-premise는 클라우드 컴퓨팅 기술이 나오기 전까지 일반적인 기업이 사용하던 일반적인 인프라 구축 방식

### lease force push

safer option that will not overwrite any work on the remote branch if more commits were added to the remote branch (by another team-member or coworker or what have you). It ensures you do not overwrite someone elses work by force pushing

브랜치에 지금까지 그 누구도 변화를 준 적이 없는지 확인하고, 변화가 있다면 강제 푸시를 못하도록 거부한다

팀원들과 협업을 할 때 보다 안전하게 force push 할 수 있도록 해준다

### spread operator typescript

[https://github.com/microsoft/TypeScript/issues/39998](https://github.com/microsoft/TypeScript/issues/39998)

아무 생각 없이 spread operator를 쓰는 편이었는데 type safety를 위해서는 함부로 사용하면 안될 것 같다. 내가 생각한 타이핑대로 잘 되는지 확인하면서 작업하자

### zod

[https://zod.dev/](https://zod.dev/)

> zod is a **TypeScript-first schema declaration** and **validation library.**

유효성 검증을 통한 타입 제공을 해주는 라이브러리. 알다시피 타입스크립트는 컴파일 타임의 타입만을 제공해주기 때문에 런타임에서의 타입 에러는 어찌 할 수 없다. 스키마라는 유효성 검증 단계를 통해서 이런 부족함을 채워준다

런타임에서의 타입 검증이 왜 필요했는데? ⇒ bff를 구성할 때 필요했다. api응답값은 런타임에 어떤 값이 내려올지 모르기 때문에 이를 검증하는 과정이 필요한데 유효성 검증과 타입 작성을 둘다 해주는건 비슷한 일을 두번 해주는 것이다. 이러저러한 사정으로 사용하지 못했지만…

### Langchain

[https://github.com/langchain-ai/langchain](https://github.com/langchain-ai/langchain)

[https://www.samsungsds.com/kr/insights/what-is-langchain.html](https://www.samsungsds.com/kr/insights/what-is-langchain.html)

무려 js도 지원해준다. 미래를 위해 단어라도 알아놓아야지

### 짧은 회고

취뽀와 야근이라는 핑계로 꽤나 오랜 시간동안 공부를 멀리했다. 노는 것도 지치기도 했고 지식의 부족함을 느끼기도 하고 시간을 정해서 공부를 해야겠다. 모리딥다 스터디와 도커&k8s 알아보기 스터디를 시작했는데 강제성이 생기니 책도 읽게 되고 좋다! 역시 강제성이 없으면 공부를 안하는 사람인 것 같다. 잔디 채울겸 일하면서 정리했던 내용들을 올려봐야지
