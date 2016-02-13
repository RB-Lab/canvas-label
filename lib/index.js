'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = label;

var _textHeight = require('text-height');

var _textHeight2 = _interopRequireDefault(_textHeight);

var _textWidth = require('text-width');

var _textWidth2 = _interopRequireDefault(_textWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function label(_ref) {
  var _ref$content = _ref.content;
  var content = _ref$content === undefined ? '' : _ref$content;
  var _ref$fontSize = _ref.fontSize;
  var fontSize = _ref$fontSize === undefined ? 16 : _ref$fontSize;
  var _ref$fontFamily = _ref.fontFamily;
  var fontFamily = _ref$fontFamily === undefined ? 'sans-serif' : _ref$fontFamily;
  var _ref$top = _ref.top;
  var top = _ref$top === undefined ? 0 : _ref$top;
  var _ref$left = _ref.left;
  var left = _ref$left === undefined ? 0 : _ref$left;

  var _getHeight = (0, _textHeight2.default)(content, { size: fontSize, family: fontFamily });

  var height = _getHeight.height;
  var ascent = _getHeight.ascent;

  var width = (0, _textWidth2.default)(content, { size: fontSize, family: fontFamily });
  var path = new Path2D();
  path.rect(left, top - ascent, width, height);
  return path;
}