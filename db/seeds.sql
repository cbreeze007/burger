USE burgers_db;
  
-- delete from burgers where devoured = 0
insert into burgers(burger_name,devoured,date)
values("Big Mac", 0,current_timestamp);

insert into burgers(burger_name,devoured,date)
values("Double Double", 0,current_timestamp);

insert into burgers(burger_name,devoured,date)
values("Bacon Cheeseburger", 0,current_timestamp);

insert into burgers(burger_name,devoured,date)
values("Hamburger", 0,current_timestamp)

-- select * from burgers