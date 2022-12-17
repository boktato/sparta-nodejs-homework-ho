const Post = require('../schemas/Post.js');

/*
JSON
{
        "user": "Developer",  
        "password": "1234",  
        "title": "안녕하세요", 
        "content": "안녕하세요 content 입니다."
    }
*/
const postPost = async (req, res) => {
    /*
    req.body = {
        user: "Developer",  
        password: "1234",  
        title: "안녕하세요", 
        content: "안녕하세요 content 입니다."
    }*/
    // 객체 분해 할당 
    const { user, password, title, content } = req.body //req.body 안에 들어있는 내용을 변수에 선언 할당
    // const user = req.body.user;
    // const password = req.body.password;
    // const title = req.body.title;
    // const content = req.body.content;

    // 예외처리
    if (
        [user, password, title, content].includes("") ||
        JSON.stringify(req.body) === "{}"
    ) {
        return res.status(400).json({ msg: "데이터 형식이 올바르지 않습니다." });
    }

    // 정상작동    
    // 생성    
    await Post.create({
        user,
        password,
        title,
        content
    })

    //끝
    return res.status(201).json({ "message": "게시글을 생성하였습니다." });
}



exports.postPost = postPost;