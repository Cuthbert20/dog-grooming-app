
--user table create
CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(20),
email VARCHAR(50),
phone VARCHAR(20),
login_name VARCHAR(50),
password VARCHAR(20),
admin_user BOOLEAN
);

--select all from users
SELECT * FROM users;

--dummy data instered into table.
INSERT INTO users (username, email, phone, login_name, password, admin_user)
VALUES
('Jake Smith', 'smitty@me.com', '435-623-9999', 'smitty', '1234', false),
('Brynne Knowl','brynne@me.com', '435-444-9585', 'bdog', 'abcd', false),
('Stew Carey', 'stu@me.com', '801-555-9595', 'stewy', '1234', true)

--drop user table
DROP TABLE users;

--login user
SELECT * FROM users
WHERE login_name = 'smitty'
AND
password = '1234';

--registering user/adding user to database
INSERT INTO users (username, email, password, admin_user)
VALUES
('Sam', 'sam@me.com', '1234', false);

--creating dog table
CREATE TABLE dogs (
dog_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
dog_name VARCHAR(100),
dog_breed VARCHAR(100)
)
--inserting into dogs
INSERT INTO dogs (user_id, dog_name, dog_breed)
VALUES
(5, 'grumpy', 'wolf')
--select all from dogs table
SELECT * FROM dogs;
--updating user & dogs table use with updateUser Component axios.put
UPDATE users
SET username = 'spencer',
phone = '435-435-7777'
WHERE
    user_id = 5;
UPDATE dogs
SET dog_name = 'Stark',
dog_breed = 'bully'
WHERE
    user_id = 5;
--getting all dogs that belong to particular user id
SELECT d.dog_id FROM dogs d
INNER JOIN users u ON u.user_id = d.user_id
WHERE
d.user_id = 11;

--updating phone and username from null to have a value
UPDATE users
SET username = 'Bob',
phone = '123-123-1234'
WHERE
user_id = 14;