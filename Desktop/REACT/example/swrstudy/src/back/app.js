const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const user={
    id = 'id',
    userId = 'userId',
    email = 'email',
    password = 'password',
    user_name = 'user_name',
    giturl = 'giturl'
}

const todoBoard={
    id:'id',
    title:'boardtitle',
    user:'userId',
}

app.get("/userinfo", function (req, res) {
  res.send(user);
});

//npm i express로 express 패키지 설치하고
//
//https://localhost8000/(path) 로 axios 요청 보내시면 될 것 같습니다.