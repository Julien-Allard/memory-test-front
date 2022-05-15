# Memory test front

## Containers

### Dashboard.js

- contains all required components

## components

### Selector.js

Selector menu containing all countries.

Accepted props :

- data : passes all needed datas to iterate on (one data element = one line in the menu)
- title : title of the menu
- changeData : changing the state the request route is based on
- defaultValue : the selected value

### Metric.js

One simple box containing a title and a value

Accepted props :

- title : title of the metric
- data : the displayed data
- currency (optionnal) : passes a currency if needed
