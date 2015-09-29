
/**
 * @function label - draws text label on canvas
 * @param {CanvasRenderingContext2D} ctx - canvas 2D context
 * @param {String} text - text to be displayed in the label
 * @param {Number} x - top left corner x coordinate
 * @param {Number} y - top left corner y coordinate
 * @param {Object} [style] - css-like style object
 * @param {String} [style.color = '#000000'] - color of the thext
 * @param {Number} [style.fontSize = 16] - font size
 * @param {String} [style.fontFamily = 'sans-serif'] - font family
 * @param {String} [style.textAlign = 'left'] - text align
 */

module.exports = function label(ctx, text, x, y, style) {
	style = style || {};
	ctx.fillStyle = style.color || '#000000';
	ctx.font = (style.fontSize || 16) + 'px ' + (style.fontFamily || 'sans-serif');
	ctx.textAlign = style.textAlign || 'left';
	ctx.fillText(text, x, y);
};
