global.Promise = require('bluebird')
const BASE_URL = 'http://localhost:5001/'
export const LOGIN_ENDPOINT = BASE_URL+'user/login'
export const SIGNUP_ENDPOINT = BASE_URL+'user/signup'
