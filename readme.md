# Canvas Label
### Geometry type for [canvas-tree](https://www.npmjs.com/package/canvas-tree)

#### Installation

```bash
	$ npm install --save canvas-label
```

#### Usage

```javascript

	import label from 'canvas-label';
	import createCanvas from 'canvas-tree';

	const canvas = createCanvas(document.getElementById('canvas'));

	canvas.update({
		children: [
			{
				geometry: label,
				children: [],
				style: {
					content: 'Foo Bar',
					color: '#f4f4f4',
					fontSize: 12,
					fontFamily: 'Roboto', // don't forget to include it
					textAlign: 'center'
				}
			}
		]
	})
```
