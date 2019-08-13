
--user table create
CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(20),
email VARCHAR(50),
phone INT,
login_name VARCHAR(50),
password VARCHAR(20),
admin_user BOOLEAN
);

--select all from users
SELECT * FROM users;

--dummy data instered into table.
INSERT INTO users (username, email, phone, login_name, password, admin_user)
VALUES
('Jake Smith', 'smitty@me.com', 435-623-9999, 'smitty', '1234', false),
('Brynne Knowl','brynne@me.com', 435-444-9585, 'bdog', 'abcd', false),
('Stew Carey', 'stu@me.com', 801-555-9595, 'stewy', '1234', true)

--drop user table
DROP TABLE users;