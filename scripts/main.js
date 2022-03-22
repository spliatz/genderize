'use strict'
import {alphabet, USER} from "./view.js";
import {DATA} from "./view.js";
import {translate} from "./view.js";

function getURL(api,name)  {
    return `${api}?name=${translate(name)}`
}

const response = fetch(getURL(DATA.API,USER.NAME));
const json = response.then(response => response.json());

json.then(
    result => {
    alert(`${USER.NAME} - ${result.gender === 'male' ? "мужское имя" : "женское имя"}`);
})
