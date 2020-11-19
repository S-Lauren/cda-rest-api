# Install the project REST API
  - Run the command to install dependancies : npm install 

# Create a folder name config on root

  - Inside the folder config, create the file name "db.config.json".
  - In db.config.json, create an object 
{
  "HOST": "localhost",
  "USER": "your username",
  "PASSWORD": "your password",
  "DB": "yourDB"
}

# Request for your DB once you created it.

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