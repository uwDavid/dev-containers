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
