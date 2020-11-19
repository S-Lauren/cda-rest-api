# Install the project REST API

  - Run the command to install dependencies : npm install 

# Inside config/db.config.json

  - In db.config.json, create an object 
{
  "HOST": "localhost",
  "USER": "your username",
  "PASSWORD": "your password",
  "DB": "yourDB"
}

# Request for your DATABASE

create DATABASE nameDB;

create table `Topic` (
   id INT PRIMARY KEY AUTO_INCREMENT not null,
  `title` varchar(100) not null
);

create table `Post` (
  id INT PRIMARY KEY AUTO_INCREMENT not null,
  content VARCHAR(255),
  author VARCHAR(255),
  date DATE,
  topic_id INT,
  FOREIGN KEY (topic_id) REFERENCES topic(id) ON DELETE CASCADE
);

# Run the server

- node server.js

# POSTMAN OR REST Client of your choice

- Chose your rest client and perform your request API 
  All routes are listed in routes folder