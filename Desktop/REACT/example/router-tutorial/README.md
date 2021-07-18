# 전통적인 웹
전통적인 웹어플리케이션은 여러 페이지로 구성되어이다.
클라이언트 -서버의 구조로 클라이언트가 요청 할 때마다 서버에서 HTML,js를 보내주고 어떻게 랜더링 할지를 결정한다. 규모가 큰 웹일경우 서버에서 담당하는 일이 많아지기 때문에 속도가 느려질 수 있다.

# SPA
SPA는 SPA는 Single Page Application의 약자로, 클라이언트가 하나의 페이지에서 url이 바뀔 때 갖고있는 페이지 정보를 랜더링해준다. 필요한 정보가 생길 떄 마다 서버에 JSON형식으로 요청한다. 기본적으로 페이지 이동시 새로고침이 없어 깜빡거림이 없다.

## SPA 라이브러리
- react-router
가장 많이 쓰는 라이브러리이다. component를 기반으로 props를 이용하며 routing을 한다.

- next.js
아래에서 언급할 `SSR(server-side rendering)`을 쉽게 구현할 수 있다.
파일 경로와 이름을 기반으로 routing을 한다.

## SPA의 단점
- 앱의 규모가 커지면 js파일의 크기가 너무 커질 수 있다.
-> `코드 분할(code splitting)`으로 해결할 수 있다.

- 브라우저에서 자바스크립트가 구동되지 않으면 UI를 볼 수 없다.
빈 화면을 보게 될 수도 있다. 
-> `SSR(server-side rendering)`으로 해결할 수 있다.

## react-router 구성 및 설치
npm install react-router-dom

## react-router의 component

1. BrowserRouter
    - 주소만 바꾸고 페이지는 다시 불러오지 않는다. HTML History API를 사용한다.

2. HashRouter
    - 주소 뒤에 #을 사용한다. 옛날 브라우저에서 많이 사용한다.

3. MemoryRouter 
    - 브라우저의 주소와 무관하다. 주소를 보여주지 않고 가상의 주소를 가지고있다.

4. StaticRouter
    - 서버사이드 랜더링에 사용된다.

5. #### Route
    - route를 정의할 떄에 사용하는 component이다.

6. #### Link
    - 사용한 라우터의 주소를 새로고침 없이 바꾼다.

7. Switch
    - 여러 route 중 url과 처음 매칭되는 하나만 보여준다.
맨 밑에 notFoundPage를 두고 끝까지 매칭되지 않았을 경우 notFoundPage를 보여주기 유용하다.

## R
