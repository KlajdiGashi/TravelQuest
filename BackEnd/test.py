import requests

register_endpoint = "http://localhost:8000/api/users"

# Define the user data to be registered
user_data = {
    "username": "newuser",
    "fullname": "New User",
    "number": "1234567890",
    "role": "customer",
    "location": "Somewhere"
}

# Send a POST request to the user registration endpoint
response = requests.post(register_endpoint, data=user_data)

# Print the response from the server
print("Status Code:", response.status_code)
print("Response Body:", response.json())