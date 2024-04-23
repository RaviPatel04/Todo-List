-- cd C:\xampp\mysql\bin

-- mysql -u root 


CREATE DATABASE todo_app;

USE todo_app;

CREATE TABLE users (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE todos (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    priority VARCHAR(50) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    due_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE completed_todos (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    priority VARCHAR(50) NOT NULL,
    due_date DATE,
    completed_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);