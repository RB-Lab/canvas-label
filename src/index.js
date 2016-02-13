
/**
 * @function label - draws text label on canvas (actually it draws only rectangl around it to detect
 *           events, text itself is kinda style property, because Path2D dont support text)
 * @param {Object} style - css-like style object
 * @param {String} [style.content = ''] - label's text
 * @param {Number} [style.top = 0] - top coordinate
 * @param {Number} [style.left = 0] - left coordinate
 * @param {Number} [style.fontSize = 16] - font size
 * @param {String} [style.fontFamily = 'sans-serif'] - font family
 * @returns {Path2D} - rectangle around lable's text
 */
 /* global Path2D */
import getHeight from 'text-height';
import getWidth from 'text-width';

export default function label({
	content = '',
	fontSize = 16,
	fontFamily = 'sans-serif',
	top = 0,
	left = 0
}){
	const {height, ascent} = getHeight(content, {size: fontSize, family: fontFamily});
	const width = getWidth(content, {size: fontSize, family: fontFamily});
	const path = new Path2D();
	path.rect(left, top - ascent, width, height);
	return path;
}
