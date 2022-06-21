# [트리플] Frontend 과제 #3
![과제](https://user-images.githubusercontent.com/87295692/174729988-0d704374-4901-4268-a7fe-e1bb34d8e993.gif)

<br />

## 프로젝트 실행 방법

```shell
  $ npm i
  $ npm start
```

<br />

## 기술 스택
<div style="display: inline-block;">
  <img alt="React" src ="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=black" />
  <img alt="TypeScript" src ="https://img.shields.io/badge/typescript-3178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
  <img alt="styledComponents" src ="https://img.shields.io/badge/styledComponents-DB7093.svg?&style=for-the-badge&logo=styledComponents&logoColor=white"/>
  <img alt="Webpack" src ="https://img.shields.io/badge/webpack-8DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black"/>
</div>

### 기술 선택 이유

- **React**: 과제 최소 기술 입니다.
- **TypeScript**: 타입과 관련된 디버깅을 따로 수행하지 않아도 되고, 협업 측면에서 알맞은 타입 힌트를 제공할 수 있기 때문에 선택했습니다.
- **styledComponents**: 컴포넌트 확장에 용이하고, `ThemeProvider`를 통해 스타일 관련 값을 중앙관리화 할 수 있어 선택했습니다.
- **Webpack**: 한 섹션만 구현하는 무겁지 않은 과제였기에 `cra`보다 `Webpack`을 활용하여 가볍게 프로젝트 환경을 구성하고자 선택했습니다.

<br />

## 애니메이션 주요 로직

### 영역별 등장 애니메이션

> - CSS-in-JS의 특성을 살려 렌더링 이후 클래스를 조절하는 DOM API를 사용하기보다 **완성된 스타일을 전달하여 DOM 조작을 감소**시켰습니다.
> - 같은 동작이 반복된다는 점에서 컴포넌트로 분리하는 것이 확장성, 유지보수 측면에서 유리하다고 판단하여 `styled-component`로 구현했습니다.

자세한 구현 사항은 [UpriseInOrder 컴포넌트](https://github.com/sonwonjae/triple-frontend-homework/blob/develop/src/components/UpriseInOrder/UpriseInOrder.style.ts)에서 확인하실 수 있습니다.

### 숫자가 올라가는 애니메이션

#### 어려웠던 점

> 지정된 시간 내에 정확히 애니메이션 마무리하기

처음 숫자를 카운팅하는 로직을 구현할 때 `setTimeout`의 실행 주기를 `duration / number`로 지정하여 `number`만큼 카운팅되도록 구현했습니다.<br />
하지만 이 방식으로 구현하니 `number`마다 실행되는 `setTimeout`의 차이로 인해 `number`마다 시간의 차이도 생겼고 너무 많이 실행되는 `setTimeout`으로 인해 숫자가 커질수록 `duration`보다 한참 더 실행되는 단점이 있었습니다.

#### 해결 방법

> 일반적인 모니터가 초당 60번의 갱신 주기를 갖고 있다는 점을 활용

이 때문에 해당 로직을 구현할 때 숫자를 카운팅하는 개념이 아닌 **도달하는 개념**으로 전환하여 문제를 해결할 수 있었습니다.

자세한 로직은 [Count 컴포넌트](https://github.com/sonwonjae/triple-frontend-homework/blob/develop/src/components/Count/Count.tsx)에서 확인하실 수 있습니다.

<br />

## 폴더 구조

```shell
public
├─ images
src
├─ constants
├─ components
├─ layouts
├─ pages
├─ styles
└─ utils
```

- **public**: 정적 파일의 집합
- **constants**: 환경 변수와 `theme`을 제외하고 관리하는 상수 값(`image` 경로 등)
- **components**: 반복되는 최소 렌더링 단위의 집합
- **layouts**: 페이지를 구성하는 렌더링 단위의 집합
- **pages**: 페이지 렌더링 단위의 집합
- **styles**: `styled components`에서 관리하는 스타일의 집합
- **utils**: 컴포넌트에서 사용되는 순수함수의 집합


<br />

## 레이아웃 구현 시 마크업 수정사항

![레이아웃](https://user-images.githubusercontent.com/87295692/174729037-38c9f61a-e0b4-46cd-8e1e-802097c0ea23.png)

트리플 홈페이지와 거의 유사한 마크업을 했으나 누적 업적들과 수상 내역들 같은 경우 리스트형태이므로 `<ul>`태그가 더 시멘틱하다고 여겨져 `ul`태그와 `li`태그로 마크업 했습니다.

<br />

## 협업을 위해 노력한 점

### 규약된 린팅 사용

- https://github.com/titicacadev/eslint-config-triple/blob/main/STYLE_GUIDE.md 를 참고하여 네이밍 컨벤션에도 신경쓰며 팀 내의 규칙을 준수했습니다.

### TypeScript 사용

- 명시적인 타입 제공을 통해 타입 관련 코드 예측성을 높였습니다.

### 스타일 중앙 관리

> [theme.ts](https://github.com/sonwonjae/triple-frontend-homework/blob/develop/src/styles/theme/index.ts)

- `styled-components`의 `ThemeProvider`를 적극 활용하여 모든 스타일과 관련된 값을 중앙 관리하여 유지보수가 용이하도록 구현했습니다.

### Git Flow

> [Feature/Statistic](https://github.com/sonwonjae/triple-frontend-homework/pull/7)

- `Git Flow` 전략을 활용하여 레포지토리를 안전하게 관리했습니다.

### Commit Convention

```shell
$ <type>: <subject> - #<issue tag>
```

```text
config: 환경 구성
docs: 문서 작업
feat: 기능 구현
refactor: 리팩토링
style: 스타일링
```


### 세부적인 이슈 등록

> [Issues](https://github.com/sonwonjae/triple-frontend-homework/issues)

제가 구현한 기능들에 대해 팀원들이 명시적으로 알 수 있도록 `Issues`를 적극 활용했습니다.
