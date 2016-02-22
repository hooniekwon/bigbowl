/*Menu Builder Function*/
var getJSON = function(data) {

    var menuHTML = "";
    for (i = 0; i < data.categories.length; i++) {
        var name = data.categories[i].name;
        menuHTML += '\n' + '<button class="menu-button btn btn-primary" menu-panelid="' + i + '">' + name + '</button>';
    }

    $('.menu-buttons').html(menuHTML);


    //FUNCTION: builds a menu from the JSON.  For each category, creates a column for each choice available.
    $(function() {
        $('.menu-button').on('click', function(e) {
            e.preventDefault();
            var menuID = $(this).attr('menu-panelid');
            var ID = parseInt(menuID);
            //number of choices, each choices gets a column
            var numChoices = parseInt(data.categories[ID].info[0].parts.length);

            //12 units, categories takes up 3 so there are 9 left
            var total = 9;
            //if the
            if (numChoices == 2) {
                var menuHTML = '<div class = "col-lg-1 menuMargin"></div>';
                $('.secondary-menu-buttons').html(menuHTML);
                total = 8;
            }

            menuHTML = "";

            for (i = 0; i < numChoices; i++) {
                var name = data.categories[ID].info[0].parts[i];
                menuHTML += '<div class = "col-lg-' + (total / numChoices) + '">';
                menuHTML += '<h2>' + data.categories[ID].info[0].parts[i].name + '</h2>';
                menuHTML += '<div class="btn-group-vertical secondary-menu-buttons menuMargin">';
                menuHTML += '<div class="btn-group-vertical secondary-menu-buttons">';

                for (j = 0; j < data.categories[ID].info[0].parts[i].choices.length; j++) {
                    name = data.categories[ID].info[0].parts[i].choices[j].name;
                    var price = data.categories[ID].info[0].parts[i].choices[j].price;
                    if(price.localeCompare("0"))
                    {
                        var dollars = price.substring(0,price.length - 2);
                        var cents = price.substring(price.length - 2);
                        price = "$" + dollars + "." + cents;                       
                    }
                    else
                    {
                        price = "";
                    }

                    menuHTML += '<button class="menu-button btn btn-primary" menu-panelid="' + j + '">' + name + "\t" + price + '</button>';
                }

                menuHTML += '</div></div></div>';
            }
            $('.secondary-menu-buttons').html(menuHTML);

        });
    });
};
getJSON(menu);