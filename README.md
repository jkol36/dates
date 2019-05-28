WHAT THIS INCLUDES:
  1. A already created AuthContainer for managing login/signup (only relevant if you use firebase)
  2. A loginComponent that renders a username and password text field as well as a submit button. The login componenet recieves a onClick function from the authContainer. This is called onLogin() and is used to pass the state that's stored in the loginComponent up to the authContainer for submission to a auth endpoint.
  3. A signupComponent that renders 3 input fields and a signup button.  1. a text field for the email, 2. a text field for the password,  3. A text field for the confirm password input. This component also recieves a function from authContainer called onSignup() which should be called with the data the user has inputted into the signup component. 


HOW TO USE THIS:
   run npm run specify-stack
TECHNOLOGIES USED HERE
  "babel-preset-es2016": "^6.24.1",
  "babel-preset-react": "^6.24.1",
  "highcharts-more": "^0.1.2",
  "moment": "^2.18.1",
  "prop-types": "^15.5.8",
  "push.js": "0.0.12",
  "react": "^15.5.4",
  "react-addons-shallow-compare": "^15.4.2",
  "react-bootstrap-date-picker": "^3.9.0",
  "react-bootstrap-tabs": "0.0.1",
  "react-checkbox-group": "^3.0.1",
  "react-collapsible": "^1.2.1",
  "react-cookie": "^0.4.8",
  "react-copy-to-clipboard": "^4.2.3",
  "react-dom": "^15.5.4",
  "react-mathjax": "^0.1.1",
  "react-paginate": "^2.2.3",
  "react-router-redux": "^4.0.8",
  "react-toggle": "^2.1.1",
  "react-tooltip": "^3.2.2",
  "redux-devtools-extension": "^1.0.0",
  "superagent": "^2.3.0",
  "superagent-bluebird-promise": "^4.2.0"
