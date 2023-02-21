---
title: 블로그 발전기 - 2편
date: "2023-02-14"
description: "기똥찬 블로그로 성장중"
tags:
  - blog
  - sitemap
  - rss
---

## 태그별 모아보기

![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-02-13_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4 59 26](https://user-images.githubusercontent.com/67692759/218408045-87a82f59-184c-4026-b502-ab29f5a53e2f.png)

![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-02-13_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4 59 40](https://user-images.githubusercontent.com/67692759/218408147-c00a8fae-5d47-4c2d-b4a5-2f0f0be1c728.png)

글에 작성했던 tag별로 모아볼 수 있는 페이지를 구현하였다. 태그별 모아보기, 시간 순으로 모아보기를 구현하고 싶었기 때문에 archives페이지에서 전체 글을 가져와 태그별, 날짜별로 정렬해주었다.

태그별 모아보기 페이지는 포스트 페이지와 동일하게 동적 라우팅으로 구현하였다. 이제 어떤 곳에서든 태그를 누르면 해당 태그 모아보기 페이지로 이동한다.

---

## sitemap & RSS

사실 크기가 작은 사이트에는 sitemap이 불필요하다. 하지만 나의 블로그는 앞으로 매우 커질 것이기 때문에 sitemap을 추가했다. 빌드시마다 sitemap과 robot.txt를 빠르게 생성해주는 [next-sitemap](https://www.npmjs.com/package/next-sitemap)을 사용하여 추가했다.

대부분의 블로그에는 구독 기능인 RSS(Really Simple Syndication)가 있다. 또한 구글의 search console에서 sitemap과 함께 rss를 제출하기를 권장하고 있다(이는 크롤링에 도움이 된다고 한다) RSS를 쉽게 생성해주는 패키지가 있어 이를 사용하여 추가해주었다. 관련 설정은 아래 글을 참고했다.

[https://j471n.in/blogs/rss-feed-for-nextjs](https://j471n.in/blogs/rss-feed-for-nextjs)

---

## 이것저것 추가

날짜 포맷팅을 이쁘게 해주기 위해서 date-fns를 추가했다.

framer-motion 맛보기. 아직은 메인 페이지에서 글을 가져올 때만 애니메이션을 넣어주었는데 조금 더 공부해서 다양한 곳에 애니메이션을 추가해보고 싶다.

네이버 서치 콘솔에 등록했다. 이제 네이버에 검색해도 내 블로그가 보인다 크크(그나저나 구글은 왜 이리 오래걸리는지 모르겠다. 어여 등록해주라우)

![네이버 검색](https://user-images.githubusercontent.com/67692759/218408281-54d491c6-fff7-44a4-bdca-239f8ef22c32.png)

### +) 구글 등록 완료

![구글 서치 콘솔 등록](https://user-images.githubusercontent.com/67692759/220804499-8ebf8dcf-c484-4b46-9932-9816a7e72741.png)

![image](https://user-images.githubusercontent.com/67692759/220804770-c90ba60a-2636-480e-b3c1-c9ec898bcdf9.png)

구글 서치 콘솔에도 등록이 되었다는 메일이 왔다. 등록까지는 약 1달 반 정도가 걸렸다.

---

## 수정해야 할 사항

글 제목으로 검색 했을 시 글 제목과 설명이 아닌 메인 페이지가 나오고 있는데 내가 SEO 관련 설정을 잘못한 것인지 아니면 아직 반영이 안된 것인지는 조금 더 알아봐야겠다.

![네이버 검색 by 제목](https://user-images.githubusercontent.com/67692759/218408287-6b02f12c-0bc5-4578-868b-89263f69919e.png)

media-zoom 얹어서 사진 확대하기 기능을 추가하려고 하니 아래와 같은 오류가 생기고 있다. 뭔가 mount 되기 전에 utterance를 얹을려고 해서 그런 것 같은데 흠.

![스크린샷 2023-02-14 오후 5.01.17.png](https://user-images.githubusercontent.com/67692759/218753955-e2c41da5-423f-4570-9532-8b9f1d6f045e.png)
