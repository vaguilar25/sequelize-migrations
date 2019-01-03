## List of commnads

The following example show how to use sequelize to create an initial model, create a database, modify database with migrations and upload seeds files. 

* create the database 
```
DROP DATABASE IF EXISTS burgersTest_db;
CREATE DATABASE burgersTest_db;
```
- NPM Install
```
exress
mysql2
sequelize
sequelize-cli
```

1. First Init with sequelize.. This will create default directories config/ migrations/ models/ seeders/
```
node_modules/.bin/sequelize init
```
2. create a model: this will create files in models/ and in migrations/

```
node_modules/.bin/sequelize model:generate --name Burgers --attributes burger_name:string,devoured:boolean
```

3. Upload the model to the database, this will generate a record in sequelize table on the database where it stores all the migrations . 
```
node_modules/.bin/sequelize db:migrate
```

To undo the migration this will execute the code of the migration in down section

```
node_modules/.bin/sequelize db:migrate:undo 
```


4. If we want to create seed file with default records on the db 
```
node_modules/.bin/sequelize seed:generate --name new-burger
```
this will generate a file in seeders/
```
In my example 
20190103213049-new-burger.js
```
5. Run the seed and insert fields on the DB
```
    node_modules/.bin/sequelize db:seed:all
```
6.  Revert the seed if you want to remove the records recently inserted with the seed file

```
node_modules/.bin/sequelize db:seed:undo
```
7. If we want to update our current devoured field to default value false we need to create a migration. This will generate a new migration file with that name. 

```
sequelize migration:generate --name updateDevoured
```

see (20190103215513-updateDevoured.js) for reference.. 

probably this command will generate another migration directory so just move it to the correct migrations directory where all your migrations are stored. 

Inside this file you will see 

__queryInterface.changeColumn__ this is the command for update the database.

8.  Run the migration 
```
node_modules/.bin/sequelize db:migrate
```

9. If you want to add more columns you will need to generate another migration with a

___queryInterface.addColumn___

```
equelize migration:generate --name addColumns
```

this will generate a new migrations file  for reference see 
/migrations/20190103220859-addColumns.js

10. If you want to see the status of your migrations you can run 

```
node_modules/.bin/sequelize db:migrate:status
```

11.  Sources

https://sequelize.readthedocs.io/en/latest/docs/migrations/

http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html

http://docs.sequelizejs.com/manual/tutorial/migrations.html

