CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE Burgers (
ID INT AUTO_INCREMENT,
PRIMARY KEY (ID)

burger_name VARCHAR (80) NOT NULL,
devoured BOOLEAN,
date TIMESTAMP
);



