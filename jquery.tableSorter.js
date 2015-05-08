/*
* Sortable tables for bootstrap 3.
* requires glyphicons and JQuery
*/

(function($) {

    var sortFunctions = {
        string: function(a, b) { return a < b; },
        date: function(a, b) { return Date.parse(a) < Date.parse(b); },
        number: function(a, b) { return parseFloat(a) < parseFloat(b); }
    };

    var tableSort = function(table, index, order, sortFunction) {
        sortFunction = sortFunction || function(a, b) { return a < b; };
        var elements = [];
        var tbody = table.find('tbody') || table;
        var tr;
        if(table.children("thead").length > 0) {
            tr = $(table).find('tbody > tr');
        // we need to handle the case when people use badly formatted html
        } else {
            tr = $(table).find('tr:not(:first)');
        }

        tr.each(function() {
            elements.push(this);
        });

        tr.remove();

        elements.sort(function(a, b) {
            a = $(a).children('td:eq(' + index + ')');
            b = $(b).children('td:eq(' + index + ')');
            if(order !== 'asc') {
                return sortFunction(a.text(), b.text());
            } else {
                return !sortFunction(a.text(), b.text());
            }
        });

        for(var i = 0; i < elements.length; ++i) {
            $(tbody).append(elements[i]);
        }
    };

    $.fn.tableSortable = function() {
        return this.each(function() {
            var table = $(this);
            var th = table.find('th');
            if(th.length === 0) {
                th = $(this).find('tr:eq(0)').children();
            }

            th.not('*[data-table-sortable-disable]').on('click', function() {
                var order = $(this).attr('data-table-sortable-order');
                var newOrder = order && order === 'asc' ? 'desc' : 'asc';
                th.find('.table-sortable-icon')
                    .removeClass('glyphicon-sort-by-attributes')
                    .removeClass('glyphicon-sort-by-attributes-alt')
                    .addClass('glyphicon-sort');

                $(this).children('.glyphicon').removeClass('glyphicon-sort');
                if(newOrder === 'asc') {
                    $(this).children('.glyphicon').addClass('glyphicon-sort-by-attributes');
                } else {
                    $(this).children('.glyphicon').addClass('glyphicon-sort-by-attributes-alt');
                }

                var sortType = $(this).attr('data-table-sortable-type');

                tableSort($(this).parent().parent().parent(), $(this).index(), newOrder, sortFunctions[sortType]);

                $(this).attr('data-table-sortable-order', newOrder);
            }).append('&nbsp;<span class="glyphicon glyphicon-sort table-sortable-icon"></span>');

        });
    };

    $(function() {
        $('.table-sortable').tableSortable();
    });
})($);
