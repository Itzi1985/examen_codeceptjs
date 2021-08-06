const { I } = inject();
// Add in your custom step files

Given('Entre a la primer pagina', () => {
    I.amOnPage('/');
});

Then('Entro al frame', () => {
    I.amOnPage('https://originacion.bbva.mx/mbbnp_mult_web2/mbbn_mult_web_autodigitalweb_01/proAutoDigital?execution=e6s1')
    I.wait(3);
});

When('Estoy en el frame', () => {
    I.waitForElement("label#seminuevoAutoRad");
});

Then('Doy click a seminuevos', () => {
    I.click("label#seminuevoAutoRad");
    I.wait(3);
});

Then('Despliego lista de años y selecciono 2018', () => {
    I.click("div#divanio  button[role='button']");
    I.wait(3);
    I.click("div#divanio ul[role='listbox'] > li:nth-of-type(3)");
    I.wait(3);
});

Then('Borro el campo de costo y le escribo 300,000', () => {
    I.clearField("input#sCosto");
    I.wait(3);
    I.fillField("input#sCosto" , "300,000");
    I.wait(3);
});

Then('Borro campo de enganche y escribo 100,000', () => {
    I.clearField("input#sEnganche");
    I.wait(3);
    I.fillField("input#sEnganche" , "100,000");
    I.wait(3);
});

Then('Despliego lista de marcas y selecciono volkswagen', () => {
    I.click("div#divmarca  button[role='button']");
    I.wait(3);
    I.click("ul[role='listbox'] > li:nth-of-type(19)");
    I.wait(3);
});

Then('Despliego modelos de auto y selecciono GTI', () => {
    I.click("div#divmodelo  button[role='button']");
    I.wait(3);
    I.click("div#divmodelo ul[role='listbox'] > li:nth-of-type(39)");
    I.wait(3);
});

Then('Doy click a cotizar', () => {
    I.click("button#enviar");
});

When('Estoy en pagina de resultados', () => {
    I.waitForElement(".owl-next" , 30000);
    I.wait(5);
});

Then('Tomo captura a primeros resultados', () => {
    I.saveScreenshot('resultado-cotizacion-1.png');
    I.wait(3);
});

Then('Deslizo a los siguientes resultados', () => {
    I.click(".owl-next");
    I.wait(3);
});

Then('Tomo captura de segundos resultados', () => {
    I.saveScreenshot('resultado-cotizacion-2.png');
    I.wait(3);
});
