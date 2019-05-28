console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV !== 'production') {
  require('./dev.js')
}
else {
  require('./prod.js')
}