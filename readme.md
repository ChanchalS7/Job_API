Project setup -> first server -> MVC Pattern->Models Routes Controllers

Hashing-> Auth & Token -> User API ->JOBS api -> Stats & Filters ->More Security

->API docs -> Deployment

3.  create server : only create server
4.  Secure : remove common js use module based js
    install dotenv
5.  MVC Pattern : create different folders[config,
    models, controllers, public,view,src,test,
    assests,middlewares,routes ]

6.  Connect database : install mongoose, db.js file in config
    use mongo url
7.  Postman and node json issue : basic testing peroform
    creat files : routes : testRoutes.js, controllers : testController.js import ruoutes in server.js
    conver the app into middleware express.json()
    install cors middleware
    install morgan package
8.  User Schema : install validator package
    create files in models : userModel.js
    create models using mongoose and validator

9.  Register user : create new route
    crate two folder in files : routes : authRoutes.js
    create /register route in controller to register the user
    controller : authController.js

10. Custom erro middleware : error middlware
    create file in middleware errorMiddleware
    use next instead of sending res.status()

11. Handling error in node.js : create multiple function in errorhandling middleware

12. Hasing password : encrypt data in hex value,
    use bcrypt.js library
    hash the password while registering user, in userModel we do this.
13. JSON WEB TOKEN :install jwt and use it in the model : userModel,
    controller : authController user token in validation middleware
    then check token while register the user and it will generate
    put JWT_SECRET in .env file
    create token in file authController.js
    We can hide the password while registering the user
    in message, by passing different msg object in jwt.

14. Login API : create login route in routes and controller folder in files.
    in loginController write the code to check the user
    write compare function in userModel file.

        Generate token in login post request, and compare this token.
        Authcheck we can wirte this function

15. Two step authentication : with help of jwt , create new custome middleware
    check client and server token if both are same
    then only show protected route.
    pass the token while performing, register or login
    Put the token after login to the header or authorization(beare)

16. User API : create new files : in controllers : userController.js
    routes : userRoutes.js
    put the user details in controller to check the data
    for user API all this for updating the user
    you can update the user details using this function and api

17. Jobs API : create new files : Models :jobsModel.js
    routes :jobsRoute.js
    controllers : jobsController.js
    after crating jobs api : first you need to login a
    and authorize with token, then you can crate the job and get the overall
    job.
    this is the job api
