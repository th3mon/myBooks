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
                        template = Handlebars.compile(source),
                        state = '';

                    $('#search')
                        .treeListFilter('#books', 200)
                        .on('change', function(e) {
                            if ('' === $(this).val()) {
                                state = '';
                            }

                            else {
                                state = 'typed';
                            }
                        })
                        .on('click', function() {
                            if (('typed' === state) && ('' === $(this).val())) {
                                location.reload();
                            }
                        });

                    $.getJSON('data/books.json', function(data) {
                        data.category = _.sortBy(data.category, 'name');
                        $('#books').html(template(data));
                    });
                }
            }
        };

    $(init);
}(window, document, jQuery));
    