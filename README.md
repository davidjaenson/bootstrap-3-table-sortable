# bootstrap3-table-sorter
A very simple table sorting plugin for bootstrap 3 (requires glyphicons and JQuery)

[Example](http://davidjaenson.github.io/table-sortable/)

To use simply include the script and add the table-sortable class to the tables you want to be sortable.

By default the sorting is done in lexicographic order for all columns. To change the sorting type use the data-table-sortable-disable attribute in that column's header cell (the th-tag).

For example:
```html
<table class="table-sortable">
    <thead>
        <tr>
            <!-- We set the id's sorting type to "number" -->
            <th data-table-sortable-type="number">#id</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John Doe</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jane Doe</td>
        </tr>
    </tbody>
</table>
```
The valid sorting types are: string, number and date.


If you wish to disable the sorting of certain columns add the data-table-sortable-disable attribute to that column's header cell (the th-tag).

For example:
```html
<table class="table-sortable">
    <thead>
        <tr>
            <!-- We disable sorting by id-->
            <th data-table-sortable-disable>#id</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John Doe</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jane Doe</td>
        </tr>
    </tbody>
</table>
```


If you wish to set a table as sortable via Javascript, simply do the following:
```js
$("table i want to make sortable").tableSortable();
```
