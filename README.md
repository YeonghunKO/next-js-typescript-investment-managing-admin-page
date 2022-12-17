# 🧐 이 프로젝트는 무엇?

**_원티드 프리온보딩 마지막 기업과제([링크](https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-3-2-3))를 리팩토링 하였습니다._**

- [기업과제세부내용](https://pollen-port-115.notion.site/3-3-024ecdae5af6452788a9be19106ebeec)

리팩토링 내용을 간단하게 말씀드리면, `atomic design` system과 `NEXT JS`를 도입하여:

<span style="color:#fdc2ff">`코드의 재 사용성`</span>

<span style="color:#fdc2ff">`코드 가독성 향상`</span>

<span style="color:#fdc2ff">`테스트 하기 쉬운 코드`</span>

<span style="color:#fdc2ff">`쉬운 협업`</span>

을 추구하였습니다.

atomic design이 적용된 서비스를 storybook으로 문서화 하였습니다. 아래 링크에서 확인 가능합니다.

👉 <a style="color:#fdc2ff" href='https://639d27f821ef923b0aa5c3bf-ptoacsxdwq.chromatic.com/'>`스토리북 링크`</a>

# ⏳ 진행 기간

`2022년 12월 06일 ~ 2022년 12월 17일`

# 🎶 로컬에서 시작하기

## 데이터 서버 열기

- `/server` 폴더에 들어가서 아래의 명령어를 입력하여 서버를 오픈합니다.(port 4000번에 서버가 오픈됩니다)

```zsh
npm run install
npm run start
```

## client 서버 열기

- 이제 서버가 오픈되었으면 root 로 돌아와서 client 서버를 오픈해야합니다. root 위치(`/`)에서 아래의 명령어를 입력합니다.

```zsh
npm run install
npm run dev
```

## 로그인 하기

- client 서버로 로그인화면이 나타납니다. 그럼, 아래의 id, password를 입력합니다

```zsh
id: sinkyo@gmail.com
password: test123
```

# 👁‍🗨 데모

|                                                        로그인 - 로그인하기                                                        |                                                      계좌목록 - 네비게이션                                                      |
| :-------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| ![Dashboard - upload post](https://user-images.githubusercontent.com/65995664/171991129-e09deb1d-229a-4c13-865b-afec621ed705.gif) | ![Dashboard - save post](https://user-images.githubusercontent.com/65995664/172078062-0124e2ae-7b13-485e-8fd8-70ce5f2e9764.gif) |

# 🤖기술 스택

<img alt="next.js" src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-blue?style=flat&logo=TypeScript&logoColor=white"/>

![](https://img.shields.io/badge/axios-551a8b?style=flat-square&logo=axios&logoColor=white) ![](https://img.shields.io/badge/json%20server-000000?style=flat&logo=JSON&logoColor=white) ![](https://img.shields.io/badge/universal%20cookie-D4AA00?style=flat&logo=Cookiecutter&logoColor=white)

![](https://img.shields.io/badge/React%20Query-FF4154?style=flat&logo=React%20Query&logoColor=white) <img alt="recoil" src ="https://img.shields.io/badge/recoil-4082bc?&style=flat&logo=Recoils&logoColor=white"/>

<img alt="styled-components" src ="https://img.shields.io/badge/styled components-DB7093?&style=flat&logo=styled-components&logoColor=white"/> ![badge](https://img.shields.io/badge/MUI-397cf9?style=flat-square&logo=MUI&logoColor=white) <img alt="styled-components" src ="https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=Storybook&logoColor=white"/>

# 📃 프로젝트 진행 과정

- 대략적인 계획을 페이지별로 정하였습니다. ex> 로그인 / 계좌목록 / 사용자목록
- 그리고 각각의 계획을 해결하기 위한 세부 계획을 정하였습니다. ex> 로그인 👉 input 컴포넌트를 만들고 atom으로 분류하기
- 중간중간 버그가 발생하면 급한것은 바로 해결하고 급하지 않은것은 `나중에 할 것` 카테고리에 저장해 두었다가 나중에 해결했습니다

# ✏️ 리팩토링 내용

## 1. atomic design을 도입하여 아키텍쳐 개선

atomic design은 쉽게 말해 웹페이지의 구성요소 최소 단위로 쪼개어 레고블럭처럼 조립하는 형태로 개발하는 것을 뜻합니다.

쪼갤 수 없는 최소 단위인 atom을 시작으로 컴포넌트를 붙여나갑니다. 아래와 같이 컴포넌트 단위가 나뉘어 집니다.

`atom: 쪼갤 수 없는 최소단위.`

`molecules: atom으로 구성됨.`

`organism: molecules로 구성됨.`

`template: organism으로 구성됨.`

(atomic design에 대해서 더 자세하게 알고 싶으시면 [링크](https://bradfrost.com/blog/post/atomic-web-design/)를 클릭해주세요😊)

잘 만 사용한다면 개발 생산성은 물론이고 개발자와의 협업, 아니 비개발자와의 협업도 극대화 할 수 있을 것이라고 생각했습니다. 아래에서 상세하게 서술하겠지만, 컴포넌트를 비즈니스 로직과 잘 분리하면 정적으로 랜더링 되는 컴포넌트들에 대한 정보를 특정 파일안에 모아두고 관리할 수 있습니다.

그럼 이 프로젝트를 잘 모르는 분들이더라도 그 파일만 변경하면 페이지안에 들어가는 요소를 수정할 수 있습니다.

백문이 불여일견입니다. atomic design을 적용한 서비스를 storybook으로 문서화 하였습니다. 해당 <a style="color:#fdc2ff" href='https://639d27f821ef923b0aa5c3bf-ptoacsxdwq.chromatic.com/'>`스토리북 링크`</a>를 통해 바로 확인하실 수 있습니다

## 2. NEXT JS도입

- middleware에서 cookie 유무 확인한 후 cookie가 있으면 계좌목록, 없으면 로그인 페이지로 redirecting해주었습니다
- react-query의 prefetch와 + hydration을 이용해서 서버에서 미리 초기 데이터를 불러와 페이지를 만들기 때문에 페이지 시작하자마자 로딩이 없이 바로 화면을 볼 수 있습니다

## 3. 라이브러리를 쓰지않고 직접 구현

- pagination 직접 구현하였습니다
- react-hook-form을 쓰지 않고 login input validator 구현하였습니다.

​

# 📂 디렉토리 구조

# 📖TIL / 에러 / 아쉬운점 / 앞으로 해야 할 것

회고와 같은 성격의 글이므로 velog에 따로 정리해두었습니다.

<a href="https://velog.io/@yhko1992/%ED%88%AC%EC%9E%90%EA%B4%80%EB%A6%AC%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%96%B4%EB%93%9C%EB%AF%BC">velog 링크 👈🏻</a>
