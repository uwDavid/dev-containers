# Psql Container Example
To provide an example to run a local PostgreSql container quickly.

## Start PostgreSql container: 
```
docker compose up -d 
```
To stop mongodb container: 
```
docker compose down
```

## Using Adminer
For `Server` field: enter the database container_name
Username and password are defined by docker-compose.yml


## Connection String Examples
### .NET

### Go
```
dbConn := fmt.Sprintf("postgres://%s:%s@%s:5432/%s?sslmode=disable", DBUser, DBPass, container-name, DBDbase)
```



