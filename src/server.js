import express, { urlencoded } from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './controllers.js';
import { Sentences } from './database/sentences.js';




Sentences()
const app = express();
const puerto = 3000 || process.env.PORT;

app.use(express.json());
app.use(urlencoded({extended: true}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', __dirname +'/views');


app.use(router)

app.get('/', (req, res) => {
    res.render('index.ejs')
  });

app.get('/dashboard', (req, res) => {
  res.render('dashboard.ejs')
});


app.listen(puerto, () => {
  console.log(`Servidor iniciado en el puerto ${puerto}`);
});
