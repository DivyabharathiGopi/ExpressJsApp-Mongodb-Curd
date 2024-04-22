# ExpressJsApp-Mongodb-Curd

1. Create Express JS application to connect with mongo DB with the schema name as
users and below properties
name - String,
email - String,
age - Number
password - String
1. Use ORM libraries to connect with the DB
2. Project File Structure
1. controllers/userController.js - Create CRUD functions related to the model
2. models/user.js - Create the model of the user as per given requirement
3. index.js - Create your express server running on port number 3001 with given
below routes
4. Mongo DB deatils -
1. location: localhost
2. post: 27017
3. name: gl-mern-1
4. so we will have connect url as 'mongodb://localhost:27017/gl-mern-1'
 
#Create below routes in the express JS to perform the operations as mentioned

#POST - '/user'
#if the incoming data is not having any properties give response as
1. code: 300
2. message: Invalid data
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/8fc9f6ae-82b9-4c5e-8a28-72c0407c4e98)

   
#The username must of length 5 to 10 else give response as
1. code: 301
2. message: Invalid name
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/5cece96a-5da0-4a52-a0b9-373061abae0f)

   
#Password must be of length 5 to 10 else give response as
1. code: 302
2. message: Invalid password
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/204d9fc7-1dd8-4aa2-9723-10181bda2f73)

   
#Age must be 18 or above 18 else give response as
1. code: 303
2. message: Invalid age
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/f3c04315-ad68-4d39-be7a-74333b607603)

   
#If all the conditions are satisfied insert the data adn give response as
1. code: 201
2. message: reply the insert user information as json
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/33774556-d788-47aa-a57e-0b6587b7d438)

   
#GET - '/users'
   Reply the list of users with the status code as 200
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/35fe7bad-614d-4549-8bc9-58d055c592e2)

   
#GET - '/usersbyage/:age'
   Reply the list of users only with matching age with status code as 200
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/88e1ad5d-5a30-44c3-a694-296d616f137c)

   
#GET - '/usersaboveage/:age'
   Reply the list of users only with above the given age with status code as 200
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/14b7776b-92f3-43c4-8cdb-03a5db2a1652)

   
#GET - '/users/name/:name'
   Reply the list of users with partial name matching
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/1441366a-4048-4460-b18d-1dea1ce00df0)


#GET - '/users/orderByName
   Reply the list of user with sort of ascending order of name
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/1fad3221-497b-4bf7-8d63-bcf8d59eb2cf)


#PUT - '/users/:id'
#Get the user as json and update based on the id
#if the incoming data is not having any properties give response as
1. code: 300
2. message: Invalid data
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/ac432e2f-e600-47ca-98db-632b3aa2ee5e)

   
#The username must of length 5 to 10 else give response as
1. code: 301
2. message: Invalid name
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/504b5729-2fa9-44bf-98d8-1cb14ad7d1e8)

   
#Password must be of length 5 to 10 else give response as
1. code: 302
2. message: Invalid password
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/30d3eea4-a64f-444d-954d-b27d91e8d7a8)

   
#Age must be 18 or above 18 else give response as
1. code: 303
2. message: Invalid age
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/19c9eea2-49c4-4c2d-9486-531a30b2872e)

   
#if the user is not found give response as
1. code: 404
2. message: User not found
   
#If all the conditions are satisfied insert the data adn give response as
1. code: 201
2. message: reply the insert user information as json
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/a7f4f8e5-6a63-40f3-86ce-591332c1e734)

   
#DELETE - '/users/:id'
#if the user is not found give response as
1. code: 404
2. message: User not found
Before deletion
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/642dfd95-2549-4044-abc0-defd9867f814)

Deletion by using id
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/67538fd0-a305-48e5-b69c-50921baa23c2)

After deletion
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/901cc967-7353-4f05-aff0-33800bf8e77c)



   
#if the user is found delete the user and give response as
1. code: 200
2. message: the user as json
   
#DELETE - '/users/email/:email'
#Delete all (multiple) users with the give email id and give response as
1. code: 200
2. message: the user as json
Before deletion using email
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/98cb1677-e0d4-4a72-88e2-6c1e800d5005)


Deletion by using email
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/4b7efff9-8d1c-495c-9685-b8c2af415d7f)

After deletion
![image](https://github.com/DivyabharathiGopi/ExpressJsApp-Mongodb-Curd/assets/104125342/d37ecaf3-eed2-43b6-b9f0-bc8a3a8c6043)


