const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log('Servidor https corriendo en el puerto ' + port);
});


const newsData = [{
        id: '1',
        title: 'Futbol 1',
        description: 'esta es una descripción de la noticia seleccionada',
        isFavSelect: false,
        nameReporter: 'Juan de arco',
        date: '23/10/2022'
    },
    {
        id: '2',
        title: 'maracana 2',
        description: 'esta es una descripción de la noticia seleccionada marcana',
        isFavSelect: false,
        nameReporter: 'Pepito perz',
        date: '23/13/2003'
    },
    {
        id: '3',
        title: 'colombia 3',
        description: 'esta es una descripción de la noticia seleccionada colombia',
        isFavSelect: false,
        nameReporter: 'Homero Simpson',
        date: '12/01/1989'
    },
    {
        id: '4',
        title: 'argentina 4',
        description: 'esta es una descripción de la noticia seleccionada argentina',
        isFavSelect: false,
        nameReporter: 'Lisa',
        date: '23/10/2022'
    },
    {
        id: '5',
        title: 'paraguay 5',
        description: 'esta es una descripción de la noticia seleccionada paraguay',
        isFavSelect: false,
        nameReporter: 'Pedro Picapiedra',
        date: '23/10/100 A.C'
    },
    {
        id: '6',
        title: 'peru 6',
        description: 'esta es una descripción de la noticia seleccionada peru',
        isFavSelect: false,
        nameReporter: '',
        date: ''
    },

]

const myFavorites = []
app.get('/get', (req, res) => {
    setTimeout(() => {
        if (req.query.search) {
            res.json(newsData.filter((data) => data.title.toLowerCase().indexOf(req.query.search.toString().toLowerCase()) > -1))
        } else {
            res.json(newsData)
        }
    }, 2000);
})

app.get('/favs', (req, res) => {
    setTimeout(() => {
        const newsFavorites = newsData.filter((data) => data.isFavSelect)
        if (newsFavorites && newsFavorites.length !== 0) {
            res.json(newsData.filter((data) => data.isFavSelect))
        }
        res.json([])
    }, 2000);
})

app.post('/favs', (req, res) => {
    setTimeout(() => {
        const favorite = newsData.find((data) => data.id === req.body.newId)
        favorite.isFavSelect = req.body.newStatus
        res.json({succes: true})
    }, 2000);
})