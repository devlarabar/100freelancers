<h3 align="center">100freelancers</h3>

  <p align="center">
    100freelancers is a tool to keep track of potential web development freelance clients.
<!--     <br />
    <a href="https://github.com/devlarabar/100freelancers"><strong>Explore the docs »</strong></a> -->
    <br />
    <br />
    <a href="https://100freelancers.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/devlarabar/100freelancers/issues">Report Bug</a>
    ·
    <a href="https://github.com/devlarabar/100freelancers/issues">Request Feature</a>
  </p>
</div>

## :page_with_curl: About

100freelancers was originally created to help members of the 100devs agency keep track of their client outreach. Rather than using spreadsheets, which can be messy and difficult to read, 100freelancers can be used instead to easily add, view, and track clients, as well as progress made on client work.

## :computer: Tech Stack

<div style="display:flex;">
<img height="35" title="React" src="https://img.shields.io/badge/React-0e062a?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
<img height="35" title="Next" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next"/>
<img height="35" title="Express" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js"/>
<img height="35" title="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
<img height="35" title="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" alt="JavaScript"/>
<img height="35" title="Node.js" src="https://img.shields.io/badge/Node.js-90c53f?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
<img height="35" title="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
</div>

## :wrench: Structure

The wireframe below outlines the project's models and general layout. Authentication is done through Passport's Discord strategy.

![wireframe-2023-09-08](https://github.com/devlarabar/100freelancers/assets/122644200/4a3930f4-174a-4ae3-b373-d3b7f38eca6f)

## Progress

Currently, the project has functional authentication and session storage through Passport, as well as functional adding of clients and outreach. There is also support for light/dark mode using DaisyUI. See below for screenshots!

<img src="https://github.com/devlarabar/100freelancers/assets/122644200/1698dd2e-8057-44f3-9f1a-bcbe81fedd51" width="48%">
<img src="https://github.com/devlarabar/100freelancers/assets/122644200/d1f9c8a9-5adf-4b91-99c0-8aacef2a3cf0" width="48%">

## :memo: Installation

This app uses [NPM](https://www.npmjs.com/) to manage its dependences and packages.

1. Fork and clone the repo

    ```
    git clone https://github.com/devlarabar/100freelancers.git
    ```

2. Run the following in both the `client` and `server` directories:

    ```
    npm install
    ```

3. Create an `.env` file in `server/config/` _and_ in `client/`. Copy everything from the respective `.env.example` files in both directories into these new files. **Do not delete the example!**  
   For example, run:

    ```
    cp .env.example .env
    ```

    to copy the contents of `.env.example` into a new file named `.env`

4. We have a local MongoDB instance set up through Docker.
   [Docker Desktop](https://www.docker.com/products/docker-desktop/) will need to be installed to run the database.
   You can manage it using the following commands:

    ```
    To start the local MongoDB instance, run:

    npm run db:up

    To stop the local MongoDB instance, run:

    npm run db:stop
    ```

    With the local MongoDB instance in place, you can now connect directly without the need for MongoDB Atlas during development.

    To connect to the local MongoDB instance, follow these steps:

    1. Open MongoDB Compass.
    2. In the MongoDB Compass connection dialog, locate the "Connection String" field.
    3. In your .env file, located in the server directory, copy the DB_STRING, then paste this DB_STRING value into the "Connection String" field in MongoDB Compass.
    4. Click "Connect" to establish a connection to your local MongoDB instance.

5. To run the app locally, navigate to the `client` directory and run:

    ```
    npm run dev
    ```

    Then navigate to the `server` directory and run:

    ```
    npm run db:up
    npm run serve
    ```

## Contributing

Anyone is welcome to contribute! The following simplified example of the git workflow is what we will be following for the development of this app.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

When creating your Pull Request, please make sure to be as descriptive as possible about your changes. Explain what your pull request solves if it's not resolving an existing issue.

### Color Reference

| CSS Color Class | Light Theme                                                      | Dark Theme                                                       |
| --------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Primary         | ![#F1F6F9](https://via.placeholder.com/10/F1F6F9?text=+) #F1F6F9 | ![#355565](https://via.placeholder.com/10/355565?text=+) #355565 |
| Secondary       | ![#142833](https://via.placeholder.com/10/142833?text=+) #142833 | ![#D7E4EB](https://via.placeholder.com/10/D7E4EB?text=+) #D7E4EB |
| Accent          | ![#0089B6](https://via.placeholder.com/10/0089B6?text=+) #0089B6 | ![#0089B6](https://via.placeholder.com/10/0089B6?text=+) #0089B6 |
| Base-100        | ![#D7E4EB](https://via.placeholder.com/10/D7E4EB?text=+) #D7E4EB | ![#142833](https://via.placeholder.com/10/142833?text=+) #142833 |

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
