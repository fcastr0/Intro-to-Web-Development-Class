let selectedDiv = document.getElementById('select-me');
console.log(selectedDiv);



//console.log(x*y);

// let multiply = function(){
//     console.log(x*y);
// }
//let product;

function multiply(firstNumber, secondNumber) {

    let product = firstNumber * secondNumber;
    return product;
    //console.log(firstNumber*secondNumber);
}



// let multiply = ()=>{
//     console.log(x*y);
// }


let x = 2;
let y = 3;

let newProduct = multiply(x, y);
console.log(newProduct);

let movieArray = ["Indiana Jones", "Ghostbusters", "Star Wars", "Inception"];
console.log(movieArray[0])

movieArray.push("El Topo")

console.log(movieArray.length)

for (let movieIndex = 0; movieIndex < movieArray.length; movieIndex++) {
    console.log(movieArray[movieIndex])
}

movieArray.forEach(function (item, index) {
    if (item[0] === 'I') {
        movieArray[index] = "I liked " + item;
    } else {
        movieArray[index] = "I didn't like " + item;
    }

});

console.log(movieArray)
//let newArray = movieArray.slice(0,movieArray.indexOf("Star Wars")+1);

//console.log(newArray)

//Objects:
let media = {
    movies: {
        drama: [
            {
                "title": "The Conformist",
                "score": 9.5,
                "summary": "A man is forced to collaborate with Nazis.",
                "country": "Italy"
            },
            {
                "title": "Mother Joan of the Angels",
                "score": 8.5,
                "summary": "A devout monk is summoned to a convent where nuns have been possessed by the devil.",
                "country": "Poland"
            }
        ],
        comedy: [
            {
                "title": "Quest for the Holy Grail",
                "score": 10,
                "summary": "King Arthur searches for the holy grail.",
                "country": "UK"
            },
            {
                "title": "Hot Shots Part Deux",
                "score": 9.5,
                "summary": "A retired soldier has to save the president.",
                "country": "US"
            }
        ]
    },
    books: {
        fiction: [
            {
                "title": "Timequake",
                "score": 8,
                "summary": "A break in time forces everyone to relive the previous 10 years but without free will."
            },
            {
                "title": "Peppa Pig's Vacation to Italy",
                "score": 8.5,
                "summary": "Peppa Pig visits Italy with her family and repeatedly loses her Teddy Bear."
            }
        ],
        nonfiction: [
            {
                "title": "Gulag Archipeligo",
                "score": 9,
                "summary": "A first hand account of the horrors of gulags under Stalin."
            },
            {
                "title": "The Consolation of Philosophy",
                "score": 9.5,
                "summary": "A personification of Philosophy leads a condemned man (the actual author) towards contentment."
            }
        ]
    }
}

//Parsing Object
media.movies.drama.forEach(function (item, index) {

    if (item["score"] > 9) {
        console.log("I love " + item);
    } else if (item["score"] > 8) {
        console.log("I liked " + item);
    } else {
        console.log("I didn't like " + item);
    }

//Switch statement
    let nationality;

    switch (item.country) {
        case 'Italy':
            nationality = "Italian";
            break;
        case 'Poland':
            nationality = "Polish";
            break;
        case 'UK':
            nationality = "Brtish";
            break;
        case 'US':
            nationality = "American";
            break;
        default:
            nationality = "unknown";
            break;
    }

    console.log(`This movie is ${nationality}`);

});
