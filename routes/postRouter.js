const express = require("express");
const router = express.Router();

const postAPI = require('../controllers/postController.js');

// 시작경로 /posts

/*
JSON
{
        "user": "Developer",  
        "password": "1234",  
        "title": "안녕하세요", 
        "content": "안녕하세요 content 입니다."
    }
*/

// 게시글 등록
router.post("/", postAPI.postPost)
// router.get("/",postAPI.getPost)

// router.route("/").post(postAPI.postPost).get(postAPI.getPost)
module.exports = router;
