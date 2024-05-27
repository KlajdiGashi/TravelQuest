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
7. Contributing

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
   ``` git clone https://github.com/yourusername/travelquest.git ``
   ``  cd travelquest ``


2. Frontend Setup:
   ``` cd frontend ``
   ``  npm install ``
  

3. Backend Setup:
   ``` cd backend  ``
   ``  python -m venv venv ``
  

4. Database Setup:
   * Create a PostgreSQL database and update the DATABASES seting in backend/settings.py
   * Run migrations:
     ``` python manage.py makemigrations ``
     ``  python manage.py migrate ``

## Project Structure 

  
