interface groceryItem{
  name: string;
  imagePath: string;
  quantity: number
}

class groceries{
  name: string;
  imagePath: string;
  quantity: number;

  constructor(name: string, imagePath: string, quantity: number) {
    this.name = name;
    this.imagePath = imagePath;
    this.quantity = quantity;
  }

}

let groceryList = [{
        name: "Milk",
        imagePath: "test",
        quantity: 2
      },
      {
        name: "Banana",
        imagePath: "test",
        quantity: 5
      }
]

function getGroceryList(){
  groceryList.forEach(element => {

    // Later change the constructor in groceries class to handle
    // addition of new attributes dynamically, instead of adding the variables
    // individually to the below new function.
    const el: HTMLElement = document.getElementById("groc-list-content");

    const groceryItem: groceryItem = new groceries(element.name, element.imagePath, element.quantity);
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(groceryItem.name + ": " + groceryItem.quantity);
    newDiv.appendChild(newContent);
    el.appendChild(newDiv);
  });
}

getGroceryList();
