# Schema Information

## teas
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
name          | string    | not null, unique
description   | text      | 
type          | string    | not null, indexed
region        | string    | not null, indexed
steep_time    | integer   | not null
temperature   | integer   | not null
leaf_quantity | integer   | not null
leaf_density  | integer   | not null
retailer      | boolean   | not null, default: false

## reveiws
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references users), indexed
tea_id        | string    | not null, foreign key (references teas), indexed
rating        | integer   | not null, indexed
body          | text      | not null
steep_time    | integer      | not null
leaf_quantity | integer   | not null


## tea_ownerships
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
tea_id        | integer   | not null, foreign key (references teas), indexed
user_id       | integer   | not null, foreign key (references users), indexed
name          | string    | not null
steep_time    | integer   | not null
leaf_quantity | integer   | not null
resteeps      | integer   |
amount        | integer   |
notes         | text      |

## user_follows
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
follower_id       | integer   | not null, foreign key (references users), indexed
user_following_id | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
name            | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
