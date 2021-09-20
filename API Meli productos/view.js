LucasF
#0614

LucasF — 11/08/2021
let favoritos = {
    nombre: '',
    lista: []
}


function Control (req,res,next) {
    let {titulo,genero,descripcion,portada,duracion} = req.body
    if(!titulo  !genero  !descripcion  !portada  !duracion){
      res.status(500).send("Te faltaron datos para agregar la pelicula")
    }
    next()
  }

router.get('/getMovies', (req, res) => {
    res.status(200).json(arrayMovies);

  });

router.get('/getMoviesFavorite', (req, res) => {
    res.status(200).json(favoritos);
  });

router.post('/addMovies', Control,(req, res) => {
    let data = req.body
    arrayMovies.push(data)

    res.status(201).json({
        message: 'Pelicula agregada'
    });
  });

router.delete('/removeMovies/:id', (req, res) => {
    let id = req.params.id
    let movieExist = arrayMovies.some(e => e.id == id)
    if(movieExist){
        arrayMovies = arrayMovies.filter(e => e.id != id)

        res.status(201).json({
            message: 'Pelicula removida'
        });
    }else{
        res.status(404).json({
            message: 'Pelicula no encontrada'
        });
    }

  });

  router.post('/addFavorite/:id', (req, res) => {
    let id = req.params.id
    let find = arrayMovies.find(e => e.id == id)
    favoritos.lista.push(find)

    res.status(201).json({
        message: 'Pelicula agregada'
    });
  });


  router.put('/changeTitle', (req, res) => {
    let body = req.body.nombre
    favoritos.nombre = body
    console.log(favoritos)
    res.status(201).json({
        message: 'Nombre modificado'
    });
  });

  router.get('/filterMovies', (req, res) => {
    let genero = req.body.genero
    let arrayFilter = arrayMovies.filter(e => e.genero == genero)
    console.log(arrayFilter)
    res.status(201).json({
        message: 'Array filtrado'
    });
  });

module.exports = router;
Lumel — 18/08/2021
kill $(lsof -t -i:8080)
LucasF — 30/08/2021
https://crop-circle.imageonline.co/es/
LucasF — 02/09/2021
https://meet.google.com/sxw-ytxz-cyb
Meet
Real-time meetings by Google. Using your browser, share your video, desktop, and presentations with teammates and customers.

Lumel — 02/09/2021
Estas para seguir dandole un toque?
LucasF — 02/09/2021
obvio papaaa
mismo meet?
Lumel — 02/09/2021
Dale
LucasF — 02/09/2021
me dice solicitando unirse
a la meet esa de ahi arriba
Lumel — 02/09/2021
Creo una nueva
https://meet.google.com/gxb-ugym-oty
Meet
Real-time meetings by Google. Using your browser, share your video, desktop, and presentations with teammates and customers.

LucasF — 03/09/2021
Profe, quiere que le demos a alguna clase? que armemos una lista de alumnos en base a conocimiento
usted dira
por lo que vi casi nadie tiene exp en express y no damos nada sobre express, nose que podemos hacer de eso, si sumar algun repaso o algo
Lumel — 03/09/2021
https://docs.google.com/spreadsheets/d/19tUQH-bfE4UrGzyHfatSGq9D03_Q-aeF/edit#gid=2651355
Google Sheets - create and edit spreadsheets online, for free.
Create a new spreadsheet and edit with others at the same time -- from your computer, phone or tablet. Get stuff done with or without an internet connection. Use Sheets to edit Excel files. Free from Google.
LucasF — 07/09/2021
Buenas tardes bootcampers! ?Un día con mucha información no? Recuerden que ya pueden acceder al playground y a la clase de GIT que estaremos brindando el día de mañana.
decis que le cambiamo algo
LucasF — 10/09/2021
PROFE
una consulta, me sale pass incorrecta
en zoom
AulaZoom.DH.2021
le tengo que sacar algo?
Lumel — 10/09/2021
Entra con el link de alumno
LucasF — 10/09/2021
1. crear un array que contenga nuemros del 1 al 10. Retornar un nuevo array que contenga
todos los numeros multiplicados por dos
2. del array que devuelve el ejercicio numero 1, filtrar los que sean mayores a 5
3. del array que devuelve el ejercicio 2, buscar el primero que sea mayor a 10
4. dado el siguiente array filtremos a los pokemones con poder menor a 10.

let pokemones = [
    {
        nombre: 'pikachu',
        poder: 12
    },
    {
        nombre: 'bolbasor',
        poder: 6
    },
    {
        nombre: 'charizar',
        poder: 19
    },
    {
        nombre: 'squartle',
        poder: 3
    },
    {
        nombre: 'newto',
        poder: 6
    },
]
LucasF — 13/09/2021
profe
le puedo hacer una consulta
Lumel — 13/09/2021
Yes
LucasF — 13/09/2021
¡Buenas tardes Bootcampers! ⭐️ ¿Cómo están? Ya está disponible en Playground el material de la segunda clase de Nordic Server Side. 
Podrán acceder a la clase de hoy mediante el siguiente link https://digitalhouse.zoom.us/my/aulavirtual14 contraseña: aulasDH.14
Hoy vamos a conocer qué son los middlewares y cómo trabajarlos, también vamos a ver los tipos de routers que tiene Nordic. ¡Los esperamos! :thumbsup:
Zoom Video
Join our Cloud HD Video Meeting
Zoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, chat, and webinars across mobile, desktop, and room systems. Zoom Rooms is the original software-based conference room solution used around the world in board, conference, huddle, and training rooms, as well as ex...
esa era la bienvneida preparada para hoy?
pongo buen dia
y los temas son esos?
asi pongo como pasaron el fin de semana y eso
Lumel — 13/09/2021
Si pero ya estaba habilitado todo eso desde el viernes
LucasF — 13/09/2021
perfecto!
pero digo, esta bien eso de que vamos a ver los middlewares
y como trabajarlso y eso?
Lumel — 13/09/2021
SI si
LucasF — 13/09/2021
oka
profe me gustaria poder iniciar el zoom a mi hoy, que no me esta andando
asi aprendo porque me da pass incorrecta, algo hago mal
Lumel — 13/09/2021
Tenes que loguearte en la app de zoom
Copiate la pass y el mail porque tienen que estar bien
LucasF — 13/09/2021
aulavirtual14@digitalhouse.com
yo pongo eso de usuario
AulaZoom.DH.2021
y eso de pass como dijo anje
Lumel — 13/09/2021
Que raro
Lumel — hoy a las 17:24
/**
 * Module dependencies
 */
const React = require('react');
const {useEffect, useState} = React
const PropTypes = require('prop-types');
Expandir
message.txt
5 KB
Lumel — hoy a las 18:20
/
 * Modules dependencies
 */
const restclient = require('nordic/restclient')({
  timeout: 5000,
});

/
 * Service interface
 */
class Service {
  static getSite(siteId) {
    return restclient.get(/sites/${siteId})
      .then(response => response.data);
  };
  static getProducts() {
    return restclient.get('/sites/MLA/search?q=Motorola')
    .then(response => response.data)
  }
}

/**
 * Expose Service
 */
module.exports = Service;
exports.fetchProducts = function fetchProducts (req, res, next) {
  demoService.getProducts()
  .then(data => {
    res.locals.products = data
    next()
  })
}
LucasF — hoy a las 18:21
este ultimo es el controller?
Lumel — hoy a las 18:21
Si
Y falta la view
Lpm como mierda se copia como archivo
/**
 * Module dependencies
 */
 const React = require('react');
 const PropTypes = require('prop-types');
 const Head = require('nordic/head');
 const MeliGA = require('nordic/analytics/meli-ga');
 const MelidataTrack = require('nordic/melidata/melidata-track');
 const Script = require('nordic/script');
 const Style = require('nordic/style');
 const serialize = require('serialize-javascript');
 const injectI18n = require('nordic/i18n/injectI18n');
 const Image = require('nordic/image');
 const DemoComponent = require('../../components/DemoComponent');
 
 /**
  * View Component
  */
 function View(props) {
   const { i18n, translations, products, site, siteId, lowEnd, deviceType, company, imagesPrefix } = props;
   const preloadedState = {
     i18n,
     translations,
     site,
     siteId,
     lowEnd,
     deviceType,
     company,
     imagesPrefix,
     products,
   };
   
   return (
     <div className="demo">
       <MeliGA
         section="universal"
         page="test"
       />
 {console.log(products)}
       <MelidataTrack path="/demo" event_data={{ demo: 'data' }} />
 
       <Head>
         <title>
           {i18n.gettext('Demo Page')}
         </title>
       </Head>
 
       <Style href="demo.css" />
       <Script>
         {`
           window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
           console.log('Demo page is loaded!');
         `}
       </Script>
       <Script src="vendor.js" />
       <Script src="demo.js" />
 
       <DemoComponent i18n={i18n} />
 
       <h2>
         {i18n.gettext('Site details:')}
       </h2>
       <p>
         {i18n.gettext('Country: {0}, default currency: {1}, company: {2}, {0}',
           site.name, site.default_currency_id, company)}
       </p>
       <h2>
         {i18n.gettext('Device details:')}
       </h2>
       <p>
         {i18n.gettext('Is low-end: {0}, type: {1}', String(lowEnd), deviceType)}
       </p>
 
       <h2>
         {i18n.gettext('API endpoints:')}
       </h2>
       <ul>
         <li>
           <a href="/api/demo/platform">
             {i18n.gettext('Platform')}
           </a>
         </li>
         <li>
           <a href="/api/demo/user">
             {i18n.gettext('User')}
           </a>
         </li>
         <li>
           <a href="/api/demo/device">
             {i18n.gettext('Device')}
           </a>
         </li>
         <li>
           <a href="/api/demo/browser">
             {i18n.gettext('Browser')}
           </a>
         </li>
       </ul>
 
       <h2>
... (56 líneas restantes)
Contraer
view.js
5 KB
Ahi va
﻿
/**
 * Module dependencies
 */
 const React = require('react');
 const PropTypes = require('prop-types');
 const Head = require('nordic/head');
 const MeliGA = require('nordic/analytics/meli-ga');
 const MelidataTrack = require('nordic/melidata/melidata-track');
 const Script = require('nordic/script');
 const Style = require('nordic/style');
 const serialize = require('serialize-javascript');
 const injectI18n = require('nordic/i18n/injectI18n');
 const Image = require('nordic/image');
 const DemoComponent = require('../../components/DemoComponent');
 
 /**
  * View Component
  */
 function View(props) {
   const { i18n, translations, products, site, siteId, lowEnd, deviceType, company, imagesPrefix } = props;
   const preloadedState = {
     i18n,
     translations,
     site,
     siteId,
     lowEnd,
     deviceType,
     company,
     imagesPrefix,
     products,
   };
   
   return (
     <div className="demo">
       <MeliGA
         section="universal"
         page="test"
       />
 {console.log(products)}
       <MelidataTrack path="/demo" event_data={{ demo: 'data' }} />
 
       <Head>
         <title>
           {i18n.gettext('Demo Page')}
         </title>
       </Head>
 
       <Style href="demo.css" />
       <Script>
         {`
           window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
           console.log('Demo page is loaded!');
         `}
       </Script>
       <Script src="vendor.js" />
       <Script src="demo.js" />
 
       <DemoComponent i18n={i18n} />
 
       <h2>
         {i18n.gettext('Site details:')}
       </h2>
       <p>
         {i18n.gettext('Country: {0}, default currency: {1}, company: {2}, {0}',
           site.name, site.default_currency_id, company)}
       </p>
       <h2>
         {i18n.gettext('Device details:')}
       </h2>
       <p>
         {i18n.gettext('Is low-end: {0}, type: {1}', String(lowEnd), deviceType)}
       </p>
 
       <h2>
         {i18n.gettext('API endpoints:')}
       </h2>
       <ul>
         <li>
           <a href="/api/demo/platform">
             {i18n.gettext('Platform')}
           </a>
         </li>
         <li>
           <a href="/api/demo/user">
             {i18n.gettext('User')}
           </a>
         </li>
         <li>
           <a href="/api/demo/device">
             {i18n.gettext('Device')}
           </a>
         </li>
         <li>
           <a href="/api/demo/browser">
             {i18n.gettext('Browser')}
           </a>
         </li>
       </ul>
 
       <h2>
         {i18n.gettext('i18n')}
       </h2>
       <p>
         {i18n.gettext('Usuarios')}
       </p>
 
       <h2>
         {i18n.gettext('Image component:')}
       </h2>
       <div className="demo-images">
         <div>
           <Image className="demo-images__img" src="demo-image.jpg" alt="Mural painting" />
           <p>
             <a href="https://github.com/mercadolibre/fury_frontend-image#an-image-as-a-local-resource">
               {i18n.gettext('An image as a local resource')}
             </a>
           </p>
         </div>
         <div>
           <Image className="demo-images__img" src="https://http2.mlstatic.com/D_Q_NP_2X_635310-MLA31090504228_062019-AB.webp" alt="White ukelele" />
         </div>
       </div>
     </div>
   );
 }
 
 View.propTypes = {
   i18n: PropTypes.shape({
     gettext: PropTypes.func.isRequired,
   }).isRequired,
   siteId: PropTypes.string.isRequired,
   translations: PropTypes.shape({}),
   site: PropTypes.shape({
     name: PropTypes.string.isRequired,
     default_currency_id: PropTypes.string.isRequired,
   }).isRequired,
   lowEnd: PropTypes.bool,
   deviceType: PropTypes.string,
   company: PropTypes.string,
   imagesPrefix: PropTypes.string,
 
 };
 
 View.defaultProps = {
   translations: {},
   lowEnd: false,
   deviceType: null,
   company: null,
   imagesPrefix: '/',
 };
 
 /**
  * Inject i18n context as props into View.
  */
 module.exports = injectI18n(View);
 