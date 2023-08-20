# Tech Talk Blog

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

The goal of this project was to build a content management system style blog site similar to a Wordpress site where developers can publish their blog posts and comment on other developers’ posts as well. It was built from scratch using the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Installation

You’ll need to use the express-handlebars package to use Handlebars.js for your Views, use the MySQL2 and Sequelize packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the dotenv package to use environment variables, the bcrypt package to hash passwords, and the express-session and connect-session-sequelize packages to add authentication.

Typing `npm i` into the terminal followed by the package will install them so that they can be used.

## Usage

Users are able to sign up, log in and submit their posts, or comment on other users' posts.

## Credits

I was able to complete the assignment through tutoring from my fellow peer [Myro Lee](https://github.com/myrojoylee) and askBCS!

## License

Refer to the license in the repository.