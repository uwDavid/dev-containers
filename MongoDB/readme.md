# MongoDB Container Notes

## Connection String
```
mongodb://root:example@mongo:27017/
```
### Working with Prisma
This is a useful doc from Prisma Github examples [here](https://github.com/prisma/prisma-examples/blog/latest/databases/mongodb/rREADME.md)
```
DATABASE_URL="mongodb://root:example@localhost:27017/ecommerce?authSource=admin&retryWrites=true&w=majority"
```

### Connect to a specific database using Mongoose

```
MONGO_URL="mongodb://root:example@127.0.0.1:27017/"
```
Change to: 
```
"mongodb://root:example@127.0.0.1:27017/mern?authSource=admin"
```

See this [note](https://stackoverflow.com/questions/62818786/mongoose-connection-error-when-using-db-name-in-connection-string)


## Shell Commands
Enter into the mongdb container using this docker command
```
docker exec -it mongodb bash
```

Execute `mongosh`
```
mongosh --username root
```

## Database Operations
Create a database
```
use db-name
```
Show database
``` 
show dbs
```
