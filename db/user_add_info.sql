UPDATE users
SET username = ${username},
phone = ${phone}
WHERE
user_id = ${user_id};