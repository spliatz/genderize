const alphabet: {[key: string]: string} = {
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
    A:'A', B:'B', C:'C', D:'D', E:'E', F:'F',G:'G',H:'H',I:'I',J:'J',K:'K',L:'L',
    M:'M', N:'N',O:'O',P:'P',Q:'Q',R:'R',S:'S',T:'T',U:'U',V:'V',W:'W',X:'X',Y:'Y',Z:'Z',
    a:'a', b:'b', c:'c', d:'d', e:'e', f:'f',g:'g',h:'h',i:'i',j:'j',k:'k',l:'l',
    m:'m', n:'n',o:'o',p:'p',q:'q',r:'r',s:'s',t:'t',u:'u',v:'v',w:'w',x:'x',y:'y',z:'z',
}

export const translate = (string: string) => {
    const array: Array<string> = string.split('');
    array.forEach((item,index) => {
        array[index] = alphabet[item];
    })
    return (array.join(''));
}
