INSERT INTO users (login_name, email, password, admin_user)
VALUES
(${login_name}, ${email}, ${hash}, false)
returning *;