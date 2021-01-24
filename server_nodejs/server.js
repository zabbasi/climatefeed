const twit = require("twit")
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
// Start serv & listen on port 3000.
app.listen(3000, function () {
  console.log('Node listening on port 3000')
})

//Listen for get request on root url. eg. http://localhost:3000
/**app.get('/', function (req, res) {
  //res.send('Woohoo, our homepage works!')
  res.render('index');
})**/
app.get('/', function (req, res) {
  res.render('index',  {welcomeMessage: "Welcome to my app."})
})

let Twitter = new twit({
        consumer_key: 'your_consumer_key',
        consumer_secret: 'your_consumer_secret',
        access_token: 'your_access_token',
        access_token_secret: 'your_access_token_secret',
        timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
        strictSSL: true, // optional - requires SSL certificates to be valid.
 });