DROP DATABASE IF EXISTS healthApp_db;
CREATE DATABASE healthApp_db;

CREATE TABLE accounts (

    id INT (11) AUTO_INCREMENT NOT NULL,
    user VARCHAR(255) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)

);

CREATE TABLE profiles (

    id INT (11) AUTO_INCREMENT NOT NULL,
    nameFirst VARCHAR(255) NOT NULL,
    nameLast VARCHAR(255) NOT NULL,
    age INT (11) NOT NULL,
    height INT (11) NOT NULL,
    bodymass INT (11) NOT NULL,
    allergies VARCHAR (2000) NOT NULL,
    medication VARCHAR (2000) NOT NULL,
    specialNeeds VARCHAR (5000) NOT NULL,
    PRIMARY KEY (id)

);






