'use strict'

function removeKeys1(obj, arr){
    for (let element of (Object.keys(obj))){
        for (let arrElement of arr){
            if (element === arrElement){
                delete obj[element];
            }
        }
    }
    return obj;
}


function removeKeys2(obj, arr) {
    let newObj = {};
    for (let key of Object.keys(obj)) {
        for (let element of arr) {
            if (key === element) {
                delete obj[key];
            }
        }
    }
    let keys = Object.keys(obj);
    for (let element of keys){
        newObj[element] = obj[element];
    }
    return newObj;
}

function absDiff(a) {
    return function calc(b) {
        return Math.abs(a-b);
    }
}