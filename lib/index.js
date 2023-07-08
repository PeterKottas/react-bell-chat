(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, (__WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/Author/index.ts":
/*!*********************************!*\
  !*** ./src/lib/Author/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


/***/ }),

/***/ "./src/lib/Avatar/classes.ts":
/*!***********************************!*\
  !*** ./src/lib/Avatar/classes.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAvatarClasses: () => (/* binding */ classes)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var classes = {
  container: 'react-bell-chat__avatar',
  text: 'react-bell-chat__avatar__text'
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(classes, "classes", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\Avatar\\classes.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/Avatar/index.tsx":
/*!**********************************!*\
  !*** ./src/lib/Avatar/index.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Avatar: () => (/* binding */ Memoized),
/* harmony export */   defaultAvatarClasses: () => (/* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_3__.defaultAvatarClasses),
/* harmony export */   defaultAvatarStyles: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_2__.defaultAvatarStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/lib/Avatar/styles.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes */ "./src/lib/Avatar/classes.ts");
/* harmony import */ var _utils_typedMemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/typedMemo */ "./src/lib/utils/typedMemo.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







function Avatar(props) {
  var _props$styles;
  var author = props.author,
    classes = props.classes,
    styles = props.styles;
  var style = _objectSpread(_objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__.defaultAvatarStyles.container), styles === null || styles === void 0 ? void 0 : styles.container), author !== null && author !== void 0 && author.bgImageUrl ? {
    backgroundImage: "url(".concat(author === null || author === void 0 ? void 0 : author.bgImageUrl, ")"),
    backgroundSize: 'cover'
  } : {});
  return author && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: style,
    title: author.name,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_3__.defaultAvatarClasses.container, classes === null || classes === void 0 ? void 0 : classes.container)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: _objectSpread(_objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__.defaultAvatarStyles.text), styles === null || styles === void 0 ? void 0 : styles.text), (_props$styles = props.styles) === null || _props$styles === void 0 ? void 0 : _props$styles.text),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_3__.defaultAvatarClasses.text, classes === null || classes === void 0 ? void 0 : classes.text)
  }, author.bgImageUrl ? null : author.avatarName ? author.avatarName : author.name.split(' ').map(function (part) {
    return part[0];
  }).join('').toUpperCase().substr(0, 3)));
}
var Memoized = (0,_utils_typedMemo__WEBPACK_IMPORTED_MODULE_4__.typedMemo)(Avatar);

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(Avatar, "Avatar", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\Avatar\\index.tsx");
  reactHotLoader.register(Memoized, "Memoized", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\Avatar\\index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/Avatar/styles.ts":
/*!**********************************!*\
  !*** ./src/lib/Avatar/styles.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAvatarStyles: () => (/* binding */ styles)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var styles = {
  container: {
    position: 'absolute',
    left: -50,
    top: 0,
    width: 40,
    height: 40,
    lineHeight: '40px',
    fontWeight: 400,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    textAlign: 'center',
    borderTopRightRadius: 5
  },
  text: {
    pointerEvents: 'none'
  }
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(styles, "styles", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\Avatar\\styles.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/BubbleGroup/classes.ts":
/*!****************************************!*\
  !*** ./src/lib/BubbleGroup/classes.ts ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultBubbleGroupClasses: () => (/* binding */ classes)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var classes = {
  chatBubbleWrapper: 'react-bell-chat__bubble-group'
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(classes, "classes", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\BubbleGroup\\classes.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/BubbleGroup/index.tsx":
/*!***************************************!*\
  !*** ./src/lib/BubbleGroup/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BubbleGroup: () => (/* binding */ Memoized),
/* harmony export */   defaultBubbleGroupClasses: () => (/* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_2__.defaultBubbleGroupClasses),
/* harmony export */   defaultBubbleGroupStyles: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_3__.defaultBubbleGroupStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./src/lib/BubbleGroup/classes.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/lib/BubbleGroup/styles.ts");
/* harmony import */ var _utils_typedMemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/typedMemo */ "./src/lib/utils/typedMemo.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







function BubbleGroup(props) {
  var messages = props.messages,
    author = props.author,
    CustomAvatar = props.CustomAvatar,
    styles = props.styles,
    bubblesCentered = props.bubblesCentered,
    chatBubbleStyles = props.chatBubbleStyles,
    lastSeenAvatarStyles = props.lastSeenAvatarStyles,
    avatarStyles = props.avatarStyles,
    classes = props.classes,
    chatBubbleClasses = props.chatBubbleClasses,
    lastSeenAvatarClasses = props.lastSeenAvatarClasses,
    avatarClasses = props.avatarClasses,
    showRecipientAvatar = props.showRecipientAvatar,
    CustomChatBubble = props.CustomChatBubble,
    CustomSystemChatBubble = props.CustomSystemChatBubble,
    showRecipientLastSeenMessage = props.showRecipientLastSeenMessage,
    CustomLastSeenAvatar = props.CustomLastSeenAvatar,
    CustomMessageRender = props.CustomMessageRender;
  var messageNodes = messages.map(function (message, i) {
    var _props = {
      yourAuthorId: props.yourAuthorId,
      author: author,
      message: message,
      bubblesCentered: bubblesCentered,
      styles: chatBubbleStyles,
      lastSeenAvatarStyles: lastSeenAvatarStyles,
      classes: chatBubbleClasses,
      lastSeenAvatarClasses: lastSeenAvatarClasses,
      isFirstInGroup: i === 0,
      isLastInGroup: i === messages.length - 1 && messages.length > 1,
      isCenterInGroup: i < messages.length - 1 && messages.length > 1,
      lastSeenByAuthors: props.authors && props.authors.filter(function (a) {
        return a.lastSeenMessageId !== undefined && a.lastSeenMessageId === message.id;
      }),
      showRecipientLastSeenMessage: showRecipientLastSeenMessage,
      CustomLastSeenAvatar: CustomLastSeenAvatar,
      CustomMessageRender: CustomMessageRender
    };
    return message.authorId !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CustomChatBubble, _extends({
      key: i
    }, _props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CustomSystemChatBubble, _extends({
      key: i
    }, _props));
  });
  var youAreAuthor = author && props.yourAuthorId === author.id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_3__.defaultBubbleGroupStyles.bubbleGroupWrapper), styles === null || styles === void 0 ? void 0 : styles.bubbleGroupWrapper),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_2__.defaultBubbleGroupClasses.chatBubbleWrapper, classes === null || classes === void 0 ? void 0 : classes.chatBubbleWrapper)
  }, !youAreAuthor && showRecipientAvatar && author && CustomAvatar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CustomAvatar, {
    author: author,
    styles: avatarStyles,
    classes: avatarClasses
  }), messageNodes);
}
var Memoized = (0,_utils_typedMemo__WEBPACK_IMPORTED_MODULE_4__.typedMemo)(BubbleGroup);

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(BubbleGroup, "BubbleGroup", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\BubbleGroup\\index.tsx");
  reactHotLoader.register(Memoized, "Memoized", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\BubbleGroup\\index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/BubbleGroup/styles.ts":
/*!***************************************!*\
  !*** ./src/lib/BubbleGroup/styles.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultBubbleGroupStyles: () => (/* binding */ styles)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var styles = {
  bubbleGroupWrapper: {
    marginTop: 10,
    marginBottom: 10,
    position: 'relative'
  }
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(styles, "styles", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\BubbleGroup\\styles.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/ChatBubble/classes.ts":
/*!***************************************!*\
  !*** ./src/lib/ChatBubble/classes.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultChatBubbleClasses: () => (/* binding */ classes)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var classes = {
  chatBubbleWrapper: 'react-bell-chat__chat-bubble__wrapper',
  isSend: 'react-bell-chat__chat-bubble__is-send',
  chatBubble: 'react-bell-chat__chat-bubble',
  userChatBubble: 'react-bell-chat__chat-bubble--user',
  recipientChatBubble: 'react-bell-chat__chat-bubble--recipient',
  text: 'react-bell-chat__chat-bubble__text',
  userText: 'react-bell-chat__chat-bubble__text--user',
  recipientText: 'react-bell-chat__chat-bubble__text--recipient',
  createdOn: 'react-bell-chat__chat-bubble__created-on',
  userCreatedOn: 'react-bell-chat__chat-bubble__created-on--user',
  recipientCreatedOn: 'react-bell-chat__chat-bubble__created-on--recipient',
  lastSeenByContainer: 'react-bell-chat__chat-bubble__last-seen-by__container'
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(classes, "classes", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\ChatBubble\\classes.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/ChatBubble/config.ts":
/*!**************************************!*\
  !*** ./src/lib/ChatBubble/config.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultChatBubbleConfig: () => (/* binding */ config)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var config = {
  formatTime: function formatTime(date) {
    return date === null || date === void 0 ? void 0 : date.toLocaleTimeString([], {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  }
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(config, "config", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\ChatBubble\\config.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/ChatBubble/index.tsx":
/*!**************************************!*\
  !*** ./src/lib/ChatBubble/index.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatBubble: () => (/* binding */ ChatBubble),
/* harmony export */   defaultChatBubbleClasses: () => (/* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatBubbleClasses),
/* harmony export */   defaultChatBubbleConfig: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_4__.defaultChatBubbleConfig),
/* harmony export */   defaultChatBubbleStyles: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/lib/ChatBubble/styles.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes */ "./src/lib/ChatBubble/classes.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/lib/ChatBubble/config.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








function ChatBubble(props) {
  var _classes$recipientCha, _classes$userChatBubb, _classnames, _classes$userCreatedO, _classes$recipientCre, _classnames2;
  if (!props.message) {
    return null;
  }
  var lastSeenAvatarStyles = props.lastSeenAvatarStyles,
    yourAuthorId = props.yourAuthorId,
    lastSeenAvatarClasses = props.lastSeenAvatarClasses,
    styles = props.styles,
    classes = props.classes,
    config = props.config;
  var finalConfig = _objectSpread(_objectSpread({}, _config__WEBPACK_IMPORTED_MODULE_4__.defaultChatBubbleConfig), config);
  var _ref = styles !== null && styles !== void 0 ? styles : {},
    userChatBubble = _ref.userChatBubble,
    chatBubble = _ref.chatBubble,
    text = _ref.text,
    userText = _ref.userText,
    recipientText = _ref.recipientText,
    recipientChatBubble = _ref.recipientChatBubble,
    firstChatBubbleInGroup = _ref.firstChatBubbleInGroup,
    userFirstChatBubbleInGroup = _ref.userFirstChatBubbleInGroup,
    recipientFirstChatBubbleInGroup = _ref.recipientFirstChatBubbleInGroup,
    centerChatBubbleInGroup = _ref.centerChatBubbleInGroup,
    userCenterChatBubbleInGroup = _ref.userCenterChatBubbleInGroup,
    recipientCenterChatBubbleInGroup = _ref.recipientCenterChatBubbleInGroup,
    lastChatBubbleInGroup = _ref.lastChatBubbleInGroup,
    userLastChatBubbleInGroup = _ref.userLastChatBubbleInGroup,
    recipientLastChatBubbleInGroup = _ref.recipientLastChatBubbleInGroup,
    userChatBubbleOrientationNormal = _ref.userChatBubbleOrientationNormal,
    recipientChatBubbleOrientationNormal = _ref.recipientChatBubbleOrientationNormal,
    chatBubbleWrapper = _ref.chatBubbleWrapper,
    createdOn = _ref.createdOn,
    userCreatedOn = _ref.userCreatedOn,
    recipientCreatedOn = _ref.recipientCreatedOn,
    isSendIconColor = _ref.isSendIconColor,
    isSend = _ref.isSend,
    loadingSpinnerColor = _ref.loadingSpinnerColor,
    lastSeenByContainer = _ref.lastSeenByContainer;
  var youAreAuthor = props.message.authorId === yourAuthorId;

  // message.id 0 is reserved for blue
  var finalChatBubbleStyles = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.chatBubble), chatBubble), youAreAuthor ? _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.userChatBubble : _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.recipientChatBubble), youAreAuthor ? userChatBubble : recipientChatBubble), youAreAuthor ? _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.userChatBubbleOrientationNormal : _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.recipientChatBubbleOrientationNormal), youAreAuthor ? userChatBubbleOrientationNormal : recipientChatBubbleOrientationNormal), props.isFirstInGroup && _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.firstChatBubbleInGroup), props.isFirstInGroup && (youAreAuthor ? _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.userFirstChatBubbleInGroup : _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.recipientFirstChatBubbleInGroup)), props.isCenterInGroup && _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.centerChatBubbleInGroup), props.isCenterInGroup && (youAreAuthor ? _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.userCenterChatBubbleInGroup : _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.recipientCenterChatBubbleInGroup)), props.isLastInGroup && _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.lastChatBubbleInGroup), props.isLastInGroup && (youAreAuthor ? _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.userLastChatBubbleInGroup : _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.recipientLastChatBubbleInGroup)), props.isFirstInGroup && firstChatBubbleInGroup), props.isFirstInGroup && (youAreAuthor ? userFirstChatBubbleInGroup : recipientFirstChatBubbleInGroup)), props.isCenterInGroup && centerChatBubbleInGroup), props.isCenterInGroup && (youAreAuthor ? userCenterChatBubbleInGroup : recipientCenterChatBubbleInGroup)), props.isLastInGroup && lastChatBubbleInGroup), props.isLastInGroup && (youAreAuthor ? userLastChatBubbleInGroup : recipientLastChatBubbleInGroup));
  var messageStyle = _objectSpread(_objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.text), text), youAreAuthor ? userText : recipientText);
  var messageClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatBubbleClasses.text, classes === null || classes === void 0 ? void 0 : classes.text, youAreAuthor ? _classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatBubbleClasses.userText : _classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatBubbleClasses.recipientText, youAreAuthor ? classes === null || classes === void 0 ? void 0 : classes.userText : classes === null || classes === void 0 ? void 0 : classes.recipientText);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isMouseOverLastSeenContainer = _React$useState2[0],
    setIsMouseOverLastSeenContainer = _React$useState2[1];
  var onMouseEnterLastSeenContainer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    return setIsMouseOverLastSeenContainer(true);
  }, []);
  var onMouseLeaveLastSeenContainer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    return setIsMouseOverLastSeenContainer(false);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.chatBubbleWrapper), chatBubbleWrapper),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatBubbleClasses.chatBubbleWrapper, classes === null || classes === void 0 ? void 0 : classes.chatBubbleWrapper)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: _objectSpread({}, finalChatBubbleStyles),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatBubbleClasses.chatBubble, classes === null || classes === void 0 ? void 0 : classes.chatBubble, (_classnames = {}, _defineProperty(_classnames, _classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatBubbleClasses.recipientChatBubble, !youAreAuthor), _defineProperty(_classnames, (_classes$recipientCha = classes === null || classes === void 0 ? void 0 : classes.recipientChatBubble) !== null && _classes$recipientCha !== void 0 ? _classes$recipientCha : '', !youAreAuthor), _defineProperty(_classnames, _classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatBubbleClasses.userChatBubble, youAreAuthor), _defineProperty(_classnames, (_classes$userChatBubb = classes === null || classes === void 0 ? void 0 : classes.userChatBubble) !== null && _classes$userChatBubb !== void 0 ? _classes$userChatBubb : '', youAreAuthor), _classnames))
  }, props.CustomMessageRender ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.CustomMessageRender, {
    message: props.message,
    style: messageStyle,
    className: messageClassName
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: messageStyle,
    className: messageClassName
  }, props.message.message), props.message.createdOn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.createdOn), createdOn), youAreAuthor ? _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.userCreatedOn : _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.recipientCreatedOn), youAreAuthor ? userCreatedOn : recipientCreatedOn),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatBubbleClasses.createdOn, classes === null || classes === void 0 ? void 0 : classes.createdOn, (_classnames2 = {}, _defineProperty(_classnames2, _classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatBubbleClasses.userCreatedOn, youAreAuthor), _defineProperty(_classnames2, (_classes$userCreatedO = classes === null || classes === void 0 ? void 0 : classes.userCreatedOn) !== null && _classes$userCreatedO !== void 0 ? _classes$userCreatedO : '', youAreAuthor), _defineProperty(_classnames2, _classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatBubbleClasses.recipientCreatedOn, !youAreAuthor), _defineProperty(_classnames2, (_classes$recipientCre = classes === null || classes === void 0 ? void 0 : classes.recipientCreatedOn) !== null && _classes$recipientCre !== void 0 ? _classes$recipientCre : '', !youAreAuthor), _classnames2)),
    title: props.message.createdOn.toLocaleString()
  }, finalConfig.formatTime(props.message.createdOn)), props.message.isSend !== undefined && youAreAuthor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.isSend), isSend),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatBubbleClasses.isSend, classes === null || classes === void 0 ? void 0 : classes.isSend)
    // TODO: Maybe when we do translations
    // title={props.message.isSend ? 'Send' : 'Sending'}
  }, props.message.isSend ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: "10px",
    height: "10px",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 10 10",
    preserveAspectRatio: "xMidYMid",
    style: {
      background: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: isSendIconColor ? isSendIconColor : _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.isSendIconColor,
    d: "M9,1.7L8.6,1.4C8.5,1.3,8.3,1.3,8.2,1.4L3.9,7C3.8,7.1,3.6,7.1,3.5,7c0,0,0,0,0,0L1.7,5.3c-0.1-0.1-0.3-0.1-0.4,0L1,5.6 C0.9,5.7,0.9,5.9,1,6l2.6,2.6c0.1,0.1,0.3,0.1,0.4,0L9,2.1C9.1,2,9.1,1.8,9,1.7z"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: "10px",
    height: "10px",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid",
    style: {
      background: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "none",
    d: "M10 50A40 40 0 0 0 90 50A40 45 0 0 1 10 50",
    fill: loadingSpinnerColor ? loadingSpinnerColor : _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.loadingSpinnerColor,
    transform: "rotate(78 50 52.5)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    calcMode: "linear",
    values: "0 50 52.5;360 50 52.5",
    keyTimes: "0;1",
    dur: "1s",
    begin: "0s",
    repeatCount: "indefinite"
  }))))), props.showRecipientLastSeenMessage && props.lastSeenByAuthors && props.lastSeenByAuthors.length > 0 && props.CustomLastSeenAvatar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatBubbleStyles.lastSeenByContainer), lastSeenByContainer),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatBubbleClasses.lastSeenByContainer, classes === null || classes === void 0 ? void 0 : classes.lastSeenByContainer),
    onMouseEnter: onMouseEnterLastSeenContainer,
    onMouseLeave: onMouseLeaveLastSeenContainer
    // TODO: Maybe when we do translations
    /*title={
        'Last seen by ' +
        props.lastSeenByAuthors
          .map((a) => a.name)
          .join(', ')
          .replace(/,(?!.*,)/gim, ' and')
      }*/
  }, props.lastSeenByAuthors.map(function (a, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.CustomLastSeenAvatar, {
      key: i,
      author: a,
      styles: lastSeenAvatarStyles,
      index: i,
      mouseOver: isMouseOverLastSeenContainer,
      classes: lastSeenAvatarClasses
    });
  })));
}
__signature__(ChatBubble, "useState{[\n    isMouseOverLastSeenContainer,\n    setIsMouseOverLastSeenContainer,\n  ](false)}\nuseCallback{onMouseEnterLastSeenContainer}\nuseCallback{onMouseLeaveLastSeenContainer}");
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(ChatBubble, "ChatBubble", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\ChatBubble\\index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/ChatBubble/styles.ts":
/*!**************************************!*\
  !*** ./src/lib/ChatBubble/styles.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultChatBubbleStyles: () => (/* binding */ styles)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var styles = {
  chatBubbleWrapper: {
    position: 'relative',
    marginBottom: 2,
    display: 'flex'
  },
  chatBubble: {
    position: 'relative',
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '80%',
    paddingTop: 8,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14
  },
  userChatBubbleOrientationNormal: {
    marginRight: 0
  },
  recipientChatBubbleOrientationNormal: {
    marginLeft: 0
  },
  recipientChatBubble: {},
  text: {
    fontSize: 16,
    fontWeight: 300,
    margin: 0,
    marginRight: 30,
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    hyphens: 'auto'
  },
  userFirstChatBubbleInGroup: {
    borderTopRightRadius: 0
  },
  recipientFirstChatBubbleInGroup: {
    borderTopLeftRadius: 0
  },
  userLastChatBubbleInGroup: {
    borderTopRightRadius: 0
  },
  recipientLastChatBubbleInGroup: {
    borderTopLeftRadius: 0
  },
  userCenterChatBubbleInGroup: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  recipientCenterChatBubbleInGroup: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0
  },
  createdOn: {
    position: 'absolute',
    right: 14,
    bottom: 2,
    fontSize: 9,
    opacity: 0.5
  },
  isSend: {
    position: 'absolute',
    right: 2,
    bottom: 1,
    fontSize: 9,
    opacity: 0.5
  },
  lastSeenByContainer: {
    position: 'absolute',
    right: -30,
    top: 0,
    width: 20,
    height: '100%'
  },
  loadingSpinnerColor: 'currentColor',
  isSendIconColor: 'currentColor'
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(styles, "styles", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\ChatBubble\\styles.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/ChatFeed/classes.ts":
/*!*************************************!*\
  !*** ./src/lib/ChatFeed/classes.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultChatFeedClasses: () => (/* binding */ classes)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var classes = {
  chatPanel: 'react-bell-chat__chat-panel'
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(classes, "classes", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\ChatFeed\\classes.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/ChatFeed/index.tsx":
/*!************************************!*\
  !*** ./src/lib/ChatFeed/index.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatFeed: () => (/* binding */ ChatFeed),
/* harmony export */   defaultChatFeedClasses: () => (/* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_14__.defaultChatFeedClasses),
/* harmony export */   defaultChatFeedStyles: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_13__.defaultChatFeedStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BubbleGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BubbleGroup */ "./src/lib/BubbleGroup/index.tsx");
/* harmony import */ var _ChatBubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ChatBubble */ "./src/lib/ChatBubble/index.tsx");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Avatar */ "./src/lib/Avatar/index.tsx");
/* harmony import */ var _IsTyping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../IsTyping */ "./src/lib/IsTyping/index.tsx");
/* harmony import */ var _ChatScrollArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ChatScrollArea */ "./src/lib/ChatScrollArea/index.tsx");
/* harmony import */ var _ChatMessagesContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ChatMessagesContainer */ "./src/lib/ChatMessagesContainer/index.tsx");
/* harmony import */ var _LastSeenAvatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LastSeenAvatar */ "./src/lib/LastSeenAvatar/index.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ "./src/lib/utils/utils.ts");
/* harmony import */ var _DateRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DateRow */ "./src/lib/DateRow/index.tsx");
/* harmony import */ var _LoadingMessages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../LoadingMessages */ "./src/lib/LoadingMessages/index.tsx");
/* harmony import */ var _SystemChatBubble__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../SystemChatBubble */ "./src/lib/SystemChatBubble/index.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles */ "./src/lib/ChatFeed/styles.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./classes */ "./src/lib/ChatFeed/classes.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
// Copyright 2017 Brandon Mowat
// Written, developed, and designed by Brandon Mowat for the purpose of helping
// other developers make chat interfaces.



















// Model for ChatFeed props.

function DefaultMessageRenderFunc(props) {
  return props.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: props.className,
    style: props.style
  }, props.message.message);
}
// React component to render a complete chat feed
var ChatFeed = /*#__PURE__*/function (_ref) {
  _inherits(ChatFeed, _ref);
  var _super = _createSuper(ChatFeed);
  function ChatFeed(props) {
    var _this;
    _classCallCheck(this, ChatFeed);
    _this = _super.call(this, props);
    _this.scrollApi = void 0;
    _this.renderMessages = _this.renderMessages.bind(_assertThisInitialized(_this));
    _this.onLoadOldMessages = _this.onLoadOldMessages.bind(_assertThisInitialized(_this));
    _this.apiRef = _this.apiRef.bind(_assertThisInitialized(_this));
    _this.state = {
      isLoadingMessages: false
    };
    return _this;
  }
  _createClass(ChatFeed, [{
    key: "onMessageSend",
    value: function onMessageSend() {
      this.scrollApi && this.scrollApi.scrollToBottom();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollApi && this.scrollApi.scrollToBottom();
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps, prevState) {
      var wasScrolledToBottom = this.scrollApi && this.scrollApi.scrolledToBottom();
      var scrollHeight = this.scrollApi && this.scrollApi.scrollHeight();
      var clientHeight = this.scrollApi && this.scrollApi.clientHeight();
      return {
        wasScrolledToBottom: wasScrolledToBottom,
        scrollHeight: scrollHeight,
        clientHeight: clientHeight
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this$props$authors, _this$props$authors$s;
      if ((this.props.messages.length !== prevProps.messages.length || (_this$props$authors = this.props.authors) !== null && _this$props$authors !== void 0 && (_this$props$authors$s = _this$props$authors.some) !== null && _this$props$authors$s !== void 0 && _this$props$authors$s.call(_this$props$authors, function (a) {
        var _prevProps$authors, _prevProps$authors$fi, _prevProps$authors$fi2;
        return a.isTyping !== ((_prevProps$authors = prevProps.authors) === null || _prevProps$authors === void 0 ? void 0 : (_prevProps$authors$fi = _prevProps$authors.find) === null || _prevProps$authors$fi === void 0 ? void 0 : (_prevProps$authors$fi2 = _prevProps$authors$fi.call(_prevProps$authors, function (_a) {
          return a.id === _a.id;
        })) === null || _prevProps$authors$fi2 === void 0 ? void 0 : _prevProps$authors$fi2.isTyping);
      })) && snapshot && snapshot.wasScrolledToBottom) {
        this.scrollApi.scrollToBottom();
      } else if (this.props.messages.length !== prevProps.messages.length && snapshot && prevState.isLoadingMessages) {
        var scrollHeight = this.scrollApi && this.scrollApi.scrollHeight();
        this.scrollApi.scrollTo(scrollHeight - snapshot.scrollHeight);
      }
    }

    /**
     * Determines what type of message/messages to render.
     */
  }, {
    key: "renderMessages",
    value: function renderMessages(messages) {
      var _this2 = this;
      var styles = this.props.styles;
      if (!styles) {
        styles = {};
      }
      var _this$props = this.props,
        chatBubbleStyles = _this$props.chatBubbleStyles,
        chatBubbleClasses = _this$props.chatBubbleClasses,
        dateRowStyles = _this$props.dateRowStyles,
        dateRowClasses = _this$props.dateRowClasses,
        avatarStyles = _this$props.avatarStyles,
        avatarClasses = _this$props.avatarClasses,
        lastSeenAvatarStyles = _this$props.lastSeenAvatarStyles,
        lastSeenAvatarClasses = _this$props.lastSeenAvatarClasses,
        bubbleGroupStyles = _this$props.bubbleGroupStyles,
        bubbleGroupClasses = _this$props.bubbleGroupClasses,
        CustomChatBubble = _this$props.CustomChatBubble,
        showRecipientAvatar = _this$props.showRecipientAvatar,
        CustomBubbleGroup = _this$props.CustomBubbleGroup;

      // First group by days
      var groups = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__.groupBy)(messages, function (item) {
        return item.createdOn && item.createdOn.toDateString();
      });
      var messageNodes = [];
      var jsxKey = 0;
      Object.keys(groups).forEach(function (key) {
        var group = [];
        var messagesGroup = groups[key];
        if (messagesGroup[0] && messagesGroup[0].createdOn && _this2.props.showDateRow) {
          messageNodes.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_this2.props.CustomDateRow, {
            key: key,
            date: messagesGroup[0].createdOn,
            styles: dateRowStyles,
            classes: dateRowClasses
          }));
        }
        messageNodes = messageNodes.concat(messagesGroup.map(function (message, index) {
          group.push(message);
          // Find diff in message type or no more messages
          if (!messagesGroup[index + 1] || messagesGroup[index + 1].authorId !== message.authorId) {
            var messageGroup = group;
            var author = _this2.props.authors && _this2.props.authors.filter(function (a) {
              return a.id === message.authorId;
            })[0];
            group = [];
            jsxKey++;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CustomBubbleGroup, {
              key: jsxKey,
              yourAuthorId: _this2.props.yourAuthorId,
              messages: messageGroup,
              author: author,
              authors: _this2.props.authors,
              showRecipientAvatar: showRecipientAvatar,
              CustomChatBubble: CustomChatBubble,
              chatBubbleStyles: chatBubbleStyles,
              chatBubbleClasses: chatBubbleClasses,
              avatarStyles: avatarStyles,
              avatarClasses: avatarClasses,
              lastSeenAvatarStyles: lastSeenAvatarStyles,
              lastSeenAvatarClasses: lastSeenAvatarClasses,
              showRecipientLastSeenMessage: _this2.props.showRecipientLastSeenMessage,
              CustomAvatar: _this2.props.CustomAvatar,
              CustomLastSeenAvatar: _this2.props.CustomLastSeenAvatar,
              CustomMessageRender: _this2.props.CustomMessageRender,
              CustomSystemChatBubble: _this2.props.CustomSystemChatBubble,
              classes: bubbleGroupClasses,
              styles: bubbleGroupStyles
            });
          }
          return null;
        }));
      });
      return messageNodes;
    }
  }, {
    key: "apiRef",
    value: function apiRef(e) {
      if (!this.scrollApi) {
        e.scrollToBottom();
      }
      this.scrollApi = e;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this,
        _classes;
      var _this$props2 = this.props,
        styles = _this$props2.styles,
        classes = _this$props2.classes;
      var _this$props3 = this.props,
        isTypingStyles = _this$props3.isTypingStyles,
        isTypingClasses = _this$props3.isTypingClasses;
      if (!styles) {
        styles = {};
      }
      if (!classes) {
        classes = {};
      }
      var _this$props4 = this.props,
        loadingMessagesStyle = _this$props4.loadingMessagesStyle,
        chatFeedStyles = _this$props4.chatFeedStyles,
        chatScrollAreaStyles = _this$props4.chatScrollAreaStyles,
        loadingMessagesClasses = _this$props4.loadingMessagesClasses,
        chatScrollAreaClasses = _this$props4.chatScrollAreaClasses;
      var typingAuthors = this.props.authors && this.props.authors.filter(function (a) {
        return a.isTyping && a.id !== _this3.props.yourAuthorId;
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(_classes__WEBPACK_IMPORTED_MODULE_14__.defaultChatFeedClasses.chatPanel, this.props.className, (_classes = classes) === null || _classes === void 0 ? void 0 : _classes.chatPanel),
        style: _objectSpread(_objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_13__.defaultChatFeedStyles.chatPanel), chatFeedStyles && chatFeedStyles.chatPanel), this.props.style)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.props.CustomScrollArea, {
        minHeight: this.props.minHeight,
        maxHeight: this.props.maxHeight,
        apiRef: this.apiRef,
        loadOldMessagesThreshold: this.props.loadOldMessagesThreshold,
        onLoadOldMessages: this.onLoadOldMessages,
        styles: chatScrollAreaStyles,
        classes: chatScrollAreaClasses
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.props.CustomChatMessagesContainer, {
        classes: this.props.chatMessagesContainerClasses,
        styles: this.props.chatMessagesContainerStyles,
        showIsTyping: this.props.showIsTyping,
        showRecipientAvatar: this.props.showRecipientAvatar,
        showRecipientLastSeenMessage: this.props.showRecipientLastSeenMessage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.props.CustomLoadingMessages, {
        key: -1,
        isVisible: this.props.showLoadingMessages && this.state.isLoadingMessages,
        styles: loadingMessagesStyle,
        classes: loadingMessagesClasses
      }), this.renderMessages(this.props.messages), this.props.showIsTyping && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.props.CustomIsTyping, {
        key: -2,
        typingAuthors: typingAuthors,
        styles: isTypingStyles,
        classes: isTypingClasses
      }))));
    }
  }, {
    key: "onLoadOldMessages",
    value: function () {
      var _onLoadOldMessages = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this4 = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!this.state.isLoadingMessages && this.props.hasOldMessages)) {
                _context.next = 8;
                break;
              }
              _context.next = 3;
              return new Promise(function (resolve) {
                _this4.setState({
                  isLoadingMessages: true
                }, function () {
                  return resolve();
                });
              });
            case 3:
              if (!this.props.onLoadOldMessages) {
                _context.next = 6;
                break;
              }
              _context.next = 6;
              return this.props.onLoadOldMessages();
            case 6:
              _context.next = 8;
              return new Promise(function (resolve) {
                _this4.setState({
                  isLoadingMessages: false
                }, function () {
                  if (_this4.scrollApi.scrolledToLoadThreshold()) {
                    _this4.scrollApi.scrollTo(_this4.props.loadOldMessagesThreshold + 1);
                  }
                  resolve();
                });
              });
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function onLoadOldMessages() {
        return _onLoadOldMessages.apply(this, arguments);
      }
      return onLoadOldMessages;
    }()
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return ChatFeed;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
ChatFeed.defaultProps = {
  messages: [],
  authors: [],
  CustomChatBubble: _ChatBubble__WEBPACK_IMPORTED_MODULE_2__.ChatBubble,
  CustomBubbleGroup: _BubbleGroup__WEBPACK_IMPORTED_MODULE_1__.BubbleGroup,
  CustomMessageRender: DefaultMessageRenderFunc,
  CustomAvatar: _Avatar__WEBPACK_IMPORTED_MODULE_3__.Avatar,
  CustomScrollArea: _ChatScrollArea__WEBPACK_IMPORTED_MODULE_5__.ChatScrollArea,
  CustomIsTyping: _IsTyping__WEBPACK_IMPORTED_MODULE_4__.IsTyping,
  CustomChatMessagesContainer: _ChatMessagesContainer__WEBPACK_IMPORTED_MODULE_6__.ChatMessagesContainer,
  CustomLastSeenAvatar: _LastSeenAvatar__WEBPACK_IMPORTED_MODULE_7__.LastSeenAvatar,
  CustomDateRow: _DateRow__WEBPACK_IMPORTED_MODULE_9__.DateRow,
  CustomLoadingMessages: _LoadingMessages__WEBPACK_IMPORTED_MODULE_10__.LoadingMessages,
  yourAuthorId: 0,
  loadOldMessagesThreshold: 50,
  CustomSystemChatBubble: _SystemChatBubble__WEBPACK_IMPORTED_MODULE_11__.SystemChatBubble
};
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(DefaultMessageRenderFunc, "DefaultMessageRenderFunc", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\ChatFeed\\index.tsx");
  reactHotLoader.register(ChatFeed, "ChatFeed", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\ChatFeed\\index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/ChatFeed/styles.ts":
/*!************************************!*\
  !*** ./src/lib/ChatFeed/styles.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultChatFeedStyles: () => (/* binding */ styles)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var styles = {
  chatPanel: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative'
  }
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(styles, "styles", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\ChatFeed\\styles.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/ChatMessagesContainer/classes.ts":
/*!**************************************************!*\
  !*** ./src/lib/ChatMessagesContainer/classes.ts ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultChatMessagesContainerClasses: () => (/* binding */ classes)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var classes = {
  root: 'react-bell-chat__chat-messages',
  showRecipientAvatar: 'react-bell-chat__chat-messages--showRecipientAvatar',
  showRecipientLastSeenMessage: 'react-bell-chat__chat-messages--showRecipientLastSeenMessage',
  showIsTyping: 'react-bell-chat__chat-messages--showIsTyping'
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(classes, "classes", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\ChatMessagesContainer\\classes.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/ChatMessagesContainer/index.tsx":
/*!*************************************************!*\
  !*** ./src/lib/ChatMessagesContainer/index.tsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatMessagesContainer: () => (/* binding */ ChatMessagesContainer),
/* harmony export */   defaultChatMessagesContainerClasses: () => (/* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_2__.defaultChatMessagesContainerClasses),
/* harmony export */   defaultChatMessagesContainerStyles: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_3__.defaultChatMessagesContainerStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./src/lib/ChatMessagesContainer/classes.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/lib/ChatMessagesContainer/styles.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var ChatMessagesContainer = function ChatMessagesContainer(props) {
  var _classNames;
  var children = props.children,
    classes = props.classes,
    styles = props.styles,
    showIsTyping = props.showIsTyping,
    showRecipientAvatar = props.showRecipientAvatar,
    showRecipientLastSeenMessage = props.showRecipientLastSeenMessage;
  var style = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_3__.defaultChatMessagesContainerStyles === null || _styles__WEBPACK_IMPORTED_MODULE_3__.defaultChatMessagesContainerStyles === void 0 ? void 0 : _styles__WEBPACK_IMPORTED_MODULE_3__.defaultChatMessagesContainerStyles.root), styles === null || styles === void 0 ? void 0 : styles.root), showRecipientAvatar && (_styles__WEBPACK_IMPORTED_MODULE_3__.defaultChatMessagesContainerStyles === null || _styles__WEBPACK_IMPORTED_MODULE_3__.defaultChatMessagesContainerStyles === void 0 ? void 0 : _styles__WEBPACK_IMPORTED_MODULE_3__.defaultChatMessagesContainerStyles.showRecipientAvatar)), showRecipientAvatar && (styles === null || styles === void 0 ? void 0 : styles.showRecipientAvatar)), showIsTyping && (_styles__WEBPACK_IMPORTED_MODULE_3__.defaultChatMessagesContainerStyles === null || _styles__WEBPACK_IMPORTED_MODULE_3__.defaultChatMessagesContainerStyles === void 0 ? void 0 : _styles__WEBPACK_IMPORTED_MODULE_3__.defaultChatMessagesContainerStyles.showIsTyping)), showIsTyping && (styles === null || styles === void 0 ? void 0 : styles.showIsTyping)), showRecipientLastSeenMessage && (_styles__WEBPACK_IMPORTED_MODULE_3__.defaultChatMessagesContainerStyles === null || _styles__WEBPACK_IMPORTED_MODULE_3__.defaultChatMessagesContainerStyles === void 0 ? void 0 : _styles__WEBPACK_IMPORTED_MODULE_3__.defaultChatMessagesContainerStyles.showRecipientLastSeenMessage)), showRecipientLastSeenMessage && (styles === null || styles === void 0 ? void 0 : styles.showRecipientLastSeenMessage));
  }, [showIsTyping, showRecipientAvatar, showRecipientLastSeenMessage, styles === null || styles === void 0 ? void 0 : styles.root, styles === null || styles === void 0 ? void 0 : styles.showRecipientAvatar, styles === null || styles === void 0 ? void 0 : styles.showIsTyping, styles === null || styles === void 0 ? void 0 : styles.showRecipientLastSeenMessage]);
  var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_2__.defaultChatMessagesContainerClasses.root, classes === null || classes === void 0 ? void 0 : classes.root, (_classNames = {}, _defineProperty(_classNames, _classes__WEBPACK_IMPORTED_MODULE_2__.defaultChatMessagesContainerClasses === null || _classes__WEBPACK_IMPORTED_MODULE_2__.defaultChatMessagesContainerClasses === void 0 ? void 0 : _classes__WEBPACK_IMPORTED_MODULE_2__.defaultChatMessagesContainerClasses.showRecipientAvatar, showRecipientAvatar), _defineProperty(_classNames, classes === null || classes === void 0 ? void 0 : classes.showRecipientAvatar, showRecipientAvatar), _defineProperty(_classNames, _classes__WEBPACK_IMPORTED_MODULE_2__.defaultChatMessagesContainerClasses === null || _classes__WEBPACK_IMPORTED_MODULE_2__.defaultChatMessagesContainerClasses === void 0 ? void 0 : _classes__WEBPACK_IMPORTED_MODULE_2__.defaultChatMessagesContainerClasses.showIsTyping, showIsTyping), _defineProperty(_classNames, classes === null || classes === void 0 ? void 0 : classes.showIsTyping, showIsTyping), _defineProperty(_classNames, _classes__WEBPACK_IMPORTED_MODULE_2__.defaultChatMessagesContainerClasses === null || _classes__WEBPACK_IMPORTED_MODULE_2__.defaultChatMessagesContainerClasses === void 0 ? void 0 : _classes__WEBPACK_IMPORTED_MODULE_2__.defaultChatMessagesContainerClasses.showRecipientLastSeenMessage, showRecipientLastSeenMessage), _defineProperty(_classNames, classes === null || classes === void 0 ? void 0 : classes.showRecipientLastSeenMessage, showRecipientLastSeenMessage), _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: style,
    className: className
  }, children);
};
__signature__(ChatMessagesContainer, "useMemo{style}");
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(ChatMessagesContainer, "ChatMessagesContainer", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\ChatMessagesContainer\\index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/ChatMessagesContainer/styles.ts":
/*!*************************************************!*\
  !*** ./src/lib/ChatMessagesContainer/styles.ts ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultChatMessagesContainerStyles: () => (/* binding */ styles)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var styles = {
  root: {
    paddingBottom: 10,
    paddingTop: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  showRecipientAvatar: {
    paddingLeft: 50
  },
  showIsTyping: {
    paddingBottom: 24,
    position: 'relative'
  },
  showRecipientLastSeenMessage: {
    paddingRight: 30
  }
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(styles, "styles", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\ChatMessagesContainer\\styles.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/ChatScrollArea/classes.ts":
/*!*******************************************!*\
  !*** ./src/lib/ChatScrollArea/classes.ts ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultChatScrollAreaClasses: () => (/* binding */ classes)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var classes = {
  container: 'react-bell-chat__chat-scroll-area'
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(classes, "classes", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\ChatScrollArea\\classes.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/ChatScrollArea/index.tsx":
/*!******************************************!*\
  !*** ./src/lib/ChatScrollArea/index.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatScrollArea: () => (/* binding */ ChatScrollArea),
/* harmony export */   defaultChatScrollAreaClasses: () => (/* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatScrollAreaClasses),
/* harmony export */   defaultChatScrollAreaStyles: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatScrollAreaStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/lib/ChatScrollArea/styles.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes */ "./src/lib/ChatScrollArea/classes.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var ChatScrollArea = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ChatScrollArea, _React$PureComponent);
  var _super = _createSuper(ChatScrollArea);
  function ChatScrollArea(props) {
    var _this;
    _classCallCheck(this, ChatScrollArea);
    _this = _super.call(this, props);
    _this.scrollContainer = void 0;
    _this.containerRef = _this.containerRef.bind(_assertThisInitialized(_this));
    _this.onScroll = _this.onScroll.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(ChatScrollArea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        styles = _this$props.styles,
        classes = _this$props.classes;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        ref: this.containerRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatScrollAreaClasses.container, classes === null || classes === void 0 ? void 0 : classes.container),
        style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatScrollAreaStyles.container), this.props.maxHeight !== undefined ? {
          maxHeight: this.props.maxHeight
        } : {}), this.props.minHeight !== undefined ? {
          minHeight: this.props.minHeight
        } : {}), styles === null || styles === void 0 ? void 0 : styles.container),
        onScroll: this.onScroll
      }, this.props.children);
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      if (this.scrollContainer && this.scrollContainer.scrollTop <= this.props.loadOldMessagesThreshold) {
        this.props.onLoadOldMessages();
      }
    }
  }, {
    key: "containerRef",
    value: function containerRef(scrollContainer) {
      var _this2 = this;
      this.scrollContainer = scrollContainer;
      this.props.apiRef && this.props.apiRef({
        scrollToBottom: function scrollToBottom() {
          var behavior = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';
          return scrollContainer && (scrollContainer.scrollTo ? scrollContainer.scrollTo({
            top: scrollContainer.scrollHeight,
            behavior: behavior
          }) : scrollContainer.scrollTop = scrollContainer.scrollHeight);
        },
        scrollTo: function scrollTo(top) {
          return scrollContainer && (scrollContainer.scrollTo ? scrollContainer.scrollTo({
            top: top
          }) : scrollContainer.scrollTop = top);
        },
        scrolledToBottom: function scrolledToBottom() {
          return _this2.scrollContainer.scrollHeight - _this2.scrollContainer.scrollTop - _this2.scrollContainer.clientHeight < 10;
        },
        scrolledToLoadThreshold: function scrolledToLoadThreshold() {
          return _this2.scrollContainer && _this2.scrollContainer.scrollTop <= _this2.props.loadOldMessagesThreshold;
        },
        scrollTop: function scrollTop() {
          return _this2.scrollContainer && _this2.scrollContainer.scrollTop;
        },
        scrollHeight: function scrollHeight() {
          return _this2.scrollContainer && _this2.scrollContainer.scrollHeight;
        },
        clientHeight: function clientHeight() {
          return _this2.scrollContainer && _this2.scrollContainer.clientHeight;
        }
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return ChatScrollArea;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(ChatScrollArea, "ChatScrollArea", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\ChatScrollArea\\index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/ChatScrollArea/styles.ts":
/*!******************************************!*\
  !*** ./src/lib/ChatScrollArea/styles.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultChatScrollAreaStyles: () => (/* binding */ styles)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var styles = {
  container: {
    overflow: 'auto',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
    // flexDirection: 'column-reverse'
  }
};


;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(styles, "styles", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\ChatScrollArea\\styles.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/DateRow/classes.ts":
/*!************************************!*\
  !*** ./src/lib/DateRow/classes.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultDateRowClasses: () => (/* binding */ classes)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var classes = {
  container: 'react-bell-chat__date-row'
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(classes, "classes", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\DateRow\\classes.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/DateRow/index.tsx":
/*!***********************************!*\
  !*** ./src/lib/DateRow/index.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateRow: () => (/* binding */ Memoized),
/* harmony export */   defaultDateRowClasses: () => (/* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_2__.defaultDateRowClasses),
/* harmony export */   defaultDateRowStyles: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_3__.defaultDateRowStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./src/lib/DateRow/classes.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/lib/DateRow/styles.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var DateRow = function DateRow(props) {
  var styles = props.styles,
    classes = props.classes;
  var style = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_3__.defaultDateRowStyles.container), styles === null || styles === void 0 ? void 0 : styles.container);
  }, [styles === null || styles === void 0 ? void 0 : styles.container]);
  return props.date && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_2__.defaultDateRowClasses.container, classes === null || classes === void 0 ? void 0 : classes.container),
    style: style,
    title: props.date.toLocaleDateString([], {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }, props.date.toLocaleDateString());
};
__signature__(DateRow, "useMemo{style}");
var Memoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(DateRow);

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(DateRow, "DateRow", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\DateRow\\index.tsx");
  reactHotLoader.register(Memoized, "Memoized", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\DateRow\\index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/DateRow/styles.ts":
/*!***********************************!*\
  !*** ./src/lib/DateRow/styles.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultDateRowStyles: () => (/* binding */ styles)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var styles = {
  container: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.55)'
  }
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(styles, "styles", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\DateRow\\styles.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/IsTyping/classes.ts":
/*!*************************************!*\
  !*** ./src/lib/IsTyping/classes.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultIsTypingClasses: () => (/* binding */ classes)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var classes = {
  container: 'react-bell-chat__is-typing__container'
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(classes, "classes", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\IsTyping\\classes.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/IsTyping/index.tsx":
/*!************************************!*\
  !*** ./src/lib/IsTyping/index.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsTyping: () => (/* binding */ Memoized),
/* harmony export */   defaultIsTypingClasses: () => (/* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_2__.defaultIsTypingClasses),
/* harmony export */   defaultIsTypingStyles: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_3__.defaultIsTypingStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./src/lib/IsTyping/classes.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/lib/IsTyping/styles.ts");
/* harmony import */ var _utils_typedMemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/typedMemo */ "./src/lib/utils/typedMemo.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







function IsTyping(props) {
  var styles = props.styles,
    classes = props.classes;
  var style = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_3__.defaultIsTypingStyles.container), styles === null || styles === void 0 ? void 0 : styles.container);
  }, [styles === null || styles === void 0 ? void 0 : styles.container]);
  return props.typingAuthors && props.typingAuthors.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_2__.defaultIsTypingClasses.container, classes === null || classes === void 0 ? void 0 : classes.container),
    style: style
  }, props.typingAuthors.map(function (a) {
    return a.name;
  }).join(', ').replace(/,(?!.*,)/gim, ' and') + (props.typingAuthors.length === 1 ? ' is ' : ' are ') + 'typing');
}
__signature__(IsTyping, "useMemo{style}");
var Memoized = (0,_utils_typedMemo__WEBPACK_IMPORTED_MODULE_4__.typedMemo)(IsTyping);

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(IsTyping, "IsTyping", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\IsTyping\\index.tsx");
  reactHotLoader.register(Memoized, "Memoized", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\IsTyping\\index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/IsTyping/styles.ts":
/*!************************************!*\
  !*** ./src/lib/IsTyping/styles.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultIsTypingStyles: () => (/* binding */ styles)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var styles = {
  container: {
    position: 'absolute',
    bottom: 2,
    left: 0,
    right: 0,
    color: 'rgb(204, 204, 204)',
    textAlign: 'center'
  }
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(styles, "styles", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\IsTyping\\styles.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/LastSeenAvatar/classes.ts":
/*!*******************************************!*\
  !*** ./src/lib/LastSeenAvatar/classes.ts ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultLastSeenAvatarClasses: () => (/* binding */ classes)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var classes = {
  container: 'react-bell-chat__last-seen-avatar',
  text: 'react-bell-chat__last-seen-avatar__text'
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(classes, "classes", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\LastSeenAvatar\\classes.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/LastSeenAvatar/index.tsx":
/*!******************************************!*\
  !*** ./src/lib/LastSeenAvatar/index.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LastSeenAvatar: () => (/* binding */ Memoized),
/* harmony export */   defaultLastSeenAvatarClasses: () => (/* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_2__.defaultLastSeenAvatarClasses),
/* harmony export */   defaultLastSeenAvatarStyles: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_3__.defaultLastSeenAvatarStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./src/lib/LastSeenAvatar/classes.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/lib/LastSeenAvatar/styles.ts");
/* harmony import */ var _utils_typedMemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/typedMemo */ "./src/lib/utils/typedMemo.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







function LastSeenAvatar(props) {
  var styles = props.styles,
    classes = props.classes,
    index = props.index,
    mouseOver = props.mouseOver,
    author = props.author;
  var style = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_3__.defaultLastSeenAvatarStyles.container), styles === null || styles === void 0 ? void 0 : styles.container), author !== null && author !== void 0 && author.bgImageUrl ? {
      backgroundImage: "url(".concat(author === null || author === void 0 ? void 0 : author.bgImageUrl, ")"),
      backgroundSize: 'cover'
    } : {}), index > 0 && !mouseOver ? {
      marginTop: -12
    } : {
      marginTop: -4
    });
  }, [styles === null || styles === void 0 ? void 0 : styles.container, index, mouseOver, author === null || author === void 0 ? void 0 : author.bgImageUrl]);
  var textStyle = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_3__.defaultLastSeenAvatarStyles.text), styles === null || styles === void 0 ? void 0 : styles.text);
  }, [styles === null || styles === void 0 ? void 0 : styles.text]);
  return author && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: style,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_2__.defaultLastSeenAvatarClasses.container, classes === null || classes === void 0 ? void 0 : classes.container)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: textStyle,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_2__.defaultLastSeenAvatarClasses.text, classes === null || classes === void 0 ? void 0 : classes.text)
  }, author.bgImageUrl ? null : author.lastSeenAvatarName ? author.lastSeenAvatarName : author.name[0].toUpperCase()));
}
__signature__(LastSeenAvatar, "useMemo{style}\nuseMemo{textStyle}");
var Memoized = (0,_utils_typedMemo__WEBPACK_IMPORTED_MODULE_4__.typedMemo)(LastSeenAvatar);

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(LastSeenAvatar, "LastSeenAvatar", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\LastSeenAvatar\\index.tsx");
  reactHotLoader.register(Memoized, "Memoized", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\LastSeenAvatar\\index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/LastSeenAvatar/styles.ts":
/*!******************************************!*\
  !*** ./src/lib/LastSeenAvatar/styles.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultLastSeenAvatarStyles: () => (/* binding */ styles)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var styles = {
  container: {
    width: 24,
    height: 24,
    lineHeight: '24px',
    fontWeight: 400,
    fontSize: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    textAlign: 'center',
    transition: '0.3s all ease-in-out',
    display: 'block',
    position: 'relative'
  },
  text: {
    pointerEvents: 'none'
  }
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(styles, "styles", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\LastSeenAvatar\\styles.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/LoadingMessages/classes.ts":
/*!********************************************!*\
  !*** ./src/lib/LoadingMessages/classes.ts ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultLoadingMessagesClasses: () => (/* binding */ classes)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var classes = {
  container: 'react-bell-chat__loading-messages'
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(classes, "classes", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\LoadingMessages\\classes.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/LoadingMessages/index.tsx":
/*!*******************************************!*\
  !*** ./src/lib/LoadingMessages/index.tsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingMessages: () => (/* binding */ Memoized),
/* harmony export */   defaultLoadingMessagesClasses: () => (/* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_3__.defaultLoadingMessagesClasses),
/* harmony export */   defaultLoadingMessagesStyle: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_2__.defaultLoadingMessagesStyle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/lib/LoadingMessages/styles.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes */ "./src/lib/LoadingMessages/classes.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var LoadingMessages = function LoadingMessages(props) {
  var styles = props.styles,
    classes = props.classes;
  var style = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__.defaultLoadingMessagesStyle.container), styles === null || styles === void 0 ? void 0 : styles.container);
  }, [styles === null || styles === void 0 ? void 0 : styles.container]);
  var svgStyle = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    var _styles$spinnerColor;
    return {
      background: 'none',
      margin: 'auto',
      fill: (_styles$spinnerColor = styles === null || styles === void 0 ? void 0 : styles.spinnerColor) !== null && _styles$spinnerColor !== void 0 ? _styles$spinnerColor : _styles__WEBPACK_IMPORTED_MODULE_2__.defaultLoadingMessagesStyle.spinnerColor,
      opacity: props.isVisible ? 1 : 0,
      transition: '0.3s all ease-in-out'
    };
  }, [styles === null || styles === void 0 ? void 0 : styles.spinnerColor, props.isVisible]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_3__.defaultLoadingMessagesClasses.container, props.className, classes === null || classes === void 0 ? void 0 : classes.container),
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: "40px",
    height: "40px",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid",
    style: svgStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "none",
    d: "M10 50A40 40 0 0 0 90 50A40 46 0 0 1 10 50",
    transform: "rotate(42 50 53)"
  }, props.isVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    calcMode: "linear",
    values: "0 50 53;360 50 53",
    keyTimes: "0;1",
    dur: "1s",
    begin: "0s",
    repeatCount: "indefinite"
  }) : null)));
};
__signature__(LoadingMessages, "useMemo{style}\nuseMemo{svgStyle}");
var Memoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(LoadingMessages);

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(LoadingMessages, "LoadingMessages", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\LoadingMessages\\index.tsx");
  reactHotLoader.register(Memoized, "Memoized", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\LoadingMessages\\index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/LoadingMessages/styles.ts":
/*!*******************************************!*\
  !*** ./src/lib/LoadingMessages/styles.ts ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultLoadingMessagesStyle: () => (/* binding */ styles)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var styles = {
  container: {
    display: 'flex',
    marginBottom: 10
  },
  spinnerColor: 'currentColor'
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(styles, "styles", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\LoadingMessages\\styles.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/Message/index.ts":
/*!**********************************!*\
  !*** ./src/lib/Message/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
/**
 * A standardized message object for use
 * in rendering messages in the chat feed.
 */


/***/ }),

/***/ "./src/lib/SystemChatBubble/classes.ts":
/*!*********************************************!*\
  !*** ./src/lib/SystemChatBubble/classes.ts ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultSystemChatBubbleClasses: () => (/* binding */ classes)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatBubble_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ChatBubble/classes */ "./src/lib/ChatBubble/classes.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


var classes = {
  chatBubbleWrapper: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ChatBubble_classes__WEBPACK_IMPORTED_MODULE_1__.defaultChatBubbleClasses.chatBubbleWrapper, 'react-bell-chat__chat-bubble--system'),
  createdOn: 'react-bell-chat__chat-bubble--system__created-on'
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(classes, "classes", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\SystemChatBubble\\classes.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/SystemChatBubble/index.tsx":
/*!********************************************!*\
  !*** ./src/lib/SystemChatBubble/index.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemChatBubble: () => (/* binding */ Memoized),
/* harmony export */   defaultSystemChatBubbleClasses: () => (/* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_3__.defaultSystemChatBubbleClasses),
/* harmony export */   defaultSystemChatBubbleStyles: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_4__.defaultSystemChatBubbleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatBubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ChatBubble */ "./src/lib/ChatBubble/index.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes */ "./src/lib/SystemChatBubble/classes.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/lib/SystemChatBubble/styles.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







function SystemChatBubble(props) {
  var styles = props.styles,
    classes = props.classes,
    message = props.message,
    config = props.config,
    CustomMessageRender = props.CustomMessageRender;
  var finalConfig = _objectSpread(_objectSpread({}, _ChatBubble__WEBPACK_IMPORTED_MODULE_1__.defaultChatBubbleConfig), config);
  var time = finalConfig.formatTime(message.createdOn);
  var style = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_4__.defaultSystemChatBubbleStyles.systemChatBubbleContainer), styles === null || styles === void 0 ? void 0 : styles.systemChatBubbleContainer);
  }, [styles === null || styles === void 0 ? void 0 : styles.systemChatBubbleContainer]);
  var textStyle = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_4__.defaultSystemChatBubbleStyles.systemChatBubbleText), styles === null || styles === void 0 ? void 0 : styles.systemChatBubbleText);
  }, [styles === null || styles === void 0 ? void 0 : styles.systemChatBubbleText]);
  return message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_classes__WEBPACK_IMPORTED_MODULE_3__.defaultSystemChatBubbleClasses.chatBubbleWrapper, classes === null || classes === void 0 ? void 0 : classes.chatBubbleWrapper),
    style: style
  }, time && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_classes__WEBPACK_IMPORTED_MODULE_3__.defaultSystemChatBubbleClasses.createdOn, classes === null || classes === void 0 ? void 0 : classes.createdOn),
    title: props.message.createdOn.toLocaleString(),
    style: textStyle
  }, time, ":", ' '), CustomMessageRender ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CustomMessageRender, {
    message: props.message
  }) : props.message.message);
}
__signature__(SystemChatBubble, "useMemo{style}\nuseMemo{textStyle}");
var Memoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(SystemChatBubble);

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(SystemChatBubble, "SystemChatBubble", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\SystemChatBubble\\index.tsx");
  reactHotLoader.register(Memoized, "Memoized", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\SystemChatBubble\\index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/SystemChatBubble/styles.ts":
/*!********************************************!*\
  !*** ./src/lib/SystemChatBubble/styles.ts ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultSystemChatBubbleStyles: () => (/* binding */ styles)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var styles = {
  systemChatBubbleContainer: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.55)'
  }
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(styles, "styles", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\SystemChatBubble\\styles.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/utils/typedMemo.ts":
/*!************************************!*\
  !*** ./src/lib/utils/typedMemo.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   typedMemo: () => (/* binding */ typedMemo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var typedMemo = react__WEBPACK_IMPORTED_MODULE_0__.memo;
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(typedMemo, "typedMemo", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\utils\\typedMemo.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/utils/utils.ts":
/*!********************************!*\
  !*** ./src/lib/utils/utils.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   groupBy: () => (/* binding */ groupBy)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var groupBy = function groupBy(array, groupingKeyFn) {
  if (typeof groupingKeyFn !== 'function') {
    throw new Error('groupBy take a function as only parameter');
  }
  return array.reduce(function (result, item) {
    var key = groupingKeyFn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});
};

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(groupBy, "groupBy", "C:\\Coding\\forks\\react-bell-chat\\src\\lib\\utils\\utils.ts");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Avatar: () => (/* reexport safe */ _Avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar),
/* harmony export */   BubbleGroup: () => (/* reexport safe */ _BubbleGroup__WEBPACK_IMPORTED_MODULE_5__.BubbleGroup),
/* harmony export */   ChatBubble: () => (/* reexport safe */ _ChatBubble__WEBPACK_IMPORTED_MODULE_0__.ChatBubble),
/* harmony export */   ChatFeed: () => (/* reexport safe */ _ChatFeed__WEBPACK_IMPORTED_MODULE_7__.ChatFeed),
/* harmony export */   ChatMessagesContainer: () => (/* reexport safe */ _ChatMessagesContainer__WEBPACK_IMPORTED_MODULE_6__.ChatMessagesContainer),
/* harmony export */   ChatScrollArea: () => (/* reexport safe */ _ChatScrollArea__WEBPACK_IMPORTED_MODULE_3__.ChatScrollArea),
/* harmony export */   DateRow: () => (/* reexport safe */ _DateRow__WEBPACK_IMPORTED_MODULE_9__.DateRow),
/* harmony export */   IsTyping: () => (/* reexport safe */ _IsTyping__WEBPACK_IMPORTED_MODULE_2__.IsTyping),
/* harmony export */   LastSeenAvatar: () => (/* reexport safe */ _LastSeenAvatar__WEBPACK_IMPORTED_MODULE_4__.LastSeenAvatar),
/* harmony export */   LoadingMessages: () => (/* reexport safe */ _LoadingMessages__WEBPACK_IMPORTED_MODULE_10__.LoadingMessages),
/* harmony export */   SystemChatBubble: () => (/* reexport safe */ _SystemChatBubble__WEBPACK_IMPORTED_MODULE_8__.SystemChatBubble),
/* harmony export */   defaultAvatarClasses: () => (/* reexport safe */ _Avatar__WEBPACK_IMPORTED_MODULE_1__.defaultAvatarClasses),
/* harmony export */   defaultAvatarStyles: () => (/* reexport safe */ _Avatar__WEBPACK_IMPORTED_MODULE_1__.defaultAvatarStyles),
/* harmony export */   defaultBubbleGroupClasses: () => (/* reexport safe */ _BubbleGroup__WEBPACK_IMPORTED_MODULE_5__.defaultBubbleGroupClasses),
/* harmony export */   defaultBubbleGroupStyles: () => (/* reexport safe */ _BubbleGroup__WEBPACK_IMPORTED_MODULE_5__.defaultBubbleGroupStyles),
/* harmony export */   defaultChatBubbleClasses: () => (/* reexport safe */ _ChatBubble__WEBPACK_IMPORTED_MODULE_0__.defaultChatBubbleClasses),
/* harmony export */   defaultChatBubbleConfig: () => (/* reexport safe */ _ChatBubble__WEBPACK_IMPORTED_MODULE_0__.defaultChatBubbleConfig),
/* harmony export */   defaultChatBubbleStyles: () => (/* reexport safe */ _ChatBubble__WEBPACK_IMPORTED_MODULE_0__.defaultChatBubbleStyles),
/* harmony export */   defaultChatFeedClasses: () => (/* reexport safe */ _ChatFeed__WEBPACK_IMPORTED_MODULE_7__.defaultChatFeedClasses),
/* harmony export */   defaultChatFeedStyles: () => (/* reexport safe */ _ChatFeed__WEBPACK_IMPORTED_MODULE_7__.defaultChatFeedStyles),
/* harmony export */   defaultChatMessagesContainerClasses: () => (/* reexport safe */ _ChatMessagesContainer__WEBPACK_IMPORTED_MODULE_6__.defaultChatMessagesContainerClasses),
/* harmony export */   defaultChatMessagesContainerStyles: () => (/* reexport safe */ _ChatMessagesContainer__WEBPACK_IMPORTED_MODULE_6__.defaultChatMessagesContainerStyles),
/* harmony export */   defaultChatScrollAreaClasses: () => (/* reexport safe */ _ChatScrollArea__WEBPACK_IMPORTED_MODULE_3__.defaultChatScrollAreaClasses),
/* harmony export */   defaultChatScrollAreaStyles: () => (/* reexport safe */ _ChatScrollArea__WEBPACK_IMPORTED_MODULE_3__.defaultChatScrollAreaStyles),
/* harmony export */   defaultDateRowClasses: () => (/* reexport safe */ _DateRow__WEBPACK_IMPORTED_MODULE_9__.defaultDateRowClasses),
/* harmony export */   defaultDateRowStyles: () => (/* reexport safe */ _DateRow__WEBPACK_IMPORTED_MODULE_9__.defaultDateRowStyles),
/* harmony export */   defaultIsTypingClasses: () => (/* reexport safe */ _IsTyping__WEBPACK_IMPORTED_MODULE_2__.defaultIsTypingClasses),
/* harmony export */   defaultIsTypingStyles: () => (/* reexport safe */ _IsTyping__WEBPACK_IMPORTED_MODULE_2__.defaultIsTypingStyles),
/* harmony export */   defaultLastSeenAvatarClasses: () => (/* reexport safe */ _LastSeenAvatar__WEBPACK_IMPORTED_MODULE_4__.defaultLastSeenAvatarClasses),
/* harmony export */   defaultLastSeenAvatarStyles: () => (/* reexport safe */ _LastSeenAvatar__WEBPACK_IMPORTED_MODULE_4__.defaultLastSeenAvatarStyles),
/* harmony export */   defaultLoadingMessagesClasses: () => (/* reexport safe */ _LoadingMessages__WEBPACK_IMPORTED_MODULE_10__.defaultLoadingMessagesClasses),
/* harmony export */   defaultLoadingMessagesStyle: () => (/* reexport safe */ _LoadingMessages__WEBPACK_IMPORTED_MODULE_10__.defaultLoadingMessagesStyle),
/* harmony export */   defaultSystemChatBubbleClasses: () => (/* reexport safe */ _SystemChatBubble__WEBPACK_IMPORTED_MODULE_8__.defaultSystemChatBubbleClasses),
/* harmony export */   defaultSystemChatBubbleStyles: () => (/* reexport safe */ _SystemChatBubble__WEBPACK_IMPORTED_MODULE_8__.defaultSystemChatBubbleStyles)
/* harmony export */ });
/* harmony import */ var _ChatBubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatBubble */ "./src/lib/ChatBubble/index.tsx");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar */ "./src/lib/Avatar/index.tsx");
/* harmony import */ var _IsTyping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IsTyping */ "./src/lib/IsTyping/index.tsx");
/* harmony import */ var _ChatScrollArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatScrollArea */ "./src/lib/ChatScrollArea/index.tsx");
/* harmony import */ var _LastSeenAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LastSeenAvatar */ "./src/lib/LastSeenAvatar/index.tsx");
/* harmony import */ var _BubbleGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BubbleGroup */ "./src/lib/BubbleGroup/index.tsx");
/* harmony import */ var _ChatMessagesContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatMessagesContainer */ "./src/lib/ChatMessagesContainer/index.tsx");
/* harmony import */ var _ChatFeed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ChatFeed */ "./src/lib/ChatFeed/index.tsx");
/* harmony import */ var _SystemChatBubble__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SystemChatBubble */ "./src/lib/SystemChatBubble/index.tsx");
/* harmony import */ var _DateRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DateRow */ "./src/lib/DateRow/index.tsx");
/* harmony import */ var _LoadingMessages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LoadingMessages */ "./src/lib/LoadingMessages/index.tsx");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Message */ "./src/lib/Message/index.ts");
/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Author */ "./src/lib/Author/index.ts");
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};













})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map