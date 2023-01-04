import express from 'express'
import cookieParser from 'cookie-parser'
import * as controllers from './controller'

export const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use(express.json())
app.use(cookieParser())

// ユーザーの登録
app.post('/api', controllers.registerUser)

export default app
