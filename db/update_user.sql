UPDATE users
SET username = ${username},
phone = ${phone}
WHERE
    user_id = ${user_id}
    returning *;
UPDATE dogs
SET dog_name = ${dog_name},
dog_breed = ${dog_breed}
WHERE
    user_id = ${user_id}
    returning *;