DROP DATABASE IF EXISTS healthApp_db;
CREATE DATABASE healthApp_db;

CREATE TABLE accounts (

    id INT (11) AUTO_INCREMENT NOT NULL,
    user VARCHAR(255) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)

);

CREATE TABLE profiles (

    userid INT (11) NOT NULL,
    profilename VARCHAR(255) NOT NULL,
    profilebday DATE(YYYY) NOT NULL,
    profilegender VARCHAR (255) NOT NULL,
    profileheight VARCHAR (11) NOT NULL,
    profileweight INT (111) NOT NULL,
    profileblood VARCHAR (10),
    profileallergies VARCHAR (2000) NOT NULL,
    profileaddnds VARCHAR (5000) NOT NULL,
    PRIMARY KEY (userid)

);






