---
title: "알아보자 npm"
date: "2023-09-17"
description: "어쩌면 나 npm 잘 모르고 있었을지도"
tags:
  - npm
  - package.json
  - package-lock.json
---

요번에 과제를 진행하며 기존 프로젝트 install 및 새로운 프로젝트 셋팅을 할 경험을 했습니다. 이 과정에서 가장 많이 사용했던 npm에 대해 조금 더 자세히 알아보고 과정에서 궁금했던 점들을 정리해보고자 합니다

## npm?

node package manager. Node.js에서 사용할 수 있는 **모듈들을 패키지화**하여 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI(Command line interface)를 제공한다. 자신이 작성한 패키지를 공개할 수도 있고 필요한 패키지를 검색하여 재사용할 수도 있다.

_npm github을 읽다 알게 되었는데 npm은 node pacakge manager의 줄임말이 아니라고 한다. 따라서 대문자 NPM이 아닌 npm으로 적어달라고ㅋㅋ_

## package.json

`package.json`은 프로젝트 정보와 의존성(dependencies)을 관리하는 문서. npm에 패키지를 배포하고 npm registry에 올리기 위해 반드시 필요한 문서이다.

- 자신의 프로젝트가 의존하는 패키지 목록
- 자신의 프로젝트 버전
- 다른 환경에서도 빌드 할 수 있게 만들어, 다른 개발자도 쉽게 사용할 수 있도록 한다

즉, npm이라는 오픈소스에 패키지를 공유하기 위한 명세이자, 프로젝트의 의존성을 관리를 위한 명세를 관리하는 문서이다.

### tilde, caret

- 틸드(~): x.y.z 중 z 범위 내에서 버전 업데이트
  - ~1.2.3: >=1.2.3 <1.3.0
- 캐럿(^): x.y.z 중 x 이하 하위호환성이 보장되는 범위 내에서 버전 업데이트
  - ^1.2.3: >=1.2.3 <2.0.0

### package-lock.json

`package-lock.json` 파일은 npm을 사용해서 `node_modules` 트리나 `package.json` 파일을 수정하게 되면 자동으로 생성되는 파일이다. 이 파일은 파일이 생성되는 시점의 의존성 트리에 대한 정확한 정보를 가지고 있다.

package.json 파일이 존재하지만 package-lock.json 파일이 필요한 이유는 무엇일까? package.json에는 위에서 설명한 틸드나 캐럿으로 특정 버전이 아닌 버전의 범위를 사용하기 때문이다. 동일한 package.json 파일로 npm install을 실행했지만 패키지의 minor, patch 버전이 배포되면 다른 버전이 설치되는 것이다. 물론 대부분의 경우에는 문제가 없지만 간혹 오류를 일으키는 경우가 있기 때문에 package-lock.json 파일은 의존성 트리에 대한 정확한 정보를 가지고 있다.

## npm ci?

저는 이전까지 주로 기존 프로젝트를 clone받아 package들을 설치할 때 `npm install`을 사용하곤 했다.

새로운 프로젝트를 clone받아 README를 읽다보니 다음과 같이 적혀있었다

![image](https://github.com/prefer2/algorithm/assets/67692759/7239ad01-a285-4530-8ee1-bc43904d32a5)

처음 사용해본 command였다. 내가 알고 있던 ci는 continuous integration의 ci밖에 없어서 찾아보니 여기서 사용되는 ci는 clean install을 뜻한다고 한다.

### npm ci VS npm install

- The project **must** have an existing `package-lock.json` or `npm-shrinkwrap.json`.
- If dependencies in the package lock do not match those in `package.json`, `npm ci` will exit with an error, instead of updating the package lock.
- `npm ci` can only install entire projects at a time: individual dependencies cannot be added with this command.
- If a `node_modules` is already present, it will be automatically removed before `npm ci` begins its install.
- It will never write to `package.json` or any of the package-locks: installs are essentially frozen.

짧게 요약하자면 npm ci는 package-lock을 기반으로 install을 하기 때문에 version range가 아닌 정확하게 동일한 버전을 설치하게 된다. npm ci를 사용하면 node_modules를 삭제하고 새로 설치한다(때문에 clean install이라는 이름을 가지게 된 것 같다)

### when to use npm ci

자동화된 환경인 테스트 플렛폼, CI, 배포를 위해 사용되거나, 혹은 (node_modules 삭제가 필요한)clean install이 필요할 때 사용하면 된다.

이전 프로젝트에서 캐싱이 필요없는 배포마다 파일들을 삭제해주고, npm install을 한 기억이 난다. 앞으로는 캐싱이 필요하지 않는 경우라면 배포 command 작성을 할 때 ci 명령어를 사용해야겠다.

[https://docs.npmjs.com/cli/v7/configuring-npm/package-json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

[https://docs.npmjs.com/cli/v9/configuring-npm/npmrc](https://docs.npmjs.com/cli/v9/configuring-npm/npmrc)

[https://docs.npmjs.com/cli/v10/commands/npm-ci](https://docs.npmjs.com/cli/v10/commands/npm-ci)
