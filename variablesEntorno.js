require('dotenv').config()
console.log(`Mi nombre es ${process.env.NAME} ${process.env.SURNAME}`) //acceder a las variables de entorno
console.log(`y mi link para github es: ${process.env.GITHUB_URL}`)

