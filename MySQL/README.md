# MySQL Database Container
To provide an example to run a local development MySQL database container quickly.

Start MySQL container: 
```
docker compose up -d 
```
To stop MySQL container: 
```
docker compose down
```

### MySQL-Go Connection String
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
Username: root
Password: secret

