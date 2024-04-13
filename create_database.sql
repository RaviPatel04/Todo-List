CREATE DATABASE todo_app;

USE todo_app;

CREATE TABLE todos (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    priority VARCHAR(50) NOT NULL,
    dueDate DATE,
    status VARCHAR(50) DEFAULT 'pending'
);

CREATE TABLE completed_todos (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    priority VARCHAR(50) NOT NULL,
    dueDate DATE,
    completedDate DATE
);