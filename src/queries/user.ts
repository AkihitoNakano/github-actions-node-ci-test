export const registerUser = `
  INSERT INTO users (email, password) VALUES
  ($1, $2) RETURNING *;
`
