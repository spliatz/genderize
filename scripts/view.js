export const USER =  {
    NAME: prompt('Name: ', ''),
}



export function translate (string) {
    const array = string.split('');
    array.forEach((item,index) => {
        array[index] = alphabet[item];
    })
    return (array.join(''));
}

export const DATA = {
     API : 'https://api.genderize.io',
     // "url" : `${this.serverUrl}?name=${USER.NAME}`,
}

export let alphabet = {
    А: 'A', Б: 'B', В: 'V', Г: 'G', Д: 'D', Е: 'E', Ё: 'Yo', Ж: 'Zh',
    З: 'Z', И: 'I', Й: 'J', К: 'K', Л: 'L', М: 'M', Н: 'N', О: 'O',
    П: 'P', Р: 'R', С: 'S', Т: 'T', У: 'U', Ф: 'F', Х: 'H', Ц: 'C',
    Ч: 'Ch', Ш: 'Sh', Щ: 'Sh', Ъ: '', Ы: 'Y', Ь: '', Э: 'E', Ю: 'Yu',
    Я: 'Ya',
    а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh',
    з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o',
    п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'ts',
    ч: 'ch', ш: 'sh', щ: 'sh', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu',
    я: 'ya',
}
