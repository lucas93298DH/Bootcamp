const router = require(‘nordic/ragnar’).router()
const { v4: uuidv4 } = require(‘uuid’);
// creamos un array en el cual vamos a almacenar los datos, modificarlos y borrarlos
let users = []
// middleware encargado de validar que que los campos no lleguen vacios
const validate = (req,res,next) =>{
  //desestructuramos la informacion que nos llega de req.body
  const {name,apellido,edad} = req.body
  //hacemos un if para preguntar que no lleguen vacios
  if(name && apellido && edad) {
    //continua con la ejecucion
    next()
  }else{
    //respondemos un status y un mensaje
    res.status(400).json({
      message: ‘No hay datos ingresados’
    })
  }
}
//middleware para cambiar la primera letra con Mayuscula
const mayusc = (req,res,next) =>{
  //desestructuramos la informacion que necesitemos
  const {name} = req.body
  //hacemos que la primer letra sea Mayuscula
  req.body.name = name.charAt(0).toUpperCase() + name.slice(1)
  //continua con la ejecucion
  next()
}
//endpoint para traer usuarios
router.get(‘/getUsers’, (req,res) =>{
    //respondo con un status y devuelvo el array
    res.status(200).json(users)
})
//endpoint para traer usuarios por id
router.get(‘/getUsers/:id’, (req,res) =>{
  //desestructuramos el id
  const {id} = req.params
  //hacemos un find para que nos devuelva el primer resultado que queremos
  const findUser = users.find(user => user.id === id )
  //igualamos nuestro nuevo resultado a nuestro array users
  users = findUser
  //respondo con un status y devuelvo el array
  res.status(200).json(users)
})
//endepoint para crear usuarios ( le pasamos 2 middlewares, uno para la letra mayuscula y otro para validar que los campos no lleguen vacios)
router.post(‘/addUsers’,validate,mayusc, (req,res) =>{
  //desestructuramos los datos para hacer uso de ellos
  const {name,apellido,edad} = req.body
  //creo un usuario y le agrego los datos que llegan
  let newUser = {
    id: uuidv4(),
    name,
    apellido,
    edad
  }
  //agrego los usuarios a mi array de users
  users.push(newUser)
  //respondo con un status y devuelvo el array
  res.status(200).json(users)
})
//endpoint para modificar algun dato
router.put(‘/modificar/:id’, (req,res) =>{
  //desestructuramos los datos para hacer uso de ellos
  const {name,password,email} = req.body
  //desestructuramos el id de req.params
  const {id} = req.params
  //hacemos un map para buscar por id y asi poder modificar los datos
  let arrayNuevo = users.map(user => {
    if(user.id === id ) {
      user.name = name
      user.password = password
      user.email = email
    }
    return user
  })
  //igualamos nuestro nuevo array con toda sus propiedades ( al poner ... adelante )
  users = [...arrayNuevo]
  //respondo con un status y devuelvo el array
  res.status(200).json(users)
})
module.exports = router