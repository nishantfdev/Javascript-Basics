let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

// Accessing Specific Value:
console.log(shoppingList[0]);
console.log(shoppingList[4][2])


// Implementing push Method:

shoppingList.push(["Cucumber", "Carrot", "Spinach"]);
console.log(shoppingList);

// Implementing pop Method:
shoppingList.pop();
console.log(shoppingList);

// Implementing push Method:

shoppingList.push(["Cucumber", "Carrot", "Spinach"]);
console.log(shoppingList);

// Implementing splice Method:
shoppingList[4].splice(1,2, "Cucumbers", "Carrots");
console.log(shoppingList);


//remove and return the first element
shoppingList.shift()
console.log(shoppingList)

//add element to the beginning of array
shoppingList.unshift("Milk")
console.log(shoppingList)

//merge two array and return new array
let newShoppingList = shoppingList.concat(["Fruits","Vegetable"])
console.log(newShoppingList)
console.log(shoppingList)