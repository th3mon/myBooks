(function (g, d, $, u){
    var
        init = function() {
            var
                title = $('title').text() + ' :: Przemysław SID Szelenberger';

            $('title').text(title);

            navigation.sidebar.init();
        },

        navigation = {
            sidebar: {
                init: function(){
                    var
                        source = $('#books-template').html(),
                        template = Handlebars.compile(source);

                    $.getJSON('data/books.json', function(data) {
                        data.category = _.sortBy(data.category, 'name');
                        $('#books').html(template(data));
                    });
                }
            }
        };

    $(init);
}(window, document, jQuery));
    