import { Pool } from 'pg'

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'github-test-ci',
  password: 'secret',
  port: 5432,
})

export default pool
