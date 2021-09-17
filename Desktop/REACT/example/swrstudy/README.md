주소를 웹브라우저에 입력하면 html,css,js,이미지를 제공해줌

브라우저가 파일을 받아서 화면에 랜더링을 해준다.

```javascript
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send({ name: "sunghyeon", age: 30, gender: "man" });
});
// req request cli to server
// res response server to cli

// app.get("/", function (req, res) {
//   res.sendFile(__dirname+'/views/index.html');
// });
// url을 요청시 html파일을 보내줌

// render 메소드 ejs pug

const database = [
  { id: 1, title: "글1" },
  { id: 2, title: "글2" },
  { id: 3, title: "글3" },
];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/database", function (req, res) {
  res.send(database);
});

app.get("/database/:title", function (req, res) {
  const title = req.params.title;
  database.push({ id: database.length, title });
  res.send(database);
});

app.post("/database/", function (req, res) {
  const title = req.body.title;
  database.push({ id: database.length, title });
  res.send(database);
});
// body에 담기위해 post 이 방식을 더 많이 씀

app.put("/database/", function (req, res) {
  const id = req.body.id;
  const title = req.body.title;
  database[id - 1].title = title;
  res.send(database);
});

app.delete("/database/", function (req, res) {
  const id = req.body.id;
  database.splice(id - 1, 1);
  res.send(database);
});
// http 메서드를 통해 구분

app.listen(8000, () => {
  console.log("hi");
});

app.post("signup", (req, res) => {
  const { username, password, age, birthday } = req.body;
  database.push({
    username,
    password,
    age,
    birthday,
  });
  res.send("success");
});

// https://localhost:8000 를 endpoint로 데이터 요청하시면 됩니다.
// 실제 데이터베이스ㅗㄹ
```
