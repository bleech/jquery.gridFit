# jQuery gridFit

The gridFit plugin enables you to let any block fit exactly into a custom grid that you can define at initialisation.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/bleech/jquery.gridFit/master/dist/jquery.gridFit.min.js
[max]: https://raw.github.com/bleech/jquery.gridFit/master/dist/jquery.gridFit.js

### Markup
```html
<div id="any-id"></div>
```

### Initialization
```javascript
$('#any-if').gridFit( gridWidth, gridHeight );
```

## Roadmap
- adding event for resize of elements without window resizing
- adding element positioning according to the grid

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## License
Copyright (c) 2012 bleech  
Licensed under the MIT, GPL licenses.