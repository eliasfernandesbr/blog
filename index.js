const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const reaload = require("reload");
const categController = require("./categories/categoriesController")
const articController = require("./articles/articlesController")

const article = require("./articles/article");
const category = require ("./categories/category");

//VIEW ENGINE
app.set("view engine", "ejs");

// ARQUIVOS ESTATICOS- CSS, IMGS, JS do Front etc
app.use(express.static("public"));

//BODY-PARSER - TORNANDO POSSÍVEL TRABALHAR COM FORMULÁRIOS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DATABASE
connection
  .authenticate()
  .then(() => {
    console.log("> CONECTADO AO BANCO DE DADOS mySql <");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/", categController )
app.use("/", articController )








app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("MEU SERVIDOR ESTÁ RODANDO NA PORTA [3000]");
});
reaload(app);
