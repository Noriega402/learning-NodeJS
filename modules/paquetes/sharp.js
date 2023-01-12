const sharp = require('sharp');

sharp('./img/pythonLogo.png')
	.resize(80)// redimensionar en 80*80
	// .resize(150,90) //redimensionar en 150 * 90)
	.grayscale() // agregar imagen a grises
	.rotate(45) // rotar a 45 grados
	.toFile('redimensionar.png')