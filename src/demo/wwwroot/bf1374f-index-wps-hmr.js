self["webpackHotUpdatereact_bell_chat"]("index",{

/***/ "./src/lib/ChatFeed/index.tsx":
/*!************************************!*\
  !*** ./src/lib/ChatFeed/index.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultChatFeedClasses": () => (/* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_14__.defaultChatFeedClasses),
/* harmony export */   "defaultChatFeedStyles": () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_13__.defaultChatFeedStyles),
/* harmony export */   "ChatFeed": () => (/* binding */ ChatFeed)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
// Copyright 2017 Brandon Mowat
// Written, developed, and designed by Brandon Mowat for the purpose of helping
// other developers make chat interfaces.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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

















function DefaultMessageRenderFunc(props) {
    return (props.message && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: props.className, style: props.style }, props.message.message)));
}
// React component to render a complete chat feed
var ChatFeed = /** @class */ (function (_super) {
    __extends(ChatFeed, _super);
    function ChatFeed(props) {
        var _this = _super.call(this, props) || this;
        _this.renderMessages = _this.renderMessages.bind(_this);
        _this.onLoadOldMessages = _this.onLoadOldMessages.bind(_this);
        _this.apiRef = _this.apiRef.bind(_this);
        _this.state = {
            isLoadingMessages: false,
        };
        return _this;
    }
    ChatFeed.prototype.onMessageSend = function () {
        this.scrollApi && this.scrollApi.scrollToBottom();
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
            clientHeight: clientHeight,
        };
    };
    ChatFeed.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        var _b, _c;
        if ((this.props.messages.length !== prevProps.messages.length ||
            ((_c = (_b = this.props.authors) === null || _b === void 0 ? void 0 : _b.some) === null || _c === void 0 ? void 0 : _c.call(_b, function (a) {
                var _b, _c, _d;
                return a.isTyping !==
                    ((_d = (_c = (_b = prevProps.authors) === null || _b === void 0 ? void 0 : _b.find) === null || _c === void 0 ? void 0 : _c.call(_b, function (_a) { return a.id === _a.id; })) === null || _d === void 0 ? void 0 : _d.isTyping);
            }))) &&
            snapshot &&
            snapshot.wasScrolledToBottom) {
            this.scrollApi.scrollToBottom();
        }
        else if (this.props.messages.length !== prevProps.messages.length &&
            snapshot &&
            prevState.isLoadingMessages) {
            var scrollHeight = this.scrollApi && this.scrollApi.scrollHeight();
            this.scrollApi.scrollTo(scrollHeight - snapshot.scrollHeight);
        }
    };
    /**
     * Determines what type of message/messages to render.
     */
    ChatFeed.prototype.renderMessages = function (messages) {
        var _this = this;
        var styles = this.props.styles;
        if (!styles) {
            styles = {};
        }
        var _b = this.props, chatBubbleStyles = _b.chatBubbleStyles, chatBubbleClasses = _b.chatBubbleClasses, dateRowStyles = _b.dateRowStyles, dateRowClasses = _b.dateRowClasses, avatarStyles = _b.avatarStyles, avatarClasses = _b.avatarClasses, lastSeenAvatarStyles = _b.lastSeenAvatarStyles, lastSeenAvatarClasses = _b.lastSeenAvatarClasses, bubbleGroupStyles = _b.bubbleGroupStyles, bubbleGroupClasses = _b.bubbleGroupClasses, CustomChatBubble = _b.CustomChatBubble, showRecipientAvatar = _b.showRecipientAvatar, CustomBubbleGroup = _b.CustomBubbleGroup;
        // First group by days
        var groups = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__.groupBy)(messages, function (item) { return item.createdOn && item.createdOn.toDateString(); });
        var messageNodes = [];
        var jsxKey = 0;
        Object.keys(groups).forEach(function (key) {
            var group = [];
            var messagesGroup = groups[key];
            if (messagesGroup[0] &&
                messagesGroup[0].createdOn &&
                _this.props.showDateRow) {
                messageNodes.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_this.props.CustomDateRow, { key: key, date: messagesGroup[0].createdOn, styles: dateRowStyles, classes: dateRowClasses }));
            }
            messageNodes = messageNodes.concat(messagesGroup.map(function (message, index) {
                group.push(message);
                // Find diff in message type or no more messages
                if (!messagesGroup[index + 1] ||
                    messagesGroup[index + 1].authorId !== message.authorId) {
                    var messageGroup = group;
                    var author = _this.props.authors &&
                        _this.props.authors.filter(function (a) { return a.id === message.authorId; })[0];
                    group = [];
                    jsxKey++;
                    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CustomBubbleGroup, { key: jsxKey, yourAuthorId: _this.props.yourAuthorId, messages: messageGroup, author: author, authors: _this.props.authors, showRecipientAvatar: showRecipientAvatar, CustomChatBubble: CustomChatBubble, chatBubbleStyles: chatBubbleStyles, chatBubbleClasses: chatBubbleClasses, avatarStyles: avatarStyles, avatarClasses: avatarClasses, lastSeenAvatarStyles: lastSeenAvatarStyles, lastSeenAvatarClasses: lastSeenAvatarClasses, showRecipientLastSeenMessage: _this.props.showRecipientLastSeenMessage, CustomAvatar: _this.props.CustomAvatar, CustomLastSeenAvatar: _this.props.CustomLastSeenAvatar, CustomMessageRender: _this.props.CustomMessageRender, CustomSystemChatBubble: _this.props.CustomSystemChatBubble, classes: bubbleGroupClasses, styles: bubbleGroupStyles }));
                }
                return null;
            }));
        });
        return messageNodes;
    };
    ChatFeed.prototype.apiRef = function (e) {
        if (!this.scrollApi) {
            e.scrollToBottom();
        }
        this.scrollApi = e;
    };
    ChatFeed.prototype.render = function () {
        var _this = this;
        var _b = this.props, styles = _b.styles, classes = _b.classes;
        var _c = this.props, isTypingStyles = _c.isTypingStyles, isTypingClasses = _c.isTypingClasses;
        if (!styles) {
            styles = {};
        }
        if (!classes) {
            classes = {};
        }
        var _d = this.props, loadingMessagesStyle = _d.loadingMessagesStyle, chatFeedStyles = _d.chatFeedStyles, chatScrollAreaStyles = _d.chatScrollAreaStyles, loadingMessagesClasses = _d.loadingMessagesClasses, chatScrollAreaClasses = _d.chatScrollAreaClasses;
        var typingAuthors = this.props.authors &&
            this.props.authors.filter(function (a) { return a.isTyping && a.id !== _this.props.yourAuthorId; });
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(_classes__WEBPACK_IMPORTED_MODULE_14__.defaultChatFeedClasses.chatPanel, this.props.className, classes === null || classes === void 0 ? void 0 : classes.chatPanel), style: __assign(__assign(__assign({}, _styles__WEBPACK_IMPORTED_MODULE_13__.defaultChatFeedStyles.chatPanel), (chatFeedStyles && chatFeedStyles.chatPanel)), this.props.style) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.props.CustomScrollArea, { minHeight: this.props.minHeight, maxHeight: this.props.maxHeight, apiRef: this.apiRef, loadOldMessagesThreshold: this.props.loadOldMessagesThreshold, onLoadOldMessages: this.onLoadOldMessages, styles: chatScrollAreaStyles, classes: chatScrollAreaClasses },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.props.CustomChatMessagesContainer, { classes: this.props.chatMessagesContainerClasses, styles: this.props.chatMessagesContainerStyles, showIsTyping: this.props.showIsTyping, showRecipientAvatar: this.props.showRecipientAvatar, showRecipientLastSeenMessage: this.props.showRecipientLastSeenMessage },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.props.CustomLoadingMessages, { key: -1, isVisible: this.props.showLoadingMessages && this.state.isLoadingMessages, styles: loadingMessagesStyle, classes: loadingMessagesClasses }),
                    this.renderMessages(this.props.messages),
                    this.props.showIsTyping && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.props.CustomIsTyping, { key: -2, typingAuthors: typingAuthors, styles: isTypingStyles, classes: isTypingClasses }))))));
    };
    ChatFeed.prototype.onLoadOldMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(!this.state.isLoadingMessages && this.props.hasOldMessages)) return [3 /*break*/, 5];
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.setState({
                                    isLoadingMessages: true,
                                }, function () { return resolve(); });
                            })];
                    case 1:
                        _b.sent();
                        if (!this.props.onLoadOldMessages) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.props.onLoadOldMessages()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [4 /*yield*/, new Promise(function (resolve) {
                            _this.setState({
                                isLoadingMessages: false,
                            }, function () {
                                if (_this.scrollApi.scrolledToLoadThreshold()) {
                                    _this.scrollApi.scrollTo(_this.props.loadOldMessagesThreshold + 1);
                                }
                                resolve();
                            });
                        })];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
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
        CustomSystemChatBubble: _SystemChatBubble__WEBPACK_IMPORTED_MODULE_11__.SystemChatBubble,
    };
    return ChatFeed;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent));



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cd5523b47876668a1fae")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1iZWxsLWNoYXQvLi9zcmMvbGliL0NoYXRGZWVkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1iZWxsLWNoYXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQy9CLCtFQUErRTtBQUMvRSx5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVWO0FBTVA7QUFLRDtBQVNKO0FBTUU7QUFPTTtBQU1PO0FBTVA7QUFDYztBQU1yQjtBQU1RO0FBQ3NEO0FBQzlDO0FBQzZCO0FBQ0c7QUFHMUM7QUFDRDtBQTZGekIsU0FBUyx3QkFBd0IsQ0FBQyxLQUFpQztJQUNqRSxPQUFPLENBQ0wsS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUNmLDJEQUFNLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxJQUNqRCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FDakIsQ0FDUixDQUNGLENBQUM7QUFDSixDQUFDO0FBUUQsaURBQWlEO0FBQ2pEO0lBS1UsNEJBR1A7SUFzQkQsa0JBQVksS0FBcUQ7UUFBakUsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FPYjtRQU5DLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDckQsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDM0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUNyQyxLQUFJLENBQUMsS0FBSyxHQUFHO1lB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Q0FBZTtRQUMvQiwyQkFBMkIsRUFBRSx5RUFBNEI7UUFDekQsb0JBQW9CLEVBQUUsMkRBQXFCO1FBQzNDLGFBQWEsRUFBRSw2Q0FBYztRQUM3QixxQkFBcUIsRUFBRSw4REFBc0I7UUFDN0MsWUFBWSxFQUFFLENBQUM7UUFDZix3QkFBd0IsRUFBRSxFQUFFO1FBQzVCLHNCQUFzQixFQUFFLGdFQUF1QjtLQUNoRCxDQUFDO0lBZ1JKLGVBQUM7Q0FBQSxDQXJTUyxnREFBbUIsR0FxUzVCO0FBMVNvQjs7Ozs7Ozs7Ozs7VUNwTHJCLHNEIiwiZmlsZSI6ImJmMTM3NGYtaW5kZXgtd3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE3IEJyYW5kb24gTW93YXRcbi8vIFdyaXR0ZW4sIGRldmVsb3BlZCwgYW5kIGRlc2lnbmVkIGJ5IEJyYW5kb24gTW93YXQgZm9yIHRoZSBwdXJwb3NlIG9mIGhlbHBpbmdcbi8vIG90aGVyIGRldmVsb3BlcnMgbWFrZSBjaGF0IGludGVyZmFjZXMuXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJ1YmJsZUdyb3VwIGFzIERlZmF1bHRCdWJibGVHcm91cCxcbiAgQnViYmxlR3JvdXBDbGFzc2VzLFxuICBCdWJibGVHcm91cFByb3BzLFxuICBCdWJibGVHcm91cFN0eWxlcyxcbn0gZnJvbSAnLi4vQnViYmxlR3JvdXAnO1xuaW1wb3J0IHtcbiAgQ2hhdEJ1YmJsZSBhcyBEZWZhdWx0Q2hhdEJ1YmJsZSxcbiAgQ2hhdEJ1YmJsZVByb3BzLFxuICBNZXNzYWdlUmVuZGVyUHJvcHMsXG59IGZyb20gJy4uL0NoYXRCdWJibGUnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL01lc3NhZ2UnO1xuaW1wb3J0IHsgQXV0aG9yIH0gZnJvbSAnLi4vQXV0aG9yJztcbmltcG9ydCB7IENoYXRCdWJibGVTdHlsZXMsIENoYXRCdWJibGVDbGFzc2VzIH0gZnJvbSAnLi4vQ2hhdEJ1YmJsZSc7XG5pbXBvcnQge1xuICBBdmF0YXIgYXMgRGVmYXVsdEF2YXRhcixcbiAgQXZhdGFyUHJvcHMsXG4gIEF2YXRhclN0eWxlcyxcbiAgQXZhdGFyQ2xhc3Nlcyxcbn0gZnJvbSAnLi4vQXZhdGFyJztcbmltcG9ydCB7XG4gIElzVHlwaW5nIGFzIERlZmF1bHRJc1R5cGluZyxcbiAgSXNUeXBpbmdTdHlsZXMsXG4gIElzVHlwaW5nQ2xhc3NlcyxcbiAgSXNUeXBpbmdQcm9wcyxcbn0gZnJvbSAnLi4vSXNUeXBpbmcnO1xuaW1wb3J0IHtcbiAgQ2hhdFNjcm9sbEFyZWEgYXMgRGVmYXVsdENoYXRTY3JvbGxBcmVhLFxuICBDaGF0U2Nyb2xsQXJlYVByb3BzLFxuICBDaGF0U2Nyb2xsQXJlYUFwaSxcbiAgQ2hhdFNjcm9sbEFyZWFTdHlsZXMsXG4gIENoYXRTY3JvbGxBcmVhQ2xhc3Nlcyxcbn0gZnJvbSAnLi4vQ2hhdFNjcm9sbEFyZWEnO1xuaW1wb3J0IHtcbiAgQ2hhdE1lc3NhZ2VzQ29udGFpbmVyIGFzIERlZmF1bHRDaGF0TWVzc2FnZXNDb250YWluZXIsXG4gIENoYXRNZXNzYWdlc0NvbnRhaW5lclByb3BzLFxuICBDaGF0TWVzc2FnZXNDb250YWluZXJDbGFzc2VzLFxuICBDaGF0TWVzc2FnZXNDb250YWluZXJTdHlsZXMsXG59IGZyb20gJy4uL0NoYXRNZXNzYWdlc0NvbnRhaW5lcic7XG5pbXBvcnQge1xuICBMYXN0U2VlbkF2YXRhciBhcyBEZWZhdWx0TGFzdFNlZW5BdmF0YXIsXG4gIExhc3RTZWVuQXZhdGFyUHJvcHMsXG4gIExhc3RTZWVuQXZhdGFyU3R5bGVzLFxuICBMYXN0U2VlbkF2YXRhckNsYXNzZXMsXG59IGZyb20gJy4uL0xhc3RTZWVuQXZhdGFyJztcbmltcG9ydCB7IGdyb3VwQnkgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQge1xuICBEYXRlUm93IGFzIERlZmF1bHREYXRlUm93LFxuICBEYXRlUm93UHJvcHMsXG4gIERhdGVSb3dTdHlsZXMsXG4gIERhdGVSb3dDbGFzc2VzLFxufSBmcm9tICcuLi9EYXRlUm93JztcbmltcG9ydCB7XG4gIExvYWRpbmdNZXNzYWdlcyBhcyBEZWZhdWx0TG9hZGluZ01lc3NhZ2VzLFxuICBMb2FkaW5nTWVzc2FnZXNQcm9wcyxcbiAgTG9hZGluZ01lc3NhZ2VzU3R5bGUsXG4gIExvYWRpbmdNZXNzYWdlc0NsYXNzZXMsXG59IGZyb20gJy4uL0xvYWRpbmdNZXNzYWdlcyc7XG5pbXBvcnQgeyBTeXN0ZW1DaGF0QnViYmxlIGFzIERlZmF1bHRTeXN0ZW1DaGF0QnViYmxlIH0gZnJvbSAnLi4vU3lzdGVtQ2hhdEJ1YmJsZSc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IENoYXRGZWVkU3R5bGVzLCBkZWZhdWx0Q2hhdEZlZWRTdHlsZXMgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBDaGF0RmVlZENsYXNzZXMsIGRlZmF1bHRDaGF0RmVlZENsYXNzZXMgfSBmcm9tICcuL2NsYXNzZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudFR5cGUnO1xuXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHlsZXMnO1xuXG4vLyBNb2RlbCBmb3IgQ2hhdEZlZWQgcHJvcHMuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhdEZlZWRQcm9wczxcbiAgVE1lc3NhZ2VEYXRhID0gc3RyaW5nLFxuICBUTWVzc2FnZSBleHRlbmRzIE1lc3NhZ2U8VE1lc3NhZ2VEYXRhPiA9IE1lc3NhZ2U8VE1lc3NhZ2VEYXRhPixcbiAgVEF1dGhvciBleHRlbmRzIEF1dGhvcjxUTWVzc2FnZURhdGE+ID0gQXV0aG9yPFRNZXNzYWdlRGF0YT5cbj4ge1xuICAvLyBTdHJ1Y3R1cmFsIHByb3BzXG4gIGNsYXNzTmFtZT86IHN0cmluZztcblxuICAvLyBGdW5jdGlvbmFsIHByb3BzXG4gIG1lc3NhZ2VzOiBUTWVzc2FnZVtdO1xuICBhdXRob3JzOiBUQXV0aG9yW107XG4gIHlvdXJBdXRob3JJZDogbnVtYmVyO1xuICBoYXNPbGRNZXNzYWdlcz86IGJvb2xlYW47XG4gIGxvYWRPbGRNZXNzYWdlc1RocmVzaG9sZD86IG51bWJlcjtcblxuICAvLyBWaXN1YWwgcHJvcHNcbiAgYnViYmxlc0NlbnRlcmVkPzogYm9vbGVhbjtcbiAgbWF4SGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBtaW5IZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLy8gU3dpdGNoZXNcbiAgc2hvd0RhdGVSb3c/OiBib29sZWFuO1xuICBzaG93UmVjaXBpZW50QXZhdGFyPzogYm9vbGVhbjtcbiAgc2hvd1JlY2lwaWVudExhc3RTZWVuTWVzc2FnZT86IGJvb2xlYW47XG4gIHNob3dJc1R5cGluZz86IGJvb2xlYW47XG4gIHNob3dMb2FkaW5nTWVzc2FnZXM/OiBib29sZWFuO1xuXG4gIC8vIEN1c3RvbSBjb21wb25lbnRzXG4gIEN1c3RvbUxvYWRpbmdNZXNzYWdlcz86IENvbXBvbmVudFR5cGU8TG9hZGluZ01lc3NhZ2VzUHJvcHM+O1xuICBDdXN0b21DaGF0QnViYmxlPzogQ29tcG9uZW50VHlwZTxcbiAgICBDaGF0QnViYmxlUHJvcHM8VE1lc3NhZ2VEYXRhLCBUTWVzc2FnZSwgVEF1dGhvcj5cbiAgPjtcbiAgQ3VzdG9tQnViYmxlR3JvdXA/OiBDb21wb25lbnRUeXBlPFxuICAgIEJ1YmJsZUdyb3VwUHJvcHM8VE1lc3NhZ2VEYXRhLCBUTWVzc2FnZSwgVEF1dGhvcj5cbiAgPjtcbiAgQ3VzdG9tU3lzdGVtQ2hhdEJ1YmJsZT86IENvbXBvbmVudFR5cGU8XG4gICAgQ2hhdEJ1YmJsZVByb3BzPFRNZXNzYWdlRGF0YSwgVE1lc3NhZ2UsIFRBdXRob3I+XG4gID47XG4gIEN1c3RvbUF2YXRhcj86IENvbXBvbmVudFR5cGU8QXZhdGFyUHJvcHM8VE1lc3NhZ2VEYXRhLCBUQXV0aG9yPj47XG4gIEN1c3RvbVNjcm9sbEFyZWE/OiBDb21wb25lbnRUeXBlPENoYXRTY3JvbGxBcmVhUHJvcHM+O1xuICBDdXN0b21DaGF0TWVzc2FnZXNDb250YWluZXI/OiBDb21wb25lbnRUeXBlPENoYXRNZXNzYWdlc0NvbnRhaW5lclByb3BzPjtcbiAgQ3VzdG9tSXNUeXBpbmc/OiBDb21wb25lbnRUeXBlPElzVHlwaW5nUHJvcHM8VE1lc3NhZ2VEYXRhLCBUQXV0aG9yPj47XG4gIEN1c3RvbUxhc3RTZWVuQXZhdGFyPzogQ29tcG9uZW50VHlwZTxcbiAgICBMYXN0U2VlbkF2YXRhclByb3BzPFRNZXNzYWdlRGF0YSwgVEF1dGhvcj5cbiAgPjtcbiAgQ3VzdG9tTWVzc2FnZVJlbmRlcj86IENvbXBvbmVudFR5cGU8XG4gICAgTWVzc2FnZVJlbmRlclByb3BzPFRNZXNzYWdlRGF0YSwgVE1lc3NhZ2U+XG4gID47XG4gIEN1c3RvbURhdGVSb3c/OiBDb21wb25lbnRUeXBlPERhdGVSb3dQcm9wcz47XG5cbiAgLy8gQ2FsbGJhY2tzXG4gIG9uTG9hZE9sZE1lc3NhZ2VzPzogKCkgPT4gUHJvbWlzZTx2b2lkPjtcblxuICAvLyBTdHlsZXNcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICBzdHlsZXM/OiBDaGF0RmVlZFN0eWxlcztcbiAgYnViYmxlR3JvdXBTdHlsZXM/OiBCdWJibGVHcm91cFN0eWxlcztcbiAgY2hhdEJ1YmJsZVN0eWxlcz86IENoYXRCdWJibGVTdHlsZXM7XG4gIGNoYXRTY3JvbGxBcmVhU3R5bGVzPzogQ2hhdFNjcm9sbEFyZWFTdHlsZXM7XG4gIGNoYXRNZXNzYWdlc0NvbnRhaW5lclN0eWxlcz86IENoYXRNZXNzYWdlc0NvbnRhaW5lclN0eWxlcztcbiAgYXZhdGFyU3R5bGVzPzogQXZhdGFyU3R5bGVzO1xuICBsYXN0U2VlbkF2YXRhclN0eWxlcz86IExhc3RTZWVuQXZhdGFyU3R5bGVzO1xuICBkYXRlUm93U3R5bGVzPzogRGF0ZVJvd1N0eWxlcztcbiAgbG9hZGluZ01lc3NhZ2VzU3R5bGU/OiBMb2FkaW5nTWVzc2FnZXNTdHlsZTtcbiAgaXNUeXBpbmdTdHlsZXM/OiBJc1R5cGluZ1N0eWxlcztcbiAgY2hhdEZlZWRTdHlsZXM/OiBDaGF0RmVlZFN0eWxlcztcblxuICAvLyBDbGFzc2VzXG4gIGNsYXNzZXM/OiBDaGF0RmVlZENsYXNzZXM7XG4gIGNoYXRCdWJibGVDbGFzc2VzPzogQ2hhdEJ1YmJsZUNsYXNzZXM7XG4gIGJ1YmJsZUdyb3VwQ2xhc3Nlcz86IEJ1YmJsZUdyb3VwQ2xhc3NlcztcbiAgY2hhdFNjcm9sbEFyZWFDbGFzc2VzPzogQ2hhdFNjcm9sbEFyZWFDbGFzc2VzO1xuICBjaGF0TWVzc2FnZXNDb250YWluZXJDbGFzc2VzPzogQ2hhdE1lc3NhZ2VzQ29udGFpbmVyQ2xhc3NlcztcbiAgYXZhdGFyQ2xhc3Nlcz86IEF2YXRhckNsYXNzZXM7XG4gIGxhc3RTZWVuQXZhdGFyQ2xhc3Nlcz86IExhc3RTZWVuQXZhdGFyQ2xhc3NlcztcbiAgZGF0ZVJvd0NsYXNzZXM/OiBEYXRlUm93Q2xhc3NlcztcbiAgbG9hZGluZ01lc3NhZ2VzQ2xhc3Nlcz86IExvYWRpbmdNZXNzYWdlc0NsYXNzZXM7XG4gIGlzVHlwaW5nQ2xhc3Nlcz86IElzVHlwaW5nQ2xhc3NlcztcbiAgY2hhdEZlZWRDbGFzc2VzPzogQ2hhdEZlZWRTdHlsZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhdEZlZWRTdGF0ZSB7XG4gIGlzTG9hZGluZ01lc3NhZ2VzOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXRGZWVkQXBpIHtcbiAgb25NZXNzYWdlU2VuZDogKCkgPT4gdm9pZDtcbiAgc2Nyb2xsQXBpOiBDaGF0U2Nyb2xsQXJlYUFwaTtcbn1cbmZ1bmN0aW9uIERlZmF1bHRNZXNzYWdlUmVuZGVyRnVuYyhwcm9wczogTWVzc2FnZVJlbmRlclByb3BzPHN0cmluZz4pIHtcbiAgcmV0dXJuIChcbiAgICBwcm9wcy5tZXNzYWdlICYmIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfSBzdHlsZT17cHJvcHMuc3R5bGV9PlxuICAgICAgICB7cHJvcHMubWVzc2FnZS5tZXNzYWdlfVxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGF0RmVlZFNuYXBzaG90IHtcbiAgd2FzU2Nyb2xsZWRUb0JvdHRvbTogYm9vbGVhbjtcbiAgc2Nyb2xsSGVpZ2h0OiBudW1iZXI7XG4gIGNsaWVudEhlaWdodDogbnVtYmVyO1xufVxuXG4vLyBSZWFjdCBjb21wb25lbnQgdG8gcmVuZGVyIGEgY29tcGxldGUgY2hhdCBmZWVkXG5leHBvcnQgY2xhc3MgQ2hhdEZlZWQ8XG4gICAgVE1lc3NhZ2VEYXRhID0gc3RyaW5nLFxuICAgIFRNZXNzYWdlIGV4dGVuZHMgTWVzc2FnZTxUTWVzc2FnZURhdGE+ID0gTWVzc2FnZTxUTWVzc2FnZURhdGE+LFxuICAgIFRBdXRob3IgZXh0ZW5kcyBBdXRob3I8VE1lc3NhZ2VEYXRhPiA9IEF1dGhvcjxUTWVzc2FnZURhdGE+XG4gID5cbiAgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxuICAgIENoYXRGZWVkUHJvcHM8VE1lc3NhZ2VEYXRhLCBUTWVzc2FnZSwgVEF1dGhvcj4sXG4gICAgQ2hhdEZlZWRTdGF0ZVxuICA+XG4gIGltcGxlbWVudHMgQ2hhdEZlZWRBcGkge1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogQ2hhdEZlZWRQcm9wcyA9IHtcbiAgICBtZXNzYWdlczogW10sXG4gICAgYXV0aG9yczogW10sXG4gICAgQ3VzdG9tQ2hhdEJ1YmJsZTogRGVmYXVsdENoYXRCdWJibGUsXG4gICAgQ3VzdG9tQnViYmxlR3JvdXA6IERlZmF1bHRCdWJibGVHcm91cCxcbiAgICBDdXN0b21NZXNzYWdlUmVuZGVyOiBEZWZhdWx0TWVzc2FnZVJlbmRlckZ1bmMsXG4gICAgQ3VzdG9tQXZhdGFyOiBEZWZhdWx0QXZhdGFyLFxuICAgIEN1c3RvbVNjcm9sbEFyZWE6IERlZmF1bHRDaGF0U2Nyb2xsQXJlYSxcbiAgICBDdXN0b21Jc1R5cGluZzogRGVmYXVsdElzVHlwaW5nLFxuICAgIEN1c3RvbUNoYXRNZXNzYWdlc0NvbnRhaW5lcjogRGVmYXVsdENoYXRNZXNzYWdlc0NvbnRhaW5lcixcbiAgICBDdXN0b21MYXN0U2VlbkF2YXRhcjogRGVmYXVsdExhc3RTZWVuQXZhdGFyLFxuICAgIEN1c3RvbURhdGVSb3c6IERlZmF1bHREYXRlUm93LFxuICAgIEN1c3RvbUxvYWRpbmdNZXNzYWdlczogRGVmYXVsdExvYWRpbmdNZXNzYWdlcyxcbiAgICB5b3VyQXV0aG9ySWQ6IDAsXG4gICAgbG9hZE9sZE1lc3NhZ2VzVGhyZXNob2xkOiA1MCxcbiAgICBDdXN0b21TeXN0ZW1DaGF0QnViYmxlOiBEZWZhdWx0U3lzdGVtQ2hhdEJ1YmJsZSxcbiAgfTtcblxuICBwdWJsaWMgc2Nyb2xsQXBpOiBDaGF0U2Nyb2xsQXJlYUFwaTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogQ2hhdEZlZWRQcm9wczxUTWVzc2FnZURhdGEsIFRNZXNzYWdlLCBUQXV0aG9yPikge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnJlbmRlck1lc3NhZ2VzID0gdGhpcy5yZW5kZXJNZXNzYWdlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Mb2FkT2xkTWVzc2FnZXMgPSB0aGlzLm9uTG9hZE9sZE1lc3NhZ2VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hcGlSZWYgPSB0aGlzLmFwaVJlZi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0xvYWRpbmdNZXNzYWdlczogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1lc3NhZ2VTZW5kKCkge1xuICAgIHRoaXMuc2Nyb2xsQXBpICYmIHRoaXMuc2Nyb2xsQXBpLnNjcm9sbFRvQm90dG9tKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNjcm9sbEFwaSAmJiB0aGlzLnNjcm9sbEFwaS5zY3JvbGxUb0JvdHRvbSgpO1xuICB9XG5cbiAgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoXG4gICAgcHJldlByb3BzOiBDaGF0RmVlZFByb3BzPFRNZXNzYWdlRGF0YSwgVE1lc3NhZ2UsIFRBdXRob3I+LFxuICAgIHByZXZTdGF0ZTogQ2hhdEZlZWRTdGF0ZVxuICApIHtcbiAgICBjb25zdCB3YXNTY3JvbGxlZFRvQm90dG9tID1cbiAgICAgIHRoaXMuc2Nyb2xsQXBpICYmIHRoaXMuc2Nyb2xsQXBpLnNjcm9sbGVkVG9Cb3R0b20oKTtcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB0aGlzLnNjcm9sbEFwaSAmJiB0aGlzLnNjcm9sbEFwaS5zY3JvbGxIZWlnaHQoKTtcbiAgICBjb25zdCBjbGllbnRIZWlnaHQgPSB0aGlzLnNjcm9sbEFwaSAmJiB0aGlzLnNjcm9sbEFwaS5jbGllbnRIZWlnaHQoKTtcblxuICAgIHJldHVybiB7XG4gICAgICB3YXNTY3JvbGxlZFRvQm90dG9tLFxuICAgICAgc2Nyb2xsSGVpZ2h0LFxuICAgICAgY2xpZW50SGVpZ2h0LFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoXG4gICAgcHJldlByb3BzOiBDaGF0RmVlZFByb3BzPFRNZXNzYWdlRGF0YSwgVE1lc3NhZ2UsIFRBdXRob3I+LFxuICAgIHByZXZTdGF0ZTogQ2hhdEZlZWRTdGF0ZSxcbiAgICBzbmFwc2hvdDogQ2hhdEZlZWRTbmFwc2hvdFxuICApIHtcbiAgICBpZiAoXG4gICAgICAodGhpcy5wcm9wcy5tZXNzYWdlcy5sZW5ndGggIT09IHByZXZQcm9wcy5tZXNzYWdlcy5sZW5ndGggfHxcbiAgICAgICAgdGhpcy5wcm9wcy5hdXRob3JzPy5zb21lPy4oXG4gICAgICAgICAgYSA9PlxuICAgICAgICAgICAgYS5pc1R5cGluZyAhPT1cbiAgICAgICAgICAgIHByZXZQcm9wcy5hdXRob3JzPy5maW5kPy4oX2EgPT4gYS5pZCA9PT0gX2EuaWQpPy5pc1R5cGluZ1xuICAgICAgICApKSAmJlxuICAgICAgc25hcHNob3QgJiZcbiAgICAgIHNuYXBzaG90Lndhc1Njcm9sbGVkVG9Cb3R0b21cbiAgICApIHtcbiAgICAgIHRoaXMuc2Nyb2xsQXBpLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMucHJvcHMubWVzc2FnZXMubGVuZ3RoICE9PSBwcmV2UHJvcHMubWVzc2FnZXMubGVuZ3RoICYmXG4gICAgICBzbmFwc2hvdCAmJlxuICAgICAgcHJldlN0YXRlLmlzTG9hZGluZ01lc3NhZ2VzXG4gICAgKSB7XG4gICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB0aGlzLnNjcm9sbEFwaSAmJiB0aGlzLnNjcm9sbEFwaS5zY3JvbGxIZWlnaHQoKTtcbiAgICAgIHRoaXMuc2Nyb2xsQXBpLnNjcm9sbFRvKHNjcm9sbEhlaWdodCAtIHNuYXBzaG90LnNjcm9sbEhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hhdCB0eXBlIG9mIG1lc3NhZ2UvbWVzc2FnZXMgdG8gcmVuZGVyLlxuICAgKi9cbiAgcmVuZGVyTWVzc2FnZXM8VD4obWVzc2FnZXM6IE1lc3NhZ2U8VD5bXSkge1xuICAgIGxldCB7IHN0eWxlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXN0eWxlcykge1xuICAgICAgc3R5bGVzID0ge307XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGNoYXRCdWJibGVTdHlsZXMsXG4gICAgICBjaGF0QnViYmxlQ2xhc3NlcyxcbiAgICAgIGRhdGVSb3dTdHlsZXMsXG4gICAgICBkYXRlUm93Q2xhc3NlcyxcbiAgICAgIGF2YXRhclN0eWxlcyxcbiAgICAgIGF2YXRhckNsYXNzZXMsXG4gICAgICBsYXN0U2VlbkF2YXRhclN0eWxlcyxcbiAgICAgIGxhc3RTZWVuQXZhdGFyQ2xhc3NlcyxcbiAgICAgIGJ1YmJsZUdyb3VwU3R5bGVzLFxuICAgICAgYnViYmxlR3JvdXBDbGFzc2VzLFxuICAgICAgQ3VzdG9tQ2hhdEJ1YmJsZSxcbiAgICAgIHNob3dSZWNpcGllbnRBdmF0YXIsXG4gICAgICBDdXN0b21CdWJibGVHcm91cCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIEZpcnN0IGdyb3VwIGJ5IGRheXNcbiAgICBjb25zdCBncm91cHMgPSBncm91cEJ5KFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBpdGVtID0+IGl0ZW0uY3JlYXRlZE9uICYmIGl0ZW0uY3JlYXRlZE9uLnRvRGF0ZVN0cmluZygpXG4gICAgKTtcbiAgICBsZXQgbWVzc2FnZU5vZGVzOiBSZWFjdC5SZWFjdE5vZGVbXSA9IFtdO1xuICAgIGxldCBqc3hLZXkgPSAwO1xuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IGdyb3VwID0gW107XG4gICAgICBjb25zdCBtZXNzYWdlc0dyb3VwID0gZ3JvdXBzW2tleV07XG4gICAgICBpZiAoXG4gICAgICAgIG1lc3NhZ2VzR3JvdXBbMF0gJiZcbiAgICAgICAgbWVzc2FnZXNHcm91cFswXS5jcmVhdGVkT24gJiZcbiAgICAgICAgdGhpcy5wcm9wcy5zaG93RGF0ZVJvd1xuICAgICAgKSB7XG4gICAgICAgIG1lc3NhZ2VOb2Rlcy5wdXNoKFxuICAgICAgICAgIDx0aGlzLnByb3BzLkN1c3RvbURhdGVSb3dcbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgZGF0ZT17bWVzc2FnZXNHcm91cFswXS5jcmVhdGVkT259XG4gICAgICAgICAgICBzdHlsZXM9e2RhdGVSb3dTdHlsZXN9XG4gICAgICAgICAgICBjbGFzc2VzPXtkYXRlUm93Q2xhc3Nlc31cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgbWVzc2FnZU5vZGVzID0gbWVzc2FnZU5vZGVzLmNvbmNhdChcbiAgICAgICAgbWVzc2FnZXNHcm91cC5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgZ3JvdXAucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICAvLyBGaW5kIGRpZmYgaW4gbWVzc2FnZSB0eXBlIG9yIG5vIG1vcmUgbWVzc2FnZXNcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWVzc2FnZXNHcm91cFtpbmRleCArIDFdIHx8XG4gICAgICAgICAgICBtZXNzYWdlc0dyb3VwW2luZGV4ICsgMV0uYXV0aG9ySWQgIT09IG1lc3NhZ2UuYXV0aG9ySWRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VHcm91cCA9IGdyb3VwO1xuICAgICAgICAgICAgY29uc3QgYXV0aG9yID1cbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hdXRob3JzICYmXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0aG9ycy5maWx0ZXIoYSA9PiBhLmlkID09PSBtZXNzYWdlLmF1dGhvcklkKVswXTtcbiAgICAgICAgICAgIGdyb3VwID0gW107XG4gICAgICAgICAgICBqc3hLZXkrKztcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDdXN0b21CdWJibGVHcm91cFxuICAgICAgICAgICAgICAgIGtleT17anN4S2V5fVxuICAgICAgICAgICAgICAgIHlvdXJBdXRob3JJZD17dGhpcy5wcm9wcy55b3VyQXV0aG9ySWR9XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM9e21lc3NhZ2VHcm91cH1cbiAgICAgICAgICAgICAgICBhdXRob3I9e2F1dGhvcn1cbiAgICAgICAgICAgICAgICBhdXRob3JzPXt0aGlzLnByb3BzLmF1dGhvcnN9XG4gICAgICAgICAgICAgICAgc2hvd1JlY2lwaWVudEF2YXRhcj17c2hvd1JlY2lwaWVudEF2YXRhcn1cbiAgICAgICAgICAgICAgICBDdXN0b21DaGF0QnViYmxlPXtDdXN0b21DaGF0QnViYmxlfVxuICAgICAgICAgICAgICAgIGNoYXRCdWJibGVTdHlsZXM9e2NoYXRCdWJibGVTdHlsZXN9XG4gICAgICAgICAgICAgICAgY2hhdEJ1YmJsZUNsYXNzZXM9e2NoYXRCdWJibGVDbGFzc2VzfVxuICAgICAgICAgICAgICAgIGF2YXRhclN0eWxlcz17YXZhdGFyU3R5bGVzfVxuICAgICAgICAgICAgICAgIGF2YXRhckNsYXNzZXM9e2F2YXRhckNsYXNzZXN9XG4gICAgICAgICAgICAgICAgbGFzdFNlZW5BdmF0YXJTdHlsZXM9e2xhc3RTZWVuQXZhdGFyU3R5bGVzfVxuICAgICAgICAgICAgICAgIGxhc3RTZWVuQXZhdGFyQ2xhc3Nlcz17bGFzdFNlZW5BdmF0YXJDbGFzc2VzfVxuICAgICAgICAgICAgICAgIHNob3dSZWNpcGllbnRMYXN0U2Vlbk1lc3NhZ2U9e1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93UmVjaXBpZW50TGFzdFNlZW5NZXNzYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEN1c3RvbUF2YXRhcj17dGhpcy5wcm9wcy5DdXN0b21BdmF0YXJ9XG4gICAgICAgICAgICAgICAgQ3VzdG9tTGFzdFNlZW5BdmF0YXI9e3RoaXMucHJvcHMuQ3VzdG9tTGFzdFNlZW5BdmF0YXJ9XG4gICAgICAgICAgICAgICAgQ3VzdG9tTWVzc2FnZVJlbmRlcj17dGhpcy5wcm9wcy5DdXN0b21NZXNzYWdlUmVuZGVyfVxuICAgICAgICAgICAgICAgIEN1c3RvbVN5c3RlbUNoYXRCdWJibGU9e3RoaXMucHJvcHMuQ3VzdG9tU3lzdGVtQ2hhdEJ1YmJsZX1cbiAgICAgICAgICAgICAgICBjbGFzc2VzPXtidWJibGVHcm91cENsYXNzZXN9XG4gICAgICAgICAgICAgICAgc3R5bGVzPXtidWJibGVHcm91cFN0eWxlc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWVzc2FnZU5vZGVzO1xuICB9XG5cbiAgYXBpUmVmKGU6IENoYXRTY3JvbGxBcmVhQXBpKSB7XG4gICAgaWYgKCF0aGlzLnNjcm9sbEFwaSkge1xuICAgICAgZS5zY3JvbGxUb0JvdHRvbSgpO1xuICAgIH1cbiAgICB0aGlzLnNjcm9sbEFwaSA9IGU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgc3R5bGVzLCBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNUeXBpbmdTdHlsZXMsIGlzVHlwaW5nQ2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXN0eWxlcykge1xuICAgICAgc3R5bGVzID0ge307XG4gICAgfVxuICAgIGlmICghY2xhc3Nlcykge1xuICAgICAgY2xhc3NlcyA9IHt9O1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBsb2FkaW5nTWVzc2FnZXNTdHlsZSxcbiAgICAgIGNoYXRGZWVkU3R5bGVzLFxuICAgICAgY2hhdFNjcm9sbEFyZWFTdHlsZXMsXG4gICAgICBsb2FkaW5nTWVzc2FnZXNDbGFzc2VzLFxuICAgICAgY2hhdFNjcm9sbEFyZWFDbGFzc2VzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdHlwaW5nQXV0aG9ycyA9XG4gICAgICB0aGlzLnByb3BzLmF1dGhvcnMgJiZcbiAgICAgIHRoaXMucHJvcHMuYXV0aG9ycy5maWx0ZXIoXG4gICAgICAgIGEgPT4gYS5pc1R5cGluZyAmJiBhLmlkICE9PSB0aGlzLnByb3BzLnlvdXJBdXRob3JJZFxuICAgICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICBkZWZhdWx0Q2hhdEZlZWRDbGFzc2VzLmNoYXRQYW5lbCxcbiAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbGFzc2VzPy5jaGF0UGFuZWxcbiAgICAgICAgKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAuLi5kZWZhdWx0Q2hhdEZlZWRTdHlsZXMuY2hhdFBhbmVsLFxuICAgICAgICAgIC4uLihjaGF0RmVlZFN0eWxlcyAmJiBjaGF0RmVlZFN0eWxlcy5jaGF0UGFuZWwpLFxuICAgICAgICAgIC4uLnRoaXMucHJvcHMuc3R5bGUsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDx0aGlzLnByb3BzLkN1c3RvbVNjcm9sbEFyZWFcbiAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAgIG1heEhlaWdodD17dGhpcy5wcm9wcy5tYXhIZWlnaHR9XG4gICAgICAgICAgYXBpUmVmPXt0aGlzLmFwaVJlZn1cbiAgICAgICAgICBsb2FkT2xkTWVzc2FnZXNUaHJlc2hvbGQ9e3RoaXMucHJvcHMubG9hZE9sZE1lc3NhZ2VzVGhyZXNob2xkfVxuICAgICAgICAgIG9uTG9hZE9sZE1lc3NhZ2VzPXt0aGlzLm9uTG9hZE9sZE1lc3NhZ2VzfVxuICAgICAgICAgIHN0eWxlcz17Y2hhdFNjcm9sbEFyZWFTdHlsZXN9XG4gICAgICAgICAgY2xhc3Nlcz17Y2hhdFNjcm9sbEFyZWFDbGFzc2VzfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoaXMucHJvcHMuQ3VzdG9tQ2hhdE1lc3NhZ2VzQ29udGFpbmVyXG4gICAgICAgICAgICBjbGFzc2VzPXt0aGlzLnByb3BzLmNoYXRNZXNzYWdlc0NvbnRhaW5lckNsYXNzZXN9XG4gICAgICAgICAgICBzdHlsZXM9e3RoaXMucHJvcHMuY2hhdE1lc3NhZ2VzQ29udGFpbmVyU3R5bGVzfVxuICAgICAgICAgICAgc2hvd0lzVHlwaW5nPXt0aGlzLnByb3BzLnNob3dJc1R5cGluZ31cbiAgICAgICAgICAgIHNob3dSZWNpcGllbnRBdmF0YXI9e3RoaXMucHJvcHMuc2hvd1JlY2lwaWVudEF2YXRhcn1cbiAgICAgICAgICAgIHNob3dSZWNpcGllbnRMYXN0U2Vlbk1lc3NhZ2U9e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLnNob3dSZWNpcGllbnRMYXN0U2Vlbk1lc3NhZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGhpcy5wcm9wcy5DdXN0b21Mb2FkaW5nTWVzc2FnZXNcbiAgICAgICAgICAgICAga2V5PXstMX1cbiAgICAgICAgICAgICAgaXNWaXNpYmxlPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNob3dMb2FkaW5nTWVzc2FnZXMgJiYgdGhpcy5zdGF0ZS5pc0xvYWRpbmdNZXNzYWdlc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHN0eWxlcz17bG9hZGluZ01lc3NhZ2VzU3R5bGV9XG4gICAgICAgICAgICAgIGNsYXNzZXM9e2xvYWRpbmdNZXNzYWdlc0NsYXNzZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyTWVzc2FnZXM8VE1lc3NhZ2VEYXRhPih0aGlzLnByb3BzLm1lc3NhZ2VzKX1cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dJc1R5cGluZyAmJiAoXG4gICAgICAgICAgICAgIDx0aGlzLnByb3BzLkN1c3RvbUlzVHlwaW5nXG4gICAgICAgICAgICAgICAga2V5PXstMn1cbiAgICAgICAgICAgICAgICB0eXBpbmdBdXRob3JzPXt0eXBpbmdBdXRob3JzfVxuICAgICAgICAgICAgICAgIHN0eWxlcz17aXNUeXBpbmdTdHlsZXN9XG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17aXNUeXBpbmdDbGFzc2VzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3RoaXMucHJvcHMuQ3VzdG9tQ2hhdE1lc3NhZ2VzQ29udGFpbmVyPlxuICAgICAgICA8L3RoaXMucHJvcHMuQ3VzdG9tU2Nyb2xsQXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG9uTG9hZE9sZE1lc3NhZ2VzKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc0xvYWRpbmdNZXNzYWdlcyAmJiB0aGlzLnByb3BzLmhhc09sZE1lc3NhZ2VzKSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpc0xvYWRpbmdNZXNzYWdlczogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHJlc29sdmUoKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkxvYWRPbGRNZXNzYWdlcykge1xuICAgICAgICBhd2FpdCB0aGlzLnByb3BzLm9uTG9hZE9sZE1lc3NhZ2VzKCk7XG4gICAgICB9XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpc0xvYWRpbmdNZXNzYWdlczogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxBcGkuc2Nyb2xsZWRUb0xvYWRUaHJlc2hvbGQoKSkge1xuICAgICAgICAgICAgICB0aGlzLnNjcm9sbEFwaS5zY3JvbGxUbyh0aGlzLnByb3BzLmxvYWRPbGRNZXNzYWdlc1RocmVzaG9sZCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2Q1NTIzYjQ3ODc2NjY4YTFmYWVcIikiXSwic291cmNlUm9vdCI6IiJ9