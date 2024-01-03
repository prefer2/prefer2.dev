---
title: 그림과 실습으로 배우는 도커 & 쿠버네티스
date: "2024-01-04"
description: "하나씩 알아보자 도커! (1, 2장 정리)"
tags:
  - docker
---

![image](https://github.com/prefer2/algorithm/assets/67692759/6132204c-b408-4c01-8a4a-dbf5f65092e8)

## chap1. 도커란 무엇인가?

`데이터 또는 프로그램을 격리시키는 기능을 제공`하는 소프트웨어

다양한 프로그램과 데이터를 각각 독립된 환경에 격리(운영체제 비슷한 것으로 통째로)하는 기능을 제공

컨테이너를 다루는 기능을 제공하는 소프트웨어가 도커

도커 소프트웨어 본체인 도커 엔진을 설치하고, 엔진을 사용해 컨테이너를 생성하고 구동할 수 있다

컨테이너를 만들기 위해 이미지가 필요

용량이 허락하는 한 도커에서 여러개의 컨테이너를 만들 수 있다

컨테이너 내부적으로는 리눅스가 사용되고, 컨테이너에서 동작시킬 프로그램도 리눅스용 프로그램이다

### 데이터나 프로그램을 독립된 환경에 격리해야 하는 이유

여러 프로그램으로 구성되며, 다른 프로그램과 정보를 공유하기도 하기 때문

특정한 폴더나 디렉터리를 공유하거나 같은 설정 정보를 저장하는 경우

프로그램 간의 공유가 있을때도 있고, 프로그램에 따라서는 한 서버에 한 버전밖에 설치할 수 없기 때문에

컨테이너 안의 프로그램은 다른 프로그램과 격리됨

도커 컨테이너는 완전히 독립된 환경이므로 여러 컨테이너에서 같은 프로그램을 실행할 수 있다

## 서버와 도커

서버? 어떤 서비스(service)를 제공(serve)하는 것

물리적 컴퓨터로서의 서버에 여러개의 기능적 의미의 서버를 둘 수 있다

서버의 기능은 소프트웨어가 제공하는 것으로, 소프트웨어를 설치하면 서버의 기능을 갖게 된다

여러 가지의 소프트웨어를 한 컴퓨터에 설치할 수 있다 === 물리적 컴퓨터로서의 서버에 여러개의 기능적 의미의 서버를 둘 수 있다

도커를 이용하면 컨테이너를 사용해 한 서버에 여러가지 서버를 돌릴 수 있다

일반적으로 한 대의 서버 컴퓨터에는 웹 서버(아파치 한 벌)를 한벌밖에 실행 하지 못한다 ⇒ 컨테이너를 활용하면 여러 개의 웹 서버를 올릴 수 있다

물리 서버 한대에 여러개의 웹 서버를 띄워 서버수를 줄일 수 있다

컨테이너는 자유롭게 옮길 수 있다. 컨테이너를 어떤 도커 엔진에서 다른 도커 엔진으로 옮기는 것이 어렵지 않다

똑같은 상태로 튜닝한 컨테이너를 배포해 모두가 동일한 개발환경을 사용할 수 있다

도커를 이용하면 물리적 환경의 차이, 서버 구성의 차이를 무시할 수 있으므로 운영 서버와 개발 서버의 환경 차이로 인한 문제를 방지할 수 있다

```bash
💡 도커와 가상화 기술의 차이
VirtualBox나 VMware와 같은 기술은 물리적인 대상을 소프트웨어로 대체해 가상의 물리 서버를 만드는 것
도커는 운영체제의 기능 중 일부를 호스트 역할을 하는 물리 서버에게 맡겨 부담을 더는 형태
컨테이너는 운영체제의 일부 기능을 호스트에 의존하기 때문에 물리 서버에도 리눅스 기능이 필요
EC2도 가상화 기능. 각각의 인스턴스가 완전히 독립된 컴퓨터처럼 동작.
```

---

## chap2. 도커의 동작 원리

### 도커의 구조

운영체제 위에 도커 엔진이 동작하고 그 위에서 컨테이너가 동작한다

운영체제는 소프트웨어나 프로그램의 명령을 하드웨어에게 전달

운영체제는 커널과 그 외의 부분으로 이루어져 있다(system call같은 부분은 명칭하는 걸까)

컨테이너 속에는 운영체제의 주변 부분이 들어 있어 프로그램의 명령을 전달받고 ⇒ 커널에 전달하는 구조

도커는 밑바탕에서 리눅스 운영체제가 동작하는 것을 전제로 하는 구조기 때문에 기본적으로 리눅스용이다

### 도커 허브와 이미지, 그리고 컨테이너

이미지는 컨테이너를 찍어내는 빵틀과 같은 설계도 ⇒ 하나만 있어도 똑같은 형태를 만들기 쉽다

컨테이너로도 이미지를 만들 수 있는데, 덕분에 여러개의 컨테이너를 일일이 수정할 필요가 없다

도커 엔진 간에 이동이 가능하다 === 도커 엔진에 이미지를 통해 똑같은 컨테이너를 생성할 수 있다(실제로 이동하는 것은 아니지만 컨테이너를 통해 이동한 것과 같은 효과)

#### 도커 허브

도커 허브는 공개된 컨테이너 이미지가 모여있는 곳

도커 허브는 누구나 자유롭게 등록할 수 있기 때문에 안전한 이미지를 잘 선택해야 한다

### 도커 컨테이너의 생애주기와 데이터 저장

컨테이너는 쓰고 버리는 일회용품 같은 것

컨테이너는 쉽게 만들 수 있기 때문에 업데이트하기 보다는 새로운 컨테이너를 사용하는 것이 좋다

컨테이너를 폐기하면 컨테이너에 들어있던 데이터는 사라진다 ⇒ 도커가 설치된 물리적 서버(호스트)의 디스크를 마운트해 여기에 데이터를 저장한다

데이터를 외부에 저장해 다른 컨테이너와 데이터를 공유할 수도 있다

- 운영체제 부분은 컨테이너로 만들어 쓰고 버리는 것을 반복하고, 데이터는 다른 곳에 두고 같은 것을 계속 사용하는 것

### 도커의 장점과 단점

- 독립된 환경
- 이미지를 만들고 이를 쉽게 도커 허브에 배포할 수 있다
- 컨테이너에 커널을 포함시킬 필요가 없다 === 가볍다

#### 장점

- 한대의 물리 서버에 여러 대의 서버를 띄울 수 있다
  - 격리된 환경으로 안전하게 여러 서버를 제공할 수 있다
  - 물리 서버의 운영체제에 의존하기 때문에 가상화 기술에 비해 압도적으로 가볍다
- 서버 관리가 용이하다
  - 독립된 환경에 격리함으로 다른 소프트웨어에 영향을 끼치지 않는다
  - 교체나 수정이 쉬워 환경 이전도 쉽다
- 서버 고수가 아니어도 다루기 쉽다
  - 명령 한줄로 서버 구축이 끝난다

#### 단점

- 리눅스용이다
- 호스트 서버에 문제가 생기면 모든 컨테이너에 영향이 미친다

#### 도커의 주 용도

- 팀원 모두에게 동일한 개발환경 제공
- 새로운 버전의 테스트(=격리된 환경을 이용)
- 동일한 서버가 여러대 필요한 경우