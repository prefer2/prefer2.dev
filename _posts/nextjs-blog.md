---
title: Next.js로 나만의 블로그 만들기
date: "2023-01-05"
description: "내 입맛에 맞는 나만의 블로그 만들기 대작전"
tags:
  - blog
  - next.js
---

기술 블로그를 tistory를 통해 운영하고 있지만, 학습을 위해 가장 좋은 방법이라고 생각이 되어 나만의 블로그 만들기를 시작했다. 블로그를 만들게 된 이유는 아래와 같다.

- SSR, SEO 학습
- 백엔드 없이 정적으로 진행 가능
- 나만의 커스터마이징이 가능
- 간지

기술 스택은 아래와 같이 선택했다.

- Next.js
- Typescript
- Tailwind
- Vercel

스타일링의 경우 기존에 사용하던 css-in-js가 아닌 tailwind를 선택했다. 스타일을 위한 불필요한 컴포넌트가 줄어들었고, 일관성 있는 디자인으로 개발할 수 있는 것 같다. 옛날 옛적에 접했던 bootstrap의 기억이 새록새록 났다.

[Next.js 공식 문서](https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website)와 Next에서 제공하는 [블로그 예시](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)를 보면서 만들어보았다. Next.js 공식 문서가 굉장히 잘 작성되어있고 Next관련 내용뿐만아니라 웹 전반의 내용을 잘 설명해주고 있어서 추천한다.

정적 블로그를 만들기 때문에 사용하는 SSG가 무엇인지 간단하게 알아보자.

> 💡 Static Site Generation  
> With Static Site Generation, the HTML is generated on the server, but unlike server-side rendering, there is no server at runtime. Instead, content is generated once, at build time, when the application is deployed, and the HTML is stored in a CDN and re-used for each request.

빌드 타임에 HTML이 생성되고, 이 생성된 HTML 파일은 CDN에 저장되어 사용된다. 많은 컨텐츠가 미리 렌더링되고 정적인 컨텐츠라는 특징 덕분에 페이지 로드 시간이 빠르다.

---

## 기본 설정

```bash
yarn create next-app --typescript
```

이후 [tailwind 공식 문서](https://tailwindcss.com/docs/guides/nextjs)에서 설명하는 대로 설정을 추가하였다. 절대 경로 설정을 위해 tsconfig 경로 설정을 추가하였다.

---

## Dynamic Routes

next는 규칙에 따라 pages 폴더에 파일을 생성하면 파일명에 맞게 라우팅을 해준다. 블로그의 경우 인덱스, 파일명 등의 정보가 url에 나타나야하기 때문에 dynamic routes가 필요하다.

![dynamic routes image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbZ2vOU%2FbtrVk5eeZ16%2FnTkRpOAWuU5gXCYq0eKQ5K%2Fimg.png)

posts/\[slug\] 형태를 가지고자 하기 때문에 pages/posts 폴더안에 \[slug\].tsx 파일을 만들어 블로그 글 페이지를 만든다. getStaticProps로 글의 내용을 가져오고(\[slug\].md 파일을 통해) 페이지는 getStaticProps가 리턴한 값을 props로 가지게 된다. getStaticPath로 이동 가능한 경로들을 정의하여 dynamic routing이 가능하도록 한다.

```tsx
export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
```

---

## 글 내용 보여주기

markdown을 사용하기 때문에 이를 HTML로 변환해서 코드로 넘겨주어야한다. remark를 통해 markdown을 HTML로 변환하고, 이를 rehype로 처리할 수 있다. 이렇게 HTML로 변환한 코드는 일반 HTML이기 때문에 리액트에게 넘겨서 넣어줄 때 dangerouslySetInnerHTML로 넣어준다. innerHTML을 해주기 싫어서 찾다보니 [react-markdown](https://github.com/remarkjs/react-markdown)이라는 패키지가 있어서 이를 사용해 글 내용을 보여주었다 (react-markdown을 사용하면 DOM을 다시 그리지 않고 변경된 부분만 바꿔준다).

코드 하이라이팅을 위한 rehype-highlight와 수식을 처리하기 위한 remark-math, rehype-katex 플러그인을 추가해주었다.

```tsx
const Post = ({ post }: PostProps) => {
  return (
    <article className="prose lg:prose-xl">
      <PostHeader title={post.title} date={post.date} />
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeHighlight, rehypeKatex]}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
};
```

스타일링을 직접 할 수도 있겠지만 tailwind에서 제공하는 [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) 플러그인을 사용하였다.

---

## SEO 향상하기

next의 head를 사용해서도 쉽게 SEO를 향상시킬 수 있지만 조금 더 편하게 구현하기 위해 [next-seo](https://github.com/garmeeh/next-seo)를 사용했다. 페이지별 seo를 위해서 PageSEO 컴포넌트를 만들어 넣어주었다. favicon같은 기본 default 값을 위해서는 next-seo의 DefaultSeo를 사용하였다.

```tsx
import { NextSeo } from "next-seo";
import SEO from "seo.config";

interface PageSEOProps {
  title: string;
  description: string;
  slug: string;
}

const PageSEO = ({ title, description, slug }: PageSEOProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={`${SEO.url}/${slug}`}
      openGraph={{
        url: `${SEO.url}/${slug}`,
        title,
        description,
      }}
    />
  );
};

export default PageSEO;
```

![og image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcdWcYi%2FbtrVqgG12m5%2F75mydwsbG9syc1Q6v4r6V0%2Fimg.png)

og를 통해 카카오톡 미리보기까지 이쁘게 변경된 것을 확인할 수 있다. 차후에 글이 더 많아지면 sitemap도 추가해볼 예정이다.

---

## 테마 설정하기

![light mode](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbQx3Df%2FbtrVqIQU52R%2F5mF56bvB9hK4kSxZOTNTjK%2Fimg.png)
![dark mode](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FebYlLM%2FbtrVtG56Mwu%2FR38UkgpKcsML4Cf4RX7uA0%2Fimg.png)

라이트모드, 다크모드를 만들어보았다. tailwind에서 제안한대로 [dark 클래스를 추가](https://tailwindcss.com/docs/dark-mode)해서 다크모드를 쉽게 구현할 수 있다.

새로고침 시에도 사용자가 정한 모드가 유지될 수 있도록 선택된 모드를 localstorage에 저장하였다. 초기 상태를 localstorage에서 가져오고자 했는데 server rendering이 먼저 일어나기 때문에 브라우저 환경이 아니라 localstorage를 찾을 수 없었다. 페이지가 클라이언트에 로딩된 이후에 접근할 수 있도록 useEffect로 저장된 값을 가져오도록 하였다. 만약 localstorage에 저장된 값이 없다면, 사용자의 브라우저에서 선호되는 모드를 가져와 이를 초기 값으로 사용하도록 하였다.

```tsx
const { themeMode, changeThemeToDark, changeThemeToLight } = useTheme();

const handleThemeToggle: React.MouseEventHandler = () => {
  if (themeMode === THEME.LIGHT) {
    changeThemeToDark();
  } else {
    changeThemeToLight();
  }
};

useEffect(() => {
  const mode =
    localStorage.getItem(THEME_KEY) ??
    (window.matchMedia("(prefers-color-scheme:dark)").matches
      ? THEME.DARK
      : THEME.LIGHT);
  if (mode === THEME.DARK) {
    changeThemeToDark();
  } else {
    changeThemeToLight();
  }
}, []);
```

typography를 통해 스타일링한 post부분은 [tailwind.config](https://github.com/prefer2/prefer2.dev/blob/main/tailwind.config.js)에 다크모드 관련 설정을 추가해주었다.

블로그가 워낙 여러개라 새로운 블로그는 어떤 용도로 사용할지는 모르겠다. 앞으로 tag별로 모아보기, 페이지네이션, 스크롤 위치 보여주기 기능, 검색 등을 추가하고 싶다.

### GitHub 코드 확인하기

[https://github.com/prefer2/prefer2.dev](https://github.com/prefer2/prefer2.dev)
