//function to generate 1 to 25 numbers in random order
function RandNumGenerator() {
    const a = [];
    let x = 0;
    let i = 0;
    while (i != 25) {
        let b = 0;
        x = Math.floor((Math.random() * 25) + 1);
        if (i == 0) {
            a[i] = x;
            i++;
        }
        else {
            for (let j = 0; j < i; j++) {
                if (a[j] == x) {
                    b = 1;
                    break;
                }
            }
            if (b != 1) {
                a[i] = x;
                i++;
            }
        }
    }
    return (a);
}
//for maping the numbers in grid
function mapping(b, i, gameBoard) {
    let g = i + 5;
    for (i; i < g; i++) {
        let temp = document.createElement("div");
        temp.id = i;
        temp.className = "Box"
        temp.textContent = b[i];
        gameBoard.appendChild(temp);
    }
}
b = RandNumGenerator();
let gameBoard = document.getElementById("gameBoard1");
mapping(b, 0, gameBoard);
gameBoard = document.getElementById("gameBoard2");
mapping(b, 5, gameBoard);
gameBoard = document.getElementById("gameBoard3");
mapping(b, 10, gameBoard);
gameBoard = document.getElementById("gameBoard4");
mapping(b, 15, gameBoard);
gameBoard = document.getElementById("gameBoard5");
mapping(b, 20, gameBoard);



//Detecting the click and replacing with zero
const clicked=function() {
}

// document.getElementById(0).onclick=clicked;
// document.getElementById(1).onclick=clicked;
// document.getElementById(2).onclick=clicked;
// document.getElementById(3).onclick=clicked;
// document.getElementById(4).onclick=clicked;
// document.getElementById(5).onclick=clicked;
// document.getElementById(6).onclick=clicked;
// document.getElementById(7).onclick=clicked;
// document.getElementById(8).onclick=clicked;
// document.getElementById(9).onclick=clicked;
// document.getElementById(10).onclick=clicked;
// document.getElementById(11).onclick=clicked;
// document.getElementById(12).onclick=clicked;
// document.getElementById(13).onclick=clicked;
// document.getElementById(14).onclick=clicked;
// document.getElementById(15).onclick=clicked;
// document.getElementById(16).onclick=clicked;
// document.getElementById(17).onclick=clicked;
// document.getElementById(18).onclick=clicked;
// document.getElementById(19).onclick=clicked;
// document.getElementById(20).onclick=clicked;
// document.getElementById(21).onclick=clicked;
// document.getElementById(22).onclick=clicked;
// document.getElementById(23).onclick=clicked;
// document.getElementById(24).onclick=clicked;
let array=[];
for(let i=0;i<25;i++){
    array[i]=document.getElementById(i);
    array[i].onclick=function(){
        this.style.backgroundColor = "red";
    };

}
