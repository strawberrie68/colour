window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const resetButton = document.querySelector('#reset');

    let board = ['', '', '', '', '', '', '', '', ''];
    let isGameActive = true;



let wrongRandomColor = Math.floor(Math.random()*16777215).toString(16);
let hexColour = "123456789abcdefghijklmnopqrstuvwxyz".split('')

let rightRandomColor = 
 hexColour.indexOf(wrongRandomColor.charAt(4))
if(indexColour ===  34){
    indexColour-=1
    rightRandomColor.replace(wrongRandomColor[4],hexColour[indexColour] )
}
else{
    indexColour += 1
    rightRandomColor.replace(wrongRandomColor[4],hexColour[indexColour] )
}

console.log(wrongRandomColor)
console.log(rightRandomColor)


//need to idenify the last charater

//and match to the array then add one
//array = ["123456789abcdefghijklmnopqrstuvwxyz"]
//if at the end of the array turn -1
//replace with new letter or number
















})