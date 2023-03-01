/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/NightinTokyo.ttf */ "./src/assets/NightinTokyo.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/japan-garden.jpg */ "./src/assets/japan-garden.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: tokyo;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n  --font-color: #f1f5f9;\n  --header-color: #f8fafc;\n}\n\nbody,\nhtml,\n#content {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  min-height: 100vh;\n}\n\n#content {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  flex-direction: column;\n}\n\n/* header */\n\nh1 {\n  font-family: tokyo, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',\n    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 4.5rem;\n}\n\n.header {\n  background-color: black;\n  color: var(--header-color);\n  height: 200px;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  box-shadow: 2px 2px 30px;\n}\n\na {\n  text-decoration: none;\n  color: var(--font-color);\n  font-size: 1.5rem;\n  cursor: pointer;\n  position: relative;\n}\n\na:hover {\n  transform: translate(0px, -5px);\n  transition-duration: 0.3s;\n}\n\n.nav {\n  width: min(60%, 400px);\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.active::before {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 100%;\n  height: 2px;\n  top: 40px;\n  background-color: var(--font-color);\n}\n\n/* mid section */\n\n.middle {\n  min-height: 600px;\n  width: 600px;\n  background: rgba(0, 0, 0, 0.7);\n  align-self: center;\n  margin-top: 50px;\n  box-shadow: 2px 2px 20px;\n  border-radius: 10px;\n  color: var(--font-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  font-size: 1.3rem;\n  margin-bottom: 50px;\n}\n\n\n/* mid section -> home */\n\nimg {\n  height: 400px;\n}\n\n/* mid section -> menu */\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-items: center;\n  align-items: center;\n  padding: 10px;\n  gap: 20px;\n  height: fit-content;\n  padding-bottom: 50px;\n  \n}\n\n.item-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n  width: 200px;\n  margin-top: -10px;\n}\n\n.item {\n  height: 200px; \n}\n\n.item:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n  transition: 0.3s; \n}\n\n.overflow {\n  overflow: auto;\n}\n\n/* mid section -> contact */\n\n.map {\n  width: 500px;\n  height: 350px;\n}\n\n.phone,\n.address {\n  align-self: flex-start;\n  margin-left: 50px;\n}\n\n/* footer */\n\n.footer {\n  height: 80px;\n  width: 100%;\n  background-color: black;\n  background: rgba(0, 0, 0, 0.7);\n  margin-top: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.icon {\n  height: 35px;\n  width: 90px;\n}\n\n.info {\n  color: var(--font-color)\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,4CAAsC;AACxC;;AAEA;EACE,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;;;EAGE,4DAA4D;EAC5D,iBAAiB;AACnB;;AAEA;EACE,yDAAqD;EACrD,sBAAsB;EACtB,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;AACxB;;AAEA,WAAW;;AAEX;EACE;gFAC8E;EAC9E,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,0BAA0B;EAC1B,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,wBAAwB;AAC1B;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,WAAW;EACX,SAAS;EACT,mCAAmC;AACrC;;AAEA,gBAAgB;;AAEhB;EACE,iBAAiB;EACjB,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB,wBAAwB;EACxB,mBAAmB;EACnB,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;AACrB;;;AAGA,wBAAwB;;AAExB;EACE,aAAa;AACf;;AAEA,wBAAwB;;AAExB;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,oBAAoB;;AAEtB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA,2BAA2B;;AAE3B;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;;EAEE,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA,WAAW;;AAEX;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,8BAA8B;EAC9B,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: tokyo;\n  src: url(/src/assets/NightinTokyo.ttf);\n}\n\n:root {\n  --font-color: #f1f5f9;\n  --header-color: #f8fafc;\n}\n\nbody,\nhtml,\n#content {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  min-height: 100vh;\n}\n\n#content {\n  background-image: url('/src/assets/japan-garden.jpg');\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  flex-direction: column;\n}\n\n/* header */\n\nh1 {\n  font-family: tokyo, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',\n    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 4.5rem;\n}\n\n.header {\n  background-color: black;\n  color: var(--header-color);\n  height: 200px;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  box-shadow: 2px 2px 30px;\n}\n\na {\n  text-decoration: none;\n  color: var(--font-color);\n  font-size: 1.5rem;\n  cursor: pointer;\n  position: relative;\n}\n\na:hover {\n  transform: translate(0px, -5px);\n  transition-duration: 0.3s;\n}\n\n.nav {\n  width: min(60%, 400px);\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.active::before {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 100%;\n  height: 2px;\n  top: 40px;\n  background-color: var(--font-color);\n}\n\n/* mid section */\n\n.middle {\n  min-height: 600px;\n  width: 600px;\n  background: rgba(0, 0, 0, 0.7);\n  align-self: center;\n  margin-top: 50px;\n  box-shadow: 2px 2px 20px;\n  border-radius: 10px;\n  color: var(--font-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  font-size: 1.3rem;\n  margin-bottom: 50px;\n}\n\n\n/* mid section -> home */\n\nimg {\n  height: 400px;\n}\n\n/* mid section -> menu */\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-items: center;\n  align-items: center;\n  padding: 10px;\n  gap: 20px;\n  height: fit-content;\n  padding-bottom: 50px;\n  \n}\n\n.item-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n  width: 200px;\n  margin-top: -10px;\n}\n\n.item {\n  height: 200px; \n}\n\n.item:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n  transition: 0.3s; \n}\n\n.overflow {\n  overflow: auto;\n}\n\n/* mid section -> contact */\n\n.map {\n  width: 500px;\n  height: 350px;\n}\n\n.phone,\n.address {\n  align-self: flex-start;\n  margin-left: 50px;\n}\n\n/* footer */\n\n.footer {\n  height: 80px;\n  width: 100%;\n  background-color: black;\n  background: rgba(0, 0, 0, 0.7);\n  margin-top: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.icon {\n  height: 35px;\n  width: 90px;\n}\n\n.info {\n  color: var(--font-color)\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/build-page.js":
/*!***************************!*\
  !*** ./src/build-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClassToElement": () => (/* binding */ addClassToElement),
/* harmony export */   "addElementToDom": () => (/* binding */ addElementToDom),
/* harmony export */   "addTextContentToElement": () => (/* binding */ addTextContentToElement),
/* harmony export */   "default": () => (/* binding */ buildPage)
/* harmony export */ });
/* harmony import */ var _assets_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/icon.png */ "./src/assets/icon.png");


function addElementToDom(newElement, parent) {
  parent.appendChild(newElement);
}

function addTextContentToElement(text, element) {
  element.textContent = text;
}

function addClassToElement(cls, element) {
  element.classList.add(cls);
}

function buildPage() {
  const content = document.querySelector('#content');
  const header = document.createElement('div');
  const nav = document.createElement('div');
  const middle = document.createElement('div');
  const title = document.createElement('h1');
  const firstLink = document.createElement('a');
  const secondLink = document.createElement('a');
  const thirdLink = document.createElement('a');
  const footer = document.createElement('div');
  const footerInfo = document.createElement('span');
  const footerIcon = new Image();
  footerIcon.src = _assets_icon_png__WEBPACK_IMPORTED_MODULE_0__;

  addElementToDom(header, content);
  addElementToDom(middle, content);
  addElementToDom(title, header);
  addElementToDom(nav, header);
  addElementToDom(firstLink, nav);
  addElementToDom(secondLink, nav);
  addElementToDom(thirdLink, nav);
  addElementToDom(footer, content);
  addElementToDom(footerIcon, footer);
  addElementToDom(footerInfo, footer);

  addTextContentToElement('Sun Bowl', title);
  addTextContentToElement('Home', firstLink);
  addTextContentToElement('Menu', secondLink);
  addTextContentToElement('Contact', thirdLink);
  addTextContentToElement('info@sun-bowl.com', footerInfo)

  addClassToElement('header', header);
  addClassToElement('nav', nav);
  addClassToElement('middle', middle);
  addClassToElement('home', firstLink);
  addClassToElement('menu', secondLink);
  addClassToElement('contact', thirdLink);
  addClassToElement('footer', footer);
  addClassToElement('icon', footerIcon);
  addClassToElement('info', footerInfo)
}


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildContactSection)
/* harmony export */ });
/* harmony import */ var _build_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-page */ "./src/build-page.js");
/* harmony import */ var _assets_map_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/map.png */ "./src/assets/map.png");



function buildContactSection() {
  const content = document.querySelector('.middle');
  const contactButton = document.querySelector('.contact');
  const navButtons = document.querySelectorAll('a');
  const phoneNumber = document.createElement('span');
  const address = document.createElement('span');
  const map = new Image();
  map.src = _assets_map_png__WEBPACK_IMPORTED_MODULE_1__;

  navButtons.forEach((button) => button.classList.remove('active'));
  content.classList.remove('grid');

  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)('active', contactButton);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addTextContentToElement)('🏠 Raya Ubud, Ubud, Bali Indonesia', address);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addTextContentToElement)('📞 +62 361 2092288', phoneNumber);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)('map', map);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)('phone', phoneNumber);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)('address', address);

  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addElementToDom)(phoneNumber, content);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addElementToDom)(address, content);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addElementToDom)(map, content);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildHomeSection)
/* harmony export */ });
/* harmony import */ var _build_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-page */ "./src/build-page.js");
/* harmony import */ var _assets_girl_chef_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/girl-chef.png */ "./src/assets/girl-chef.png");



function buildHomeSection() {
  const navButtons = document.querySelectorAll('a');
  const content = document.querySelector('.middle');
  const homeButton = document.querySelector('.home');
  const firstSpan = document.createElement('span');
  const secondSpan = document.createElement('span');
  const thirdSpan = document.createElement('span');
  const photo = new Image();
  photo.src = _assets_girl_chef_png__WEBPACK_IMPORTED_MODULE_1__;

  navButtons.forEach((button) => button.classList.remove('active'));
  content.classList.remove('grid');

  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addElementToDom)(firstSpan, content);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addElementToDom)(secondSpan, content);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addElementToDom)(photo, content);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addElementToDom)(thirdSpan, content);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)('active', homeButton);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addTextContentToElement)(
    'The best Japanese Bowls you have ever tried',
    firstSpan
  );
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addTextContentToElement)('Made with love since 1930', secondSpan);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addTextContentToElement)('Order online or visit us!', thirdSpan);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMenuSection)
/* harmony export */ });
/* harmony import */ var _build_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-page */ "./src/build-page.js");
/* harmony import */ var _assets_GomaShoyuTuna_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/GomaShoyuTuna.png */ "./src/assets/GomaShoyuTuna.png");
/* harmony import */ var _assets_PonzuSalmon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/PonzuSalmon.png */ "./src/assets/PonzuSalmon.png");
/* harmony import */ var _assets_SalmonChirashi_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/SalmonChirashi.png */ "./src/assets/SalmonChirashi.png");
/* harmony import */ var _assets_SearedAburiOtoro_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/SearedAburiOtoro.png */ "./src/assets/SearedAburiOtoro.png");
/* harmony import */ var _assets_SichuanChiliSalmon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/SichuanChiliSalmon.png */ "./src/assets/SichuanChiliSalmon.png");
/* harmony import */ var _assets_SpicyHamachi_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/SpicyHamachi.png */ "./src/assets/SpicyHamachi.png");
/* harmony import */ var _assets_WasabiMayoTuna_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/WasabiMayoTuna.png */ "./src/assets/WasabiMayoTuna.png");
/* harmony import */ var _assets_YakiTofu_vegetarian_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/YakiTofu*vegetarian.png */ "./src/assets/YakiTofu*vegetarian.png");










function createCardElement(img, name) {
  const content = document.querySelector('.middle');
  const container = document.createElement('div');
  const itemName = document.createElement('span');
  const photo = new Image();
  photo.src = img;

  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addTextContentToElement)(name, itemName);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addElementToDom)(photo, container);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addElementToDom)(itemName, container);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addElementToDom)(container, content);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)('item', photo)
  ;(0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)('item-container', container)
}

function buildMenuSection() {
  const navButtons = document.querySelectorAll('a');
  const menuButton = document.querySelector('.menu');
  const content = document.querySelector('.middle');
  const body = document.querySelector('body')

  navButtons.forEach((button) => button.classList.remove('active'));

  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)('active', menuButton);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)('grid', content);
  (0,_build_page__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)('overflow', body)
  
  createCardElement(_assets_GomaShoyuTuna_png__WEBPACK_IMPORTED_MODULE_1__, 'Goma Shoyu Tuna');
  createCardElement(_assets_PonzuSalmon_png__WEBPACK_IMPORTED_MODULE_2__, 'Ponzu Salmon');
  createCardElement(_assets_SalmonChirashi_png__WEBPACK_IMPORTED_MODULE_3__, 'Salmon Chirashi');
  createCardElement(_assets_SearedAburiOtoro_png__WEBPACK_IMPORTED_MODULE_4__, 'Seared Aburi Otoro');
  createCardElement(_assets_SichuanChiliSalmon_png__WEBPACK_IMPORTED_MODULE_5__, 'Sichuan Chili Salmon');
  createCardElement(_assets_SpicyHamachi_png__WEBPACK_IMPORTED_MODULE_6__, 'Spicy Hamachi');
  createCardElement(_assets_WasabiMayoTuna_png__WEBPACK_IMPORTED_MODULE_7__, 'Wasabi Mayo Tuna');
  createCardElement(_assets_YakiTofu_vegetarian_png__WEBPACK_IMPORTED_MODULE_8__, 'Yaki Tofu *vegetarian');
}


/***/ }),

/***/ "./src/assets/GomaShoyuTuna.png":
/*!**************************************!*\
  !*** ./src/assets/GomaShoyuTuna.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed1d3639a763d141d230.png";

/***/ }),

/***/ "./src/assets/NightinTokyo.ttf":
/*!*************************************!*\
  !*** ./src/assets/NightinTokyo.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33df80ea0fddb0a5e8b6.ttf";

/***/ }),

/***/ "./src/assets/PonzuSalmon.png":
/*!************************************!*\
  !*** ./src/assets/PonzuSalmon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9cda10e75e0633947f2a.png";

/***/ }),

/***/ "./src/assets/SalmonChirashi.png":
/*!***************************************!*\
  !*** ./src/assets/SalmonChirashi.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c7da3cc7b52a87d79cd.png";

/***/ }),

/***/ "./src/assets/SearedAburiOtoro.png":
/*!*****************************************!*\
  !*** ./src/assets/SearedAburiOtoro.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b53cbd7faa1f515cc7d.png";

/***/ }),

/***/ "./src/assets/SichuanChiliSalmon.png":
/*!*******************************************!*\
  !*** ./src/assets/SichuanChiliSalmon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08206c53040f0312b49f.png";

/***/ }),

/***/ "./src/assets/SpicyHamachi.png":
/*!*************************************!*\
  !*** ./src/assets/SpicyHamachi.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "334ea082e0f04bc7c6cb.png";

/***/ }),

/***/ "./src/assets/WasabiMayoTuna.png":
/*!***************************************!*\
  !*** ./src/assets/WasabiMayoTuna.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57d2c313ec825a2cc2a8.png";

/***/ }),

/***/ "./src/assets/YakiTofu*vegetarian.png":
/*!********************************************!*\
  !*** ./src/assets/YakiTofu*vegetarian.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a841a93384a56e30cd48.png";

/***/ }),

/***/ "./src/assets/girl-chef.png":
/*!**********************************!*\
  !*** ./src/assets/girl-chef.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea2cc83eaf2628d29c96.png";

/***/ }),

/***/ "./src/assets/icon.png":
/*!*****************************!*\
  !*** ./src/assets/icon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f79825026cde5ab9fc3d.png";

/***/ }),

/***/ "./src/assets/japan-garden.jpg":
/*!*************************************!*\
  !*** ./src/assets/japan-garden.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b9915f6fb9df196262b.jpg";

/***/ }),

/***/ "./src/assets/map.png":
/*!****************************!*\
  !*** ./src/assets/map.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a1df50c7e24a4831a25.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _build_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-page */ "./src/build-page.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(0,_build_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();

const content = document.querySelector('.middle');
const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactButton = document.querySelector('.contact');

homeButton.addEventListener('click', () => {
  content.innerHTML = '';
  (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

menuButton.addEventListener('click', () => {
  content.innerHTML = '';
  (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

contactButton.addEventListener('click', () => {
  content.innerHTML = '';
  (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aURBQWdCO0FBQ2xCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsaURBQWdCO0FBQ2xCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsb0RBQW1CO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYnVpbGQtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvTmlnaHRpblRva3lvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2phcGFuLWdhcmRlbi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdG9reW87XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZm9udC1jb2xvcjogI2YxZjVmOTtcXG4gIC0taGVhZGVyLWNvbG9yOiAjZjhmYWZjO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwsXFxuI2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIGhlYWRlciAqL1xcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiB0b2t5bywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXFxuICAgIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDQuNXJlbTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTVweCk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbn1cXG5cXG4ubmF2IHtcXG4gIHdpZHRoOiBtaW4oNjAlLCA0MDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5hY3RpdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB0b3A6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLyogbWlkIHNlY3Rpb24gKi9cXG5cXG4ubWlkZGxlIHtcXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuXFxuLyogbWlkIHNlY3Rpb24gLT4gaG9tZSAqL1xcblxcbmltZyB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4vKiBtaWQgc2VjdGlvbiAtPiBtZW51ICovXFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogMjBweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gIFxcbn1cXG5cXG4uaXRlbS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxufVxcblxcbi5pdGVtIHtcXG4gIGhlaWdodDogMjAwcHg7IFxcbn1cXG5cXG4uaXRlbTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgdHJhbnNpdGlvbjogMC4zczsgXFxufVxcblxcbi5vdmVyZmxvdyB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyogbWlkIHNlY3Rpb24gLT4gY29udGFjdCAqL1xcblxcbi5tYXAge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG59XFxuXFxuLnBob25lLFxcbi5hZGRyZXNzIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuXFxuLmZvb3RlciB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogOTBweDtcXG59XFxuXFxuLmluZm8ge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0Q0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSw0REFBNEQ7RUFDNUQsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseURBQXFEO0VBQ3JELHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQSxXQUFXOztBQUVYO0VBQ0U7Z0ZBQzhFO0VBQzlFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztFQUNULG1DQUFtQztBQUNyQzs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7O0FBR0Esd0JBQXdCOztBQUV4QjtFQUNFLGFBQWE7QUFDZjs7QUFFQSx3QkFBd0I7O0FBRXhCO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG9CQUFvQjs7QUFFdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsMkJBQTJCOztBQUUzQjtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0U7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB0b2t5bztcXG4gIHNyYzogdXJsKC9zcmMvYXNzZXRzL05pZ2h0aW5Ub2t5by50dGYpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWZvbnQtY29sb3I6ICNmMWY1Zjk7XFxuICAtLWhlYWRlci1jb2xvcjogI2Y4ZmFmYztcXG59XFxuXFxuYm9keSxcXG5odG1sLFxcbiNjb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcmMvYXNzZXRzL2phcGFuLWdhcmRlbi5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6IHRva3lvLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcXG4gICAgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNC41cmVtO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDMwcHg7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtNXB4KTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxufVxcblxcbi5uYXYge1xcbiAgd2lkdGg6IG1pbig2MCUsIDQwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmFjdGl2ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHRvcDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4vKiBtaWQgc2VjdGlvbiAqL1xcblxcbi5taWRkbGUge1xcbiAgbWluLWhlaWdodDogNjAwcHg7XFxuICB3aWR0aDogNjAwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG5cXG4vKiBtaWQgc2VjdGlvbiAtPiBob21lICovXFxuXFxuaW1nIHtcXG4gIGhlaWdodDogNDAwcHg7XFxufVxcblxcbi8qIG1pZCBzZWN0aW9uIC0+IG1lbnUgKi9cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgXFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG59XFxuXFxuLml0ZW0ge1xcbiAgaGVpZ2h0OiAyMDBweDsgXFxufVxcblxcbi5pdGVtOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICB0cmFuc2l0aW9uOiAwLjNzOyBcXG59XFxuXFxuLm92ZXJmbG93IHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKiBtaWQgc2VjdGlvbiAtPiBjb250YWN0ICovXFxuXFxuLm1hcCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbn1cXG5cXG4ucGhvbmUsXFxuLmFkZHJlc3Mge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pY29uIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiA5MHB4O1xcbn1cXG5cXG4uaW5mbyB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcilcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBpY29uIGZyb20gJy4vYXNzZXRzL2ljb24ucG5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEVsZW1lbnRUb0RvbShuZXdFbGVtZW50LCBwYXJlbnQpIHtcbiAgcGFyZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGV4dENvbnRlbnRUb0VsZW1lbnQodGV4dCwgZWxlbWVudCkge1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzVG9FbGVtZW50KGNscywgZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtaWRkbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCBmaXJzdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IHNlY29uZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IHRoaXJkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGZvb3RlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGZvb3Rlckljb24gPSBuZXcgSW1hZ2UoKTtcbiAgZm9vdGVySWNvbi5zcmMgPSBpY29uO1xuXG4gIGFkZEVsZW1lbnRUb0RvbShoZWFkZXIsIGNvbnRlbnQpO1xuICBhZGRFbGVtZW50VG9Eb20obWlkZGxlLCBjb250ZW50KTtcbiAgYWRkRWxlbWVudFRvRG9tKHRpdGxlLCBoZWFkZXIpO1xuICBhZGRFbGVtZW50VG9Eb20obmF2LCBoZWFkZXIpO1xuICBhZGRFbGVtZW50VG9Eb20oZmlyc3RMaW5rLCBuYXYpO1xuICBhZGRFbGVtZW50VG9Eb20oc2Vjb25kTGluaywgbmF2KTtcbiAgYWRkRWxlbWVudFRvRG9tKHRoaXJkTGluaywgbmF2KTtcbiAgYWRkRWxlbWVudFRvRG9tKGZvb3RlciwgY29udGVudCk7XG4gIGFkZEVsZW1lbnRUb0RvbShmb290ZXJJY29uLCBmb290ZXIpO1xuICBhZGRFbGVtZW50VG9Eb20oZm9vdGVySW5mbywgZm9vdGVyKTtcblxuICBhZGRUZXh0Q29udGVudFRvRWxlbWVudCgnU3VuIEJvd2wnLCB0aXRsZSk7XG4gIGFkZFRleHRDb250ZW50VG9FbGVtZW50KCdIb21lJywgZmlyc3RMaW5rKTtcbiAgYWRkVGV4dENvbnRlbnRUb0VsZW1lbnQoJ01lbnUnLCBzZWNvbmRMaW5rKTtcbiAgYWRkVGV4dENvbnRlbnRUb0VsZW1lbnQoJ0NvbnRhY3QnLCB0aGlyZExpbmspO1xuICBhZGRUZXh0Q29udGVudFRvRWxlbWVudCgnaW5mb0BzdW4tYm93bC5jb20nLCBmb290ZXJJbmZvKVxuXG4gIGFkZENsYXNzVG9FbGVtZW50KCdoZWFkZXInLCBoZWFkZXIpO1xuICBhZGRDbGFzc1RvRWxlbWVudCgnbmF2JywgbmF2KTtcbiAgYWRkQ2xhc3NUb0VsZW1lbnQoJ21pZGRsZScsIG1pZGRsZSk7XG4gIGFkZENsYXNzVG9FbGVtZW50KCdob21lJywgZmlyc3RMaW5rKTtcbiAgYWRkQ2xhc3NUb0VsZW1lbnQoJ21lbnUnLCBzZWNvbmRMaW5rKTtcbiAgYWRkQ2xhc3NUb0VsZW1lbnQoJ2NvbnRhY3QnLCB0aGlyZExpbmspO1xuICBhZGRDbGFzc1RvRWxlbWVudCgnZm9vdGVyJywgZm9vdGVyKTtcbiAgYWRkQ2xhc3NUb0VsZW1lbnQoJ2ljb24nLCBmb290ZXJJY29uKTtcbiAgYWRkQ2xhc3NUb0VsZW1lbnQoJ2luZm8nLCBmb290ZXJJbmZvKVxufVxuIiwiaW1wb3J0IHtcbiAgYWRkRWxlbWVudFRvRG9tLFxuICBhZGRUZXh0Q29udGVudFRvRWxlbWVudCxcbiAgYWRkQ2xhc3NUb0VsZW1lbnQsXG59IGZyb20gJy4vYnVpbGQtcGFnZSc7XG5pbXBvcnQgbWFwSW1nIGZyb20gJy4vYXNzZXRzL21hcC5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZENvbnRhY3RTZWN0aW9uKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZGRsZScpO1xuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcbiAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IG1hcCA9IG5ldyBJbWFnZSgpO1xuICBtYXAuc3JjID0gbWFwSW1nO1xuXG4gIG5hdkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWQnKTtcblxuICBhZGRDbGFzc1RvRWxlbWVudCgnYWN0aXZlJywgY29udGFjdEJ1dHRvbik7XG4gIGFkZFRleHRDb250ZW50VG9FbGVtZW50KCfwn4+gIFJheWEgVWJ1ZCwgVWJ1ZCwgQmFsaSBJbmRvbmVzaWEnLCBhZGRyZXNzKTtcbiAgYWRkVGV4dENvbnRlbnRUb0VsZW1lbnQoJ/Cfk54gKzYyIDM2MSAyMDkyMjg4JywgcGhvbmVOdW1iZXIpO1xuICBhZGRDbGFzc1RvRWxlbWVudCgnbWFwJywgbWFwKTtcbiAgYWRkQ2xhc3NUb0VsZW1lbnQoJ3Bob25lJywgcGhvbmVOdW1iZXIpO1xuICBhZGRDbGFzc1RvRWxlbWVudCgnYWRkcmVzcycsIGFkZHJlc3MpO1xuXG4gIGFkZEVsZW1lbnRUb0RvbShwaG9uZU51bWJlciwgY29udGVudCk7XG4gIGFkZEVsZW1lbnRUb0RvbShhZGRyZXNzLCBjb250ZW50KTtcbiAgYWRkRWxlbWVudFRvRG9tKG1hcCwgY29udGVudCk7XG59XG4iLCJpbXBvcnQge1xuICBhZGRFbGVtZW50VG9Eb20sXG4gIGFkZFRleHRDb250ZW50VG9FbGVtZW50LFxuICBhZGRDbGFzc1RvRWxlbWVudCxcbn0gZnJvbSAnLi9idWlsZC1wYWdlJztcbmltcG9ydCBJY29uIGZyb20gJy4vYXNzZXRzL2dpcmwtY2hlZi5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEhvbWVTZWN0aW9uKCkge1xuICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZGRsZScpO1xuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbiAgY29uc3QgZmlyc3RTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBzZWNvbmRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCB0aGlyZFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHBob3RvID0gbmV3IEltYWdlKCk7XG4gIHBob3RvLnNyYyA9IEljb247XG5cbiAgbmF2QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZCcpO1xuXG4gIGFkZEVsZW1lbnRUb0RvbShmaXJzdFNwYW4sIGNvbnRlbnQpO1xuICBhZGRFbGVtZW50VG9Eb20oc2Vjb25kU3BhbiwgY29udGVudCk7XG4gIGFkZEVsZW1lbnRUb0RvbShwaG90bywgY29udGVudCk7XG4gIGFkZEVsZW1lbnRUb0RvbSh0aGlyZFNwYW4sIGNvbnRlbnQpO1xuICBhZGRDbGFzc1RvRWxlbWVudCgnYWN0aXZlJywgaG9tZUJ1dHRvbik7XG4gIGFkZFRleHRDb250ZW50VG9FbGVtZW50KFxuICAgICdUaGUgYmVzdCBKYXBhbmVzZSBCb3dscyB5b3UgaGF2ZSBldmVyIHRyaWVkJyxcbiAgICBmaXJzdFNwYW5cbiAgKTtcbiAgYWRkVGV4dENvbnRlbnRUb0VsZW1lbnQoJ01hZGUgd2l0aCBsb3ZlIHNpbmNlIDE5MzAnLCBzZWNvbmRTcGFuKTtcbiAgYWRkVGV4dENvbnRlbnRUb0VsZW1lbnQoJ09yZGVyIG9ubGluZSBvciB2aXNpdCB1cyEnLCB0aGlyZFNwYW4pO1xufVxuIiwiaW1wb3J0IHtcbiAgYWRkRWxlbWVudFRvRG9tLFxuICBhZGRUZXh0Q29udGVudFRvRWxlbWVudCxcbiAgYWRkQ2xhc3NUb0VsZW1lbnQsXG59IGZyb20gJy4vYnVpbGQtcGFnZSc7XG5pbXBvcnQgZmlyc3RJdGVtIGZyb20gJy4vYXNzZXRzL0dvbWFTaG95dVR1bmEucG5nJztcbmltcG9ydCBzZWNvbmRJdGVtIGZyb20gJy4vYXNzZXRzL1Bvbnp1U2FsbW9uLnBuZyc7XG5pbXBvcnQgdGhpcmRJdGVtIGZyb20gJy4vYXNzZXRzL1NhbG1vbkNoaXJhc2hpLnBuZyc7XG5pbXBvcnQgZm91cnRoSXRlbSBmcm9tICcuL2Fzc2V0cy9TZWFyZWRBYnVyaU90b3JvLnBuZyc7XG5pbXBvcnQgZmlmdGhJdGVtIGZyb20gJy4vYXNzZXRzL1NpY2h1YW5DaGlsaVNhbG1vbi5wbmcnO1xuaW1wb3J0IHNpeHRoSXRlbSBmcm9tICcuL2Fzc2V0cy9TcGljeUhhbWFjaGkucG5nJztcbmltcG9ydCBzZXZlbnRoSXRlbSBmcm9tICcuL2Fzc2V0cy9XYXNhYmlNYXlvVHVuYS5wbmcnO1xuaW1wb3J0IGVpZ2h0aEl0ZW0gZnJvbSAnLi9hc3NldHMvWWFraVRvZnUqdmVnZXRhcmlhbi5wbmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVDYXJkRWxlbWVudChpbWcsIG5hbWUpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWRkbGUnKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBwaG90byA9IG5ldyBJbWFnZSgpO1xuICBwaG90by5zcmMgPSBpbWc7XG5cbiAgYWRkVGV4dENvbnRlbnRUb0VsZW1lbnQobmFtZSwgaXRlbU5hbWUpO1xuICBhZGRFbGVtZW50VG9Eb20ocGhvdG8sIGNvbnRhaW5lcik7XG4gIGFkZEVsZW1lbnRUb0RvbShpdGVtTmFtZSwgY29udGFpbmVyKTtcbiAgYWRkRWxlbWVudFRvRG9tKGNvbnRhaW5lciwgY29udGVudCk7XG4gIGFkZENsYXNzVG9FbGVtZW50KCdpdGVtJywgcGhvdG8pXG4gIGFkZENsYXNzVG9FbGVtZW50KCdpdGVtLWNvbnRhaW5lcicsIGNvbnRhaW5lcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNZW51U2VjdGlvbigpIHtcbiAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkZGxlJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuICBuYXZCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcblxuICBhZGRDbGFzc1RvRWxlbWVudCgnYWN0aXZlJywgbWVudUJ1dHRvbik7XG4gIGFkZENsYXNzVG9FbGVtZW50KCdncmlkJywgY29udGVudCk7XG4gIGFkZENsYXNzVG9FbGVtZW50KCdvdmVyZmxvdycsIGJvZHkpXG4gIFxuICBjcmVhdGVDYXJkRWxlbWVudChmaXJzdEl0ZW0sICdHb21hIFNob3l1IFR1bmEnKTtcbiAgY3JlYXRlQ2FyZEVsZW1lbnQoc2Vjb25kSXRlbSwgJ1Bvbnp1IFNhbG1vbicpO1xuICBjcmVhdGVDYXJkRWxlbWVudCh0aGlyZEl0ZW0sICdTYWxtb24gQ2hpcmFzaGknKTtcbiAgY3JlYXRlQ2FyZEVsZW1lbnQoZm91cnRoSXRlbSwgJ1NlYXJlZCBBYnVyaSBPdG9ybycpO1xuICBjcmVhdGVDYXJkRWxlbWVudChmaWZ0aEl0ZW0sICdTaWNodWFuIENoaWxpIFNhbG1vbicpO1xuICBjcmVhdGVDYXJkRWxlbWVudChzaXh0aEl0ZW0sICdTcGljeSBIYW1hY2hpJyk7XG4gIGNyZWF0ZUNhcmRFbGVtZW50KHNldmVudGhJdGVtLCAnV2FzYWJpIE1heW8gVHVuYScpO1xuICBjcmVhdGVDYXJkRWxlbWVudChlaWdodGhJdGVtLCAnWWFraSBUb2Z1ICp2ZWdldGFyaWFuJyk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGJ1aWxkUGFnZSBmcm9tICcuL2J1aWxkLXBhZ2UnO1xuaW1wb3J0IGJ1aWxkSG9tZVNlY3Rpb24gZnJvbSAnLi9ob21lJztcbmltcG9ydCBidWlsZE1lbnVTZWN0aW9uIGZyb20gJy4vbWVudSc7XG5pbXBvcnQgYnVpbGRDb250YWN0U2VjdGlvbiBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmJ1aWxkUGFnZSgpO1xuYnVpbGRIb21lU2VjdGlvbigpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZGRsZScpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpO1xuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBidWlsZEhvbWVTZWN0aW9uKCk7XG59KTtcblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgYnVpbGRNZW51U2VjdGlvbigpO1xufSk7XG5cbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIGJ1aWxkQ29udGFjdFNlY3Rpb24oKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9