# Canvas Label
### Draw text label on canvas

Use it with Browserify or Webpack.

#### Installation

```bash
	$ npm install --save canvas-label
```

#### Usage

```javascript

	var label = require('canvas-label');

	var myLabelStyle = {
		color: '#f4f4f4',
		fontSize: 12,
		fontFamily: 'Roboto', // don't forget to include it
		textAlign: 'center'
	};

	var ctx = document.getElementById('canvas').getContext('2D');

	label(ctx, 'foo bar', 20, 20, myLabelStyle); // and we've got a rounded rectangle on canvas

```
