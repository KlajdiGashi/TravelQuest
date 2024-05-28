# TravelQuest

Welcome to **TravelQuest**, an ticket booking application designed to simplify your travel planning experience. TravelQuest is developed using React Native for the frontend and Python with Django for the backend.  
This README will guide you through setting up the project, understanding its structure.

## Table of Contents
1. Introduction
2. Features
3. Technologies
4. Getting Started
   * Prerequisites
   * Installation
5. Project Structure
6. Running the app
7. Entity-Relationship model
8. Contributors

## Introduction 
TravelQuest is a comprehensive ticket booking application that aims to provide users with a efficient way to book travel tickets. 

## Features 
* User Authentication: User Registration and login.
* Search and Filter: Search for available tickets and filter results.
* Booking Management: View, manage and cancel bookings.
* Notifications: Receive notifications for booking confirmations and updates.

## Technologies
* **Frontend**: React Native
* **Backend**: Python, Django
* **Database**: PostfreSQL
* **API**: RESTful API

## Getting Started 
**Prerequisites**
Before you begin, ensure you have the following installed:

* Node.js
* npm 
* Python 3.8+
* PostgreSQL
* Git

**Installation** 

1. Clone the Repository:
   ```bash
   git clone https://github.com/yourusername/travelquest.git 
   cd travelquest
   ```
   
2. Frontend Setup:
   ```bash
      cd frontend
      npm install
   ```

3. Backend Setup:
   ```bash
      cd backend  
      python -m venv venv
   ```
  

4. Database Setup:
   * Create a PostgreSQL database and update the DATABASES seting in backend/settings.py
   * Run migrations:
   ```bash
      python manage.py makemigrations 
      python manage.py migrate
      ```
      
5. Implementation and usage of ORM
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

 
## Project Structure 
The project is divided into two main directories: frontend and backend.

![image](https://github.com/KlajdiGashi/TravelQuest/assets/118850687/9f347462-5058-4507-90b9-370606378eb9)

## Running the App 



## Entity-Relationship (ER) model
![ER Model](https://github.com/KlajdiGashi/TravelQuest/assets/118850687/7f28fc3c-4271-4642-a7c7-11c057fa9819)

## Contributors 
* Gyltene Sfishta
* Klajdi Gashi
* Kleda Gashi
* Myhedin Vuciterna
* Rinesa Hoxha
* Rinesa Nura 

