CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
 id int NOT NULL AUTO_INCREMENT,
 PRIMARY KEY (id)
 burger_name varchar(255) NOT NULL,
 devoured BOOLEAN NOT NULL
);


