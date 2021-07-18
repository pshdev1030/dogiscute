import React, { useEffect } from 'react';

function HistorySample({history}){
    const goBack=()=>{
        history.goBack();
    }
    const goHome=()=>{
        history.push('/');
    }
    const replaceToHome=()=>{
        history.replace('/');
    }
    useEffect(()=>{
        console.log(history);
        const unblock =history.block('정말 떠나실 건가요? 변경사항이 저장되지 않을수도 있습니다');
        return()=>{
            unblock();
            /*컴포넌트가 사라질 때 이탈방지를 비활성화 하겠다. */
        }
    },[history]);
    return(
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
            <button onClick={replaceToHome}>홈으로 (Replace)</button>
        </div>
    )
}

export default HistorySample;

/*hisroty
action 마지막으로 발생한 액션 이동-push 뒤로가기=pop 
block 페이지에서 이탈방지
createHref location객체를 가지고 주소를 만듬 거의 안씀
go=앞으로 혹은 뒤로가기 -1넣으면 뒤 1넣으면 앞 -2넣으면 뒤 두칸
goback 뒤
go foward 앞으로
length방문기록 길이
listen 경로에 변동이 생겼을때 특정함수 호출
location현재 자신이 있는 곳
push특정 주소 이동
replace 특정 주소 이동(방문기록 안남김) 뒤로가기에 영향 x
 */