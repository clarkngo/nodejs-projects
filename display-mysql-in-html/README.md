# Displaying MySQL queries in HTML

## This project shows how MySQL connection is with the using of `pool` and output the query by hosting the app in the browser.

Notes: 
When you create a connection, you only have one connection and it lasts until you close it (or it is closed by the mysql server). You can pass it around by reference and re-use it, or you can create and close connections on demand.

A pool is a place where connections get stored. When you request a connection from a pool, you will receive a connection that is not currently being used, or a new connection. If you're already at the connection limit, it will wait until a connection is available before it continues. These pooled connections do not need to be manually closed, they can remain open and be easily reused.

Which you use is entirely up to you, as they both accomplish the same goal, just in two different ways.

Source: https://stackoverflow.com/questions/26432178/what-is-the-difference-between-mysql-createconnection-and-mysql-createpool-in-no

Source of code: https://coursesweb.net/nodejs/select-mysql-output-html-table