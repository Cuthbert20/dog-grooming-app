--adding values to the dog table 
INSERT INTO dogs(dog_name, dog_breed, user_id, dog_img)
VALUES
(${dog_name}, ${dog_breed}, ${user_id}, ${dog_img});

SELECT * FROM dogs
WHERE 
user_id = ${user_id};

