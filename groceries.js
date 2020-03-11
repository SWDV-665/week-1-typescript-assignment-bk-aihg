var groceries = /** @class */ (function () {
    function groceries(name, imagePath, quantity) {
        this.name = name;
        this.imagePath = imagePath;
        this.quantity = quantity;
    }
    return groceries;
}());
var groceryList = [{
        name: "Milk",
        imagePath: "test",
        quantity: 2
    },
    {
        name: "Banana",
        imagePath: "test",
        quantity: 5
    }
];
function getGroceryList() {
    groceryList.forEach(function (element) {
        // Later change the constructor in groceries class to handle
        // addition of new attributes dynamically, instead of adding the variables
        // individually to the below new function.
        var el = document.getElementById("groc-list-content");
        var groceryItem = new groceries(element.name, element.imagePath, element.quantity);
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(groceryItem.name + ": " + groceryItem.quantity);
        newDiv.appendChild(newContent);
        el.appendChild(newDiv);
    });
}
getGroceryList();
