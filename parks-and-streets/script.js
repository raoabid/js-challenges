class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {

    constructor(name, buildYear, numberOfTrees, area) {
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.area = area;
    }

    getTreeDensity() {
        return Math.round(this.numberOfTrees / this.area);
    }

    getAge() {
        return (new Date().getFullYear() - this.buildYear);
    }

}

class Street extends Element {

    constructor(name, buildYear, length) {
        super(name, buildYear);
        this.length = length;
    }



    sizeClasses(){

        let sizeClasses = new Map();
        sizeClasses.set( )

    }

    getSizeClassification() {
        let sizeClassification;


        return sizeClassification;

    }

    // getAge() {
    //     return (new Date().getFullYear() - this.buildYear);
    // }

}




/* Data Input */

let parks = new Map();

parks.set('liberty', new Park('Liberty', 1900, 1515, 100));
parks.set('greenwood', new Park('Greenwood', 1960, 665, 90));
parks.set('national', new Park('National', 1800, 2500, 200));

console.log(parks);

let streets = new Map();

streets.set( 'micro' , new Street('Micro', 1950, 0.5 ));
streets.set( 'sweet' , new Street('Sweet Avenue', 1940, 1.5 ));
streets.set( 'grassy' , new Street('Grassy Street', 1990, 2.5 ));
streets.set( 'grand' , new Street('Grand Ave', 1960, 6 ));
streets.set( 'iron' , new Street('Iron Street', 1920, 3 ));

console.log(streets);

/* Data Display */

// Req 1.
console.warn('1. Tree density of each park in the town (forumla: number of trees/park area)');

parks.forEach((value, key) => {
    console.log(`${key} park has a tree density of: ${value.getTreeDensity()}`);
});


// Req 2
console.warn("2. Average age of town's park (forumla: sum of all ages/number of parks)");

let sumOfAllParksAges = 0;
parks.forEach((value) => {
    sumOfAllParksAges = sumOfAllParksAges + value.getAge();
});
console.log(`${Math.round(sumOfAllParksAges / parks.size)} average years age with total sum of ages ${sumOfAllParksAges} years of ${parks.size} parks.`);


// Req 3
console.warn("3. The name of the park that has more than 1000 trees");

for ( let [key, park] of parks.entries()) {
    if( park.numberOfTrees > 1000 ) {
        console.log(`${park.name} has more than 1000 trees.`);
    }
}


// Req 4
console.warn("4. Total and average length of the town's streets");

let streetLengths = Array.from(streets).map(el => el[1].length);
let streetsTotalLength = streetLengths.reduce( (prev, current, index ) =>  prev + current , 0   );
console.log(`total streets length is ${streetsTotalLength} with an average of ${Math.round(streetsTotalLength / streets.size)}`);


// Req 5
console.warn("5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal");

// for ([key, street] of streets.entries()){
//
//     console.log(`${street.name} has a length of ${street.length} and is classified as ${street.getSizeClassification()}`)
//
// }
