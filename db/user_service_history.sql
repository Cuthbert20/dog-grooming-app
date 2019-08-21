SELECT 
b.service_id,
b.user_id,
b.dog_id,
b.book_id,
b.book_time,
-- using AS will give value an alias otherwise it would be to_char
to_char(b.book_date, 'Mon dd, yyyy') AS book_date,
s.service_name,
s.service_price,
d.dog_name,
d.dog_breed
FROM booking b INNER JOIN services s on b.service_id = s.service_id
INNER JOIN dogs d on b.dog_id = d.dog_id
WHERE b.user_id = $1;