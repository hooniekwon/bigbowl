/*Menu Builder Function*/
var getJSON = function(menu) {

    console.log("json loaded");
    menu.categories.forEach(function(categories){
       var name = categories.name;
       /*Create an element and give it the name*/
       var elem = document.createElement("p");
       var textNode = document.createTextNode(name);
       elem.appendChild(textNode);
       /*Put that element where it belongs*/
       document.getElementById("menu").appendChild(elem);
       /*Add classes for style*/
       elem.className = "col-md-3 ";
       elem.className += "menuCategories";
       /*Add  click event to the element*/

    });
};
getJSON(menu);