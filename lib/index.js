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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
var styles_1 = __webpack_require__(5);
var defaultBubbleStyles = {
    userBubble: {},
    chatBubble: {},
    text: {},
};
var ChatBubble = /** @class */ (function (_super) {
    __extends(ChatBubble, _super);
    function ChatBubble(props) {
        return _super.call(this, props) || this;
    }
    ChatBubble.prototype.render = function () {
        var bubblesCentered = this.props.bubblesCentered;
        var bubbleStyles = this.props.bubbleStyles;
        bubbleStyles = bubbleStyles || defaultBubbleStyles;
        var userBubble = bubbleStyles.userBubble, chatBubble = bubbleStyles.chatBubble, text = bubbleStyles.text;
        // message.id 0 is reserved for blue
        var chatBubbleStyles = this.props.message.authorId === this.props.selfAuthorId
            ? __assign({}, styles_1.default.chatBubble, bubblesCentered ? {} : styles_1.default.chatBubbleOrientationNormal, chatBubble, userBubble) : __assign({}, styles_1.default.chatBubble, styles_1.default.recipientChatBubble, bubblesCentered
            ? {}
            : styles_1.default.recipientChatBubbleOrientationNormal, chatBubble, userBubble);
        return (React.createElement("div", { style: __assign({}, styles_1.default.chatBubbleWrapper) },
            React.createElement("div", { style: chatBubbleStyles },
                React.createElement("p", { style: __assign({}, styles_1.default.p, text) }, this.props.message.message))));
    };
    return ChatBubble;
}(React.Component));
exports.default = ChatBubble;


/***/ }),
/* 2 */
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
var styles_1 = __webpack_require__(6);
var Avatar_1 = __webpack_require__(3);
;
var BubbleGroup = /** @class */ (function (_super) {
    __extends(BubbleGroup, _super);
    function BubbleGroup(props) {
        return _super.call(this, props) || this;
    }
    /**
     * Parses and collects messages of one type to be grouped together.
     * @return {messageNodes} - a JSX wrapped group of messages
     */
    BubbleGroup.prototype.renderGroup = function (messages, author) {
        var _this = this;
        var _a = this.props, bubblesCentered = _a.bubblesCentered, bubbleStyles = _a.bubbleStyles, showAvatar = _a.showAvatar, customChatBubble = _a.customChatBubble;
        var ChatBubble = customChatBubble || ChatBubble_1.default;
        var messageNodes = messages.map(function (message, i) { return (React.createElement(ChatBubble, { key: i, selfAuthorId: _this.props.selfAuthorId, message: message, bubblesCentered: bubblesCentered, bubbleStyles: bubbleStyles })); });
        return (React.createElement("div", { style: styles_1.default.chatBubbleWrapper },
            showAvatar && author && this.props.customAvatar &&
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
        customAvatar: function (props) { return React.createElement(Avatar_1.default, __assign({}, props)); }
    };
    return BubbleGroup;
}(React.Component));
exports.default = BubbleGroup;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var styles = {
    container: {
        margin: 0,
        fontSize: '14px',
        fontWeight: 400,
        color: 'rgb(153, 153, 153)'
    }
};
var Avatar = function (props) { return props.author && (React.createElement("div", { style: styles.container }, props.author.name)); };
exports.default = Avatar;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
exports.ChatBubble = _1.default;
var BubbleGroup_1 = __webpack_require__(2);
exports.BubbleGroup = BubbleGroup_1.default;
var _2 = __webpack_require__(7);
exports.ChatFeed = _2.default;
var _3 = __webpack_require__(10);
exports.ChatInput = _3.default;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    chatBubbleWrapper: {
        overflow: 'auto',
    },
    chatBubble: {
        backgroundColor: '#0084FF',
        borderRadius: 20,
        marginTop: 1,
        marginRight: 'auto',
        marginBottom: 1,
        marginLeft: 'auto',
        maxWidth: 425,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 14,
        paddingRight: 14,
        width: '-webkit-fit-content',
    },
    chatBubbleOrientationNormal: {
        float: 'right',
    },
    recipientChatBubble: {
        backgroundColor: '#ccc',
    },
    recipientChatBubbleOrientationNormal: {
        float: 'left',
    },
    p: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 300,
        margin: 0,
    },
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    chatBubbleWrapper: {
        marginTop: 10,
        marginBottom: 10,
        overflow: 'auto',
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
/* 7 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var BubbleGroup_1 = __webpack_require__(2);
var ChatBubble_1 = __webpack_require__(1);
var styles_1 = __webpack_require__(8);
var Avatar_1 = __webpack_require__(3);
var ChatScrollArea_1 = __webpack_require__(9);
// React component to render a complete chat feed
var ChatFeed = /** @class */ (function (_super) {
    __extends(ChatFeed, _super);
    function ChatFeed(props) {
        return _super.call(this, props) || this;
    }
    ChatFeed.prototype.componentDidMount = function () {
        var _this = this;
        this.props.onMessageSendRef && this.props.onMessageSendRef(function () { return _this.scrollElementRef && _this.scrollElementRef.scrollToBottom(); });
    };
    ChatFeed.prototype.componentWillUnmount = function () {
        this.props.onMessageSendRef && this.props.onMessageSendRef(undefined);
    };
    /**
     * Determines what type of message/messages to render.
     */
    ChatFeed.prototype.renderMessages = function (messages) {
        var _this = this;
        var _a = this.props, bubbleStyles = _a.bubbleStyles, customChatBubble = _a.customChatBubble, showAvatar = _a.showAvatar;
        var group = [];
        var messageNodes = messages.map(function (message, index) {
            group.push(message);
            // Find diff in message type or no more messages
            if (!messages[index + 1] || messages[index + 1].authorId !== message.authorId) {
                var messageGroup = group;
                var author = _this.props.authors && _this.props.authors.filter(function (a) { return a.id === message.authorId; })[0];
                group = [];
                return (React.createElement(BubbleGroup_1.default, { key: index, selfAuthorId: _this.props.selfAuthorId, messages: messageGroup, author: author, showAvatar: showAvatar, customChatBubble: customChatBubble, bubbleStyles: bubbleStyles }));
            }
            return null;
        });
        this.props.authors && this.props.authors.forEach(function (a) {
            if (a.isTyping) {
                messageNodes.push(React.createElement("div", { key: "isTyping", style: __assign({}, styles_1.default.chatBubbleWrapper) },
                    React.createElement(_this.props.customChatBubble, { selfAuthorId: _this.props.selfAuthorId, message: { authorId: a.id, message: '...' }, bubbleStyles: bubbleStyles, bubblesCentered: _this.props.bubblesCentered })));
            }
        });
        // messageNodes.reverse();
        // return nodes
        return messageNodes;
    };
    /**
     * render : renders our chat feed
     */
    ChatFeed.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { id: "chat-panel", style: styles_1.default.chatPanel },
            React.createElement(this.props.customScrollArea, { maxHeight: this.props.maxHeight, refScrollElement: function (e) { return _this.scrollElementRef = e; } },
                React.createElement("div", { className: "chat-messages" }, this.renderMessages(this.props.messages)))));
    };
    ChatFeed.defaultProps = {
        messages: [],
        authors: [],
        customChatBubble: function (props) { return React.createElement(ChatBubble_1.default, __assign({}, props)); },
        customAvatar: function (props) { return React.createElement(Avatar_1.default, __assign({}, props)); },
        customScrollArea: function (props) { return React.createElement(ChatScrollArea_1.default, __assign({}, props)); },
        selfAuthorId: 0
    };
    return ChatFeed;
}(React.Component));
exports.default = ChatFeed;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    chatPanel: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'hidden',
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
};


/***/ }),
/* 9 */
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
        display: 'flex',
        flexDirection: 'column-reverse'
    }
};
var ChatScrollArea = /** @class */ (function (_super) {
    __extends(ChatScrollArea, _super);
    function ChatScrollArea(props) {
        return _super.call(this, props) || this;
        //this.raf = 
    }
    ChatScrollArea.prototype.componentDidMount = function () {
        this.props.refScrollElement(this);
    };
    ChatScrollArea.prototype.componentWillUnmount = function () {
        this.props.refScrollElement(undefined);
    };
    ChatScrollArea.prototype.scrollToBottom = function () {
        if (this.scrollContainer) {
            this.scrollContainer.scrollTop = this.scrollContainer.scrollHeight;
        }
    };
    ChatScrollArea.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { ref: function (scrollContainer) { return _this.scrollContainer = scrollContainer; }, className: "chat-history", style: __assign({}, styles.chatHistory, { maxHeight: this.props.maxHeight }) }, this.props.children));
    };
    return ChatScrollArea;
}(React.Component));
exports.ChatScrollArea = ChatScrollArea;
exports.default = ChatScrollArea;


/***/ }),
/* 10 */
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
    return (React.createElement("div", { className: "chat-input", style: styles.chatInput },
        React.createElement("input", { type: "text", style: inputStyles || styles.inputStyle, placeholder: inputPlaceholder })));
};
exports.default = ChatInput;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map