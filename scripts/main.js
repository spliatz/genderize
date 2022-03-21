'use strict'
import {USER} from "./view.js";
import {DATA} from "./view.js";

function getURL(api,name)  {
    return `${api}?name=${name}`
}

const response = fetch(getURL(DATA.API,USER.NAME));
const json = response.then(response => response.json());

json.then(
    result => {
    alert(`${result.name} - ${result.gender}`);
    for (const resultKey in result) {
        console.log(resultKey + ' ' + result[resultKey])
    }git
})