# API Task for DeepThoughts
![image](https://github.com/Karthik-02/api_dt/assets/81423983/0a6f7cc6-3ad0-46f3-b3b8-aff3704c90b9)

# Task 1:

# API Creation						
Go through the documentation and create the API as instructed						
Front end is not required, you can show it on postman						
						
![image](https://github.com/Karthik-02/api_dt/assets/81423983/b9622dc3-2549-49ef-b27e-6ce966cb1e74)

![image](https://github.com/Karthik-02/api_dt/assets/81423983/efa2a04b-ceea-4e13-9af3-52a5e99ecc9b)

![image](https://github.com/Karthik-02/api_dt/assets/81423983/969aab37-6022-44e0-824a-9675777998ac)


# Task 2:

# API Documentation 			
Document the details about the API, the description of the API is given below			
![image](https://github.com/Karthik-02/api_dt/assets/81423983/743f772b-f0d3-4829-a1e4-86692d1a2c30)

![image](https://github.com/Karthik-02/api_dt/assets/81423983/040c1267-bd58-45a6-b058-cb843d4bddc6)

# Description about the page	
1	User can tag an event which he wants to create a nudge about and give this nudge a title.
2	User should be able to upload a image which will be shown as a cover for the nudge
3	Add a time at which the user wants to send the nudge
4	The nudge will have a description
5	This nudges will also have a icon and one line invitation which will be shown where the nudge is minimized or when it is shown along with a event/article
	
	
# Steps to do	
1	Go through the wireframe in the image, it is a page where a user can create a nudge for his/her event
2	Create a Object data model for the Nudge, you can use the above model for reference 
3	Write a documentation about how the api structure should be. The documentation should include the types of requests you want to perform, base url, API Endpoints, Payload and the description about the API
4	You can use the above table(Table 1) for reference
5	Write the documentation for the CRUD functionalitites
![image](https://github.com/Karthik-02/api_dt/assets/81423983/13e68236-671e-4441-8f13-376c997bd9f4)


# Solution to Task 1:

# Step 1 :
1. Once you cloned this repository, you have to install the required packages using the given package files.
2. After that, using CMD/PWS, you can run the command:
   > node app.js
3. The above command will start the server.
4. After starting the server, You can see the following in the localhost:3000 URL,
          
 ![image](https://github.com/Karthik-02/api_dt/assets/81423983/95792859-f673-4571-a45c-6cb26d2bb107)
 ![image](https://github.com/Karthik-02/api_dt/assets/81423983/5e2706e9-5496-4e0d-a25f-6d47582bd567)
 
 
# Step 2 :
1. Now Fire the following API'S.
2. First I have Fired an API to the URl - 'http://localhost:3000/api/v3/app/events' to insert the sample values in the database. the sample data is given below:
  {
    "type": "event",
    "uid": 18,
    "name": "Sample Event 1",
    "tagline": "A proper tagline for Sample Event 1",
    "schedule": "2023-06-16T09:00:00Z",
    "description": "Sample description for Sample Event 1",
    "files": {
      "image": "sample_image1.jpg"
    },
    "moderator": "John Doe",
    "category": "Category 1",
    "sub_category": "Subcategory 1",
    "rigor_rank": 3,
    "attendees": [1, 2, 3]
  }

![image](https://github.com/Karthik-02/api_dt/assets/81423983/52efe046-0ff7-4534-813d-381514aba387)

3.Create an API request to update an event:

Set the request method to PUT.
Set the request URL to http://localhost:3000/api/v3/app/events/{id} where {id} is the ID of the event you want to update.
In the request body, provide the updated event details.
Send the request.

![image](https://github.com/Karthik-02/api_dt/assets/81423983/302b4d83-de04-4dac-8696-87c3e72ea538)


4.GET /api/v3/app/events
Description: Retrieve events based on query parameters.
Query Parameters:
id (optional): The ID of the event to retrieve.
type (optional): The type of events to retrieve. Use "latest" to get the latest events.
limit (optional): The maximum number of events to retrieve.
page (optional): The page number for pagination.
Example Request: GET http://localhost:3000/api/v3/app/events?id=648b44db4d7c6cffd475d0b9

![image](https://github.com/Karthik-02/api_dt/assets/81423983/679b6b78-9d20-4b5a-bbb1-0573b526c5e4)

5.Get latest events with pagination:

Request Type: GET
URL: http://localhost:3000/api/v3/app/events?type=latest&limit=5&page=1
Example URL: http://localhost:3000/api/v3/app/events?type=latest&limit=5&page=1

![image](https://github.com/Karthik-02/api_dt/assets/81423983/3a59c567-6daa-460d-9dfa-fe6fa46aab98)

6.Delete an event by its id:

Request Type: DELETE
URL: http://localhost:3000/api/v3/app/events/:id
Example URL: http://localhost:3000/api/v3/app/events/60c5eb04e827470ef89209b2

For this I have created a new event as below,
![image](https://github.com/Karthik-02/api_dt/assets/81423983/e30a965d-80b9-45c8-90ae-73ab929b70d4)

Now let us delete the above event with URL - 'http://localhost:3000/api/v3/app/events/648b6eb485376cd88215b0df'

![image](https://github.com/Karthik-02/api_dt/assets/81423983/5b867f81-d7eb-4379-80b2-5d90f78e17c5)



# Solution for Task 2:

# API Documentation for Nudge Management API:

# Introduction

The Nudge Management API allows users to create and manage nudges for their events. A nudge is a reminder or invitation sent to users at a specific time. This documentation provides details about the API endpoints, payloads, and descriptions for performing CRUD operations on nudges.

# Base URL

The base URL for accessing the Nudge Management API is: 'https://api.example.com'

# API Endpoints

The following API endpoints are available for managing nudges:

# Get All Nudges
Request Type: GET
Endpoint: /api/v1/nudges
Description: Retrieves all the nudges created by the user.

# Get Nudge by ID
Request Type: GET
Endpoint: /api/v1/nudges/:id
Description: Retrieves a specific nudge by its unique ID.

# Create Nudge
Request Type: POST
Endpoint: /api/v1/nudges
Payload:
title: string (required) - The title of the nudge.
image: file (required) - The image file to be used as the nudge cover.
sendTime: string (required) - The time at which the nudge should be sent.
description: string (required) - The description of the nudge.
icon: string - The icon for the nudge.
invitation: string - The one-line invitation for the nudge.
Description: Creates a new nudge with the provided information.

# Update Nudge
Request Type: PUT
Endpoint: /api/v1/nudges/:id
Payload:
title: string - The updated title of the nudge.
image: file - The updated image file for the nudge cover.
sendTime: string - The updated time at which the nudge should be sent.
description: string - The updated description of the nudge.
icon: string - The updated icon for the nudge.
invitation: string - The updated one-line invitation for the nudge.
Description: Updates the information of a specific nudge.

# Delete Nudge
Request Type: DELETE
Endpoint: /api/v1/nudges/:id
Description: Deletes a specific nudge by its unique ID.


# Object Data Model for Nudge
The data model for a nudge consists of the following properties:

_id: ObjectId - The unique identifier for the nudge.
title: string - The title of the nudge.
image: string - The URL or file path of the nudge cover image.
sendTime: string - The time at which the nudge should be sent.
description: string - The description of the nudge.
icon: string - The icon for the nudge.
invitation: string - The one-line invitation for the nudge.

# API Usage Examples

# 1.Get All Nudges

Request: GET /api/v1/nudges
Response:
Status: 200 OK
Content-Type: application/json

[
  {
    "_id": "609a1378a2b12c00153a79ae",
    "title": "Event Nudge 1",
    "image": "/uploads/nudge1.jpg",
    "sendTime": "2023-06-16T09:00:00Z",
    "description": "This is a nudge for Event 1",
    "icon": "event_icon",
    "invitation": "Join us for an exciting event!"
  },
  {
    "_id": "609a139fa2b12c00153a79af",
    "title": "Event Nudge 2",
    "image": "/uploads/nudge2.jpg",
    "sendTime": "2023-06-17T14:30:00Z",
    "description": "This is a nudge for Event 2",
    "icon": "event_icon",
    "invitation": "Don't miss out on the fun!"
  }
]

# 2.Create Nudge

Request:POST /api/v1/nudges
Payload:
{
  "title": "Event Nudge 3",
  "image": <file>,
  "sendTime": "2023-06-18T18:00:00Z",
  "description": "This is a nudge for Event 3",
  "icon": "event_icon",
  "invitation": "Join us for a memorable evening!"
}
  
Response:
Status: 200 OK
Content-Type: application/json

{
  "_id": "609a13eca2b12c00153a79b0"
}
  
# 3.Update Nudge

Request:PUT /api/v1/nudges/609a13eca2b12c00153a79b0

Payload:
{
  "title": "Updated Event Nudge 3",
  "sendTime": "2023-06-18T20:00:00Z"
}
  
Response:
Status: 200 OK
Content-Type: application/json

{
  "modifiedCount": 1
}
  
# 5.Delete Nudge

Request:DELETE /api/v1/nudges/609a13eca2b12c00153a79b0
  
Response:
Status: 200 OK
Content-Type: application/json

{
  "deletedCount": 1
}
  
# Conclusion
This API documentation provides an overview of the Nudge Management API and its available endpoints for creating, updating, retrieving, and deleting nudges. Use the provided API endpoints, payloads, and examples to interact with the API and manage nudges effectively for your events.
