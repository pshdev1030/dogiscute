import React from 'react';
import {withRouter} from 'react-router-dom';

function WithRouterSample({location,match,history}){
    return(
        <div>
                <h4>location</h4>
                <textarea value={JSON.stringify(location,null,2)} readOnly/> 
                <h4>match</h4>
                <textarea value={JSON.stringify(match,null,2)} readOnly/>           
                <button onClick={()=>history.push('/')}>홈으로</button>
        </div>
    )
}

export default withRouter(WithRouterSample);

/*컴포넌트를 내보내기 전에 사용해준다.
WithRouterSample로 사용되어도 history, location, match사용 가능 */