// 서버 구축
const express = require('express'); // express 는 express 만 써도 자동으로 찾게 설정되어있음
const app = express()

const port = 3000;

app.use(express.json());

/* routes */
//  ./ : 현재 디렉토리 | ../ : 상위 디렉토리 | / : 절대 경로
const postRouter = require('./routes/postRouter.js');
// app.get("/:id",fn); <- /posts, id = posts
// 124.25.15/여기에들어오는 경로들이 -> (:id)
app.use("/posts", postRouter);
/*
    app.use("/posts", require("./routes/postRouter.js"))
*/




// 함수를 가져와서 db연결이된다.
const connect = require('./schemas/index.js');
connect();

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸습니다!');
})

