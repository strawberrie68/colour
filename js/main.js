window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const resetButton = document.querySelector('#reset');

    let board = ['', '', '', '', '', '', '', '', ''];
    let isGameActive = true;



let wrongRandomColor = Math.floor(Math.random()*16777215).toString(16);
let hexColour = "123456789abcdefghijklmnopqrstuvwxyz".split('')

//gets the rightcolour that is one letter/number off right hex code
let rightColor = wrongRandomColor.replace(wrongRandomColor[0],function myFunction(z) {
    if(hexColour.indexOf(String(z)) === 34){
        return hexColour[0]
    }else{
        return hexColour[hexColour.indexOf(String(z))+1]
    }
})


console.log(wrongRandomColor)
console.log(rightColor)

})




// console.log(hexColour[Math.floor(Math.random()*32)])
//need to idenify the last charater

//and match to the array then add one
//array = ["123456789abcdefghijklmnopqrstuvwxyz"]
//if at the end of the array turn -1
//replace with new letter or number















