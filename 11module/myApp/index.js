const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello There!')
  res.end()
})

app.listen(8000, () => {
  console.log = 'The app is listening'
})
