import React from 'react';

const profileData={
    velopert:{
        name:'김민준',
        description:'Frontend Engineer @RIDI'
    },
    homer:{
        name:'호머 심슨',
        description:'아빠'
    },
}

function Profile({match}){
    const {username}=match.params;
    const profile=profileData[username];

    if(!profile){
        return <div>존재하지 않는 사용자입니다.</div>
    }

    return(
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>
                {profile.description}
            </p>
        </div>
    );
    }
        

export default Profile;
/*match props Route컴포넌트에서 자동으로 넣어준다. 따로 설정할 필요 x 
match안의 params에 넣어준 데이터가 들어가있다.*/