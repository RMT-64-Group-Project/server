const express = require('express')

const mainRouter = require('./routes/main')
const authRouter = require('./routes/auth')

const port = 3000
const app = express()

app.use(mainRouter)
app.use(authRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})