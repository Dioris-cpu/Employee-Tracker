DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees;

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);


CREATE TABLE department (
id INT PRIMARY KEY,
name VARCHAR(30) 

);

CREATE TABLE role (
 id INT PRIMARY KEY,
title VARCHAR(30), 
salary DECIMAL,
department_id INT    
);

INSERT INTO employees.employee (first_name, last_name)
VALUE ( "Dioris", "Diaz" )

INSERT INTO employees.department (id, name)
value ( 1, "Marketing")

INSERT INTO employees.role (id, title, salary ,department_id)
value ( 1 , "Engineer", 100050, 1)
