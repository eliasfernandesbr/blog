const express = require ("express");
const app = express();
const bodyParser = require ("body-parser")



//VIEW ENGINE
app.set("view engine", "ejs");


// ARQUIVOS ESTATICOS- CSS, IMGS, JS do Front etc
app.use(express.static("public"))

//BODY-PARSER - TORNANDO POSSÍVEL TRABALHAR COM FORMULÁRIOS
app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());











app.get("/", (req, res) =>{
    res.render("index")
});

app.listen(3000, ()=>{
    console.log("MEU SERVIDOR ESTÁ RODANDO");
})