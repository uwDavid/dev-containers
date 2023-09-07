const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const port = process.env.PORT || 5000; 

//start db
connectDB();

const app = express(); 
app.use(cors());
app.use(
	'/graphql', 
	graphqlHTTP({
		schema: schema, 
		graphiql: process.env.NODE_ENV === 'development'
	})
);

console.log(process.env.NODE_ENV)
app.listen(port, console.log(`Server running on port ${port}`));


