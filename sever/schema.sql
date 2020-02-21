DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);


CREATE TABLE department (
id INT PRIMARY KEY,
name VARCHAR(30) 
);

-- CREATE TABLE role (
--  id INT PRIMARY KEY,
-- title VARCHAR(30), 
-- salary DECIMAL,
-- department_id INT    
-- );

INSERT INTO employees_db.employee(first_name, last_name)
VALUES ("Dioris", "Diaz");

-- INSERT INTO employees_db.department (id, name)
-- VALUES ( 1, "Marketing")

-- INSERT INTO employees_db.role (id, title, salary ,department_id)
-- VALUES ( 1 , "Engineer", 100050, 1)
