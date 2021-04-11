/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([29,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/components/_settings/config.ts
var config_namespaceObject = {};
__webpack_require__.r(config_namespaceObject);
__webpack_require__.d(config_namespaceObject, "default_avatar", function() { return default_avatar; });
__webpack_require__.d(config_namespaceObject, "default_image", function() { return default_image; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(1);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(11);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(12);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/components/_settings/config.ts
var default_avatar = 'images/default-logo.png';
var default_image = 'images/default-image.png';

// CONCATENATED MODULE: ./src/components/_settings/_base.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var _base = ({"width-default":"width-default--3XK9m","width-full":"width-full--1f7bm","width-s2":"width-s2--QjNmV","width-s1":"width-s1--1KMiX","width-s":"width-s--2Tx6a","width-m":"width-m--2ozdh","width-l":"width-l--36LH1","width-l1":"width-l1--2cbpM","width-l2":"width-l2--1Raf_","height":"height--tur0l","height-fit-screen":"height-fit-screen--3_X_M","height-100":"height-100--3w5al","height-150":"height-150--3vi6E","height-200":"height-200--39Yeo","height-300":"height-300--34J84","height-400":"height-400--2Iadx","height-500":"height-500--3LfaQ","height-600":"height-600--2gs-X","padding":"padding--2C1rE","padding-s1":"padding-s1--10Uml","padding-s":"padding-s--14kaB","padding-m":"padding-m--3yGQu","padding-l":"padding-l--86FbL","padding-l1":"padding-l1--vM9ul","padding-l2":"padding-l2--21lTT","margin-s1":"margin-s1--7Zra6","margin-s":"margin-s--3iWv_","margin-m":"margin-m--2_dhz","margin-l":"margin-l--2j3Kw","margin-l1":"margin-l1--3fX5E","margin-l2":"margin-l2--1SfbC","margin-top-s1":"margin-top-s1--2_b89","margin-top-s":"margin-top-s--3iz8U","margin-top-m":"margin-top-m--1uD2-","margin-top-l":"margin-top-l--2wSLf","margin-top-l1":"margin-top-l1--1lcVD","margin-top-l2":"margin-top-l2--1BeNn","margin-right-s1":"margin-right-s1--3LNn_","margin-right-s":"margin-right-s--11N-a","margin-right-m":"margin-right-m--27qig","margin-right-l":"margin-right-l--KPrsC","margin-right-l1":"margin-right-l1--1BcZf","margin-right-l2":"margin-right-l2--P9kRO","margin-bottom-s1":"margin-bottom-s1--3QeJP","margin-bottom-s":"margin-bottom-s--zVjni","margin-bottom-m":"margin-bottom-m--3X2ir","margin-bottom-l":"margin-bottom-l--_2P8Y","margin-bottom-l1":"margin-bottom-l1--1M2kq","margin-bottom-l2":"margin-bottom-l2--wY5lT","margin-left-s1":"margin-left-s1--2_W8C","margin-left-s":"margin-left-s--3tMaT","margin-left-m":"margin-left-m--1CCff","margin-left-l":"margin-left-l--2xdBx","margin-left-l1":"margin-left-l1--27IBB","margin-left-l2":"margin-left-l2--1miyI","flex":"flex--2_0Q4","flex-start":"flex-start--1dc09","flex-end":"flex-end--3LaQP","flex-center":"flex-center--30Dqb","flex-between":"flex-between--2MvVU","flex-around":"flex-around--3eyap","flex-evenly":"flex-evenly--1ET5H","text-align-left":"text-align-left--nwhbq","text-align-center":"text-align-center--jsMZW","text-align-right":"text-align-right---dJxy","visible":"visible--oTD_n","hidden":"hidden--r87KS","disable":"disable--G9QO0","white":"white--3CUsU","black":"black--206uj","blue":"blue--XQdIT","yellow":"yellow---YyGT","green":"green--2BxQd","red":"red--2uD6W","bold":"bold--1F6zr","italic":"italic--Iy7Vi","bold-italic":"bold-italic--2vfz5"});
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(3);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/components/_settings/index.ts




var Theme;

(function (Theme) {
  Theme["DEFAULT"] = "white-theme";
  Theme["DARK"] = "dark-theme";
})(Theme || (Theme = {}));

var Width;

(function (Width) {
  Width["NONE"] = "";
  Width["FULL"] = "width-full";
  Width["S2"] = "width-s2";
  Width["S1"] = "width-s1";
  Width["S"] = "width-s";
  Width["M"] = "width-m";
  Width["L"] = "width-l";
  Width["L1"] = "width-l1";
  Width["L2"] = "width-l2";
})(Width || (Width = {}));

var Height;

(function (Height) {
  Height["NONE"] = "";
  Height["FIT_SCREEN"] = "height-fit-screen";
  Height["PX_100"] = "height-100";
  Height["PX_150"] = "height-150";
  Height["PX_200"] = "height-200";
  Height["PX_300"] = "height-300";
  Height["PX_400"] = "height-400";
  Height["PX_500"] = "height-500";
  Height["PX_600"] = "height-600";
})(Height || (Height = {}));

var Padding;

(function (Padding) {
  Padding["NONE"] = "";
  Padding["S2"] = "padding-s2";
  Padding["S1"] = "padding-s1";
  Padding["S"] = "padding-s";
  Padding["M"] = "padding-m";
  Padding["L"] = "padding-l";
  Padding["L1"] = "padding-l1";
  Padding["L2"] = "padding-l2";
})(Padding || (Padding = {}));

var Margin;

(function (Margin) {
  Margin["NONE"] = "";
  Margin["S2"] = "margin-s2";
  Margin["S1"] = "margin-s1";
  Margin["S"] = "margin-s";
  Margin["M"] = "margin-m";
  Margin["L"] = "margin-l";
  Margin["L1"] = "margin-l1";
  Margin["L2"] = "margin-l2";
})(Margin || (Margin = {}));

var MarginTop;

(function (MarginTop) {
  MarginTop["NONE"] = "";
  MarginTop["S2"] = "margin-top-s2";
  MarginTop["S1"] = "margin-top-s1";
  MarginTop["S"] = "margin-top-s";
  MarginTop["M"] = "margin-top-m";
  MarginTop["L"] = "margin-top-l";
  MarginTop["L1"] = "margin-top-l1";
  MarginTop["L2"] = "margin-top-l2";
})(MarginTop || (MarginTop = {}));

var MarginRight;

(function (MarginRight) {
  MarginRight["NONE"] = "";
  MarginRight["S2"] = "margin-right-s2";
  MarginRight["S1"] = "margin-right-s1";
  MarginRight["S"] = "margin-right-s";
  MarginRight["M"] = "margin-right-m";
  MarginRight["L"] = "margin-right-l";
  MarginRight["L1"] = "margin-right-l1";
  MarginRight["L2"] = "margin-right-l2";
})(MarginRight || (MarginRight = {}));

var MarginBottom;

(function (MarginBottom) {
  MarginBottom["NONE"] = "";
  MarginBottom["S2"] = "margin-bottom-s2";
  MarginBottom["S1"] = "margin-bottom-s1";
  MarginBottom["S"] = "margin-bottom-s";
  MarginBottom["M"] = "margin-bottom-m";
  MarginBottom["L"] = "margin-bottom-l";
  MarginBottom["L1"] = "margin-bottom-l1";
  MarginBottom["L2"] = "margin-bottom-l2";
})(MarginBottom || (MarginBottom = {}));

var MarginLeft;

(function (MarginLeft) {
  MarginLeft["NONE"] = "";
  MarginLeft["S2"] = "margin-left-s2";
  MarginLeft["S1"] = "margin-left-s1";
  MarginLeft["S"] = "margin-left-s";
  MarginLeft["M"] = "margin-left-m";
  MarginLeft["L"] = "margin-left-l";
  MarginLeft["L1"] = "margin-left-l1";
  MarginLeft["L2"] = "margin-left-l2";
})(MarginLeft || (MarginLeft = {}));

var Flex;

(function (Flex) {
  Flex["NONE"] = "";
  Flex["START"] = "flex-start";
  Flex["END"] = "flex-end";
  Flex["CENTER"] = "flex-center";
  Flex["BETWEEN"] = "flex-between";
  Flex["AROUND"] = "flex-around";
  Flex["EVENLY"] = "flex-evenly";
})(Flex || (Flex = {}));

var Visibility;

(function (Visibility) {
  Visibility["NONE"] = "";
  Visibility["VISIBLE"] = "visible";
  Visibility["HIDDEN"] = "hidden";
  Visibility["DISABLE"] = "disable";
})(Visibility || (Visibility = {}));

var TextAlign;

(function (TextAlign) {
  TextAlign["NONE"] = "";
  TextAlign["LEFT"] = "text-align-left";
  TextAlign["CENTER"] = "text-align-center";
  TextAlign["RIGHT"] = "text-align-right";
})(TextAlign || (TextAlign = {}));

var Color;

(function (Color) {
  Color["NONE"] = "";
  Color["WHITE"] = "white";
  Color["BLACK"] = "black";
  Color["BLUE"] = "blue";
  Color["YELLOW"] = "yellow";
  Color["GREEN"] = "green";
  Color["RED"] = "red";
})(Color || (Color = {}));

var FontStyle;

(function (FontStyle) {
  FontStyle["NONE"] = "";
  FontStyle["BOLD"] = "bold";
  FontStyle["ITALIC"] = "italic";
  FontStyle["BOLD_ITALIC"] = "bold-italic";
})(FontStyle || (FontStyle = {}));

var _settings_mapProps = function mapProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var elementStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var elementClasses = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var _props$width = props.width,
      width = _props$width === void 0 ? Width.NONE : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? Height.NONE : _props$height,
      _props$padding = props.padding,
      padding = _props$padding === void 0 ? Padding.NONE : _props$padding,
      _props$margin = props.margin,
      margin = _props$margin === void 0 ? Margin.NONE : _props$margin,
      _props$flex = props.flex,
      flex = _props$flex === void 0 ? Flex.NONE : _props$flex,
      _props$visibility = props.visibility,
      visibility = _props$visibility === void 0 ? Visibility.NONE : _props$visibility,
      _props$textAlign = props.textAlign,
      textAlign = _props$textAlign === void 0 ? TextAlign.NONE : _props$textAlign,
      _props$color = props.color,
      color = _props$color === void 0 ? Color.NONE : _props$color,
      _props$fontStyle = props.fontStyle,
      fontStyle = _props$fontStyle === void 0 ? FontStyle.NONE : _props$fontStyle,
      classNames = props.classNames,
      style = props.style;
  var elementClassNames = elementClasses.map(function (elementClass) {
    return elementStyles[elementClass];
  });
  var classProps = {
    className: classnames_default.a.apply(void 0, [_base[width], _base[height], _base[padding], _base[margin], _base[flex], _base[visibility], _base[textAlign], _base[color], _base[fontStyle]].concat(toConsumableArray_default()(elementClassNames), [classNames])),
    style: style // ...(style ? { style: style } : {}),

  };
  return classProps;
};


// CONCATENATED MODULE: ./src/components/templates/index/index.tsx


var Type;

(function (Type) {
  Type["DEFAULT"] = "index";
})(Type || (Type = {}));

var index_Element = function Element(props) {
  // const {
  //   type,
  //   $header,
  //   $index,
  //   $footer,
  // } = props;
  // //create class props
  // const headerProps = {
  //   ...$header,
  // }
  // const mainProps = {
  // }
  // const bannerSectionProps = {
  //   ...$index.$bannerSection,
  // }
  // const imageLinkListSectionProps = {
  //   ...$index.$imageLinkListSection,
  // }
  // const footerMenuProps = {
  //   ...$footer.$footerMenu,
  // }
  // const copyrightSectionProps = {
  //   ...$footer.$copyrightSection,
  // }
  // const imageListSectionProps = {
  //   ...$footer.$imageListSection,
  // }
  // const footerProps = {
  //   // size: size,
  //   // data: bannerData,
  // }
  // const IndexTemplateComponent = () => (
  //   <Main {...mainProps}>
  //     <BannerSection.Element {...bannerSectionProps} />
  //     <ImageLinkListSection.Element {...imageLinkListSectionProps} />
  //   </Main>
  // );
  return (
    /*#__PURE__*/
    // <React.Fragment>
    //   <Header.Element {...headerProps} />
    //   <Router>
    //     <Switch>
    //       <Route path="/4d_results" component={LotteryTemplateComponent} />
    //       <Route path="/" component={IndexTemplateComponent} />
    //     </Switch>
    //   </Router>
    //   <Footer.Element {...footerProps} >
    //     <FooterMenu.Element {...footerMenuProps} />
    //     <TextSection.Element {...copyrightSectionProps} />
    //     <ImageListSection.Element {...imageListSectionProps} />
    //   </Footer.Element>
    // </React.Fragment>
    react["createElement"]("div", null, "asdfsadfsf")
  );
}; // const LotteryTemplateComponent = () => (
//   <LotteryTemplate.Element {...lotteryTemplateProps} />
// );


index_Element.defaultProps = {
  type: Type.DEFAULT,
  width: Width.NONE
};

// CONCATENATED MODULE: ./src/components/atoms/cell/styles.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles = ({"cell":"cell--3adqo","cell-title":"cell-title--2zGWi"});
// CONCATENATED MODULE: ./src/components/atoms/cell/index.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var cell_Type;

(function (Type) {
  Type["DEFAULT"] = "cell";
  Type["TITLE"] = "cell-title";
  Type["LINK"] = "link";
})(cell_Type || (cell_Type = {}));

var cell_Element = function Element(props) {
  var type = props.type,
      children = props.children,
      _props$padding = props.padding,
      padding = _props$padding === void 0 ? Padding.NONE : _props$padding,
      _props$align = props.align,
      align = _props$align === void 0 ? TextAlign.NONE : _props$align,
      style = props.style,
      className = props.className; //create props

  var cellProps = {
    className: classnames_default()(styles[type !== null && type !== void 0 ? type : cell_Type.DEFAULT], _base[padding], _base[align], className),
    style: _objectSpread({}, style)
  };
  return /*#__PURE__*/react["createElement"]("div", cellProps, children);
};


// CONCATENATED MODULE: ./src/components/atoms/list/styles.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var list_styles = ({"white-theme":"white-theme--lzjtZ","dark-theme":"dark-theme--3f0oc","list-vertical":"list-vertical--PThha","list-horizontal":"list-horizontal--NUbH6"});
// CONCATENATED MODULE: ./src/components/atoms/list/index.tsx



var list_Type;

(function (Type) {
  Type["VERTICAL"] = "list-vertical";
  Type["HORIZONTAL"] = "list-horizontal";
})(list_Type || (list_Type = {}));

var list_Element = function Element(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? list_Type.HORIZONTAL : _props$type,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? Theme.DEFAULT : _props$theme,
      children = props.children,
      $li = props.$li; //create props

  var listProps = _settings_mapProps(props, list_styles, [type, theme]);
  var childrenElement = children === null || children === void 0 ? void 0 : children.map(list_childrenElementMapping($li));
  return /*#__PURE__*/react["createElement"]("ul", listProps, childrenElement);
};

var list_childrenElementMapping = function childrenElementMapping() {
  var $li = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var liProps = _settings_mapProps($li);
  return function (child) {
    return /*#__PURE__*/react["createElement"]("li", liProps, child);
  };
};


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(13);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./src/components/atoms/link/styles.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var link_styles = ({"link":"link--3gHJ-","link-external":"link-external--3qx3N","white-theme":"white-theme--3mmVI","dark-theme":"dark-theme--1064D","s2":"s2--3Ot8I","s1":"s1--1Zmua","s":"s---dDQA","m":"m--MlvzA","l":"l--2SAG8","l1":"l1--1KOlL","l2":"l2--4Bn9A"});
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 7 modules
var react_router_dom = __webpack_require__(15);

// CONCATENATED MODULE: ./src/components/atoms/link/index.tsx



function link_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function link_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { link_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { link_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var link_Type;

(function (Type) {
  Type["DEFAULT"] = "link";
  Type["EXTERNAL"] = "link-external";
})(link_Type || (link_Type = {}));

var Size;

(function (Size) {
  Size["S1"] = "s1";
  Size["S"] = "s";
  Size["M"] = "m";
  Size["L"] = "l";
  Size["L1"] = "l1";
})(Size || (Size = {}));

var link_Element = function Element(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? link_Type.DEFAULT : _props$type,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? Theme.DEFAULT : _props$theme,
      text = props.text,
      _props$url = props.url,
      url = _props$url === void 0 ? '' : _props$url,
      _props$size = props.size,
      size = _props$size === void 0 ? Size.M : _props$size;
  var href = url ? {
    href: url
  } : {}; //create props

  var linkProps = link_objectSpread(link_objectSpread({}, _settings_mapProps(link_objectSpread({}, props), link_styles, [type, size, theme])), href);

  var linkElement = type === link_Type.EXTERNAL ? /*#__PURE__*/react["createElement"]("a", linkProps, text) : /*#__PURE__*/react["createElement"](react_router_dom["a" /* Link */], extends_default()({}, linkProps, {
    to: url
  }), text);
  return linkElement;
};


// CONCATENATED MODULE: ./src/components/atoms/text/styles.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var text_styles = ({"white-theme":"white-theme--2pwnh","dark-theme":"dark-theme--2VolE","text":"text--1c1Ip","s2":"s2--2-Qlr","s1":"s1--2zqS2","s":"s--1CHJ-","m":"m--2Md6i","l":"l--2eGXE","l1":"l1--2ri_Y","l2":"l2--2KeO2"});
// CONCATENATED MODULE: ./src/components/atoms/text/index.tsx



var text_Type;

(function (Type) {
  Type["DEFAULT"] = "text";
})(text_Type || (text_Type = {}));

var text_Size;

(function (Size) {
  Size["S2"] = "s2";
  Size["S1"] = "s1";
  Size["S"] = "s";
  Size["M"] = "m";
  Size["L"] = "l";
  Size["L1"] = "l1";
  Size["L2"] = "l2";
})(text_Size || (text_Size = {}));

var text_Element = function Element(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? text_Type.DEFAULT : _props$type,
      text = props.text,
      _props$size = props.size,
      size = _props$size === void 0 ? text_Size.M : _props$size,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? Theme.DEFAULT : _props$theme; //create props

  var textProps = _settings_mapProps(props, text_styles, [type, size, theme]);
  return /*#__PURE__*/react["createElement"]("p", textProps, text);
};


// CONCATENATED MODULE: ./src/components/atoms/image/styles.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var image_styles = ({"image":"image--Flo7Y","image-circle":"image-circle--1w-_d","image-full":"image-full--1BVxM","s1":"s1--1Ils6","s":"s--1IuY_","m":"m--1Gsdm","l":"l--2IoNW","l1":"l1--hV9wx","full":"full--3ermH"});
// CONCATENATED MODULE: ./src/components/atoms/image/index.tsx


function image_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function image_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { image_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { image_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var image_Type;

(function (Type) {
  Type["DEFAULT"] = "image";
  Type["FULL"] = "image-full";
  Type["CIRLCE"] = "image-cicle";
})(image_Type || (image_Type = {}));

var image_Size;

(function (Size) {
  Size["Default"] = "";
  Size["S1"] = "s1";
  Size["S"] = "s";
  Size["M"] = "m";
  Size["L"] = "l";
  Size["L1"] = "l1";
})(image_Size || (image_Size = {}));

var image_Element = function Element(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? image_Type.DEFAULT : _props$type,
      _props$size = props.size,
      size = _props$size === void 0 ? image_Size.Default : _props$size,
      _props$src = props.src,
      src = _props$src === void 0 ? config_namespaceObject.default_image : _props$src,
      onClick = props.onClick; //create props

  var imageProps = image_objectSpread(image_objectSpread({}, _settings_mapProps(props, image_styles, [type, size])), {}, {
    src: src,
    onClick: onClick
  });

  return /*#__PURE__*/react["createElement"]("img", imageProps);
};


// CONCATENATED MODULE: ./src/components/molecules/logo/styles.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var logo_styles = ({"logo":"logo--3XOG3","s":"s--PPFAi","m":"m--8s8U0","l":"l---3pEF","l1":"l1--1f_Kf"});
// CONCATENATED MODULE: ./src/components/molecules/logo/index.tsx


function logo_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function logo_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { logo_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { logo_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var logo_Type;

(function (Type) {
  Type["DEFAULT"] = "logo";
  Type["CIRLCE"] = "logo-cicle";
})(logo_Type || (logo_Type = {}));

var logo_Size;

(function (Size) {
  Size["S"] = "s";
  Size["M"] = "m";
  Size["L"] = "l";
  Size["L1"] = "l1";
})(logo_Size || (logo_Size = {}));

var logo_Element = function Element(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? logo_Type.DEFAULT : _props$type,
      _props$size = props.size,
      size = _props$size === void 0 ? logo_Size.M : _props$size,
      $text = props.$text,
      $image = props.$image; //create props

  var logoProps = _settings_mapProps(props, logo_styles, [type, size]);

  var imageProps = logo_objectSpread(logo_objectSpread({}, $image), {}, {
    src: ($image === null || $image === void 0 ? void 0 : $image.src) || config_namespaceObject.default_avatar,
    classNames: logo_styles[size]
  });

  var textProps = $text;
  var textElement = $text ? /*#__PURE__*/react["createElement"](text_Element, textProps) : null;
  return /*#__PURE__*/react["createElement"]("div", logoProps, /*#__PURE__*/react["createElement"](image_Element, imageProps), textElement);
};


// CONCATENATED MODULE: ./src/components/molecules/menu/styles.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var menu_styles = ({"menu":"menu--3LIry","align-left":"align-left--Z5xj5","align-right":"align-right--49yS3","small":"small--2zS5p","medium":"medium--282wG","large":"large--nZoMG"});
// CONCATENATED MODULE: ./src/components/atoms/block/styles.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var block_styles = ({"white-theme":"white-theme--GV4-8","dark-theme":"dark-theme--1t3va"});
// CONCATENATED MODULE: ./src/components/atoms/block/index.tsx




var block_Element = function Element(props) {
  var _props$theme = props.theme,
      theme = _props$theme === void 0 ? Theme.DEFAULT : _props$theme,
      children = props.children; //create props

  var blockProps = _settings_mapProps(props, block_styles, [theme]);
  return /*#__PURE__*/react["createElement"]("div", blockProps, children);
};


// CONCATENATED MODULE: ./src/components/molecules/dropdown/styles.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var dropdown_styles = ({"dropdown":"dropdown--1LwJ4"});
// CONCATENATED MODULE: ./src/components/molecules/dropdown/index.tsx


function dropdown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function dropdown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { dropdown_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { dropdown_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var dropdown_Type;

(function (Type) {
  Type["DEFAULT"] = "dropdown";
})(dropdown_Type || (dropdown_Type = {}));

var Direction;

(function (Direction) {
  Direction["TOP"] = "top";
  Direction["RIGHT"] = "right";
  Direction["BOTTOM"] = "bottom";
  Direction["LEFT"] = "left";
})(Direction || (Direction = {}));

var dropdown_Element = function Element(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? dropdown_Type.DEFAULT : _props$type,
      $link = props.$link,
      $subs = props.$subs; //create props

  var blockProps = dropdown_objectSpread(dropdown_objectSpread({}, props), {}, {
    classNames: classnames_default()(dropdown_styles[type])
  });

  var linkProps = dropdown_objectSpread({}, $link);

  var subDropDownElement = $subs === null || $subs === void 0 ? void 0 : $subs.$items.map(dropdown_SubDropDownElementMapping);
  return /*#__PURE__*/react["createElement"](block_Element, blockProps, /*#__PURE__*/react["createElement"](link_Element, linkProps), /*#__PURE__*/react["createElement"](list_Element, null, subDropDownElement));
};

var dropdown_SubDropDownElementMapping = function SubDropDownElementMapping($dropdown) {
  var dropdownProps = dropdown_objectSpread({}, $dropdown);

  return /*#__PURE__*/react["createElement"](dropdown_Element, dropdownProps);
};


// CONCATENATED MODULE: ./src/components/molecules/menu/index.tsx


function menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { menu_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { menu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var menu_Type;

(function (Type) {
  Type["DEFAULT"] = "menu";
})(menu_Type || (menu_Type = {}));

var Align;

(function (Align) {
  Align["DEFAULT"] = "";
  Align["LEFT"] = "align-left";
  Align["RIGHT"] = "align-right";
})(Align || (Align = {}));

var menu_Element = function Element(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? menu_Type.DEFAULT : _props$type,
      _props$align = props.align,
      align = _props$align === void 0 ? Align.LEFT : _props$align,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? Theme.DEFAULT : _props$theme,
      $list = props.$list; //create props

  var navProps = _settings_mapProps(props, menu_styles, [type, theme, align]);
  var dropDownElement = $list === null || $list === void 0 ? void 0 : $list.$items.map(menu_dropDownElementMapping);
  return /*#__PURE__*/react["createElement"]("nav", navProps, /*#__PURE__*/react["createElement"](list_Element, null, dropDownElement));
};

var menu_dropDownElementMapping = function dropDownElementMapping($dropdown) {
  var dropDownProps = menu_objectSpread({}, $dropdown);

  return /*#__PURE__*/react["createElement"](dropdown_Element, dropDownProps);
};


// CONCATENATED MODULE: ./src/index.tsx


function src_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function src_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { src_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { src_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var _SCREEN_WIDTH = Width.M;
var _LOGO = {
  url: '/uploads/logo.png'
};
var _INDEX = {
  url: '/'
};
var menu_props = {
  align: Align.RIGHT
};
var menu_desktop_list_items_link_props = {
  margin: MarginLeft.L1,
  theme: Theme.DARK,
  fontStyle: FontStyle.BOLD,
  size: Size.S,
  type: link_Type.EXTERNAL
};
var menu = {
  $desktop: src_objectSpread(src_objectSpread({}, menu_props), {}, {
    $list: {
      $items: [{
        $link: src_objectSpread(src_objectSpread({}, menu_desktop_list_items_link_props), {}, {
          text: 'Safer Play',
          url: 'https://www.singaporepools.com.sg/ms/sp/en/index.html'
        })
      }, {
        $link: src_objectSpread(src_objectSpread({}, menu_desktop_list_items_link_props), {}, {
          text: 'Our Services',
          url: 'https://www.singaporepools.com.sg/en/services/Pages/index.html'
        })
      }, {
        $link: src_objectSpread(src_objectSpread({}, menu_desktop_list_items_link_props), {}, {
          text: 'FAQ',
          url: 'https://www.singaporepools.com.sg/en/faq/Pages/account-registration.html'
        })
      }, {
        $link: src_objectSpread(src_objectSpread({}, menu_desktop_list_items_link_props), {}, {
          text: 'Corporate',
          url: 'https://www.singaporepools.com.sg/en/Pages/default.aspx'
        })
      }]
    }
  }),
  $mobile: {}
};
var lotteryBannerSection = {
  $innerBlock: {
    height: Height.PX_150,
    width: _SCREEN_WIDTH,
    $slider: {
      $innerSlider: {
        $items: [{
          text: 'item1',
          $image: {
            src: "/uploads/b1.jpg"
          },
          $button: {
            type: link_Type.EXTERNAL,
            text: 'Find out more',
            url: 'https://www.singaporepools.com.sg/ms/spa/en/index.html'
          }
        }, {
          text: 'item2',
          $image: {
            src: "/uploads/b2.jpg"
          },
          $button: {
            type: link_Type.EXTERNAL,
            text: 'Find out more',
            url: 'https://www.singaporepools.com.sg/ms/spa/en/index.html'
          }
        }, {
          text: 'item3',
          $image: {
            src: "/uploads/b3.png"
          },
          $button: {
            type: link_Type.EXTERNAL,
            text: 'Find out more',
            url: 'https://www.singaporepools.com.sg/ms/claim/en/index.html'
          }
        }, {
          text: 'item4',
          $image: {
            src: "/uploads/b4.jpg"
          },
          $button: {
            type: link_Type.EXTERNAL,
            text: 'Find out more',
            url: 'https://www.singaporepools.com.sg/ms/open/en/index.html'
          }
        }, {
          text: 'item4',
          $image: {
            src: "/uploads/b5.jpg"
          },
          $button: {
            type: link_Type.EXTERNAL,
            text: 'Find out more',
            url: 'https://www.singaporepools.com.sg/ms/open/en/index.html#caring'
          }
        }]
      }
    }
  }
};
var indexBannerSection = {
  padding: Padding.NONE,
  $innerBlock: {
    width: _SCREEN_WIDTH,
    $slider: {
      $innerSlider: {
        $items: [{
          $image: {
            src: "/uploads/b1.jpg"
          },
          $contentBlock: {
            $title: {
              text: 'Still Queuing to Collect your Winnings?'
            },
            $description: {
              text: 'With a Singapore pools Account, winnings can be credited directly online.'
            },
            $button: {
              text: 'Find out more',
              url: 'https://www.singaporepools.com.sg/ms/spa/en/index.html'
            }
          }
        }, {
          text: 'item2',
          $image: {
            src: "/uploads/b2.jpg"
          },
          $contentBlock: {
            $title: {
              text: 'Safer Play'
            },
            $description: {
              text: 'Set a budget and stick to it.'
            },
            $button: {
              text: 'Find out more',
              url: 'https://www.singaporepools.com.sg/ms/spa/en/index.html'
            }
          }
        }, {
          text: 'item3',
          $image: {
            src: "/uploads/b3.png"
          },
          $contentBlock: {
            $title: {
              text: 'Check your TICKET'
            },
            $description: {
              text: 'Prize claim for different types of tickets will only be available at selected outlets.'
            },
            $button: {
              text: 'Find out more',
              url: 'https://www.singaporepools.com.sg/ms/claim/en/index.html'
            }
          }
        }, {
          text: 'item4',
          $image: {
            src: "/uploads/b4.jpg"
          },
          $contentBlock: {
            $title: {
              text: 'Operations Update'
            },
            $button: {
              text: 'Find out more',
              url: 'https://www.singaporepools.com.sg/ms/open/en/index.html'
            }
          }
        }, {
          text: 'item4',
          $image: {
            src: "/uploads/b5.jpg"
          },
          $contentBlock: {
            $title: {
              text: 'Caring for you'
            },
            $description: {
              text: 'Here\'s how you can stay safe at our outlets.'
            },
            $button: {
              text: 'Find out more',
              url: 'https://www.singaporepools.com.sg/ms/open/en/index.html#caring'
            }
          }
        }]
      }
    }
  }
};
var tableData = {
  rows: [{
    cells: [{
      children: 'Winning Prize',
      type: cell_Type.TITLE,
      align: TextAlign.CENTER,
      style: {
        flexGrow: 2,
        color: 'white'
      }
    }],
    style: {
      backgroundColor: '#17549e'
    }
  }, {
    cells: [{
      children: 'item1',
      align: TextAlign.CENTER
    }, {
      children: 'item2',
      align: TextAlign.CENTER
    }]
  }, {
    cells: [{
      children: 'Starter Prizes',
      type: cell_Type.TITLE,
      align: TextAlign.CENTER,
      style: {
        flexGrow: 2,
        color: 'white'
      }
    }],
    style: {
      backgroundColor: '#6a6a6a'
    }
  }, {
    cells: [{
      children: 'Consolation Prizes',
      type: cell_Type.TITLE,
      align: TextAlign.CENTER,
      style: {
        flexGrow: 2,
        color: 'white'
      }
    }],
    style: {
      backgroundColor: '#6a6a6a'
    }
  }]
};
var prizesTable = {
  wrapper: {
    table: {
      data: tableData
    },
    style: {
      width: '800px'
    }
  }
};
var footerMenu_innerBlock_props = {
  flex: Flex.EVENLY
};
var footerMenu_innerBlock_blocks_props = {
  theme: Theme.DARK,
  style: {
    lineHeight: '1.8'
  }
};
var footerMenu_innerBlock_blocks_link_props = {
  theme: Theme.DARK,
  fontStyle: FontStyle.BOLD
};
var footerMenu_innerBlock_blocks_items_props = {
  type: list_Type.VERTICAL
};
var footerMenu_innerBlock_blocks_items_items_props = {
  theme: Theme.DARK
};
var footerMenu = {
  style: {
    backgroundColor: '#474747',
    paddingBottom: '0'
  },
  $innerBlock: {
    width: _SCREEN_WIDTH,
    $blocks: [src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_props), {}, {
      $link: src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_link_props), {}, {
        text: 'Products'
      }),
      $items: src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_props), {}, {
        $items: [src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'Sports',
          url: 'https://online.singaporepools.com/en/sports'
        }), src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'Lottery',
          url: 'https://online.singaporepools.com/en/lottery'
        }), src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'Horse Racing',
          url: 'https://online.singaporepools.com/en/horseracing'
        }), src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'Singapore Pools Mobile App',
          url: 'https://online.singaporepools.com/en/sports/singapore-pools-mobile-app'
        })]
      })
    }), src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_props), {}, {
      $link: src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_link_props), {}, {
        text: 'Accounts'
      }),
      $items: src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_props), {}, {
        $items: [src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'Login',
          url: 'https://online.singaporepools.com/en/account'
        }), src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'Sign Up',
          url: 'https://online.singaporepools.com/en/account/registration'
        })]
      })
    }), src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_props), {}, {
      $link: src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_link_props), {}, {
        text: 'Information'
      }),
      $items: src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_props), {}, {
        $items: [src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'Safer Play',
          url: 'https://www.singaporepools.com.sg/ms/sp/en/index.html'
        }), src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'Our Services',
          url: 'https://www.singaporepools.com.sg/en/services/Pages/index.html'
        }), src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'FAQ',
          url: 'https://www.singaporepools.com.sg/en/faq/Pages/account-registration.html'
        }), src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'Contact Us',
          url: 'https://www.singaporepools.com.sg/en/cu/Pages/default.aspx'
        }), src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'Locate Outlets',
          url: 'https://www.singaporepools.com.sg/outlets/Pages/lo.aspx'
        })]
      })
    }), src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_props), {}, {
      $link: src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_link_props), {}, {
        text: 'Corporate'
      }),
      $items: src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_props), {}, {
        $items: [src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'Corporate Website',
          url: 'https://www.singaporepools.com.sg/en/Pages/default.aspx'
        }), src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'About Singapore Pools',
          url: 'https://www.singaporepools.com.sg/en/ci/Pages/default.aspx'
        }), src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'Press Releases',
          url: 'https://www.singaporepools.com.sg/en/pr/Pages/default.aspx'
        }), src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'Careers',
          url: 'https://www.singaporepools.com.sg/en/ca/Pages/default.aspx'
        }), src_objectSpread(src_objectSpread({}, footerMenu_innerBlock_blocks_items_items_props), {}, {
          text: 'Tender & Quotations',
          url: 'https://www.singaporepools.com.sg/en/tnq/Pages/default.aspx'
        })]
      })
    })]
  }
};
var copyrightSection = {
  $innerBlock: {
    width: _SCREEN_WIDTH,
    $text: {
      $texts: [{
        text: '© Copyright Singapore Pools',
        style: {
          fontSize: '18px',
          color: 'white',
          fontWeight: 'bold',
          marginBottom: '3px'
        }
      }, {
        text: 'Singapore Pools takes a strong Play Responsibly stand. Customers should play our games just for a little flutter and it must not adversely affect their finances or lifestyle. Our game rules do not allow any person under the age of 18 to place a bet or claim a winning ticket prize. Account betting is only available to those above 21 years old. Any information, statistics or editorials which originate from third-party service providers (e.g. event-related content, venue information, scores, timings or results) and are displayed here, are intended for general information purposes only. We accept no responsibility for bets placed in reliance on the same. You are encouraged to read our Terms and Conditions and Privacy Policy before proceeding. Please exit if you are under 18.',
        style: {
          fontSize: '11px',
          lineHeight: '1.1em',
          color: 'white'
        }
      }]
    }
  },
  style: {
    backgroundColor: '#474747'
  }
};
var indexImageLinkListSection_imageLinkList_list_styles = {
  listStyleType: 'disc',
  backgroundColor: 'rgba(1,116,213,0.7)',
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%'
};
var indexImageLinkListSection_imageLinkList_list_li_styles = {
  marginLeft: '26px'
};
var indexImageLinkListSection_imageLinkList_link_styles = {
  position: 'absolute',
  right: '18px',
  top: '22px',
  color: 'white',
  fontWeight: 'bold'
};
var indexImageLinkListSection = {
  $innerBlock: {
    width: _SCREEN_WIDTH,
    $imageLinkList: [{
      $imageBlock: {
        $image: {
          src: '/uploads/l1.jpg'
        }
      },
      $list: {
        padding: Padding.S,
        theme: Theme.DARK,
        $li: {
          style: indexImageLinkListSection_imageLinkList_list_li_styles
        },
        $links: [{
          theme: Theme.DARK,
          size: Size.S,
          type: link_Type.EXTERNAL,
          url: 'https://online.singaporepools.com/en/sports/results',
          text: 'Sports Results'
        }],
        style: indexImageLinkListSection_imageLinkList_list_styles
      },
      $link: {
        size: Size.L1,
        type: link_Type.EXTERNAL,
        url: 'https://online.singaporepools.com/en/sports',
        text: 'SPORTS',
        style: indexImageLinkListSection_imageLinkList_link_styles
      }
    }, {
      $imageBlock: {
        $image: {
          src: '/uploads/l2.jpg'
        }
      },
      $list: {
        padding: Padding.S,
        theme: Theme.DARK,
        $li: {
          style: indexImageLinkListSection_imageLinkList_list_li_styles
        },
        $links: [{
          theme: Theme.DARK,
          size: Size.S,
          url: '/4d_results',
          text: '4D Results'
        }, {
          theme: Theme.DARK,
          size: Size.S,
          type: link_Type.EXTERNAL,
          url: 'https://www.singaporepools.com.sg/en/product/Pages/toto_results.aspx',
          text: 'TOTO Results'
        }, {
          theme: Theme.DARK,
          size: Size.S,
          type: link_Type.EXTERNAL,
          url: 'https://www.singaporepools.com.sg/en/product/Pages/sweep_results.aspx',
          text: 'Singapore Sweep Results'
        }],
        style: indexImageLinkListSection_imageLinkList_list_styles
      },
      $link: {
        size: Size.L1,
        type: link_Type.EXTERNAL,
        url: 'https://online.singaporepools.com/en/lottery',
        text: 'LOTTERY',
        style: indexImageLinkListSection_imageLinkList_link_styles
      }
    }, {
      $imageBlock: {
        $image: {
          src: '/uploads/l3.jpg'
        }
      },
      $list: {
        theme: Theme.DARK,
        padding: Padding.S,
        $li: {
          style: indexImageLinkListSection_imageLinkList_list_li_styles
        },
        $links: [{
          theme: Theme.DARK,
          size: Size.S,
          type: link_Type.EXTERNAL,
          url: 'https://www.singaporepools.com.sg/en/HorseRacing/Pages/RaceResultAndDividends.aspx',
          text: 'Horse Racing Results'
        }, {
          theme: Theme.DARK,
          size: Size.S,
          type: link_Type.EXTERNAL,
          url: 'https://www.singaporepools.com.sg/en/HorseRacing/Pages/RaceCards.aspx',
          text: 'Horse Racing Race Cards'
        }],
        style: indexImageLinkListSection_imageLinkList_list_styles
      },
      $link: {
        size: Size.L1,
        type: link_Type.EXTERNAL,
        url: 'https://online.singaporepools.com/en/horseracing',
        text: 'HORSE RACING',
        style: indexImageLinkListSection_imageLinkList_link_styles
      }
    }]
  }
};
var imagesSection = {
  $innerBlock: {
    width: _SCREEN_WIDTH,
    $imageTexts: [{
      $imageBlock: {
        $image: {
          src: '/uploads/image1.png'
        }
      }
    }, {
      $imageBlock: {
        $image: {
          src: '/uploads/image2.png'
        }
      }
    }, {
      $imageBlock: {
        $image: {
          src: '/uploads/image3.png'
        }
      }
    }, {
      $imageBlock: {
        $image: {
          src: '/uploads/image4.png'
        }
      }
    }]
  } // padding: Base.Padding.M,

};
var lotteryTemplateProps = {
  width: Width.M,
  $header: {
    $block: {
      $logo: {
        padding: Padding.S
      },
      menu: menu
    }
  },
  $index: {
    $bannerSection: indexBannerSection,
    $prizesTable: prizesTable,
    $imageLinkListSection: indexImageLinkListSection
  },
  $footer: {
    $copyrightSection: copyrightSection,
    $imageListSection: imagesSection
  }
};
var indexTemplateProps = {
  width: Width.M,
  $header: {
    style: {
      backgroundColor: '#055f8e'
    },
    $innerBlock: {
      width: _SCREEN_WIDTH,
      padding: Padding.S,
      $logo: {
        size: logo_Size.L,
        $image: {
          src: _LOGO.url
        }
      },
      menu: menu
    }
  },
  $index: {
    $bannerSection: indexBannerSection,
    $prizesTable: prizesTable,
    $imageLinkListSection: indexImageLinkListSection
  },
  $footer: {
    $footerMenu: footerMenu,
    $copyrightSection: copyrightSection,
    $imageListSection: imagesSection
  }
};

var src_IndexTemplateComponent = function IndexTemplateComponent() {
  return /*#__PURE__*/react_default.a.createElement(index_Element, indexTemplateProps);
}; // const LotteryTemplateComponent = () => (
//   <LotteryTemplate.Element {...lotteryTemplateProps} />
// );


var src_App = function App() {
  return /*#__PURE__*/react_default.a.createElement(index_Element, indexTemplateProps);
};

react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(src_App, null), document.getElementById("root"));

/***/ })

/******/ });