let array=[];
let booleanarray=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
let matched=0;
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
    let temp2=document.createElement("br");
    // gameBoard.appendChild(temp2);
    // gameBoard.appendChild(temp2);

    let g = i + 5;
    for (i; i < g; i++) {
         let temp = document.createElement("div");
        let name="col-md-2 col-sm-2 col-xs-2 col-lg-2 "
        temp.id = i;
        if (i%2==1){
            temp.className = name;
        }
        else{
            temp.className = name;
        }
        temp.innerHTML="<center>" + b[i] +" </center> "
        //temp.textContent = b[i];
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

for(let i=0;i<25;i++){
    array[i]=document.getElementById(i);
    array[i].onclick=function(){
        this.style.backgroundColor = "#ffffff";
        booleanarray[i]=0;
        matched=checkWin();
        if(matched>=5){
        $("#myModal").modal();
        }
    };
}

const checkWin = () => {
    
    let sum = 0;
    let index = 0;
    let bingoStatus=0;
    
    //check wins horizontally
    for( let i = 0; i < 5; i++ ){

        for( let j = 0; j < 5; j++){

            index = 5 * i + j;
            sum += booleanarray[index];
        }

        if( sum == 0){

            bingoStatus++;
        }

        sum = 0;
    }

//check wins vertically
for( let i = 0; i < 5; i++ ){
    
    for( let j = 0; j < 5; j++){
        
        index = i + 5 * j;
        sum += booleanarray[ index ];
    }
    
    if( sum == 0 ){
        bingoStatus++;
    }
    
    sum = 0;
}

//check wins principal diagonal
for( let i = 0; i < 5; i++){
    
        index = i * 6;
        sum += booleanarray[index];
    }
    
    if( sum == 0 ){
        bingoStatus++;
    }
    
    sum = 0;
    //check wins in off diagonal
    for( let i = 1; i <= 5; i++ ){
        
        index = i * 4;
        sum += booleanarray[index];
    }
    
    if( sum == 0 ){
        bingoStatus++;
    }
    
    sum = 0;
    
    return bingoStatus;
}
