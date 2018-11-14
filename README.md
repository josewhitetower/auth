# auth
## User Auth managment REST API using:
1. ExpressJS
2. Mongoose
3. MongoDB
4. JWT
5. Passport.js
6. Docker
7. Jest


A .env file is needed in root folder with the following content
```
    DB_URL= 'your database connection string'
    SECRET='your own secret'
    PORT='your port'
```
## Development and Deployment Notes

1. A package.json was needed on the root folder where the .git folder is for deploying in heroku. I had to duplicate it from /server/package.json.

2. In docker, to make the docker-compose file read an .env file, t had to be in the same directoy. I had to change the path of dotenv in condig/db.js