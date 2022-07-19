let selectedDiv = document.getElementById('select-me');
console.log(selectedDiv);



//console.log(x*y);

// let multiply = function(){
//     console.log(x*y);
// }
//let product;

function multiply(firstNumber, secondNumber){

    let product = firstNumber*secondNumber;
    return product;
    //console.log(firstNumber*secondNumber);
}



// let multiply = ()=>{
//     console.log(x*y);
// }


let x = 2;
let y = 3;

let newProduct = multiply(x,y);
console.log(newProduct);

let movieArray = ["Indiana Jones", "Ghostbusters", "Star Wars","Inception"];
console.log(movieArray[0])

movieArray.push("El Topo")

console.log(movieArray.length)

for(let movieIndex = 0; movieIndex < movieArray.length; movieIndex++){
    console.log(movieArray[movieIndex])
}

movieArray.forEach(function(item, index){
    if(item[0]==='I'){
        movieArray[index] = "I liked "+item;
    }else{
        movieArray[index] = "I didn't like "+item;
    }
    
});

console.log(movieArray)
//let newArray = movieArray.slice(0,movieArray.indexOf("Star Wars")+1);

//console.log(newArray)
