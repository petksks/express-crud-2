Bond Movies API Documentation
This is a simple API for managing information about Bond movies. The API provides the following endpoints:

GET /movies: Retrieves a list of all Bond movies.
GET /movies/:id: Retrieves a specific Bond movie based on its ID.
POST /movies: Adds a new Bond movie.
PUT /movies/:id: Updates an existing Bond movie based on its ID.
DELETE /movies/:id: Deletes a Bond movie based on its ID.
Authentication with API Key
The API is secured with an API key that must be included in requests for authentication. To use the API, you need to include a valid API key in your requests. Otherwise, you will receive an error message stating "API key is missing" or "Invalid API key". To generate a new API key, you can send a POST request to /api-keys.

Example Requests
Here are some examples of how to use the API with different requests:

Get all Bond movies:
GET /movies?apiKey=YOUR_API_KEY

Get a specific Bond movie:
GET /movies/:id?apiKey=YOUR_API_KEY

Add a new Bond movie:
POST /movies?apiKey=YOUR_API_KEY

Request Body:
{
"title": "Title",
"year": 2023
}

Update an existing Bond movie:
PUT /movies/:id?apiKey=YOUR_API_KEY

Request Body:
{
"title": "New Title",
"year": 2023
}

Delete a Bond movie:
DELETE /movies/:id?apiKey=YOUR_API_KEY

Error Handling
The API handles erroneous requests with appropriate status codes and error messages. If a request is missing an API key, you will receive the error message "API key is missing". If an invalid API key is provided, you will receive the error message "Invalid API key". If a requested Bond movie is not found, you will receive the error message "Movie not found". Make sure to check the status code and any error messages in the response to handle erroneous requests correctly.

This is a summary of the API documentation for Bond movies. Make sure to include all relevant details and customize the documentation according to your specific needs and implementation.
