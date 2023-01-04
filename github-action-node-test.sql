CREATE TABLE "users" (
  "id" bigserial PRIMARY KEY,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar(10) NOT NULL,
  "comment" text
);
