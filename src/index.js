import express,{Router} from 'express';
import helmet from 'helmet';
import cors from 'cors';
import controllers from './controllers';
``

const app = express();

//요청을 json형태로 받는 데 특화된 라이브러리 express 내장함수
app.use(cors({origin:"*"})); //cors
app.use(helmet()); //보안강화
app.use(express.json()); //다양한 형태의 리퀘스트 바디 확인 가능 
app.use(express.urlencoded({extended: true, limit:"700mb"})); //http URL 쿼리를 좀 더 쉽게 다룰 수 있게 해줌 //용량 제한 설정 json으로 700mb까지만 받음

// app.use('/users', UserController.router);
controllers.forEach((controller)=>{
    app.use(controller.path, controller.router);
});

// req : 요청 -> Request
// res : 응답 -> Response 
app.get("/", (req, res) => {
    res.send("Node.js 정말 재미있어요!");// 아무 표현 요청이나 응답 다 보낼 수 있음.
})

app.listen(8000, () => { // app.listen(작동포트, 서버 실행 후 실행 될 콜백 함수)
    console.log("server running... port 8000.");
})