const puppeteer = require('puppeteer');

(async () => {
    console.log('Lanzamos un navegador!');
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage(); //abriendo nueva pagina en chromium

    await page.goto('https://es.wikipedia.org/wiki/Node.js');//dar url a la pagina que queremos hacer scrapping

    var title = await page.evaluate(() => {
        const h1 = document.querySelector('h1'); //seleccionar html de la pagina
        console.log(h1.innerText);
        return h1.innerHTML;
    })

    console.log(title); //mostrar en consola de VS Code el html de la pagina
    console.log('Cerramos navegador...');
    // browser.close();
    console.log('Navegador cerrado');
})();