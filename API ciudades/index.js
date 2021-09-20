const router = require('nordic/ragnar').router()
const uuid4 = require('uuid').v4

let ciudades = []

const validateData = (req, res, next) => {
    const {nombre, pais, poblacion, foto} = req.body
    if (nombre && pais && poblacion && foto) {
        next()
    }
    res.status(404).json({error: 'Todos los datos son obligatorios'})
}

router.get('/', (req, res)=> {
    if (ciudades.length) {
        res.status(200).json(ciudades)
    } else {
        res.status(404).json({error: 'No encontramos ciudades'})
    }
})

router.post('/addCity', validateData,(req, res)=> {
   
    const ciudad = {
        id: uuid4(),
        ...req.body
    }
    ciudades.push(ciudad)
    res.status(201).json({message: 'ciudad agregada', ciudad})
})

router.put('/updateCity/:id', validateData, (req, res)=> {
    const id = req.params.id

    const ciudad = {
        id,
        ...req.body
    }

    const index = ciudades.findIndex(ciudad => ciudad.id == id)

    ciudades[index] = ciudad

    res.status(200).json({message: 'ciudad actualizada', ciudad})
})

router.delete('/deleteCity/:id', (req, res)=>{

const { id } = req.params

ciudades = ciudades.filter(ciudad => ciudad.id != id)

res.status(200).json({message: 'ciudad eliminada'})

})

module.exports = router