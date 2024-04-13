CREATE DATABASE todo_app;

USE todo_app;

CREATE TABLE todos (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    priority VARCHAR(50) NOT NULL,
<<<<<<< HEAD
    dueDate DATE,
=======
>>>>>>> 97679468aacb1fa16e43c128db2432430d456327
    status VARCHAR(50) DEFAULT 'pending'
);

CREATE TABLE completed_todos (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
<<<<<<< HEAD
    priority VARCHAR(50) NOT NULL,
    dueDate DATE,
    completedDate DATE
);







-- CREATE DATABASE todo_app;

-- USE todo_app;

-- CREATE TABLE todos (
--     id INT(11) AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     description TEXT,
--     priority VARCHAR(50) NOT NULL,
--     status VARCHAR(50) DEFAULT 'pending'
-- );

-- CREATE TABLE completed_todos (
--     id INT(11) AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     description TEXT,
--     priority VARCHAR(50) NOT NULL
-- );
=======
    priority VARCHAR(50) NOT NULL
);
>>>>>>> 97679468aacb1fa16e43c128db2432430d456327
