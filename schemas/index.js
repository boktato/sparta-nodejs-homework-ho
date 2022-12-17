// DB 연결 
const mongoose = require("mongoose"); // => import mongoose from "mongoose";
mongoose.set('strictQuery', false);

// DB 연결동작을하는 함수
// function connect () {

// }
const connect = () => {
    // DB 연결
    mongoose.connect("mongodb+srv://test:sparta@cluster0.c4jurvw.mongodb.net/Cluster0?retryWrites=true&w=majority").then(() => {
        console.log("연결에 성공했습니다.");
    }).catch((err) =>
        console.log(err)
    );

    // Promise 의 상태 3가지 (대기, 이행, 거부)
}

// mongoose.connection.on("error", err => {
//     console.error("mongo connect error", err)
// });


mongoose.connection.on("error", (err) => {
    console.error("❎ 몽고디비 연결 에러", err);
});

// const handleOpenDB = () => console.log("✅ DB 가 연결되었습니다.");
// mongoose.connection.once("open", handleOpenDB);

module.exports = connect;
