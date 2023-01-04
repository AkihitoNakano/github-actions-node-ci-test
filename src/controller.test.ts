import supertest from 'supertest'
import app from './app'
import pool from './db/db'

describe('controllerのテスト', () => {
  beforeAll(async () => {
    await pool.query('DELETE FROM users;')
  })
  describe('ユーザー登録テスト', () => {
    const user1 = { email: 'user1@test.com', password: 'abcdefg' }
    test('正常系', async () => {
      const result = await supertest(app).post('/api').send(user1)
      expect(result.statusCode).toBe(200)
      expect(result.body.message).toBe('ユーザー登録しました')
      expect(result.body.user.email).toBe(user1.email)
      expect(result.body.user.password).toBe(user1.password)
    })
    test('異常系', async () => {
      const failedUser = 'wrong_format'
      const wrongRes = await supertest(app).post('/api').send(failedUser)
      expect(wrongRes.statusCode).toBe(500)
    })
  })
  describe('failing test', () => {
    const user1 = { email: 'user1@test.com', password: 'abcdefg' }
    it('ユーザー登録', async () => {
      const result = await supertest(app).post('/api').send(user1)
      expect(result.statusCode).toBe(500)
    })
  })
})
