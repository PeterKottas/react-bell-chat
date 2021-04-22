self["webpackHotUpdatereact_bell_chat"]("index",{

/***/ "./src/demo/App.tsx":
/*!**************************!*\
  !*** ./src/demo/App.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.ts");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_getGravatarUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/getGravatarUrl */ "./src/demo/utils/getGravatarUrl.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
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

__webpack_require__(/*! ./app.scss */ "./src/demo/app.scss");



var styles = {
    button: {
        backgroundColor: '#fff',
        borderColor: '#1D2129',
        borderStyle: 'solid',
        borderRadius: 20,
        borderWidth: 2,
        color: '#1D2129',
        fontSize: 18,
        fontWeight: 300,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    selected: {
        color: '#fff',
        backgroundColor: '#0084FF',
        borderColor: '#0084FF',
    },
};
var customBubble = function (props) {
    var _a;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "mb-2" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.author &&
            props.author.name +
                ' ' +
                (props.message.authorId !== props.yourAuthorId ? 'says' : 'said') +
                ': '),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: (_a = props.classes) === null || _a === void 0 ? void 0 : _a.text }, props.message.message)));
};
var loadingChatBubbleClasses = {
    text: 'loading--placeholder',
};
var messages = [
    { message: '██ ██ ██████ ██ █ ████ █', authorId: 0 },
    { message: '████ ████ ██ ████', authorId: 1 },
    { message: '██ ███ ██ ███ ██ ███', authorId: 2 },
];
var customIsTypingFactory = function (_a) {
    var bubble = _a.bubble, useCustomStyles = _a.useCustomStyles;
    return function (props) {
        var _a;
        return ((_a = props.typingAuthors) === null || _a === void 0 ? void 0 : _a.length) > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.typingAuthors.map(function (a) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__.BubbleGroup, { key: a.id, yourAuthorId: 0, author: a, messages: [messages.find(function (m) { return m.authorId === a.id; })], chatBubbleClasses: loadingChatBubbleClasses, CustomChatBubble: bubble !== null && bubble !== void 0 ? bubble : _lib__WEBPACK_IMPORTED_MODULE_1__.ChatBubble, CustomAvatar: _lib__WEBPACK_IMPORTED_MODULE_1__.Avatar, CustomLastSeenAvatar: _lib__WEBPACK_IMPORTED_MODULE_1__.LastSeenAvatar, showRecipientAvatar: true, chatBubbleStyles: useCustomStyles ? chatBubbleStyles : undefined, avatarStyles: useCustomStyles ? avatarStyles : undefined })); })));
    };
};
function useClickHandler(propertyName, setState) {
    var handler = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
        setState(function (t) {
            var _a;
            return (__assign(__assign({}, t), (_a = {}, _a[propertyName] = !t[propertyName], _a)));
        });
    }, [propertyName]);
    return handler;
}
var chatBubbleStyles = {
    chatBubble: {
        boxShadow: 'rgb(187 187 187) 0px 0px 2px 0',
    },
    recipientChatBubble: {
        backgroundColor: 'white',
    },
    userChatBubble: {
        color: 'white',
        backgroundColor: 'rgb(0, 132, 255)',
    },
};
var lastSeenAvatarStyles = {
    container: {
        boxShadow: '#cacaca 0px 0px 10px 0px, rgb(187 187 187) 0px 0px 2px 0',
        backgroundColor: 'white',
        overflow: 'hidden',
    },
};
var avatarStyles = {
    container: {
        boxShadow: '#cacaca 0px 0px 20px 0px, rgb(187 187 187) 0px 0px 2px 0',
        backgroundColor: 'white',
        overflow: 'hidden',
    },
};
var style = {
    backgroundColor: '#f2f2f2',
};
var App = function () {
    var chat = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        authors: [
            {
                id: 0,
                name: 'You',
                bgImageUrl: (0,_utils_getGravatarUrl__WEBPACK_IMPORTED_MODULE_2__.getGravatarUrl)(0),
            },
            {
                id: 1,
                name: 'Mark',
                isTyping: false,
                lastSeenMessageId: 7,
                bgImageUrl: (0,_utils_getGravatarUrl__WEBPACK_IMPORTED_MODULE_2__.getGravatarUrl)(1),
            },
            {
                id: 2,
                name: 'Evan',
                isTyping: false,
                lastSeenMessageId: 7,
                bgImageUrl: (0,_utils_getGravatarUrl__WEBPACK_IMPORTED_MODULE_2__.getGravatarUrl)(2),
            },
        ],
        messages: [
            {
                id: 0,
                authorId: 1,
                message: 'Hey guys!!',
                createdOn: new Date(2018, 2, 27, 18, 32, 24),
                isSend: true,
            },
            {
                id: 1,
                authorId: 2,
                message: 'Hey! Evan here. react-bell-chat is pretty dooope.',
                createdOn: new Date(2018, 2, 28, 18, 12, 24),
                isSend: true,
            },
            {
                id: 2,
                authorId: 2,
                message: 'Rly is.',
                createdOn: new Date(2018, 2, 28, 18, 13, 24),
                isSend: true,
            },
            {
                id: 3,
                authorId: 2,
                message: 'Long group.',
                createdOn: new Date(2018, 2, 28, 18, 13, 24),
                isSend: true,
            },
            {
                id: 4,
                authorId: 0,
                message: 'My message.',
                createdOn: new Date(2018, 2, 29, 19, 32, 24),
                isSend: true,
            },
            {
                id: 5,
                authorId: 0,
                message: 'One more.',
                createdOn: new Date(2018, 2, 29, 19, 33, 24),
                isSend: true,
            },
            {
                id: 6,
                authorId: 2,
                message: 'One more group to see the scroll.',
                createdOn: new Date(2018, 2, 29, 19, 35, 24),
                isSend: true,
            },
            {
                id: 7,
                authorId: 2,
                message: 'I said group.',
                createdOn: new Date(2018, 2, 29, 19, 35, 24),
                isSend: true,
            },
        ],
        useCustomBubble: false,
        currentUser: 0,
        messageText: '',
        simulateTyping: false,
        showAvatar: true,
        showDateRow: true,
        showLastSeen: true,
        showIsTyping: true,
        showLoadingMessages: true,
        hasOldMessages: true,
        firstAuthorTimer: undefined,
        secondAuthorTimer: undefined,
        useCustomStyles: true,
        useAvatarBg: true,
        useCustomIsTyping: true,
    }), _b = _a[0], messageText = _b.messageText, authors = _b.authors, currentUser = _b.currentUser, firstAuthorTimer = _b.firstAuthorTimer, hasOldMessages = _b.hasOldMessages, messages = _b.messages, secondAuthorTimer = _b.secondAuthorTimer, showAvatar = _b.showAvatar, showDateRow = _b.showDateRow, showIsTyping = _b.showIsTyping, showLastSeen = _b.showLastSeen, showLoadingMessages = _b.showLoadingMessages, simulateTyping = _b.simulateTyping, useCustomBubble = _b.useCustomBubble, useCustomStyles = _b.useCustomStyles, useAvatarBg = _b.useAvatarBg, useCustomIsTyping = _b.useCustomIsTyping, setState = _a[1];
    var onPress = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (user) {
        setState(function (prev) { return (__assign(__assign({}, prev), { currentUser: user })); });
    }, []);
    var onMessageChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (e) {
        var newMessage = e.target.value;
        setState(function (prev) { return (__assign(__assign({}, prev), { messageText: newMessage })); });
    }, []);
    var onLoadOldMessages = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
        return new Promise(function (resolve) {
            return setTimeout(function () {
                setState(function (previousState) { return (__assign(__assign({}, previousState), { messages: new Array(10)
                        .fill(1)
                        .map(function (e, i) {
                        return ({
                            id: Number(new Date()),
                            createdOn: new Date(2017, 1, 1),
                            message: 'Old message ' + (i + 1).toString(),
                            authorId: Math.round(Math.random() + 1),
                        });
                    })
                        .concat(previousState.messages) })); });
                resolve();
            }, 1000);
        });
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () { var _a, _b, _c; return (_c = (_b = (_a = chat.current) === null || _a === void 0 ? void 0 : _a.scrollApi) === null || _b === void 0 ? void 0 : _b.scrollToBottom) === null || _c === void 0 ? void 0 : _c.call(_b); }, [
        showIsTyping,
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        return setState(function (prev) { return (__assign(__assign({}, prev), { authors: prev.authors.map(function (a, i) { return (__assign(__assign({}, a), { bgImageUrl: useAvatarBg ? (0,_utils_getGravatarUrl__WEBPACK_IMPORTED_MODULE_2__.getGravatarUrl)(i) : undefined })); }) })); });
    }, [useAvatarBg]);
    var onUseCustomStylesClick = useClickHandler('useCustomStyles', setState);
    var onUseCustomBubblesClick = useClickHandler('useCustomBubble', setState);
    var onShowAvatarClick = useClickHandler('showAvatar', setState);
    var onShowDateRowClick = useClickHandler('showDateRow', setState);
    var onShowIsTypingClick = useClickHandler('showIsTyping', setState);
    var onShowLastSeenClick = useClickHandler('showLastSeen', setState);
    var onShowLoadingMessagesClick = useClickHandler('showLoadingMessages', setState);
    var onUseCustomIsTypingClick = useClickHandler('useCustomIsTyping', setState);
    var onUseAvatarBgClick = useClickHandler('useAvatarBg', setState);
    var onHasOldMessagesClick = useClickHandler('hasOldMessages', setState);
    var onSimulateMessageButtonClick = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
        setState(function (prev) { return (__assign(__assign({}, prev), { messages: prev.messages.concat([
                {
                    id: Number(new Date()),
                    createdOn: new Date(),
                    message: 'Simulated message',
                    authorId: Math.round(Math.random() + 1),
                },
            ]) })); });
    }, []);
    var onSystemMessageClick = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
        setState(function (prev) { return (__assign(__assign({}, prev), { messages: prev.messages.concat([
                {
                    id: Number(new Date()),
                    createdOn: new Date(),
                    message: 'System message',
                },
            ]) })); });
    }, []);
    var onSimulateTypingButtonClick = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
        if (simulateTyping) {
            clearInterval(firstAuthorTimer);
            clearInterval(secondAuthorTimer);
            setState(function (prev) { return (__assign(__assign({}, prev), { simulateTyping: !simulateTyping, firstAuthorTimer: undefined, secondAuthorTimer: undefined })); });
        }
        else {
            setState(function (prev) { return (__assign(__assign({}, prev), { authors: prev.authors
                    .slice(0)
                    .map(function (a, i) { return (i === 1 ? a : __assign(__assign({}, a), { isTyping: !a.isTyping })); }) })); });
            var _firstAuthorTimer_1 = window.setInterval(function () {
                return setState(function (prev) { return (__assign(__assign({}, prev), { authors: prev.authors
                        .slice(0)
                        .map(function (a, i) { return (i === 1 ? a : __assign(__assign({}, a), { isTyping: !a.isTyping })); }) })); });
            }, 4000);
            setState(function (prev) { return (__assign(__assign({}, prev), { authors: prev.authors
                    .slice(0)
                    .map(function (a, i) { return (i === 2 ? a : __assign(__assign({}, a), { isTyping: !a.isTyping })); }) })); });
            var _secondAuthorTimer_1 = window.setInterval(function () {
                return setState(function (prev) { return (__assign(__assign({}, prev), { authors: prev.authors
                        .slice(0)
                        .map(function (a, i) { return (i === 2 ? a : __assign(__assign({}, a), { isTyping: !a.isTyping })); }) })); });
            }, 5200);
            setState(function (prev) { return (__assign(__assign({}, prev), { firstAuthorTimer: _firstAuthorTimer_1, secondAuthorTimer: _secondAuthorTimer_1, simulateTyping: !simulateTyping })); });
        }
    }, [simulateTyping]);
    var onMessageSubmit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (e) {
        var _a, _b;
        e.preventDefault();
        if (messageText !== '') {
            var id_1 = Number(new Date());
            var newMessage_1 = {
                id: id_1,
                authorId: currentUser,
                message: messageText,
                createdOn: new Date(),
                isSend: false,
            };
            setState(function (previousState) { return (__assign(__assign({}, previousState), { messageText: '', messages: previousState.messages.concat(newMessage_1) })); });
            (_b = (_a = chat.current) === null || _a === void 0 ? void 0 : _a.onMessageSend) === null || _b === void 0 ? void 0 : _b.call(_a);
            setTimeout(function () {
                setState(function (previousState) { return (__assign(__assign({}, previousState), { messages: previousState.messages.map(function (m) {
                        return m.id === id_1 ? __assign(__assign({}, m), { isSend: true }) : m;
                    }) })); });
            }, 2000);
        }
        return true;
    }, [messageText, currentUser]);
    var CustomIsTyping = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
        return useCustomIsTyping
            ? customIsTypingFactory({
                bubble: useCustomBubble ? customBubble : _lib__WEBPACK_IMPORTED_MODULE_1__.ChatBubble,
                showRecipientAvatar: showAvatar,
                useCustomStyles: useCustomStyles,
            })
            : undefined;
    }, [useCustomBubble, useCustomIsTyping, showAvatar, useCustomStyles]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: "text-center" }, "react-bell-chat"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "text-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "https://github.com/PeterKottas/react-bell-chat", target: "_blank", rel: "noreferrer" }, "Github")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "install" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "yarn add react-bell-chat")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "chatfeed-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__.ChatFeed, { ref: chat, yourAuthorId: 0, messages: messages, authors: authors, style: useCustomStyles ? style : undefined, avatarStyles: useCustomStyles ? avatarStyles : undefined, lastSeenAvatarStyles: useCustomStyles ? lastSeenAvatarStyles : undefined, chatBubbleStyles: useCustomStyles ? chatBubbleStyles : undefined, maxHeight: 350, CustomChatBubble: useCustomBubble ? customBubble : undefined, CustomIsTyping: CustomIsTyping, showRecipientAvatar: showAvatar, showIsTyping: showIsTyping, showRecipientLastSeenMessage: showLastSeen, showDateRow: showDateRow, showLoadingMessages: showLoadingMessages, hasOldMessages: hasOldMessages, onLoadOldMessages: onLoadOldMessages }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", { onSubmit: function (e) { return onMessageSubmit(e); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { placeholder: "Type a message...", className: "message-input", value: messageText, onChange: onMessageChange })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "label mt-0 bt-0" }, "Authors:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: 'flex', justifyContent: 'space-around' } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { role: "button", style: __assign(__assign({}, styles.button), (currentUser === 0 ? styles.selected : {})), onClick: function () { return onPress(0); } }, "You"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (currentUser === 1 ? styles.selected : {})), onClick: function () { return onPress(1); } }, "Mark"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (currentUser === 2 ? styles.selected : {})), onClick: function () { return onPress(2); } }, "Evan")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "label" }, "Simulate input:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: 10,
                } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (simulateTyping ? styles.selected : {})), onClick: onSimulateTypingButtonClick }, "Simulate typing"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign({}, styles.button), onClick: onSimulateMessageButtonClick }, "Simulate message"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign({}, styles.button), onClick: onSystemMessageClick }, "System message")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "label" }, "Switches:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: 10,
                } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (showAvatar ? styles.selected : {})), onClick: onShowAvatarClick }, "Show Avatars"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (showIsTyping ? styles.selected : {})), onClick: onShowIsTypingClick }, "Show typing indicator"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (showLastSeen ? styles.selected : {})), onClick: onShowLastSeenClick }, "Show last seen")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: 10,
                } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (showDateRow ? styles.selected : {})), onClick: onShowDateRowClick }, "Show date row"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (showLoadingMessages ? styles.selected : {})), onClick: onShowLoadingMessagesClick }, "Show Loading"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (useAvatarBg ? styles.selected : {})), onClick: onUseAvatarBgClick }, "Avatars images"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (hasOldMessages ? styles.selected : {})), onClick: onHasOldMessagesClick }, "Has more messages")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "label" }, "Customization:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: 10,
                } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (useCustomStyles ? styles.selected : {})), onClick: onUseCustomStylesClick }, "Styles"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (useCustomBubble ? styles.selected : {})), onClick: onUseCustomBubblesClick }, "Bubbles"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (useCustomIsTyping ? styles.selected : {})), onClick: onUseCustomIsTypingClick }, "Typing indicator")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_hot_loader__WEBPACK_IMPORTED_MODULE_3__.hot)(module)(App));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("46f16181887bc4bf8616")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1iZWxsLWNoYXQvLi9zcmMvZGVtby9BcHAudHN4Iiwid2VicGFjazovL3JlYWN0LWJlbGwtY2hhdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUMvQixtQkFBTyxDQUFDLHVDQUFZLENBQUMsQ0FBQztBQWVOO0FBQ3VCO0FBQ2lCO0FBRXhELElBQU0sTUFBTSxHQUEyQztJQUNyRCxNQUFNLEVBQUU7UUFDTixlQUFlLEVBQUUsTUFBTTtRQUN2QixXQUFXLEVBQUUsU0FBUztRQUN0QixXQUFXLEVBQUUsT0FBTztRQUNwQixZQUFZLEVBQUUsRUFBRTtRQUNoQixXQUFXLEVBQUUsQ0FBQztRQUNkLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEdBQUc7UUFDZixVQUFVLEVBQUUsQ0FBQztRQUNiLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsWUFBWSxFQUFFLEVBQUU7S0FDakI7SUFDRCxRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUUsTUFBTTtRQUNiLGVBQWUsRUFBRSxTQUFTO1FBQzFCLFdBQVcsRUFBRSxTQUFTO0tBQ3ZCO0NBQ0YsQ0FBQztBQUVGLElBQU0sWUFBWSxHQUFzQyxVQUFDLEtBQUs7O0lBQUssUUFDakUsMERBQUssU0FBUyxFQUFDLE1BQU07UUFDbkIsK0RBQ0csS0FBSyxDQUFDLE1BQU07WUFDWCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUk7Z0JBQ2YsR0FBRztnQkFDSCxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNqRSxJQUFJLENBQ0g7UUFDUCwyREFBTSxTQUFTLEVBQUUsV0FBSyxDQUFD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QUFNLEdBQ2IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUU3QyxPQUFPLEVBQUUsdUJBQXVCLGNBR3pCO2dCQUNULDZEQUNFLEtBQUssd0JBQ0EsTUFBTSxDQUFDLE1BQU0sR0FDYixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FFL0MsT0FBTyxFQUFFLHdCQUF3Qix1QkFHMUIsQ0FDTCxDQUNGLENBQ0YsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsaUVBQWUscURBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7VUMzckJoQyxzRCIsImZpbGUiOiI2MmM1YzZmLWluZGV4LXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5yZXF1aXJlKCcuL2FwcC5zY3NzJyk7XG5pbXBvcnQge1xuICBDaGF0RmVlZCxcbiAgTWVzc2FnZSxcbiAgQXV0aG9yLFxuICBDaGF0QnViYmxlUHJvcHMsXG4gIENoYXRCdWJibGVTdHlsZXMsXG4gIExhc3RTZWVuQXZhdGFyU3R5bGVzLFxuICBBdmF0YXJTdHlsZXMsXG4gIElzVHlwaW5nUHJvcHMsXG4gIEJ1YmJsZUdyb3VwLFxuICBBdmF0YXIsXG4gIExhc3RTZWVuQXZhdGFyLFxuICBDaGF0QnViYmxlLFxuICBDaGF0QnViYmxlQ2xhc3Nlcyxcbn0gZnJvbSAnLi4vbGliJztcbmltcG9ydCB7IGhvdCB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInO1xuaW1wb3J0IHsgZ2V0R3JhdmF0YXJVcmwgfSBmcm9tICcuL3V0aWxzL2dldEdyYXZhdGFyVXJsJztcblxuY29uc3Qgc3R5bGVzOiB7IFtrZXk6IHN0cmluZ106IFJlYWN0LkNTU1Byb3BlcnRpZXMgfSA9IHtcbiAgYnV0dG9uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyQ29sb3I6ICcjMUQyMTI5JyxcbiAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICBib3JkZXJSYWRpdXM6IDIwLFxuICAgIGJvcmRlcldpZHRoOiAyLFxuICAgIGNvbG9yOiAnIzFEMjEyOScsXG4gICAgZm9udFNpemU6IDE4LFxuICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICBwYWRkaW5nVG9wOiA4LFxuICAgIHBhZGRpbmdCb3R0b206IDgsXG4gICAgcGFkZGluZ0xlZnQ6IDE2LFxuICAgIHBhZGRpbmdSaWdodDogMTYsXG4gIH0sXG4gIHNlbGVjdGVkOiB7XG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA4NEZGJyxcbiAgICBib3JkZXJDb2xvcjogJyMwMDg0RkYnLFxuICB9LFxufTtcblxuY29uc3QgY3VzdG9tQnViYmxlOiBSZWFjdC5GQzxDaGF0QnViYmxlUHJvcHM8c3RyaW5nPj4gPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgPHNwYW4+XG4gICAgICB7cHJvcHMuYXV0aG9yICYmXG4gICAgICAgIHByb3BzLmF1dGhvci5uYW1lICtcbiAgICAgICAgICAnICcgK1xuICAgICAgICAgIChwcm9wcy5tZXNzYWdlLmF1dGhvcklkICE9PSBwcm9wcy55b3VyQXV0aG9ySWQgPyAnc2F5cycgOiAnc2FpZCcpICtcbiAgICAgICAgICAnOiAnfVxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXM/LnRleHR9Pntwcm9wcy5tZXNzYWdlLm1lc3NhZ2V9PC9zcGFuPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IGxvYWRpbmdDaGF0QnViYmxlQ2xhc3NlczogQ2hhdEJ1YmJsZUNsYXNzZXMgPSB7XG4gIHRleHQ6ICdsb2FkaW5nLS1wbGFjZWhvbGRlcicsXG59O1xuXG5jb25zdCBtZXNzYWdlczogTWVzc2FnZTxzdHJpbmc+W10gPSBbXG4gIHsgbWVzc2FnZTogJ+KWiOKWiCDilojilogg4paI4paI4paI4paI4paI4paIIOKWiOKWiCDilogg4paI4paI4paI4paIIOKWiCcsIGF1dGhvcklkOiAwIH0sXG4gIHsgbWVzc2FnZTogJ+KWiOKWiOKWiOKWiCDilojilojilojilogg4paI4paIIOKWiOKWiOKWiOKWiCcsIGF1dGhvcklkOiAxIH0sXG4gIHsgbWVzc2FnZTogJ+KWiOKWiCDilojilojilogg4paI4paIIOKWiOKWiOKWiCDilojilogg4paI4paI4paIJywgYXV0aG9ySWQ6IDIgfSxcbl07XG5cbmNvbnN0IGN1c3RvbUlzVHlwaW5nRmFjdG9yeTogKHByb3BzOiB7XG4gIGJ1YmJsZTogUmVhY3QuRkM8Q2hhdEJ1YmJsZVByb3BzPHN0cmluZz4+O1xuICB1c2VDdXN0b21TdHlsZXM6IGJvb2xlYW47XG4gIHNob3dSZWNpcGllbnRBdmF0YXI6IGJvb2xlYW47XG59KSA9PiBSZWFjdC5GQzxJc1R5cGluZ1Byb3BzPiA9ICh7IGJ1YmJsZSwgdXNlQ3VzdG9tU3R5bGVzIH0pID0+IChwcm9wcykgPT5cbiAgcHJvcHMudHlwaW5nQXV0aG9ycz8ubGVuZ3RoID4gMCAmJiAoXG4gICAgPD5cbiAgICAgIHtwcm9wcy50eXBpbmdBdXRob3JzLm1hcCgoYSkgPT4gKFxuICAgICAgICA8QnViYmxlR3JvdXA8c3RyaW5nPlxuICAgICAgICAgIGtleT17YS5pZH1cbiAgICAgICAgICB5b3VyQXV0aG9ySWQ9ezB9XG4gICAgICAgICAgYXV0aG9yPXthfVxuICAgICAgICAgIG1lc3NhZ2VzPXtbbWVzc2FnZXMuZmluZCgobSkgPT4gbS5hdXRob3JJZCA9PT0gYS5pZCldfVxuICAgICAgICAgIGNoYXRCdWJibGVDbGFzc2VzPXtsb2FkaW5nQ2hhdEJ1YmJsZUNsYXNzZXN9XG4gICAgICAgICAgQ3VzdG9tQ2hhdEJ1YmJsZT17YnViYmxlID8/IENoYXRCdWJibGV9XG4gICAgICAgICAgQ3VzdG9tQXZhdGFyPXtBdmF0YXJ9XG4gICAgICAgICAgQ3VzdG9tTGFzdFNlZW5BdmF0YXI9e0xhc3RTZWVuQXZhdGFyfVxuICAgICAgICAgIHNob3dSZWNpcGllbnRBdmF0YXI9e3RydWV9XG4gICAgICAgICAgY2hhdEJ1YmJsZVN0eWxlcz17dXNlQ3VzdG9tU3R5bGVzID8gY2hhdEJ1YmJsZVN0eWxlcyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBhdmF0YXJTdHlsZXM9e3VzZUN1c3RvbVN0eWxlcyA/IGF2YXRhclN0eWxlcyA6IHVuZGVmaW5lZH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xuXG5pbnRlcmZhY2UgQ2hhdFN0YXRlIHtcbiAgYXV0aG9yczogQXV0aG9yW107XG4gIG1lc3NhZ2VzOiBNZXNzYWdlPHN0cmluZz5bXTtcbiAgdXNlQ3VzdG9tQnViYmxlOiBib29sZWFuO1xuICBjdXJyZW50VXNlcjogbnVtYmVyO1xuICBtZXNzYWdlVGV4dDogc3RyaW5nO1xuICBzaW11bGF0ZVR5cGluZzogYm9vbGVhbjtcbiAgc2hvd0F2YXRhcjogYm9vbGVhbjtcbiAgc2hvd0xhc3RTZWVuOiBib29sZWFuO1xuICBzaG93RGF0ZVJvdzogYm9vbGVhbjtcbiAgc2hvd0lzVHlwaW5nOiBib29sZWFuO1xuICBzaG93TG9hZGluZ01lc3NhZ2VzOiBib29sZWFuO1xuICBoYXNPbGRNZXNzYWdlczogYm9vbGVhbjtcbiAgZmlyc3RBdXRob3JUaW1lcjogbnVtYmVyO1xuICBzZWNvbmRBdXRob3JUaW1lcjogbnVtYmVyO1xuICB1c2VDdXN0b21TdHlsZXM6IGJvb2xlYW47XG4gIHVzZUF2YXRhckJnOiBib29sZWFuO1xuICB1c2VDdXN0b21Jc1R5cGluZzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gdXNlQ2xpY2tIYW5kbGVyPFQgPSBDaGF0U3RhdGU+KFxuICBwcm9wZXJ0eU5hbWU6IGtleW9mIFQsXG4gIHNldFN0YXRlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxUPj5cbikge1xuICBjb25zdCBoYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN0YXRlKCh0KSA9PiAoeyAuLi50LCBbcHJvcGVydHlOYW1lXTogIXRbcHJvcGVydHlOYW1lXSB9KSk7XG4gIH0sIFtwcm9wZXJ0eU5hbWVdKTtcbiAgcmV0dXJuIGhhbmRsZXI7XG59XG5cbmNvbnN0IGNoYXRCdWJibGVTdHlsZXM6IENoYXRCdWJibGVTdHlsZXMgPSB7XG4gIGNoYXRCdWJibGU6IHtcbiAgICBib3hTaGFkb3c6ICdyZ2IoMTg3IDE4NyAxODcpIDBweCAwcHggMnB4IDAnLFxuICB9LFxuICByZWNpcGllbnRDaGF0QnViYmxlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICB9LFxuICB1c2VyQ2hhdEJ1YmJsZToge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigwLCAxMzIsIDI1NSknLFxuICB9LFxufTtcblxuY29uc3QgbGFzdFNlZW5BdmF0YXJTdHlsZXM6IExhc3RTZWVuQXZhdGFyU3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICBib3hTaGFkb3c6ICcjY2FjYWNhIDBweCAwcHggMTBweCAwcHgsIHJnYigxODcgMTg3IDE4NykgMHB4IDBweCAycHggMCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgfSxcbn07XG5cbmNvbnN0IGF2YXRhclN0eWxlczogQXZhdGFyU3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICBib3hTaGFkb3c6ICcjY2FjYWNhIDBweCAwcHggMjBweCAwcHgsIHJnYigxODcgMTg3IDE4NykgMHB4IDBweCAycHggMCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgfSxcbn07XG5cbmNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjJmMmYyJyxcbn07XG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGNoYXQ6IFJlYWN0LlJlZjxDaGF0RmVlZDxzdHJpbmc+PiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGNvbnN0IFtcbiAgICB7XG4gICAgICBtZXNzYWdlVGV4dCxcbiAgICAgIGF1dGhvcnMsXG4gICAgICBjdXJyZW50VXNlcixcbiAgICAgIGZpcnN0QXV0aG9yVGltZXIsXG4gICAgICBoYXNPbGRNZXNzYWdlcyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgc2Vjb25kQXV0aG9yVGltZXIsXG4gICAgICBzaG93QXZhdGFyLFxuICAgICAgc2hvd0RhdGVSb3csXG4gICAgICBzaG93SXNUeXBpbmcsXG4gICAgICBzaG93TGFzdFNlZW4sXG4gICAgICBzaG93TG9hZGluZ01lc3NhZ2VzLFxuICAgICAgc2ltdWxhdGVUeXBpbmcsXG4gICAgICB1c2VDdXN0b21CdWJibGUsXG4gICAgICB1c2VDdXN0b21TdHlsZXMsXG4gICAgICB1c2VBdmF0YXJCZyxcbiAgICAgIHVzZUN1c3RvbUlzVHlwaW5nLFxuICAgIH0sXG4gICAgc2V0U3RhdGUsXG4gIF0gPSBSZWFjdC51c2VTdGF0ZTxDaGF0U3RhdGU+KHtcbiAgICBhdXRob3JzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiAnWW91JyxcbiAgICAgICAgYmdJbWFnZVVybDogZ2V0R3JhdmF0YXJVcmwoMCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ01hcmsnLFxuICAgICAgICBpc1R5cGluZzogZmFsc2UsXG4gICAgICAgIGxhc3RTZWVuTWVzc2FnZUlkOiA3LFxuICAgICAgICBiZ0ltYWdlVXJsOiBnZXRHcmF2YXRhclVybCgxKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAnRXZhbicsXG4gICAgICAgIGlzVHlwaW5nOiBmYWxzZSxcbiAgICAgICAgbGFzdFNlZW5NZXNzYWdlSWQ6IDcsXG4gICAgICAgIGJnSW1hZ2VVcmw6IGdldEdyYXZhdGFyVXJsKDIpLFxuICAgICAgfSxcbiAgICBdLFxuICAgIG1lc3NhZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBhdXRob3JJZDogMSxcbiAgICAgICAgbWVzc2FnZTogJ0hleSBndXlzISEnLFxuICAgICAgICBjcmVhdGVkT246IG5ldyBEYXRlKDIwMTgsIDIsIDI3LCAxOCwgMzIsIDI0KSxcbiAgICAgICAgaXNTZW5kOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGF1dGhvcklkOiAyLFxuICAgICAgICBtZXNzYWdlOiAnSGV5ISBFdmFuIGhlcmUuIHJlYWN0LWJlbGwtY2hhdCBpcyBwcmV0dHkgZG9vb3BlLicsXG4gICAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoMjAxOCwgMiwgMjgsIDE4LCAxMiwgMjQpLFxuICAgICAgICBpc1NlbmQ6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgYXV0aG9ySWQ6IDIsXG4gICAgICAgIG1lc3NhZ2U6ICdSbHkgaXMuJyxcbiAgICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgyMDE4LCAyLCAyOCwgMTgsIDEzLCAyNCksXG4gICAgICAgIGlzU2VuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBhdXRob3JJZDogMixcbiAgICAgICAgbWVzc2FnZTogJ0xvbmcgZ3JvdXAuJyxcbiAgICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgyMDE4LCAyLCAyOCwgMTgsIDEzLCAyNCksXG4gICAgICAgIGlzU2VuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBhdXRob3JJZDogMCxcbiAgICAgICAgbWVzc2FnZTogJ015IG1lc3NhZ2UuJyxcbiAgICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgyMDE4LCAyLCAyOSwgMTksIDMyLCAyNCksXG4gICAgICAgIGlzU2VuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBhdXRob3JJZDogMCxcbiAgICAgICAgbWVzc2FnZTogJ09uZSBtb3JlLicsXG4gICAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoMjAxOCwgMiwgMjksIDE5LCAzMywgMjQpLFxuICAgICAgICBpc1NlbmQ6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNixcbiAgICAgICAgYXV0aG9ySWQ6IDIsXG4gICAgICAgIG1lc3NhZ2U6ICdPbmUgbW9yZSBncm91cCB0byBzZWUgdGhlIHNjcm9sbC4nLFxuICAgICAgICBjcmVhdGVkT246IG5ldyBEYXRlKDIwMTgsIDIsIDI5LCAxOSwgMzUsIDI0KSxcbiAgICAgICAgaXNTZW5kOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIGF1dGhvcklkOiAyLFxuICAgICAgICBtZXNzYWdlOiAnSSBzYWlkIGdyb3VwLicsXG4gICAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoMjAxOCwgMiwgMjksIDE5LCAzNSwgMjQpLFxuICAgICAgICBpc1NlbmQ6IHRydWUsXG4gICAgICB9LFxuICAgIF0sXG4gICAgdXNlQ3VzdG9tQnViYmxlOiBmYWxzZSxcbiAgICBjdXJyZW50VXNlcjogMCxcbiAgICBtZXNzYWdlVGV4dDogJycsXG4gICAgc2ltdWxhdGVUeXBpbmc6IGZhbHNlLFxuICAgIHNob3dBdmF0YXI6IHRydWUsXG4gICAgc2hvd0RhdGVSb3c6IHRydWUsXG4gICAgc2hvd0xhc3RTZWVuOiB0cnVlLFxuICAgIHNob3dJc1R5cGluZzogdHJ1ZSxcbiAgICBzaG93TG9hZGluZ01lc3NhZ2VzOiB0cnVlLFxuICAgIGhhc09sZE1lc3NhZ2VzOiB0cnVlLFxuICAgIGZpcnN0QXV0aG9yVGltZXI6IHVuZGVmaW5lZCxcbiAgICBzZWNvbmRBdXRob3JUaW1lcjogdW5kZWZpbmVkLFxuICAgIHVzZUN1c3RvbVN0eWxlczogdHJ1ZSxcbiAgICB1c2VBdmF0YXJCZzogdHJ1ZSxcbiAgICB1c2VDdXN0b21Jc1R5cGluZzogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3Qgb25QcmVzcyA9IFJlYWN0LnVzZUNhbGxiYWNrKCh1c2VyOiBudW1iZXIpID0+IHtcbiAgICBzZXRTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgY3VycmVudFVzZXI6IHVzZXIgfSkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25NZXNzYWdlQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCBuZXdNZXNzYWdlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBzZXRTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgbWVzc2FnZVRleHQ6IG5ld01lc3NhZ2UgfSkpO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBvbkxvYWRPbGRNZXNzYWdlcyA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICgpID0+XG4gICAgICBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0U3RhdGUoKHByZXZpb3VzU3RhdGUpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2aW91c1N0YXRlLFxuICAgICAgICAgICAgbWVzc2FnZXM6IG5ldyBBcnJheSgxMClcbiAgICAgICAgICAgICAgLmZpbGwoMSlcbiAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAoZSwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBOdW1iZXIobmV3IERhdGUoKSksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoMjAxNywgMSwgMSksXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdPbGQgbWVzc2FnZSAnICsgKGkgKyAxKS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3JJZDogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICsgMSksXG4gICAgICAgICAgICAgICAgICB9IGFzIE1lc3NhZ2U8c3RyaW5nPilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAuY29uY2F0KHByZXZpb3VzU3RhdGUubWVzc2FnZXMpLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sIDEwMDApXG4gICAgICApLFxuICAgIFtdXG4gICk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IGNoYXQuY3VycmVudD8uc2Nyb2xsQXBpPy5zY3JvbGxUb0JvdHRvbT8uKCksIFtcbiAgICBzaG93SXNUeXBpbmcsXG4gIF0pO1xuICBSZWFjdC51c2VFZmZlY3QoXG4gICAgKCkgPT5cbiAgICAgIHNldFN0YXRlKChwcmV2KSA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBhdXRob3JzOiBwcmV2LmF1dGhvcnMubWFwKChhLCBpKSA9PiAoe1xuICAgICAgICAgIC4uLmEsXG4gICAgICAgICAgYmdJbWFnZVVybDogdXNlQXZhdGFyQmcgPyBnZXRHcmF2YXRhclVybChpKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgfSkpLFxuICAgICAgfSkpLFxuICAgIFt1c2VBdmF0YXJCZ11cbiAgKTtcblxuICBjb25zdCBvblVzZUN1c3RvbVN0eWxlc0NsaWNrID0gdXNlQ2xpY2tIYW5kbGVyKCd1c2VDdXN0b21TdHlsZXMnLCBzZXRTdGF0ZSk7XG4gIGNvbnN0IG9uVXNlQ3VzdG9tQnViYmxlc0NsaWNrID0gdXNlQ2xpY2tIYW5kbGVyKCd1c2VDdXN0b21CdWJibGUnLCBzZXRTdGF0ZSk7XG4gIGNvbnN0IG9uU2hvd0F2YXRhckNsaWNrID0gdXNlQ2xpY2tIYW5kbGVyKCdzaG93QXZhdGFyJywgc2V0U3RhdGUpO1xuICBjb25zdCBvblNob3dEYXRlUm93Q2xpY2sgPSB1c2VDbGlja0hhbmRsZXIoJ3Nob3dEYXRlUm93Jywgc2V0U3RhdGUpO1xuICBjb25zdCBvblNob3dJc1R5cGluZ0NsaWNrID0gdXNlQ2xpY2tIYW5kbGVyKCdzaG93SXNUeXBpbmcnLCBzZXRTdGF0ZSk7XG4gIGNvbnN0IG9uU2hvd0xhc3RTZWVuQ2xpY2sgPSB1c2VDbGlja0hhbmRsZXIoJ3Nob3dMYXN0U2VlbicsIHNldFN0YXRlKTtcbiAgY29uc3Qgb25TaG93TG9hZGluZ01lc3NhZ2VzQ2xpY2sgPSB1c2VDbGlja0hhbmRsZXIoXG4gICAgJ3Nob3dMb2FkaW5nTWVzc2FnZXMnLFxuICAgIHNldFN0YXRlXG4gICk7XG4gIGNvbnN0IG9uVXNlQ3VzdG9tSXNUeXBpbmdDbGljayA9IHVzZUNsaWNrSGFuZGxlcihcbiAgICAndXNlQ3VzdG9tSXNUeXBpbmcnLFxuICAgIHNldFN0YXRlXG4gICk7XG4gIGNvbnN0IG9uVXNlQXZhdGFyQmdDbGljayA9IHVzZUNsaWNrSGFuZGxlcigndXNlQXZhdGFyQmcnLCBzZXRTdGF0ZSk7XG4gIGNvbnN0IG9uSGFzT2xkTWVzc2FnZXNDbGljayA9IHVzZUNsaWNrSGFuZGxlcignaGFzT2xkTWVzc2FnZXMnLCBzZXRTdGF0ZSk7XG5cbiAgY29uc3Qgb25TaW11bGF0ZU1lc3NhZ2VCdXR0b25DbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTdGF0ZSgocHJldikgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBtZXNzYWdlczogcHJldi5tZXNzYWdlcy5jb25jYXQoW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IE51bWJlcihuZXcgRGF0ZSgpKSxcbiAgICAgICAgICBjcmVhdGVkT246IG5ldyBEYXRlKCksXG4gICAgICAgICAgbWVzc2FnZTogJ1NpbXVsYXRlZCBtZXNzYWdlJyxcbiAgICAgICAgICBhdXRob3JJZDogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICsgMSksXG4gICAgICAgIH0sXG4gICAgICBdKSxcbiAgICB9KSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblN5c3RlbU1lc3NhZ2VDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTdGF0ZSgocHJldikgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBtZXNzYWdlczogcHJldi5tZXNzYWdlcy5jb25jYXQoW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IE51bWJlcihuZXcgRGF0ZSgpKSxcbiAgICAgICAgICBjcmVhdGVkT246IG5ldyBEYXRlKCksXG4gICAgICAgICAgbWVzc2FnZTogJ1N5c3RlbSBtZXNzYWdlJyxcbiAgICAgICAgfSxcbiAgICAgIF0pLFxuICAgIH0pKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uU2ltdWxhdGVUeXBpbmdCdXR0b25DbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoc2ltdWxhdGVUeXBpbmcpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoZmlyc3RBdXRob3JUaW1lcik7XG4gICAgICBjbGVhckludGVydmFsKHNlY29uZEF1dGhvclRpbWVyKTtcbiAgICAgIHNldFN0YXRlKChwcmV2KSA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBzaW11bGF0ZVR5cGluZzogIXNpbXVsYXRlVHlwaW5nLFxuICAgICAgICBmaXJzdEF1dGhvclRpbWVyOiB1bmRlZmluZWQsXG4gICAgICAgIHNlY29uZEF1dGhvclRpbWVyOiB1bmRlZmluZWQsXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXRlKChwcmV2KSA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBhdXRob3JzOiBwcmV2LmF1dGhvcnNcbiAgICAgICAgICAuc2xpY2UoMClcbiAgICAgICAgICAubWFwKChhLCBpKSA9PiAoaSA9PT0gMSA/IGEgOiB7IC4uLmEsIGlzVHlwaW5nOiAhYS5pc1R5cGluZyB9KSksXG4gICAgICB9KSk7XG4gICAgICBsZXQgX2ZpcnN0QXV0aG9yVGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoXG4gICAgICAgICgpID0+XG4gICAgICAgICAgc2V0U3RhdGUoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgYXV0aG9yczogcHJldi5hdXRob3JzXG4gICAgICAgICAgICAgIC5zbGljZSgwKVxuICAgICAgICAgICAgICAubWFwKChhLCBpKSA9PiAoaSA9PT0gMSA/IGEgOiB7IC4uLmEsIGlzVHlwaW5nOiAhYS5pc1R5cGluZyB9KSksXG4gICAgICAgICAgfSkpLFxuICAgICAgICA0MDAwXG4gICAgICApO1xuICAgICAgc2V0U3RhdGUoKHByZXYpID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIGF1dGhvcnM6IHByZXYuYXV0aG9yc1xuICAgICAgICAgIC5zbGljZSgwKVxuICAgICAgICAgIC5tYXAoKGEsIGkpID0+IChpID09PSAyID8gYSA6IHsgLi4uYSwgaXNUeXBpbmc6ICFhLmlzVHlwaW5nIH0pKSxcbiAgICAgIH0pKTtcbiAgICAgIGxldCBfc2Vjb25kQXV0aG9yVGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoXG4gICAgICAgICgpID0+XG4gICAgICAgICAgc2V0U3RhdGUoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgYXV0aG9yczogcHJldi5hdXRob3JzXG4gICAgICAgICAgICAgIC5zbGljZSgwKVxuICAgICAgICAgICAgICAubWFwKChhLCBpKSA9PiAoaSA9PT0gMiA/IGEgOiB7IC4uLmEsIGlzVHlwaW5nOiAhYS5pc1R5cGluZyB9KSksXG4gICAgICAgICAgfSkpLFxuICAgICAgICA1MjAwXG4gICAgICApO1xuICAgICAgc2V0U3RhdGUoKHByZXYpID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIGZpcnN0QXV0aG9yVGltZXI6IF9maXJzdEF1dGhvclRpbWVyLFxuICAgICAgICBzZWNvbmRBdXRob3JUaW1lcjogX3NlY29uZEF1dGhvclRpbWVyLFxuICAgICAgICBzaW11bGF0ZVR5cGluZzogIXNpbXVsYXRlVHlwaW5nLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwgW3NpbXVsYXRlVHlwaW5nXSk7XG5cbiAgY29uc3Qgb25NZXNzYWdlU3VibWl0ID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAobWVzc2FnZVRleHQgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuICAgICAgICBjb25zdCBuZXdNZXNzYWdlOiBNZXNzYWdlPHN0cmluZz4gPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgYXV0aG9ySWQ6IGN1cnJlbnRVc2VyLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VUZXh0LFxuICAgICAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoKSxcbiAgICAgICAgICBpc1NlbmQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBzZXRTdGF0ZSgocHJldmlvdXNTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2aW91c1N0YXRlLFxuICAgICAgICAgIG1lc3NhZ2VUZXh0OiAnJyxcbiAgICAgICAgICBtZXNzYWdlczogcHJldmlvdXNTdGF0ZS5tZXNzYWdlcy5jb25jYXQobmV3TWVzc2FnZSksXG4gICAgICAgIH0pKTtcbiAgICAgICAgY2hhdC5jdXJyZW50Py5vbk1lc3NhZ2VTZW5kPy4oKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0U3RhdGUoKHByZXZpb3VzU3RhdGUpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2aW91c1N0YXRlLFxuICAgICAgICAgICAgbWVzc2FnZXM6IHByZXZpb3VzU3RhdGUubWVzc2FnZXMubWFwKChtKSA9PlxuICAgICAgICAgICAgICBtLmlkID09PSBpZCA/IHsgLi4ubSwgaXNTZW5kOiB0cnVlIH0gOiBtXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIFttZXNzYWdlVGV4dCwgY3VycmVudFVzZXJdXG4gICk7XG5cbiAgY29uc3QgQ3VzdG9tSXNUeXBpbmcgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+XG4gICAgICB1c2VDdXN0b21Jc1R5cGluZ1xuICAgICAgICA/IGN1c3RvbUlzVHlwaW5nRmFjdG9yeSh7XG4gICAgICAgICAgICBidWJibGU6IHVzZUN1c3RvbUJ1YmJsZSA/IGN1c3RvbUJ1YmJsZSA6IENoYXRCdWJibGUsXG4gICAgICAgICAgICBzaG93UmVjaXBpZW50QXZhdGFyOiBzaG93QXZhdGFyLFxuICAgICAgICAgICAgdXNlQ3VzdG9tU3R5bGVzLFxuICAgICAgICAgIH0pXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgIFt1c2VDdXN0b21CdWJibGUsIHVzZUN1c3RvbUlzVHlwaW5nLCBzaG93QXZhdGFyLCB1c2VDdXN0b21TdHlsZXNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+cmVhY3QtYmVsbC1jaGF0PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9QZXRlcktvdHRhcy9yZWFjdC1iZWxsLWNoYXRcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBHaXRodWJcbiAgICAgICAgPC9hPlxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWxsXCI+XG4gICAgICAgIDxjb2RlPnlhcm4gYWRkIHJlYWN0LWJlbGwtY2hhdDwvY29kZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0ZmVlZC13cmFwcGVyXCI+XG4gICAgICAgIDxDaGF0RmVlZDxzdHJpbmc+XG4gICAgICAgICAgcmVmPXtjaGF0fVxuICAgICAgICAgIHlvdXJBdXRob3JJZD17MH1cbiAgICAgICAgICBtZXNzYWdlcz17bWVzc2FnZXN9XG4gICAgICAgICAgYXV0aG9ycz17YXV0aG9yc31cbiAgICAgICAgICBzdHlsZT17dXNlQ3VzdG9tU3R5bGVzID8gc3R5bGUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgYXZhdGFyU3R5bGVzPXt1c2VDdXN0b21TdHlsZXMgPyBhdmF0YXJTdHlsZXMgOiB1bmRlZmluZWR9XG4gICAgICAgICAgbGFzdFNlZW5BdmF0YXJTdHlsZXM9e1xuICAgICAgICAgICAgdXNlQ3VzdG9tU3R5bGVzID8gbGFzdFNlZW5BdmF0YXJTdHlsZXMgOiB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hhdEJ1YmJsZVN0eWxlcz17dXNlQ3VzdG9tU3R5bGVzID8gY2hhdEJ1YmJsZVN0eWxlcyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBtYXhIZWlnaHQ9ezM1MH1cbiAgICAgICAgICBDdXN0b21DaGF0QnViYmxlPXt1c2VDdXN0b21CdWJibGUgPyBjdXN0b21CdWJibGUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgQ3VzdG9tSXNUeXBpbmc9e0N1c3RvbUlzVHlwaW5nfVxuICAgICAgICAgIHNob3dSZWNpcGllbnRBdmF0YXI9e3Nob3dBdmF0YXJ9XG4gICAgICAgICAgc2hvd0lzVHlwaW5nPXtzaG93SXNUeXBpbmd9XG4gICAgICAgICAgc2hvd1JlY2lwaWVudExhc3RTZWVuTWVzc2FnZT17c2hvd0xhc3RTZWVufVxuICAgICAgICAgIHNob3dEYXRlUm93PXtzaG93RGF0ZVJvd31cbiAgICAgICAgICBzaG93TG9hZGluZ01lc3NhZ2VzPXtzaG93TG9hZGluZ01lc3NhZ2VzfVxuICAgICAgICAgIGhhc09sZE1lc3NhZ2VzPXtoYXNPbGRNZXNzYWdlc31cbiAgICAgICAgICBvbkxvYWRPbGRNZXNzYWdlcz17b25Mb2FkT2xkTWVzc2FnZXN9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBvbk1lc3NhZ2VTdWJtaXQoZSl9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZS4uLlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlLWlucHV0XCJcbiAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlVGV4dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbk1lc3NhZ2VDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsIG10LTAgYnQtMFwiPkF1dGhvcnM6PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcgfX0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAuLi4oY3VycmVudFVzZXIgPT09IDAgPyBzdHlsZXMuc2VsZWN0ZWQgOiB7fSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QcmVzcygwKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBZb3VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAuLi4oY3VycmVudFVzZXIgPT09IDEgPyBzdHlsZXMuc2VsZWN0ZWQgOiB7fSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QcmVzcygxKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBNYXJrXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgLi4uKGN1cnJlbnRVc2VyID09PSAyID8gc3R5bGVzLnNlbGVjdGVkIDoge30pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUHJlc3MoMil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRXZhblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPlNpbXVsYXRlIGlucHV0OjwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcbiAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICAgIC4uLihzaW11bGF0ZVR5cGluZyA/IHN0eWxlcy5zZWxlY3RlZCA6IHt9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtvblNpbXVsYXRlVHlwaW5nQnV0dG9uQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2ltdWxhdGUgdHlwaW5nXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtvblNpbXVsYXRlTWVzc2FnZUJ1dHRvbkNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpbXVsYXRlIG1lc3NhZ2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uU3lzdGVtTWVzc2FnZUNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN5c3RlbSBtZXNzYWdlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+U3dpdGNoZXM6PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgLi4uKHNob3dBdmF0YXIgPyBzdHlsZXMuc2VsZWN0ZWQgOiB7fSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17b25TaG93QXZhdGFyQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2hvdyBBdmF0YXJzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgLi4uKHNob3dJc1R5cGluZyA/IHN0eWxlcy5zZWxlY3RlZCA6IHt9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtvblNob3dJc1R5cGluZ0NsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNob3cgdHlwaW5nIGluZGljYXRvclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICAgIC4uLihzaG93TGFzdFNlZW4gPyBzdHlsZXMuc2VsZWN0ZWQgOiB7fSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17b25TaG93TGFzdFNlZW5DbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaG93IGxhc3Qgc2VlblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAuLi4oc2hvd0RhdGVSb3cgPyBzdHlsZXMuc2VsZWN0ZWQgOiB7fSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17b25TaG93RGF0ZVJvd0NsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNob3cgZGF0ZSByb3dcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAuLi4oc2hvd0xvYWRpbmdNZXNzYWdlcyA/IHN0eWxlcy5zZWxlY3RlZCA6IHt9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtvblNob3dMb2FkaW5nTWVzc2FnZXNDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaG93IExvYWRpbmdcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAuLi4odXNlQXZhdGFyQmcgPyBzdHlsZXMuc2VsZWN0ZWQgOiB7fSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17b25Vc2VBdmF0YXJCZ0NsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEF2YXRhcnMgaW1hZ2VzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgLi4uKGhhc09sZE1lc3NhZ2VzID8gc3R5bGVzLnNlbGVjdGVkIDoge30pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uSGFzT2xkTWVzc2FnZXNDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBIYXMgbW9yZSBtZXNzYWdlc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkN1c3RvbWl6YXRpb246PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgLi4uKHVzZUN1c3RvbVN0eWxlcyA/IHN0eWxlcy5zZWxlY3RlZCA6IHt9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtvblVzZUN1c3RvbVN0eWxlc0NsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN0eWxlc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICAgIC4uLih1c2VDdXN0b21CdWJibGUgPyBzdHlsZXMuc2VsZWN0ZWQgOiB7fSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17b25Vc2VDdXN0b21CdWJibGVzQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQnViYmxlc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICAgIC4uLih1c2VDdXN0b21Jc1R5cGluZyA/IHN0eWxlcy5zZWxlY3RlZCA6IHt9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtvblVzZUN1c3RvbUlzVHlwaW5nQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVHlwaW5nIGluZGljYXRvclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG90KG1vZHVsZSkoQXBwKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ2ZjE2MTgxODg3YmM0YmY4NjE2XCIpIl0sInNvdXJjZVJvb3QiOiIifQ==