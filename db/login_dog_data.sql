SELECT d.dog_id FROM dogs d
INNER JOIN users u ON u.user_id = d.user_id
WHERE
d.user_id = $1;