DROP DATABASE IF EXISTS smoothie_db;
CREATE DATABASE smoothie_db;
USE smoothie_db;

DROP TABLE if exists smoothieOptions;

CREATE TABLE smoothieOptions (
	id INT AUTO_INCREMENT NOT NULL,
	smoothie VARCHAR (255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id)
);