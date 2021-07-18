import React from 'react';
import Profile from './Profile';
import {NavLink,Route} from 'react-router-dom'
import WithRouterSample from './WithRouterSample';

function Profiles(){
    return(
        <div>
        <h3>사용자 목록</h3>
        <ul>
            <li><NavLink to="/profiles/velopert" activeStyle={{background:'black'}}>velopert</NavLink></li>
            <li><NavLink to="/profiles/homer" activeStyle={{background:'black'}}>homer</NavLink></li>
        </ul>

        <Route path="/profiles" exact render={()=><div>사용자를 선택해주세요</div>}/>
        <Route path="/profiles/:username" component={Profile}/>
        <WithRouterSample/>
        </div>
    )
}

export default Profiles;
/*render에는 바로 함수형 컴포넌트를 넣어줄 수 있다. 
render의 경우 props를 사용할 수 있어서 좋다.
탭의경우 서브라우트를 쓴다.
match는 자신이 랜더링된 위치를 기준으로 match를 가져온다.
여기의 match는 profiles에서 받아온  match이다. 그래서 여기선 urlparameter가 없다.
withRouterSample에서 location은 어디서 불러오든지 똑같은 정보지만 match는 랜더링된 위치를 기준으로 읽어옴
Route에서 사용되지 않은 컴포넌트에서 조건부로 이동해야할 떄에 사용된다.
ex)로그인 등*/
