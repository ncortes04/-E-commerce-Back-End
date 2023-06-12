# E-commerce Back-End

![badge](https://img.shields.io/badge/License-MIT%202.0-blue.svg)

## Description

This project was assigned to me by my coding bootcamp. I was required to create a back end simulating an E-commerce platform. This application includes categories, products, product tags, and tags. These models also have corresponding routes for creating and retrieving information via Express.

## Technologies Used

- **Back-end**: Node.js, Express.js, Sequelize (MySQL)
- **Other Tools**: Git, GitHub, Insomnia

## Installation

To run the project locally, follow these steps:

1. Clone the repository.
2. Install the dependencies using npm or yarn.
3. Set up the database and configure the connection.
4. Run the seeds.
5. Start the application.
6. Access the data through your preferred application.

## Acceptance Criteria

- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database

## Usage

To use this application via an API test application, follow these steps:

1. Change directory to the `routes` folder.
2. Navigate to the  `api` folder
3. View the corresponding route you would like to use.
4. Make the proper request to the endpoint using the desired HTTP method (GET, POST, PUT, DELETE, etc.).

Below are the available API endpoints and their associated functionalities:

- `/api/categories`
  - HTTP GET: Retrieves all categories.
  - HTTP POST: Creates a new category.

- `/api/categories/:id`
  - HTTP GET: Retrieves a specific category by ID.
  - HTTP PUT: Updates a specific category by ID.
  - HTTP DELETE: Deletes a specific category by ID.

- `/products`
  - HTTP GET: Retrieves all products.
  - HTTP POST: Creates a new product.

- `/api/products/:id`
  - HTTP GET: Retrieves a specific product by ID.
  - HTTP PUT: Updates a specific product by ID.
  - HTTP DELETE: Deletes a specific product by ID.

- `/api/tags`
  - HTTP GET: Retrieves all tags.
  - HTTP POST: Creates a new tag.

- `/api/tags/:id`
  - HTTP GET: Retrieves a specific tag by ID.
  - HTTP PUT: Updates a specific tag by ID.
  - HTTP DELETE: Deletes a specific tag by ID.

Make sure to include the necessary request body or parameters when making POST, PUT, or DELETE requests.


## License

Copyright (c) Nicholas Cortes
Licensed under the MIT License.
