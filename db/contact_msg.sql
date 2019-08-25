INSERT INTO contact (user_id, message)
VALUES
(${user_id}, ${user_msg})
returning *;