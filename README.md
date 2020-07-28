# auth
## Logins test user data
User: testuser@test.com
Password: test123

## User Auth managment REST API using:
1. ExpressJS
2. Mongoose
3. MongoDB
4. JWT
5. Passport.js
6. Docker
7. Jest
8. ReactJS
9. MaterializeCSS

## User stories:
1. User can sign up.
2. User can sign in.
3. User can see listed users
4. User can see his profile
5. User can edit his profile
6. User can change his password
7. User can delete his account


A .env file is needed in root folder with the following content
```
    DB_URL= 'your database connection string'
    SECRET='your own secret'
    PORT='your port'
```
## Development and Deployment Notes

1. A package.json was needed on the root folder where the .git folder is for deploying in heroku. I had to duplicate it from /server/package.json.

2. In docker, to make the docker-compose file read an .env file, t had to be in the same directoy. I had to change the path of dotenv in condig/db.js
