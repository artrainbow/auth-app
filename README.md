# APP AUTH

This is a test-example of Auth app, based on Expo

## Requirements

- Node 20.5.0+
- Yarn 1.22.19+
- Xcode 15.1+ (iOS)
- Homebrew 4.1.7+

## Installation packages

`yarn install`

## Run the project

`yarn start`

## Use cases:

1. The user should navigate from the Home page to the Login page.
2. On the Login page, the user enters a username and password.
3. If the username or password is invalid, display an error message.
4. If the username and password are valid, redirect to the Profile page.
5. On the Profile page, display user data retrieved from the API.
6. Only authorized users can access the Profile page.
7. If the user clicks the Logout button, log the user out and redirect them to the Home page.
8. If the user is unauthorized or the token is invalid, automatically redirect them to the Home page from the Profile page. For example, if the user is on the Profile page and their session suddenly becomes invalid, they should be automatically logged out.

## Credentials (only for the testing purpose):

- username: `emilys`
- password: `emilyspass`

## API documentation

https://dummyjson.com
