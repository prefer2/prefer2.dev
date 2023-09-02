---
title: "[WIL] 8월 4, 5주차"
date: "2023-09-02"
description: "What "
tags: 다시 공부 레고
  - wil
  - aug
---

![image](https://github.com/prefer2/prefer2.dev/assets/67692759/6ff326a7-514c-4f56-bcaa-c7004804f176)


## 무중단 배포

무중단 배포는 말 그대로 서비스가 중단되지 않은 상태로 새로운 버전을 사용자들에게 배포하는 것을 의미한다. 기본적으로 최소 2대의 서버가 필요하다

- 롤링(rolling) 배포
    - 트래픽을 점진적으로 구버전에서 새로운 버전으로 옮기는 방식.
    - 새로운 버전의 인스턴스를 생성하고, 로드밸런서에 이 인스턴스를 연결하고 구버전의 어플리케이션이 실행되는 인스턴스를 하나 줄인다
    - 이전 버전이 사용되는 어플리케이션에 대한 연결을 없애고 새로운 버전으로 교체한 후 다시 연결하는 방식
    - 다양한 오케스트레이션 도구에서 지원한다. 많은 서버 자원을 확보하지 않아도 무중단 배포가 가능하다는 장점이 있다. 점진적으로 새로운 버전이 사용자에게 출시되므로 배포로 인한 위험성이 줄어든다는 장점도 있다
    - 배포 도중 서비스 중인 인스턴스 수가 줄어들게 되어 각각의 서버가 부담하는 트래픽의 양이 늘어날 수 있다. 트래픽을 잘 파악해야 한다. 또 구버전과 신버전이 동시에 서비스되기 때문에 호환성 문제도 발생할 수 있다
- blue/green 배포
    - 트래픽을 한번에 구버전에서 신버전으로 옮기는 방법. 현재 운영중인 서비스의 환경을 Blue라고 부르고, 새롭게 배포할 환경을 Green이라고 한다.
    - 배포 시점에 로드 밸런서가 트래픽을 Blue에서 Green으로 일제히 전환시킨다
    - 한번에 트래픽을 모두 새로운 버전으로 옮기기 때문에 호환성 문제가 발생하지 않는다
    - 실제 운영에 필요한 서버 리소스 대비 2배의 리소스를 확보해야 한다
- 카나리(canary) 배포
    - 점진적으로 구버전에 대한 트래픽을 신버전으로 옮기는 것은 롤링 배포 방식과 비슷하지만, 새로운 버전에 대한 오류를 조기에 감지하기 위한 방식이다
    - 소수 인원에 대해서만 트래픽을 새로운 버전에 옮긴 상태에서 서비스한다. 새로운 버전에 이상이 없다라고 여겨진 경우에 모든 트래픽을 신버전으로 옮긴다. 이때 새로운 버전으로 옮기는 기준은 랜덤이다.
    - 새로운 버전으로 인한 위험을 최소화 할 수 있지만, 신/구 버전의 애플리케이션이 동시에 존재하므로 호환성 문제가 발생할 수 있다

공부해야하는 내용이라는 조금 다른 방향으로 공부했지만 이번기회에 한 번 정리해봐서 좋다

## npm install VS npm ci

우선 package.json과 package-lock.json의 차이를 알아야한다. package.json에는 version range로 의존성 목록의 버전을 관리한다(eg. “react”: “^17.0.2”) 이러한 version range로 협업하는 사람마다 서로 다른 node_modules를 생성할 수 있다(각자의 로컬 환경마다 npm, node 버전이 다를 수 있기 때문에)

package-lock.json은 package.json과 다르게 정확한 버전이 명시되어 있다. 이때문에 우리는 협업시에 package-lock.json도 형상관리를 해주는 것이다.

### npm ci(clean install)

- 쓰기 권한이 없다
- package-lock.json이 무조건 존재해야만 하고, 없으면 에러를 낸다
- package-lock.json 파일을 기반으로 의존성을 설치하고, package.json은 버전 매칭 벨리데이션 용도로 사용한다
- node_modules를 삭제한 후, 의존성을 한번에 설치한다

https://stackoverflow.com/questions/52499617/what-is-the-difference-between-npm-install-and-npm-ci

초기 install은 `npm c`i를 사용하자…!


## RTK

principle of Redux, which is that, everything that changes in your application, including the data and the UI state, is contained in a single object, we call the state or the state tree.

### configureStore

- option 객체가 named되어 있어 읽기 쉽다
- `applyMiddleware`로 미들웨어들을 배열로 전달
- 자동으로 Redux DevTools 사용

기본적으로 redux-thunk 미들웨어를 가지고 있다. 

```jsx
import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './usersReducer'
import postsReducer from './postsReducer'

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
	middleware: ...
	enhancers: ...
})

export default store
```

### createSlice

createSlice는 reducer 함수에 기반해서 action type과 action creator를 자동으로 생성해준다.

```jsx
const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    createPost(state, action) {},
    updatePost(state, action) {},
    deletePost(state, action) {},
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = postsSlice
// Extract and export each action creator by name
export const { createPost, updatePost, deletePost } = actions
// Export the reducer, either as a default or named export
export default reducer
```

- initialState
- name: 생성된 action의 prefix
- reducers
- **extraReducers**

slice의 컨셉! 각 slice reducer가 state의 slice를 가지고 있다는 점. 그리고 많은 slice reducer들이 같은 action type에 독립적으로 응답할 수 있다는 점.

extraReducers

비동기 액션에 대한 리듀서? createAsyncThunk를 통해 생성된 action을 다룰 때 주로 사용

reducer와 extraReducer가 모두 같은 action type에 동작한다면 reducer가 사용됨

builder callback

```jsx
// createReducer에서도 builder function 형식을 따라감
// createReducer는 좀 더 편하게 reducer를 만드는 방식

import { createAction, createReducer } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const incrementByAmount = createAction<number>('counter/incrementByAmount')

const initialState = { value: 0 } as CounterState

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++
    })
    .addCase(decrement, (state, action) => {
      state.value--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
})
```

builder object

- addCase
- addMatcher
- addDefaultCase

https://redux-toolkit.js.org/api/createReducer#usage-with-the-builder-callback-notation

### createAsyncThunk

```jsx
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from './userAPI'

// First, create the thunk
const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    })
  },
})

// Later, dispatch the thunk as needed in the app
dispatch(fetchUserById(123))
```

https://redux-toolkit.js.org/api/createAsyncThunk

https://blog.hwahae.co.kr/all/tech/6946


## 짧은 회고

조각조각 공부한 내용들이 아까워서 주간 회고를 하려고 한다. 얼마나 오래 갈지는 모르겠지만 한 번 시작하면 몇주라도 더 열심히 메모할테니까….! 글쓰기 습관을 들이자

공통 기술 교육이 끝나고 이제 진짜 팀 교육이 시작되었다. 지금까지 내가 경험해왔던 프론트엔드에만 집중하는 개발이 아닌 조금 더 큰 그림의 학습을 하고 있어 신기하다. 시야를 넓힐 좋은 기회라 생각한다. 새로운걸 공부해서 그런지 간만에 코딩해서 그런지 재미나다.

연수원도 갔다왔겠다 이제 진짜 공부하자 하핳
