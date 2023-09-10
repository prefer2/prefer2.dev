---
title: "[WIL] 9월 1주차"
date: "2023-09-10"
description: "공부는 했지만 정리는 하지 않았다"
tags:
  - wil
  - sep
  - node
---

![image](https://github.com/prefer2/prefer2.dev/assets/67692759/21c38633-0333-474e-9280-28983d5f093d)

## ACL, ACG

[https://guide.ncloud-docs.com/docs/vpc-nacl-vpc](https://guide.ncloud-docs.com/docs/vpc-nacl-vpc)

[https://www.ncloud.com/product/security/acg](https://www.ncloud.com/product/security/acg)

ACL: Access Control List

ACG: Access Control Group

NAT(Network Address Translation), pod 등등 네트워크나 인프라 단어들이 쏟아진다. 네트워크 공부 하자…!

---

## Node.js

![Untitled](https://github.com/prefer2/prefer2.dev/assets/67692759/caca259e-c297-4ca9-ab44-82c0b79dd51b)

![Untitled 1](https://github.com/prefer2/prefer2.dev/assets/67692759/48d6b9ae-38a5-4f2d-aa8d-91e6898c23eb)

브라우저와는 약간 달라서 어렵다. worker_thread, cluster 음. 사실 몰라도 프레임워크나 pm2를 사용하는데는 문제는 없을것 같으나 그래도 공부해놓아야지. 이상하게 node 관련해서는 한국어 글들을 찾아보기 어려운 것 같다(내가 구글링을 못하는 걸지도…)

[https://nodesource.com/blog/worker-threads-nodejs](https://nodesource.com/blog/worker-threads-nodejs)

[https://engineering.linecorp.com/ko/blog/pm2-nodejs](https://engineering.linecorp.com/ko/blog/pm2-nodejs)

[https://yceffort.kr/2021/04/nodejs-multithreading-worker-threads](https://yceffort.kr/2021/04/nodejs-multithreading-worker-threads)

---

## node와 typescript

node환경에서 typescript를 사용하기 위해서는 javascript로 컴파일이 필요하다

### ts-node

https://www.npmjs.com/package/ts-node

> It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling.

주로 nodemon과 함께 local 개발을 할때 쓰이는 듯 하다

### @types/node

> This package contains type definitions for Node.js (http://nodejs.org/).

---

## rollup

[https://rollupjs.org/](https://rollupjs.org/)

[https://so-so.dev/tool/rollup/rollupjs-config/](https://so-so.dev/tool/rollup/rollupjs-config/)

---

## 짧은 회고

회사 컴퓨터에서 보안 문제로 제한이 좀 있다(귀차나) icloud를 쓰던지 하는 방식으로 변경해야 될 것 같다. 요즘 네트워크나 인프라 관련해서 몰라도 너무 모른다는 생각이 든다. 어디서부터 시작을 해야 할지 모를정도로 모르는 단어가 쏟아지는 중이다. 이래서 전공을 열심히 들으라고 했던 거구나...!
