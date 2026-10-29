import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

////////////MIDELWARE////////////
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
/////////////////////////////////

app.get('/api/products', (req, res) => {

  console.log("entro a la funcion de la ruta /api/products ")

  const products = [

    { name: "tripie", id:1},

    { name: "lente 3D", id:2}

  ]

  res.json(products)

});



app.post('/api/products', (req, res) => {

  console.log(req.body)

  const {name} = req.body;

  res.json(name);

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
