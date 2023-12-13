## PROJECT NAME:

* Med-hunter

## INTRODUCTION:

This is a user friendly emmergency medical center location web application,where upon the poress on a single user friendly position button th euser can have access to emmergency medical centers within a 5 miles radus from their location.

# Link to Working Application

https://med-hunter.netlify.app/


## INSTALATION: 

# Node js Proxy server dependency installation
* navigate to the directory where the React application is located
* run `npm install i`

Below are the dependencies that should appear in yur package.json file
*npm install express* // serves as a proxy/back server for the client server(local server) and makes https app requests on its(restaurant app) behalf

*npm install cors* //cors fixes the server error communication 

*npm install node-fetch* // uses the url and data from the express server to make a request to the googleplaces application server by querying variables within the url of the main javascript script

# what to do after installing the above dependencies

*first install the express backend/proxy server that will make requests on behalf of our application to the googleplacesapi application server*

to start express proxy/backend server
run 
>>  npm start
<!-- you should see a message saying connected to ... -->


# Overview of workings of the Node js proxy server workings

# proxy server code overview

This Express.js server acts as a middleman between your frontend application and the Google Places API. It handles CORS to allow requests from the specified origin, fetches data from the Google Places API, and forwards the response to the client. The use of cors middleware helps avoid CORS errors that would otherwise occur when making requests from a different domain.
Define a route for handling GET requests to /api/places:

This route is used to fetch data from the Google Places API.
It constructs the API URL using query parameters from the client's request.
It makes an asynchronous HTTP GET request to the Google Places API using the node-fetch library.
It parses the response data as JSON.
If the request is successful, it responds to the client with the fetched data.
If there's an error, it logs the error and sends a 500 Internal Server Error response to the client.

# the reason i used the middleware cors

when i tried making requests to the application server i kept runnig into a Cross-Origin Resource Sharing error which essentially `is a security feature implemented by web browsers to prevent web pages from making requests to a different domain than the one that served the web page. Browsers, by default, enforce a security policy known as the "same-origin policy." This policy restricts web pages from making requests to a domain different from the one that served the web page. This means that if your web page is hosted on domainA.com, it is not allowed to make requests to domainB.com via JavaScript unless domainB.com explicitly allows it this authorisation is usully presented in the applications http response header.`

so the reason I run into the cors error was because googles api implements the same-origin policy thus blocking me access hence i imported the cors middleware to configure the server to allow requests from http://127.0.0.1:5500, which is my frontend server ip address. This means that requests originating from http://127.0.0.1:5500 are permitted to access resources on the google api server safeky. Without CORS configuration, the browser would block such requests due to the same-origin policy.


# React js dependency installation
* navigate to the directory where the React application is located:
* run `npm install`

# Usage

* run the application with `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## CONTRIBUTION

* Name: Stephen Quarshie
* Role : Front end and Back end Developer

## RELATED PROJECTS

https://artisan-hound.netlify.app/

## LICESING

