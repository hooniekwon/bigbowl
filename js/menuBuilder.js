/*Menu Builder Function*/
var getJSON = function(menu) {
    /* Display the Menu Categories*/
    menu.categories.forEach(function(categories) {
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
        elem.addEventListener("click", function() {
            /* on click, first clear whatever is there, then display new menu*/
            document.getElementById("subMenu0").innerHTML = "";
            document.getElementById("subMenu1").innerHTML = "";
            document.getElementById("subMenu2").innerHTML = "";
            displaySubMenu(categories);
        });
    });
};

var displaySubMenu = function(category) {
    var partsLength = category.info[0].parts.length;
    /*Change size of subMenus depending on how many there are*/

    for(var i = 0; i < partsLength; i++)
    {
        document.getElementById("subMenu" + i).innerHTML = "<h2>Choose One</h2>";
        if(partsLength == 3)
        {
            document.getElementById("subMenu" + i).className = "col-md-3";
        }
        if(partsLength == 2)
		{
			 document.getElementById("subMenu" + i).className = "col-md-4";
		}
        if(partsLength == 1)
        {
            document.getElementById("subMenu" + i).className = "col-md-4 col-md-offset-2";
        }
    }

    for (var i = 0; i < partsLength; i++) {
        var choices = category.info[0].parts[i].choices;
        choices.forEach(function(obj) {
            /*Create an element and give it the name*/
            var elem = document.createElement("p");
            var price = "$" + obj.price.substring(0,obj.price.length - 2) + "." + obj.price.substring(obj.price.length - 2);
            var textNode = document.createTextNode(obj.name + " " + price);
            elem.appendChild(textNode);
            /*Put it in the new subMenu*/
            document.getElementById("subMenu" + i).appendChild(elem);
            /*Add classes for style*/
            elem.className += "menuCategories";
        });
    }
};

getJSON(menu);