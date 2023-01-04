import { Request, Response } from 'express'
import pool from './db/db'
import * as sql from './queries/user'

interface IRegister {
  email: string
  password: string
}

export const registerUser = async (req: Request, res: Response) => {
  const user: IRegister = req.body
  try {
    const result = await pool.query(sql.registerUser, [user.email, user.password])
    res.send({ message: 'ユーザー登録しました', user: result.rows[0] })
  } catch (err: unknown) {
    res.status(500).send('サーバーエラーが発生しました')
  }
}
