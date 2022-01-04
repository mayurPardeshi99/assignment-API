# API Assignment

API to manage user authentication. This API has three requests which are related to sign in , sign out a user and get user profile.

This project is created using Node.js, Express, MongoDB JWT was used to handle authentication.  

## Features
- Create a new user
- Authenticate user
- Get user profile


## Setup

1. Clone the repository

```
git clone https://github.com/mayurPardeshi99/assignment-API.git
cd assignment-API
```
2. Install [mongodb](https://www.mongodb.com/) (Igonre if alredy installed)

3. Create a .env file in the root of the project and add the following:  

```
NODE_ENV = DEVELOPMENT
LOCALDB_URL = mongodb://localhost:27017/<database name>
JWT_KEY = <JWT secret>
```
### Install Dependencies 

```
npm install
```

### Run Locally

```
npm run server
```



