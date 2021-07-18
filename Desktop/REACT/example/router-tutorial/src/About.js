import React from 'react';
import qs from 'qs'

function About({location}){
    console.log(location);
    const query=qs.parse(location.search,{
        ignoreQueryPrefix:true,
    });
    const detail= query.detail ==='true';
    return(
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액터 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
            {detail&&<p>detail값이 true입니다!</p>}
        </div>
    )
}

export default About;
/*쿼리 조회는 location을 받아옴
url 뒤에 ?a=1붙이면 이게 search값이 됨
import qs from 'qs'로 search값을 파싱한다.
qs.parse(location.search,{
    option
    여기에 ignoreQueryPrefix:true를 하지 않으면 물음표까지 같이 받아온다.
}
값이 문자열로 가져와진다. 비교할때도 'true'랑 비교*/ 