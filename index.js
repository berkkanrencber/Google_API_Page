const { json } = require("body-parser");
const { application } = require("express");
const { write } = require("fs");
const requestModule = require('./requestModule.js');
require('dotenv').config();

const person = {
    isim: 'Hakan',
    soyisim: 'Uz'
}

async function writeData(){
    const data = await requestModule.sendRequest(person,'https://berkkanrencber.github.io/Google_API_Page/');
    console.log('Data in index.js: ' + JSON.stringify(data));
}

writeData();
