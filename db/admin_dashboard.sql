SELECT
b.book_time,
to_Char(b.book_date, 'Mon dd, yyyy'),
b.dog_id,
b.user_id,
b.service_id,
b.book_id,
d.dog_name,
d.dog_breed,
d.dog_img,
u.username,
u.phone,
u.email,
s.service_name,
s.service_price
FROM booking b INNER JOIN users u on b.user_id = u.user_id
INNER JOIN dogs d on b.dog_id = d.dog_id
INNER JOIN services s on b.service_id = s.service_id
ORDER BY b.book_date ASC;