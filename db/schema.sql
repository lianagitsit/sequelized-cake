DROP DATABASE IF EXISTS cake_db;
CREATE DATABASE cake_db;

USE cake_db;

CREATE TABLE cakes(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    cake_name VARCHAR(30) NOT NULL,
    eaten BOOLEAN DEFAULT false
);

