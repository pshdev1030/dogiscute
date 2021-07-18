import React from 'react';
import {Route,Link,Switch} from 'react-router-dom'
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
import Profiles from './Profiles';

//특정 주소에 특정 컴포넌트를 보여주겠다.

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr/>
      <Route path="/" component={Home}/>
      <Route path="/about"  component={About}/>
      <Route path="/profiles" component={Profiles}/>
      <Route path="/history" component={HistorySample}/>
      <Route render= {({location})=>
      <div>
        <h2>이 페이지는 존재하지 않습니다.</h2>
        <p>{location.pathname}</p>
      </div>}/>
    </div>
  );
}
/*경로로 주어진것을 비교해서 해당 컴포넌트를 랜더링할지 말지를 정하는데
about이라는 경로가 위아래로 일치해서 안됨.->exact 
a태그는 페이지가 새로 로딩되기떄문에 주소만 바꿔주는 Link를 사용한다.
"/profiles/:{urlparameter} 이 부분이 urlparameter가 되어서 match의 params로 전달됨*/
export default App;
