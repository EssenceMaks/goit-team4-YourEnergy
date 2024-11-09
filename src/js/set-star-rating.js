import {starMarkup} from "./markup/starMarkup.js";

export const setStartRating = (element,rating) =>{
    let stars = ''
    element.innerHTML =''
    let intNumber = Math.floor(rating);
    let decimals = parseFloat((rating - intNumber).toFixed(1));

    for (let i = 0; i < intNumber; i++){
        stars += starMarkup(100);
    }
    if (decimals > 0){
        alert(decimals * 100)
        stars += starMarkup(40)
    }
    console.log(stars);
    element.innerHTML = stars;

}