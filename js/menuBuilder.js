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
       document.getElementById("menuMain").appendChild(elem);
       /*Add classes for style*/
       elem.className += "menuCategories";
       /*Add  click event to the element*/
       elem.addEventListener("click", function(){
        /* on click, first clear whatever is there, then display new menu*/
        document.getElementById("subMenus").innerHTML= "";
        displaySubMenu(categories);
        });
    });
};

var displaySubMenu = function(category){
    var choices = category.info[0].parts[0].choices;
    console.log(choices);
    choices.forEach(function(obj){
        /*Create an element and give it the name*/
        var elem = document.createElement("p");
        var textNode = document.createTextNode(obj.name+" "+obj.price);
        elem.appendChild(textNode);
        /*Put it in the new subMenu*/
        document.getElementById("subMenus").appendChild(elem);
        /*Add classes for style*/
       elem.className += "menuCategories";
    });

}
getJSON(menu);