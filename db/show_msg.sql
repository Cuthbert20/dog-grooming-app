SELECT
c.contact_id,
c.user_id,
c.message,
u.username
FROM contact c JOIN users u on c.user_id = u.user_id;