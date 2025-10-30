import config from '../config/config.js'
import app from './express.js'
import mongoose from 'mongoose'
import path from 'path'
import express from 'express'
// ESM 환경에서 __dirname을 사용하기 위해 필요합니다.
import { fileURLToPath } from 'url' 
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// __dirname을 사용하여 절대 경로를 설정합니다.
// 'server.js'가 위치한 곳을 기준으로 '..'(상위 폴더)의 'portfolio/dist'를 가리킵니다.
const frontendPath = path.resolve(__dirname, '..', 'portfolio', 'dist') 

// 1. 프론트엔드 정적 파일을 제공합니다.
//    Vite 설정이 '/'로 통일되었으므로, Express도 '/'에서 제공합니다.
app.use('/', express.static(frontendPath))

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {
    //useNewUrlParser: true,
    //useCreateIndex: true,
    //useUnifiedTopology: true
})
.then(() => {
    console.log("Database is connected for Assignment2!")
})

mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

// 2. 루트 경로 (/) 요청 시 dist 폴더의 index.html 파일을 반환합니다.
app.get("/", (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'))
})

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})
