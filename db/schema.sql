CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NULL,
  devoured int NOT NULL DEFAULT 0,
  date DATETIME NOT NULL,
  PRIMARY KEY (id)
); 
  
-- delete from burgers where devoured = 0
insert into burgers(burger_name,devoured,date)
values("Big Mac", 0,current_timestamp);

insert into burgers(burger_name,devoured,date)
values("Double Double", 0,current_timestamp);

insert into burgers(burger_name,devoured,date)
values("Bacon Cheeseburger", 0,current_timestamp);

insert into burgers(burger_name,devoured,date)
values("Hamburger", 0,current_timestamp)


select * from burgers