const myObj = {
property1 : 'first property',
property2 : 'second property',
nestedObj : {
    property1 : 'first nested property',
    property2 : 'second nested property',
    
    }

}

const myArray = [40,50,5]

const NestedObjectarray = [myObj.nestedObj];

console.log(myObj.property1,myObj.property2);
console.log(myObj.nestedObj.property2);

console.log(myArray[2]);
console.log(NestedObjectarray[0].property1);