# TravelQuest

## Implementation and usage of ORM
    Prerequisites: 
    - Created user model using Django's integrated UserManagers. This makes it easier to implement authentication.
    - Created register and login serializers for user model. Allows us to return only the needed information back to client.
    - Created endpoint for user model. Using GET for login and POST for register.

    ORM usage:
    ```
    user = User.objects.filter(username=username).first() # used in login endpoint
    ```
    ```
    serializer = RegisterSerializer(data = request.data)
        
        if serializer.is_valid():
            serializer.save() # used in register endpoint
    ```

    