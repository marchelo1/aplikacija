// uvoz modjula
var express = require(`express`);
var mongoose = require(`mongoose`);
var bodyparser = require(`body-parser`);
var cors = require(`cors`);


var app = express();

const route = require(`./route/routes`);

//kreiranje konekcije ka mongodb
mongoose.connect(`mongodb://localhost:27017/shoppinglist`);


//poruka kada je uspesno konektovan na mongodb
mongoose.connection.on(`connected`, () => {
    console.log(`Konektovano na bazu podataka mongodb @ 27017`);
});

//poruka ako dodje do greske
mongoose.connection.on(`error`, (err) => {
        console.log(err);
});


//broj porta
const port = 3000;

//dodavanje midleware, cors dozvoljava nam da pravimo zahteve i odgovore mednju razlicitim portovima na istoj masini
app.use(cors());

//body-parser
app.use(bodyparser.json());


//dodavanje route  sa /api / "nesto" ce detektovati moju route.js fajl, npr /api/addItem itd
app.use(`/api`, route);


//testiranje Servera
app.get(`/`, (req, res) => {
    res.send(`foobar`);
})

app.listen(port, () => {
    console.log(`Server started at port:` + port);
});
