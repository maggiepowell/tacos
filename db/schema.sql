DROP DATABASE IF EXISTS tacos_db;
CREATE DATABASE tacos_db;

USE tacos_db;

CREATE TABLE tacos (
      id INT NOT NULL AUTO_INCREMENT,
      taco_name VARCHAR(40),
      devoured BOOLEAN,
      primary key(id)
);

INSERT INTO tacos (taco_name, devoured)

VALUES
("Carnitas", false), ("Al Pastor", false), ("Carne Asada", false);


SELECT * FROM tacos;