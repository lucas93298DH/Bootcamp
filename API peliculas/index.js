
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


