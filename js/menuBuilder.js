/*Menu Builder Function*/
var getJSON = function(data) {

    console.log("json loaded");
    var menuHTML = "";
    for (i = 0; i < data.categories.length; i++) {
        var name = data.categories[i].name;
        menuHTML += '\n' + '<button class="menu-button btn btn-primary" menu-panelid="' + i + '">' + name + '</button>';
    }

    $('.menu-buttons').html(menuHTML);

    $(function() {
        $('.menu-button').on('click', function(e) {
            e.preventDefault();
            var menuID = $(this).attr('menu-panelid');
            var ID = parseInt(menuID);
            var numChoices = parseInt(data.categories[ID].info[0].parts.length);

            var total = 9;

            if (numChoices == 2) {
                var menuHTML = '<div class = "col-lg-1"></div>';
                $('.secondary-menu-buttons').html(menuHTML);
                total = 8;
            }

            menuHTML = "";

            for (i = 0; i < numChoices; i++) {
                var name = data.categories[ID].info[0].parts[i];
                menuHTML += '<div class = "col-lg-' + (total / numChoices) + '">';
                menuHTML += '<div>' + data.categories[ID].info[0].parts[i].name + '</div>';
                menuHTML += '<div class="btn-group-vertical secondary-menu-buttons">';

                for (j = 0; j < data.categories[ID].info[0].parts[i].choices.length; j++) {
                    name = data.categories[ID].info[0].parts[i].choices[j].name;
                    menuHTML += '<button class="menu-button btn btn-primary" menu-panelid="' + j + '">' + name + '</button>';
                }

                menuHTML += '</div></div>';
            }
            $('.secondary-menu-buttons').html(menuHTML);

        });
    });
};
getJSON(menu);