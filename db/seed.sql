
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

--adding values to the dog table 
INSERT INTO dogs(dog_name, dog_breed, user_id)
VALUES
('BeBe', 'alpacka', 11);

--created service table
CREATE TABLE services(
service_id SERIAL PRIMARY KEY,
service_name VARCHAR(50),
service_info VARCHAR(500),
service_price VARCHAR(20)
)

--INSERTing dummy value INTO services TABLE
INSERT INTO services(service_name, service_info, service_price)
VALUES
('Shampoo & Wash', 'Full Wash with best shampoo ever', '$10'),
('jump & swing', 'just like it sounds', '$90'),
('walk', 'going for a nice long walk', '$10')

--CREATING A BOOKING TABLE
CREATE TABLE booking (
book_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
service_id INT REFERENCES services(service_id),
dog_id INT REFERENCES dogs(dog_id),
book_time TIME NOT NULL,
book_date DATE NOT NULL
)

--BOOKING TABLE date workaround
CREATE TABLE booking (
book_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
service_id INT REFERENCES services(service_id),
dog_id INT REFERENCES dogs(dog_id),
book_time VARCHAR(10),
book_date DATE NOT NULL
)

--INSERTING INTO booking table
INSERT INTO booking (user_id, service_id, dog_id, book_time, book_date)
VALUES
(11, 2, 8, '10am', '2049-11-25'),
(9, 3, 7, '11am', '2020-10-19'),
(11, 1, 14, '9am', '2019-06-09')

--selecting all dogs based on user_id
SELECT * FROM dogs
WHERE user_id = 11;

--joining tables to display servies and booking dates based on user_id
SELECT 
b.service_id,
b.user_id,
b.dog_id,
b.book_id,
b.book_time,
to_Char(b.book_date, 'Mon dd, yyyy'),
s.service_name,
s.service_price,
d.dog_name,
d.dog_breed
FROM booking b INNER JOIN services s on b.service_id = s.service_id
INNER JOIN dogs d on b.dog_id = d.dog_id
WHERE b.user_id = 11;

--updating dog so you can add an image
UPDATE dogs 
SET
dog_img = 'https://i.pinimg.com/564x/13/a8/1b/13a81b74cdc942e3e06b8cfb92d3df33.jpg'
WHERE
dog_id = 10;

--adding new dog including image.
INSERT INTO dogs (user_id, dog_name, dog_breed, dog_img)
VALUES
(9, 'Buffy', 'American BUlly', 'https://i.pinimg.com/564x/13/a8/1b/13a81b74cdc942e3e06b8cfb92d3df33.jpg')