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
    nameFirst VARCHAR(255) NOT NULL,
    nameLast VARCHAR(255) NOT NULL,
    age INT (11) NOT NULL,
    height INT (11) NOT NULL,
    bodymass INT (11) NOT NULL,
    allergies VARCHAR (2000) NOT NULL,
    medication1 VARCHAR (250),
    dosage1 INT (11),
    timesperday1 INT (11),
    medication2 VARCHAR (250),
    dosage2 INT (11),
    timesperday2 INT (11),
    medication3 VARCHAR (250),
    dosage3 INT (11),
    timesperday3 INT (11),
    medication4 VARCHAR (250),
    dosage4 INT (11),
    timesperday4 INT (11),

    specialNeeds VARCHAR (5000) NOT NULL,
    PRIMARY KEY (userid)

);






