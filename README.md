# Database containers
To provide an example to run a local development mongo container quickly.

See `.env` file for URI connection string. 
Start mongodb container: 
```
docker compose up -d 
```
To stop mongodb container: 
```
docker compose down
```

## PSQL-Go Connection
```
dbConn := fmt.Sprintf("postgres://%s:%s@%s:5432/%s?sslmode=disable", DBUser, DBPass, container-name, DBDbase)
```

### MySQL-Go Connection
```
dbConn := fmt.Sprintf("%s:%s@tcp(locahost:3306)/%s", DBUser, DBPass, DBDbase)
conn, err := sql.Open("mysql", dbConn)
	if err != nil {
		fmt.Println("Couldn't connect to " + DBDbase)
		log.Fatal(err)
	}
defer conn.Close()

for conn.Ping() != nil {
		fmt.Println("Attempting to ping db.")
		time.Sleep(3 * time.Second)
	}
```



## Using Adminer
For `Server` field: enter the database container_name

## Using Makefile
Also see the `Makefile` example to quicken your workflow