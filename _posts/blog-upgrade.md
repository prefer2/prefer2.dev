---
title: 블로그 발전기 - 1편
date: "2023-01-16"
description: "댓글기능 추가, recoil, scroll progress bar, 이전글 다음글"
tags:
  - blog
  - recoil
---

## 댓글 기능 추가

어떤 기능이 더 들어가면 좋을까 고민하다 댓글 기능을 추가하기로 했다. Github issue를 기반으로 동작하는 [utteranc](https://utteranc.es/)를 사용해보자.

### react에서 쓸 수 있도록 컴포넌트화

utteranc의 사용방법은 매우 간단하다. 홈페이지에서 제안하는대로 따라가면 된다. 원하는 레포에 utteranc를 다운받고, 원하는 형식을 선택하고 해당 script를 사용하면 된다. page pathname보다는 page title을 issue tittle로 하는 것이 보기 좋을 것 같아 page title을 선택하였다. 내 블로그는 react를 기반으로 만들어졌기 때문에 해당 script를 컴포넌트화 하여 컴포넌트 형식으로 사용할 수 있도록 하자.

```tsx
import useThemeMode from "hooks/useThemeMode";

const Comment = () => {
  const { themeMode } = useThemeMode();

  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement("script");
        scriptElem.src = "https://utteranc.es/client.js";
        scriptElem.async = true;
        scriptElem.setAttribute("repo", "prefer2/prefer2.dev");
        scriptElem.setAttribute("issue-term", "title");
        scriptElem.setAttribute("theme", `github-${themeMode}`);
        scriptElem.crossOrigin = "anonymous";
        elem.replaceChildren(scriptElem);
      }}
    />
  );
};

export default Comment;
```

### 😱 Github 로그인 시 redirect가 이상한 페이지로 이동?!?!

![utteranc 오류](https://user-images.githubusercontent.com/67692759/212606818-3490371c-3386-4146-89e3-3b2c0671fa11.png)

issue를 찾아보니 redirect시 link의 cannoical를 사용한다고 한다. 덕분에 잘못된 cannoical을 설정해주고 있었음을 확인할 수 있었다. 오타를 고쳐주니 정상적으로 동작했다. 혹시 나처럼 redirect가 이상한 곳으로 가서 404 에러가 발생한다면 cannonical값을 다시 한 번 확인해보자.

[https://github.com/utterance/utterances/issues/474](https://github.com/utterance/utterances/issues/474)

---

## Recoil 얹기

댓글을 추가하고 나니 댓글의 테마도 모드에 따라 변경되게 하고 싶었다. 기존에 알아보고 싶었던 recoil도 학습할 겸 recoil를 사용해보았다.

recoil 개념에 대해 알아보기 좋은 동영상

[https://www.youtube.com/watch?v=\_ISAA_Jt9kI](https://www.youtube.com/watch?v=_ISAA_Jt9kI)

### next.js + recoil

쉽게 적용이 가능했으나 hot module replacement를 사용할때마다 에러가 발생하였다. 해결방법을 찾다보니 해당 이슈가 꽤나 핫한 것을 확인할 수 있다.

![next.js + recoil 에러 메시지](https://user-images.githubusercontent.com/67692759/212606920-636dccf7-c73e-4a61-b951-2208daa1b64a.png)

https://github.com/facebookexperimental/Recoil/issues/733

recoil도 해당 문제점을 알고 해결 방법을 최근에 추가하였다. [https://recoiljs.org/ko/blog/2022/10/11/recoil-0.7.6-release](https://recoiljs.org/ko/blog/2022/10/11/recoil-0.7.6-release)

블로그에서 제안하듯이 `RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false`

로 환경 설정값을 지정해주면 된다.

[https://nextjs.org/docs/messages/react-hydration-error](https://nextjs.org/docs/messages/react-hydration-error)

사실 단순히 테마 값 하나만을 위해서 recoil을 추가한 건 좀 많이 과하다. 그래도 처음으로 recoil을 사용해보고 어떤 식으로 동작하는지 공부해볼 수 있었다.

---

## Scroll Progress Bar 추가

사용자가 전체 글의 어느 위치에 있는지 보여주기 위해 scroll progress bar를 추가하였다. 페이지가 그려지고 나서야 전체 페이지의 높이를 알 수 있기 때문에 `useEffect`를 사용하여 이를 구했다. (rAF 기반 throttle을 걸어 주었는데 의문점이 생겨서 관련 내용은 따로 정리해볼 예정이다)

페이지 전환 시에는 스크롤의 위치가 0으로 되게 하기 위해서 아래와 같은 코드를 추가해주었다

```tsx
Router.events.on("routeChangeComplete", (): void => setScrollPercentage(0));
```

---

## 이전글, 다음글

포스팅 마다 이전글, 다음글을 보여주는 컴포넌트를 추가하였다. 포스팅 페이지 렌더링 시 slug 값을 가져오는 형식이다. 로직은 아래와 같이 작성했는데 조금 더 좋은 방법이 없을지 고민이다.

```tsx
export const getPrevNextPosts = (slug: string) => {
  const slugs = getPostSlugs();

  let slugIndex = 0;
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort(
      (post1, post2) =>
        Number(new Date(post2.date)) - Number(new Date(post1.date))
    )
    .map((post, idx) => {
      if (post.slug === slug) slugIndex = idx;
      return { title: post.title, slug: post.slug };
    });

  if (slugIndex === 0) return { prev: posts[slugIndex + 1] };
  if (slugIndex === slugs.length - 1) return { next: posts[slugIndex - 1] };

  const nextPost = posts[slugIndex - 1];
  const prevPost = posts[slugIndex + 1];

  return { prev: prevPost, next: nextPost };
};
```

slug과 제목을 넘겨주어 포스팅 하단에서 제목을 확인할 수 있고, 이를 클릭하면 해당 글로 이동하게 된다.

![이전글, 다음글 기능](https://user-images.githubusercontent.com/67692759/212607324-0ee77646-ad0c-4b99-8779-252a613f9378.png)

2편에는 어떤 기능들을 추가해야할지 흠흠
