# Mern Stack Server V0.0.1

const mernStack = { MongoDB, Express.js, React.js, Node.js }
___

#### Install Dependencies in both directories
```
npm install or yarn
```
#### Establish Connection to MongoDb
```
mongod
```
#### Start the app in development
```
npm start
```
___

### User API
| Endpoint       | Method        | Description  | Status  |
| :---           |:---           | :---         | :---    |
| /api/v1/user/signup | POST | User Signup, User role set by default  | WIP  |
| /api/v1/user/login | POST | User Login  | WIP  |
| /api/v1/user/:id | PUT | Update User info | WIP  |
| /api/v1/user/:id | Delete | Delete User User | WIP  |
| /api/v1/user/:id/myresults | GET | All User post | WIP  |

### Post API
| Endpoint       | Method        | Description  | Status  |
| :---           |:---           | :---         | :---    |
| /api/v1/post/create | POST | Create Post | WIP  |
| /api/v1/post/all | GET | Get all Tutor Posts  | WIP  |
| /api/v1/post/:id | GET | Get a Tutor Post  | WIP  |
| /api/v1/post/:id | PUT | Update Post | WIP  |
| /api/v1/post/:id| DELETE | Delete Post  | WIP  |
