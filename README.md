# Mobile Web Specialist Restaurant App - Part 2
---

This project is part of Udacity's Mobile Web Specialist Nanodegree.


## How to run

#### Server
First of all you would need the server that provides the API for restaurant's data.

Get the server: https://github.com/udacity/mws-restaurant-stage-2

Follow the instruction there to run it.

#### Client
##### Setup
- Check the port you are running your server on and update in the file `js/dbhelper.js` line 13.
- Get the required packages by running `npm i` in the project directory
- Make the build by running `node_modules/.bin/gulp` command in the project directory.

##### Run
You'd need to setup a static file server in order to run this app

I will be using `serve` from `npm` to run mine. You can use any of your favorite.

- Open terminal
- Run `npm i serve -g` or `yarn global add serve` to install it on your system (You'll need NodeJS and npm/yarn to set this up)
- Navigate to the project's directory and change into `dist` directory
- Run `serve -s --port 8000` (we need to give 8000 as port)
- Head over to `localhost:8000` in your browser

OR

You can use `SimpleHTTPServer` in Python to run the project.
- Run `python -m SimpleHTTPServer 8000`

and that's it. You have the app running.

###### Make sure you are running the server in `dist` directory.
