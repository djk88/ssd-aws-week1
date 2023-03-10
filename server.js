const express = require("express");
const app = express();

// Before the other routes
app.use(express.static("build"))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const pokemons = [
    {
        id: 1,
        name: "Pikachu",
        type: "electric ⚡️",
        level: 99,
        image: "/pikachu.webp"
    }
]

app.get('/', (req, res) => {
})

app.get("/api/pokemons", (req, res) => {
    console.log("GET /api/pokemons")
    res.send({ pokemons: pokemons })
});

app.post("/api/pokemons", (req, res) => {
    const data = req.body
    console.log("POST /api/pokemons", data)
    data.id = pokemons.length + 1
    pokemons.push(data)
    res.send(data)
})

app.get('*', (req, res) => {
    res.sendFile('build/index.html');
});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))