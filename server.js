const express = require("express")

const app = express()

app.get('/', (req, res) => {
    res.send("Hello There...")
})

app.listen(port, () => {
    console.log(`Server started at : http//localhost:${port}`)
})