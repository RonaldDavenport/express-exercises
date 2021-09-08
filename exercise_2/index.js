const PORT = 3001
const express = require("express")
const app = express()
const citys = [
    {cityName: "Boston", continent: "North America"},
    {cityName: "Houston", continent: "North America"},
    {cityName: "Dallas", continent: "North America"},
    {cityName: "Austin", continent: "North America"},
    {cityName: "Atlanta", continent: "North America"},
    {cityName: "Miami", continent: "North America"},
    {cityName: "New Orleans", continent: "North America"},
    {cityName: "New York", continent: "North America"},
    {cityName: "Raleigh", continent: "North America"},
    {cityName: "Chicago", continent: "North America"},
]
const Aboutme = [
    {name: "Ronald", city: "Houston", state: "Texas"}
]

const movies = [
    {name: "Friday", poster: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/friday-movie-cover-maker-design-template-6f7cb5ceae6ea43f7db76fed236c42e3_screen.jpg?ts=1573060683" },
    {name: "42", poster: "https://m.media-amazon.com/images/I/51azVEj-x-L._AC_.jpg"},
    {name: "Boyz N The Hood", poster:"https://m.media-amazon.com/images/I/51638UrjqDL._AC_.jpg"},
    {name: "Training Day", poster: "https://m.media-amazon.com/images/I/816XrpA0VfS._AC_SY679_.jpg"},
    {name: "Captain America: Civil War", poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg"}

]

const es6Renderer = require("express-es6-template-engine")
app.use(express.static(__dirname + '/public'));
app.engine("html", es6Renderer)
  app.set("views", "templates")
  app.set("view engine", "html")

// Write your routes between the ***

// ***

app.get("/node", (req,res) => {
  res.send ("Node and express are just lovely")
})

app.get("/", (req,res)=> {
    res.render("exercises", {
        locals:{
            citys:citys,

            Aboutme:Aboutme
        },
        partials:{
            head: '/partials/head'
        }

      
    })
})

app.post("/", (req,res) => {
    res.status(400)
    res.send("This is an invalid route")
})


app.get("/movies", (req,res)=> {
    res.render("top5movies", {
        locals:{
            movies:movies
        },
        partials:{
            head: '/partials/head'
        }

      
    })
})
// ***

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})