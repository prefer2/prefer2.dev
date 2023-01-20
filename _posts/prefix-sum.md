---
title: 누적합,구간합 알고리즘(Prefix Sum)
date: "2023-01-20"
description: "빠르게 구간합을 구하는 방법"
tags:
  - algorithm
---

배열의 일부 구간의 합을 빠르게 구할 수 있게 해주는 알고리즘이다. N개의 원소가 주어졌을 때 반복문을 통해 일정 구간의 합을 구하고자 하면 O(N)의 시간 복잡도가 걸리지만 부분합 알고리즘을 사용하면 O(1) 시간 복잡도로 문제를 해결할 수 있다.

아래와 같은 배열이 있다고 하자
![image:77259C36-C1BC-41E9-A943-F7074D374468-26818-000013F1CD9D50E6/IMG_2438.jpg](https://user-images.githubusercontent.com/67692759/213374978-a4c745a9-62de-478a-adc7-934c9b1c3b76.jpg)

배열의 누적합을 구하면 다음과 같다. O(1)로 이를 구할 수 있다.
![IMG_2440](https://user-images.githubusercontent.com/67692759/213375069-1799fa35-603f-4681-9e88-032adeee157c.jpg)

만약 1~3까지의 부분합을 구하고자 한다면 아래와 같이 구할 수 있다. 어떤 구간을 구하고자 하더라도 뺄셈을 통해 빠르게 구할 수 있게 된다.

![IMG_05176FEEC7D5-1](https://user-images.githubusercontent.com/67692759/213375142-89456c22-cd9b-4ecb-aa59-a4550c50820f.jpeg)

## 1차원 누적합

이 아이디어를 활용해서 어떤 구간에 값을 더하고자 할때 이를 빠르게 구하는 방법에 대해 알아보자. 매번 구간에 값을 더하게 되면 O(N)의 복잡도를 가지게 된다. 부분합 알고리즘을 통해 복잡도를 줄일 수 있다.
여기서부터 여기까지 값을 더할거야 라고 표시를 해놓는 것이 아이디어이다. 예시를 통해 살펴보자

만약 2~5까지 3을 더하고자 한다면 다음과 같이 표시해 둔다.
![8F6C04D2-0857-4734-8215-9488C11C4249](https://user-images.githubusercontent.com/67692759/213375168-74ffae55-9cb3-419f-bade-222d52e77548.png)

이후 구간합을 구한다. 원하는 결과가 나오는 것을 알 수 있다.
![7C399FCA-BF4B-4D96-891E-39781D707373](https://user-images.githubusercontent.com/67692759/213375221-c83b92cd-81d4-4d42-b1a8-23935868ca96.png)

이는 여러 구간에 값을 더하고자 할 때 효력이 나타난다.
[2, 5] 에 3을 더하고
[0, 3] 에 2를 빼고
[4, 7] 에 4를 더한다고 하자

아래와 같이 표시를 할 수 있다. 구현의 편의를 위해 배열의 길이보다 1길게 만들어서 표시하면 더 편하다.
![420994CD-0C1A-4665-BA87-EEE756C929F3](https://user-images.githubusercontent.com/67692759/213375238-497fdfc7-fdc0-45ba-86a5-49b92d64e100.png)

마지막에 누적합을 구하면 원하는 결과가 나온다.
![70DEF483-1FA7-47A7-8963-7DFF28DA9246](https://user-images.githubusercontent.com/67692759/213375292-8c6a4039-edf1-416b-a7f7-67ab91c33c25.png)

## 2차원 누적합

1차원의 아이디어를 넓혀서 2차원에도 적용이 가능하다. 아래 순서로 2차원 배열의 누적합도 쉽게 구할 수 있다.
![28CDA855-569A-42E6-8A4D-F1683F3A7DF5](https://user-images.githubusercontent.com/67692759/213436240-576b9098-241c-4a13-a100-ba840fd79653.jpeg)

### 관련 문제

[11659번: 구간 합 구하기 4](https://www.acmicpc.net/problem/11659)

[11660번: 구간 합 구하기 5](https://www.acmicpc.net/problem/11660)

[[2022 카카오 블라인드] 파괴되지 않는 건물](https://school.programmers.co.kr/learn/courses/30/lessons/92344)

앞으로 연속되는 구간의 합을 구하고자 할 일이 있다면 누적합 알고리즘을 생각하자.
