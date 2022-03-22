'use strict'

import {DATA,alphabet,translate,htmlELEMENTS} from "./view.js";

function getURL(api,name)  {
    return `${api}?name=${translate(name)}`
}

function genderize(api,name) {
    const response = fetch(getURL(api, name));
    const json = response.then(response => response.json());

    json.then(
        result => {
             htmlELEMENTS.gender.innerHTML = `${name} - ${result.gender === 'male' ? "мужское имя (male)" : "женское имя (female)"}`;
        })
}

htmlELEMENTS.input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        // Do more work
        htmlELEMENTS.gender.innerHTML = '';
        genderize(DATA.API,htmlELEMENTS.input.value)
        htmlELEMENTS.input.value = '';
    }
});