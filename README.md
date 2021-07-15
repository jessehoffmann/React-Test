# WebPT React-Test

This project was created to demonstrate front-end development skills.

## Requirement
You need a web browser with a working internet connection.
I recommend Google Chrome:

https://www.google.com/chrome/b/

## Development
Default way to run the app in development mode:
`yarn start`

Or create a local server so API requests can run without CORS errors:
`python3 -m http.server 8001`

- WARNING: If you do not develop in an incognito window browsers like Chrome may keep a cache and not update properly

## Deployment
Deployment is set up through AWS amplify. The build process is automated. To deploy the app simply push a new commit to the main branch.

The URL for the app can be found here:

https://main.d3u1tscmdj8e1q.amplifyapp.com/

## Credit
The following two libraries were extrememly helpful in handling API requests and state managements:

- [Redux](https://redux.js.org/)
- [React-Redux](https://react-redux.js.org/)