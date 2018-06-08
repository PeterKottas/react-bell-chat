(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "../lib/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var styles_1 = __webpack_require__(11);
var defaultBubbleStyles = {
    userBubble: {},
    recipientBubble: {},
    chatBubble: {},
    text: {},
    createdOn: {},
    recipientCreatedOn: {},
    loadingSpinnerColor: 'rgba(255, 255, 255, 0.55)',
    isSendIconColor: '#cddc39',
    systemChatBubbleContainerStyle: {}
};
exports.defaultBubbleStyles = defaultBubbleStyles;
var ChatBubble = /** @class */ (function (_super) {
    __extends(ChatBubble, _super);
    function ChatBubble(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            mouseOverLastSeenContainer: false
        };
        return _this;
    }
    ChatBubble.prototype.render = function () {
        var _this = this;
        if (!this.props.message) {
            return null;
        }
        var yourAuthorId = this.props.yourAuthorId;
        var bubbleStyles = this.props.bubbleStyles;
        bubbleStyles = bubbleStyles || defaultBubbleStyles;
        var userBubble = bubbleStyles.userBubble, chatBubble = bubbleStyles.chatBubble, text = bubbleStyles.text, recipientBubble = bubbleStyles.recipientBubble;
        var youAreAuthor = this.props.message.authorId === yourAuthorId;
        // message.id 0 is reserved for blue
        var chatBubbleStyles = __assign({}, styles_1.default.chatBubble, (youAreAuthor ? {} : styles_1.default.recipientChatBubble), (youAreAuthor ? styles_1.default.chatBubbleOrientationNormal : styles_1.default.recipientChatBubbleOrientationNormal), (this.props.isFirstInGroup && (youAreAuthor ? styles_1.default.firstChatBubbleInGroup : styles_1.default.recipientFirstChatBubbleInGroup)), (this.props.isLastInGroup && (youAreAuthor ? styles_1.default.lastChatBubbleInGroup : styles_1.default.recipientLastChatBubbleInGroup)), (this.props.isCenterInGroup && (youAreAuthor ? styles_1.default.centerChatBubbleInGroup : styles_1.default.recipientCenterChatBubbleInGroup)), chatBubble, (youAreAuthor ? userBubble : recipientBubble));
        return (React.createElement("div", { style: __assign({}, styles_1.default.chatBubbleWrapper), className: "react-bell-chat__chat-bubble" },
            React.createElement("div", { style: chatBubbleStyles },
                React.createElement("p", { style: __assign({}, styles_1.default.p, text) }, this.props.message.message),
                this.props.message.createdOn && (React.createElement("span", { className: "react-bell-chat__chat-bubble__created-on", style: __assign({}, styles_1.default.createdOn, (youAreAuthor ? bubbleStyles.createdOn : bubbleStyles.recipientCreatedOn)), title: this.props.message.createdOn.toLocaleString() }, this.props.message.createdOn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }))),
                this.props.message.isSend !== undefined && youAreAuthor && (React.createElement("span", { className: "react-bell-chat__chat-bubble__is-send", style: __assign({}, styles_1.default.isSend), title: this.props.message.isSend ? 'Send' : 'Sending' }, this.props.message.isSend ?
                    React.createElement("svg", { width: "10px", height: "10px", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 10", preserveAspectRatio: "xMidYMid", style: { background: 'none' } },
                        React.createElement("path", __assign({ fill: bubbleStyles.isSendIconColor ? bubbleStyles.isSendIconColor : defaultBubbleStyles.isSendIconColor }, {}, { d: "M9,1.7L8.6,1.4C8.5,1.3,8.3,1.3,8.2,1.4L3.9,7C3.8,7.1,3.6,7.1,3.5,7c0,0,0,0,0,0L1.7,5.3c-0.1-0.1-0.3-0.1-0.4,0L1,5.6 C0.9,5.7,0.9,5.9,1,6l2.6,2.6c0.1,0.1,0.3,0.1,0.4,0L9,2.1C9.1,2,9.1,1.8,9,1.7z" })))
                    :
                        React.createElement("svg", { width: "10px", height: "10px", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: "lds-eclipse", style: { background: 'none' } },
                            React.createElement("path", { stroke: "none", d: "M10 50A40 40 0 0 0 90 50A40 45 0 0 1 10 50", fill: bubbleStyles.loadingSpinnerColor ? bubbleStyles.loadingSpinnerColor : defaultBubbleStyles.loadingSpinnerColor, transform: "rotate(78 50 52.5)" },
                                React.createElement("animateTransform", { attributeName: "transform", type: "rotate", calcMode: "linear", values: "0 50 52.5;360 50 52.5", keyTimes: "0;1", dur: "1s", begin: "0s", repeatCount: "indefinite" })))))),
            this.props.showRecipientLastSeenMessage && this.props.lastSeenByAuthors &&
                this.props.lastSeenByAuthors.length > 0 && this.props.customLastSeenAvatar &&
                (React.createElement("div", { className: "react-bell-chat__chat-bubble__last-seen-by__container", style: styles_1.default.lastSeenByContainer, onMouseEnter: function () { return _this.setState({ mouseOverLastSeenContainer: true }); }, onMouseLeave: function () { return _this.setState({ mouseOverLastSeenContainer: false }); }, title: 'Last seen by ' + this.props.lastSeenByAuthors.map(function (a) { return a.name; }).join(', ').replace(/,(?!.*,)/gmi, ' and') }, this.props.lastSeenByAuthors.map(function (a, i) { return (React.createElement(_this.props.customLastSeenAvatar, { key: i, author: a, containerStyle: __assign({}, (i > 0 && !_this.state.mouseOverLastSeenContainer ? { marginTop: -12 } : { marginTop: -4 }), { zIndex: 100 + i }) })); })))));
    };
    return ChatBubble;
}(React.Component));
exports.default = ChatBubble;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var styles = {
    container: {
        position: 'absolute',
        left: -50,
        top: 0,
        width: 40,
        height: 40,
        lineHeight: '40px',
        fontWeight: 400,
        color: 'white',
        backgroundColor: 'rgb(153, 153, 153)',
        borderRadius: 20,
        textAlign: 'center',
        borderTopRightRadius: 5
    }
};
var Avatar = function (props) { return props.author && (React.createElement("div", { style: __assign({}, styles.container, props.containerStyle), title: props.author.name, className: "react-bell-chat__avatar" },
    React.createElement("span", { style: { pointerEvents: 'none' } }, props.author.avatarName ?
        props.author.avatarName
        :
            props.author.name.split(' ').map(function (part) { return part[0]; }).join('').toUpperCase().substr(0, 3)))); };
exports.default = Avatar;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ChatBubble_1 = __webpack_require__(1);
var styles = {
    container: {
        textAlign: 'center',
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.55)'
    },
};
var SystemChatBubble = function (props) {
    var bubbleStyles = props.bubbleStyles;
    bubbleStyles = bubbleStyles || ChatBubble_1.defaultBubbleStyles;
    var time = props.message.createdOn && props.message.createdOn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    return props.message && (React.createElement("div", { className: "react-bell-chat__chat-bubble react-bell-chat__chat-bubble--system", style: __assign({}, styles.container, bubbleStyles.systemChatBubbleContainerStyle) },
        time && (React.createElement("span", { className: "react-bell-chat__chat-bubble--system__created-on", title: props.message.createdOn.toLocaleString() },
            time,
            ":",
            ' ')),
        props.message.message));
};
exports.default = SystemChatBubble;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var styles = {
    container: {
        position: 'absolute',
        bottom: 2,
        left: 0,
        right: 0,
        color: 'rgb(204, 204, 204)',
        textAlign: 'center',
    }
};
var IsTyping = function (props) {
    return props.typingAuthors && props.typingAuthors.length > 0 && (React.createElement("div", { className: "react-bell-chat__is-typing__container", style: styles.container }, props.typingAuthors.map(function (a) { return a.name; }).join(', ').replace(/,(?!.*,)/gmi, ' and') + (props.typingAuthors.length === 1 ? ' is ' : ' are ') + 'typing'));
};
exports.default = IsTyping;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var styles = {
    chatHistory: {
        overflow: 'auto',
        padding: '0 10px',
    }
};
var ChatScrollArea = /** @class */ (function (_super) {
    __extends(ChatScrollArea, _super);
    function ChatScrollArea(props) {
        return _super.call(this, props) || this;
    }
    ChatScrollArea.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { ref: function (scrollContainer) {
                _this.scrollContainer = scrollContainer;
                _this.props.apiRef && _this.props.apiRef({
                    scrollToBottom: function (behavior) {
                        if (behavior === void 0) { behavior = 'auto'; }
                        return scrollContainer && (scrollContainer.scrollTo ?
                            scrollContainer.scrollTo({
                                top: scrollContainer.scrollHeight,
                                behavior: behavior
                            }) :
                            scrollContainer.scrollTop = scrollContainer.scrollHeight);
                    },
                    scrollTo: function (top) { return scrollContainer && (scrollContainer.scrollTo ?
                        scrollContainer.scrollTo({
                            top: top
                        })
                        :
                            scrollContainer.scrollTop = top); },
                    scrolledToBottom: function () { return _this.scrollContainer.clientHeight + _this.scrollContainer.scrollTop === _this.scrollContainer.scrollHeight; },
                    scrolledToLoadThreshold: function () { return _this.scrollContainer && _this.scrollContainer.scrollTop <= _this.props.loadOldMessagesThreshold; },
                    scrollTop: function () { return _this.scrollContainer && _this.scrollContainer.scrollTop; },
                    scrollHeight: function () { return _this.scrollContainer && _this.scrollContainer.scrollHeight; },
                    clientHeight: function () { return _this.scrollContainer && _this.scrollContainer.clientHeight; },
                });
            }, className: "react-bell-chat__chat-history", style: __assign({}, styles.chatHistory, (this.props.maxHeight !== undefined ? { maxHeight: this.props.maxHeight } : {}), (this.props.minHeight !== undefined ? { minHeight: this.props.minHeight } : {}), this.props.containerStyles), onScroll: function (e) { return (_this.scrollContainer && _this.scrollContainer.scrollTop <= _this.props.loadOldMessagesThreshold) && _this.props.onLoadOldMessages(); } }, this.props.children));
    };
    return ChatScrollArea;
}(React.Component));
exports.ChatScrollArea = ChatScrollArea;
exports.default = ChatScrollArea;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var styles = {
    container: {
        width: 20,
        height: 20,
        lineHeight: '20px',
        fontWeight: 400,
        fontSize: 10,
        color: 'white',
        backgroundColor: 'rgb(153, 153, 153)',
        borderRadius: 10,
        textAlign: 'center',
        transition: '0.3s all ease-in-out',
        display: 'block',
        position: 'relative'
    }
};
var LastSeenAvatar = function (props) { return props.author && (React.createElement("div", { style: __assign({}, styles.container, props.containerStyle), className: "react-bell-chat__last-seen-avatar" },
    React.createElement("span", { style: { pointerEvents: 'none' } }, props.author.lastSeenAvatarName ?
        props.author.lastSeenAvatarName
        :
            props.author.name[0].toUpperCase()))); };
exports.default = LastSeenAvatar;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ChatBubble_1 = __webpack_require__(1);
var SystemChatBubble_1 = __webpack_require__(3);
var styles_1 = __webpack_require__(12);
var Avatar_1 = __webpack_require__(2);
var BubbleGroup = /** @class */ (function (_super) {
    __extends(BubbleGroup, _super);
    function BubbleGroup(props) {
        return _super.call(this, props) || this;
    }
    BubbleGroup.prototype.renderGroup = function (messages, author) {
        var _this = this;
        var _a = this.props, bubblesCentered = _a.bubblesCentered, bubbleStyles = _a.bubbleStyles, showRecipientAvatar = _a.showRecipientAvatar, customChatBubble = _a.customChatBubble, customSystemChatBubble = _a.customSystemChatBubble, showRecipientLastSeenMessage = _a.showRecipientLastSeenMessage, customLastSeenAvatar = _a.customLastSeenAvatar;
        var ChatBubble = customChatBubble || ChatBubble_1.default;
        var SystemChatBubble = customSystemChatBubble || SystemChatBubble_1.default;
        var messageNodes = messages.map(function (message, i) {
            var props = {
                key: i,
                yourAuthorId: _this.props.yourAuthorId,
                author: author,
                message: message,
                bubblesCentered: bubblesCentered,
                bubbleStyles: bubbleStyles,
                isFirstInGroup: i === 0,
                isLastInGroup: i === messages.length - 1 && messages.length > 1,
                isCenterInGroup: i < messages.length - 1 && messages.length > 1,
                lastSeenByAuthors: _this.props.authors && _this.props.authors.filter(function (a) { return a.lastSeenMessageId !== undefined && a.lastSeenMessageId === message.id; }),
                showRecipientLastSeenMessage: showRecipientLastSeenMessage,
                customLastSeenAvatar: customLastSeenAvatar
            };
            return message.authorId !== undefined ?
                (React.createElement(ChatBubble, __assign({}, props)))
                :
                    (React.createElement(SystemChatBubble, __assign({}, props)));
        });
        var youAreAuthor = author && this.props.yourAuthorId === author.id;
        return (React.createElement("div", { style: styles_1.default.chatBubbleWrapper },
            !youAreAuthor && showRecipientAvatar && author && this.props.customAvatar &&
                this.props.customAvatar({ author: this.props.author }),
            messageNodes));
    };
    BubbleGroup.prototype.render = function () {
        var _a = this.props, messages = _a.messages, author = _a.author;
        return this.renderGroup(messages, author);
    };
    BubbleGroup.defaultProps = {
        messages: [],
        author: undefined,
        customAvatar: Avatar_1.default,
        showRecipientLastSeenMessage: false
    };
    return BubbleGroup;
}(React.Component));
exports.default = BubbleGroup;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var styles = {
    container: {
        textAlign: 'center',
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.55)'
    },
};
var DateRow = function (props) {
    return props.date && (React.createElement("div", { className: "react-bell-chat__date-row", style: __assign({}, styles.container, props.containerStyles), title: props.date.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }, props.date.toLocaleDateString()));
};
exports.default = DateRow;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var styles = {
    containerStyles: {
        display: 'flex',
        marginBottom: 10
    },
};
var LoadingMessages = function (props) {
    var containerStyles = props.containerStyles;
    return (React.createElement("div", { className: "react-bell-chat__loading-messages", style: __assign({}, styles.containerStyles, containerStyles) },
        React.createElement("svg", { width: "40px", height: "40px", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", style: {
                background: 'none',
                margin: 'auto',
                fill: props.spinnerColor, opacity: props.isVisible ? 1 : 0,
                transition: '0.3s all ease-in-out'
            } },
            React.createElement("title", null, "Loading messages"),
            React.createElement("path", { stroke: "none", d: "M10 50A40 40 0 0 0 90 50A40 46 0 0 1 10 50", transform: "rotate(42 50 53)" },
                React.createElement("animateTransform", { attributeName: "transform", type: "rotate", calcMode: "linear", values: "0 50 53;360 50 53", keyTimes: "0;1", dur: "1s", begin: "0s", repeatCount: "indefinite" })))));
};
LoadingMessages.defaultProps = {
    spinnerColor: 'rgb(0, 132, 255)'
};
exports.default = LoadingMessages;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
exports.ChatBubble = _1.default;
var _2 = __webpack_require__(2);
exports.Avatar = _2.default;
var _3 = __webpack_require__(4);
exports.IsTyping = _3.default;
var _4 = __webpack_require__(5);
exports.ChatScrollArea = _4.default;
var _5 = __webpack_require__(6);
exports.LastSeenAvatar = _5.default;
var BubbleGroup_1 = __webpack_require__(7);
exports.BubbleGroup = BubbleGroup_1.default;
var _6 = __webpack_require__(13);
exports.ChatFeed = _6.default;
var _7 = __webpack_require__(16);
exports.ChatInput = _7.default;
var _8 = __webpack_require__(3);
exports.SystemChatBubble = _8.default;
var _9 = __webpack_require__(8);
exports.DateRow = _9.default;
var _10 = __webpack_require__(9);
exports.LoadingMessages = _10.default;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var styles = {
    chatBubbleWrapper: {
        position: 'relative',
        marginBottom: 2,
        display: 'flex'
    },
    chatBubble: {
        position: 'relative',
        backgroundColor: '#0084FF',
        borderRadius: 7,
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: '80%',
        paddingTop: 8,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 14,
    },
    chatBubbleOrientationNormal: {
        marginRight: 0,
    },
    recipientChatBubble: {
        backgroundColor: '#ccc',
    },
    recipientChatBubbleOrientationNormal: {
        marginLeft: 0,
    },
    p: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 300,
        margin: 0,
        marginRight: 30
    },
    firstChatBubbleInGroup: {
        borderTopRightRadius: 0
    },
    recipientFirstChatBubbleInGroup: {
        borderTopLeftRadius: 0
    },
    lastChatBubbleInGroup: {
        borderTopRightRadius: 0
    },
    recipientLastChatBubbleInGroup: {
        borderTopLeftRadius: 0
    },
    centerChatBubbleInGroup: {
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
        color: 'rgba(255, 255, 255, 0.55)'
    },
    isSend: {
        position: 'absolute',
        right: 2,
        bottom: 2,
        fontSize: 9,
    },
    lastSeenByContainer: {
        position: 'absolute',
        right: -30,
        top: 0,
        width: 20,
        height: '100%',
    }
};
exports.default = styles;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    chatBubbleWrapper: {
        marginTop: 10,
        marginBottom: 10,
        position: 'relative',
    },
    bubbleGroupHeader: {
        margin: 0,
        fontSize: 14,
        fontWeight: 400,
        color: '#999',
    },
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright 2017 Brandon Mowat
// Written, developed, and designed by Brandon Mowat for the purpose of helping
// other developers make chat interfaces.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var BubbleGroup_1 = __webpack_require__(7);
var ChatBubble_1 = __webpack_require__(1);
var styles_1 = __webpack_require__(14);
var Avatar_1 = __webpack_require__(2);
var IsTyping_1 = __webpack_require__(4);
var ChatScrollArea_1 = __webpack_require__(5);
var LastSeenAvatar_1 = __webpack_require__(6);
var utils_1 = __webpack_require__(15);
var DateRow_1 = __webpack_require__(8);
var LoadingMessages_1 = __webpack_require__(9);
var SystemChatBubble_1 = __webpack_require__(3);
var DefaultChatBubbleFunc = function (props) { return React.createElement(ChatBubble_1.default, __assign({}, props)); };
var DefaultScrollAreaFunc = function (props) { return React.createElement(ChatScrollArea_1.default, __assign({}, props)); };
// React component to render a complete chat feed
var ChatFeed = /** @class */ (function (_super) {
    __extends(ChatFeed, _super);
    function ChatFeed(props) {
        var _this = _super.call(this, props) || this;
        _this.onLoadOldMessages = _this.onLoadOldMessages.bind(_this);
        _this.state = {
            isLoadingMessages: false
        };
        return _this;
    }
    ChatFeed.prototype.onMessageSend = function () {
        this.scrollApi && this.scrollApi.scrollToBottom();
    };
    ChatFeed.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (this.shallowDiffers(this.props, nextProps) ||
            this.shallowDiffers(this.state, nextState));
    };
    ChatFeed.prototype.componentDidMount = function () {
        this.scrollApi && this.scrollApi.scrollToBottom();
    };
    ChatFeed.prototype.getSnapshotBeforeUpdate = function (prevProps, prevState) {
        var wasScrolledToBottom = this.scrollApi && this.scrollApi.scrolledToBottom();
        var scrollHeight = this.scrollApi && this.scrollApi.scrollHeight();
        var clientHeight = this.scrollApi && this.scrollApi.clientHeight();
        return {
            wasScrolledToBottom: wasScrolledToBottom,
            scrollHeight: scrollHeight,
            clientHeight: clientHeight
        };
    };
    ChatFeed.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        if (this.props.messages.length !== prevProps.messages.length && snapshot && snapshot.wasScrolledToBottom) {
            this.scrollApi.scrollToBottom();
        }
        else if (this.props.messages.length !== prevProps.messages.length && snapshot && prevState.isLoadingMessages) {
            var scrollHeight = this.scrollApi && this.scrollApi.scrollHeight();
            this.scrollApi.scrollTo(scrollHeight - snapshot.scrollHeight);
        }
    };
    ChatFeed.prototype.shallowDiffers = function (a, b) {
        for (var i in a) {
            if (!(i in b)) {
                return true;
            }
        }
        for (var i in b) {
            if (a[i] !== b[i]) {
                return true;
            }
        }
        return false;
    };
    /**
     * Determines what type of message/messages to render.
     */
    ChatFeed.prototype.renderMessages = function (messages) {
        var _this = this;
        var _a = this.props, bubbleStyles = _a.bubbleStyles, customChatBubble = _a.customChatBubble, showRecipientAvatar = _a.showRecipientAvatar;
        // First group by days
        var groups = utils_1.groupBy(messages, function (item) { return item.createdOn && item.createdOn.toDateString(); });
        var messageNodes = [];
        var jsxKey = 0;
        Object.keys(groups).forEach(function (key) {
            var group = [];
            var messagesGroup = groups[key];
            if (messagesGroup[0] && messagesGroup[0].createdOn && _this.props.showDateRow) {
                messageNodes.push(React.createElement(_this.props.customDateRow, { key: key, date: messagesGroup[0].createdOn }));
            }
            messageNodes = messageNodes.concat(messagesGroup.map(function (message, index) {
                group.push(message);
                // Find diff in message type or no more messages
                if (!messagesGroup[index + 1] || messagesGroup[index + 1].authorId !== message.authorId) {
                    var messageGroup = group;
                    var author = _this.props.authors && _this.props.authors.filter(function (a) { return a.id === message.authorId; })[0];
                    group = [];
                    jsxKey++;
                    return (React.createElement(BubbleGroup_1.default, { key: jsxKey, yourAuthorId: _this.props.yourAuthorId, messages: messageGroup, author: author, authors: _this.props.authors, showRecipientAvatar: showRecipientAvatar, customChatBubble: customChatBubble, bubbleStyles: bubbleStyles, showRecipientLastSeenMessage: _this.props.showRecipientLastSeenMessage, customAvatar: _this.props.customAvatar, customLastSeenAvatar: _this.props.customLastSeenAvatar, customSystemChatBubble: _this.props.customSystemChatBubble }));
                }
                return null;
            }));
        });
        return messageNodes;
    };
    ChatFeed.prototype.renderIsTyping = function () {
        var _this = this;
        var typingAuthors = this.props.authors && this.props.authors.filter(function (a) { return a.isTyping && a.id !== _this.props.yourAuthorId; });
        if (!typingAuthors || typingAuthors.length === 0) {
            return null;
        }
        return React.createElement(IsTyping_1.default, { typingAuthors: typingAuthors });
    };
    /**
     * render : renders our chat feed
     */
    ChatFeed.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { id: 'react-bell-chat__chat-panel ' + (this.props.className ? this.props.className : ''), style: __assign({}, styles_1.default.chatPanel) },
            React.createElement(this.props.customScrollArea, { minHeight: this.props.minHeight, maxHeight: this.props.maxHeight, apiRef: function (e) { return _this.scrollApi = e; }, loadOldMessagesThreshold: this.props.loadOldMessagesThreshold, onLoadOldMessages: this.onLoadOldMessages },
                React.createElement("div", { style: __assign({}, styles_1.default.chatMessages, (this.props.showRecipientAvatar && styles_1.default.showRecipientAvatarChatMessagesStyle), (this.props.showRecipientAvatar && this.props.showRecipientAvatarChatMessagesStyle), (this.props.showIsTyping && styles_1.default.showIsTypingChatMessagesStyle), (this.props.showIsTyping && this.props.showIsTypingChatMessagesStyle), (this.props.showRecipientLastSeenMessage && styles_1.default.showRecipientLastSeenMessageChatMessagesStyle), (this.props.showRecipientLastSeenMessage && this.props.showRecipientLastSeenMessageChatMessagesStyle)), className: "react-bell-chat__chat-messages" },
                    React.createElement(this.props.customLoadingMessages, { isVisible: this.props.showLoadingMessages || this.state.isLoadingMessages }),
                    this.renderMessages(this.props.messages),
                    this.props.showIsTyping && this.renderIsTyping()))));
    };
    ChatFeed.prototype.onLoadOldMessages = function () {
        var _this = this;
        if (!this.state.isLoadingMessages && this.props.hasOldMessages) {
            return new Promise(function (resolve) {
                _this.setState({
                    isLoadingMessages: true,
                }, function () { return resolve(); });
            }).then(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.props.onLoadOldMessages) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.props.onLoadOldMessages()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); }).then(function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, new Promise(function (resolve) {
                                _this.setState({
                                    isLoadingMessages: false,
                                }, function () {
                                    if (_this.scrollApi.scrolledToLoadThreshold()) {
                                        _this.scrollApi.scrollTo(_this.props.loadOldMessagesThreshold + 1);
                                    }
                                    resolve();
                                });
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    ChatFeed.defaultProps = {
        messages: [],
        authors: [],
        customChatBubble: DefaultChatBubbleFunc,
        customAvatar: Avatar_1.default,
        customScrollArea: DefaultScrollAreaFunc,
        customLastSeenAvatar: LastSeenAvatar_1.default,
        customDateRow: DateRow_1.default,
        customLoadingMessages: LoadingMessages_1.default,
        yourAuthorId: 0,
        loadOldMessagesThreshold: 50,
        customSystemChatBubble: SystemChatBubble_1.default
    };
    return ChatFeed;
}(React.Component));
exports.default = ChatFeed;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    chatPanel: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'hidden',
        position: 'relative'
    },
    showRecipientAvatarChatMessagesStyle: {
        paddingLeft: 50
    },
    showIsTypingChatMessagesStyle: {
        paddingBottom: 24,
        position: 'relative'
    },
    showRecipientLastSeenMessageChatMessagesStyle: {
        paddingRight: 30,
    },
    chatBubbleWrapper: {
        marginTop: 10,
        marginBottom: 10,
        overflow: 'auto',
        position: 'relative',
    },
    img: {
        borderRadius: 100,
        bottom: 0,
        left: 0,
        position: 'absolute',
        width: 36,
        zIndex: 100,
    },
    chatMessages: {
        paddingBottom: 10,
        paddingTop: 10,
    }
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var groupBy = function (array, groupingKeyFn) {
    if (typeof groupingKeyFn !== 'function') {
        throw new Error("groupBy take a function as only parameter");
    }
    return array.reduce(function (result, item) {
        var key = groupingKeyFn(item);
        if (!result[key])
            result[key] = [];
        result[key].push(item);
        return result;
    }, {});
};
exports.groupBy = groupBy;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var styles = {
    chatInput: {
        flex: 1,
    },
    inputStyle: {
        border: 'none',
        borderTopWidth: '1',
        borderTopStyle: 'solid',
        borderTopColor: '#ddd',
        fontSize: '16',
        outline: 'none',
        padding: '30',
        width: '100%',
    },
};
var ChatInput = function (props) {
    var inputStyles = props.inputStyles, inputPlaceholder = props.inputPlaceholder;
    return (React.createElement("div", { className: "react-bell-chat__chat-input", style: styles.chatInput },
        React.createElement("input", { type: "text", style: inputStyles || styles.inputStyle, placeholder: inputPlaceholder })));
};
exports.default = ChatInput;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map