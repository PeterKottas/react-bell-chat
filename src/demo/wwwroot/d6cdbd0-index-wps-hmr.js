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
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_getGravatarUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/getGravatarUrl */ "./src/demo/utils/getGravatarUrl.ts");
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-debounce */ "./node_modules/use-debounce/esm/useDebouncedCallback.js");
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
        return ((_a = props.typingAuthors) === null || _a === void 0 ? void 0 : _a.length) > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.typingAuthors.map(function (a) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__.BubbleGroup, { key: a.id, yourAuthorId: 0, author: a, messages: a.isTypingMessage
                ? [{ message: a.isTypingMessage + '...', authorId: a.id }]
                : [messages.find(function (m) { return m.authorId === a.id; })], chatBubbleClasses: a.isTypingMessage ? undefined : loadingChatBubbleClasses, CustomChatBubble: bubble !== null && bubble !== void 0 ? bubble : _lib__WEBPACK_IMPORTED_MODULE_1__.ChatBubble, CustomAvatar: _lib__WEBPACK_IMPORTED_MODULE_1__.Avatar, CustomLastSeenAvatar: _lib__WEBPACK_IMPORTED_MODULE_1__.LastSeenAvatar, showRecipientAvatar: true, chatBubbleStyles: useCustomStyles ? chatBubbleStyles : undefined, avatarStyles: useCustomStyles ? avatarStyles : undefined })); })));
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
        showMsgProgress: false,
    }), _b = _a[0], messageText = _b.messageText, authors = _b.authors, currentUser = _b.currentUser, firstAuthorTimer = _b.firstAuthorTimer, hasOldMessages = _b.hasOldMessages, messages = _b.messages, secondAuthorTimer = _b.secondAuthorTimer, showAvatar = _b.showAvatar, showDateRow = _b.showDateRow, showIsTyping = _b.showIsTyping, showLastSeen = _b.showLastSeen, showLoadingMessages = _b.showLoadingMessages, simulateTyping = _b.simulateTyping, useCustomBubble = _b.useCustomBubble, useCustomStyles = _b.useCustomStyles, useAvatarBg = _b.useAvatarBg, useCustomIsTyping = _b.useCustomIsTyping, showMsgProgress = _b.showMsgProgress, setState = _a[1];
    var onPress = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (user) {
        setState(function (prev) { return (__assign(__assign({}, prev), { currentUser: user })); });
    }, []);
    var handleIsTyping = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (authorId) {
        setState(function (prev) { return (__assign(__assign({}, prev), { authors: prev.authors
                .slice(0)
                .map(function (a, i) { return (i === authorId ? a : __assign(__assign({}, a), { isTyping: !a.isTyping })); }) })); });
    }, []);
    var handleIsCurrentTyping = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
        if (currentUser !== 0) {
            setState(function (prev) { return (__assign(__assign({}, prev), { authors: prev.authors
                    .slice(0)
                    .map(function (a, i) {
                    return i === currentUser ? a : __assign(__assign({}, a), { isTyping: !a.isTyping });
                }) })); });
        }
    }, [currentUser]);
    var handleIsTypingDebounced = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((0,use_debounce__WEBPACK_IMPORTED_MODULE_3__.default)(handleIsCurrentTyping, 700, {
        leading: true,
        trailing: true,
    }), [handleIsCurrentTyping]);
    var onMessageChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (e) {
        var newMessage = e.target.value;
        setState(function (prev) { return (__assign(__assign({}, prev), { messageText: newMessage, authors: showMsgProgress
                ? prev.authors
                    .slice(0)
                    .map(function (a, i) {
                    return i === currentUser ? a : __assign(__assign({}, a), { isTypingMessage: newMessage });
                })
                : prev.authors })); });
        handleIsTypingDebounced();
        handleIsTypingDebounced();
    }, [handleIsTypingDebounced, currentUser, showMsgProgress]);
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
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (!showMsgProgress) {
            setState(function (prev) { return (__assign(__assign({}, prev), { authors: prev.authors.map(function (a, i) { return (__assign(__assign({}, a), { isTypingMessage: '' })); }) })); });
        }
    }, [showMsgProgress]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () { var _a, _b, _c; return (_c = (_b = (_a = chat.current) === null || _a === void 0 ? void 0 : _a.scrollApi) === null || _b === void 0 ? void 0 : _b.scrollToBottom) === null || _c === void 0 ? void 0 : _c.call(_b); }, [
        showIsTyping,
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        return setState(function (prev) { return (__assign(__assign({}, prev), { authors: prev.authors.map(function (a, i) { return (__assign(__assign({}, a), { bgImageUrl: useAvatarBg ? (0,_utils_getGravatarUrl__WEBPACK_IMPORTED_MODULE_2__.getGravatarUrl)(i) : undefined })); }) })); });
    }, [useAvatarBg]);
    var onShowMsgProgressClick = useClickHandler('showMsgProgress', setState);
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
            handleIsTyping(1);
            var _firstAuthorTimer_1 = window.setInterval(function () { return handleIsTyping(1); }, 4000);
            handleIsTyping(2);
            var _secondAuthorTimer_1 = window.setInterval(function () { return handleIsTyping(2); }, 5200);
            setState(function (prev) { return (__assign(__assign({}, prev), { firstAuthorTimer: _firstAuthorTimer_1, secondAuthorTimer: _secondAuthorTimer_1, simulateTyping: !simulateTyping })); });
        }
    }, [simulateTyping, handleIsTyping]);
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
            setState(function (previousState) { return (__assign(__assign({}, previousState), { messageText: '', messages: previousState.messages.concat(newMessage_1), authors: previousState.authors
                    .slice(0)
                    .map(function (a, i) {
                    return i === currentUser ? a : __assign(__assign({}, a), { isTypingMessage: '' });
                }) })); });
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
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (showMsgProgress ? styles.selected : {})), onClick: onShowMsgProgressClick }, "Show msg progress"),
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_hot_loader__WEBPACK_IMPORTED_MODULE_4__.hot)(module)(App));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ccdb45b188a690d1546e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1iZWxsLWNoYXQvLi9zcmMvZGVtby9BcHAudHN4Iiwid2VicGFjazovL3JlYWN0LWJlbGwtY2hhdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDL0IsbUJBQU8sQ0FBQyx1Q0FBWSxDQUFDLENBQUM7QUFlTjtBQUN1QjtBQUNpQjtBQUNKO0FBRXBELElBQU0sTUFBTSxHQUEyQztJQUNyRCxNQUFNLEVBQUU7UUFDTixlQUFlLEVBQUUsTUFBTTtRQUN2QixXQUFXLEVBQUUsU0FBUztRQUN0QixXQUFXLEVBQUUsT0FBTztRQUNwQixZQUFZLEVBQUUsRUFBRTtRQUNoQixXQUFXLEVBQUUsQ0FBQztRQUNkLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEdBQUc7UUFDZixVQUFVLEVBQUUsQ0FBQztRQUNiLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsWUFBWSxFQUFFLEVBQUU7S0FDakI7SUFDRCxRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUUsTUFBTTtRQUNiLGVBQWUsRUFBRSxTQUFTO1FBQzFCLFdBQVcsRUFBRSxTQUFTO0tBQ3ZCO0NBQ0YsQ0FBQztBQUVGLElBQU0sWUFBWSxHQUFzQyxVQUFDLEtBQUs7O0lBQUssUUFDakUsMERBQUssU0FBUyxFQUFDLE1BQU07UUFDbkIsK0RBQ0csS0FBSyxDQUFDLE1BQU07WUFDWCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUk7Z0JBQ2YsR0FBRztnQkFDSCxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNqRSxJQUFJLENBQ0g7UUFDUCwyREFBTSxTQUFTLEVBQUUsV0FB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O29CQUNmLGNBQWMsRUFBRSxjQUFjO29CQUM5QixTQUFTLEVBQUUsRUFBRTtpQkFDZDtnQkFFRCw2REFDRSxLQUFLLHdCQUNBLE1BQU0sQ0FBQyxNQUFNLEdBQ2IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUU3QyxPQUFPLEVBQUUsc0JBQXNCLGFBR3hCO2dCQUNULDZEQUNFLEtBQUssd0JBQ0EsTUFBTSxDQUFDLE1BQU0sR0FDYixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBRTdDLE9BQU8sRUFBRSx1QkFBdUIsY0FHekI7Z0JBQ1QsNkRBQ0UsS0FBSyx3QkFDQSxNQUFNLENBQUMsTUFBTSxHQUNiLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUUvQyxPQUFPLEVBQUUsd0JBQXdCLHVCQUcxQixDQUNMLENBQ0YsQ0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixpRUFBZSxxREFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDOzs7Ozs7Ozs7OztVQ2x2QmhDLHNEIiwiZmlsZSI6ImQ2Y2RiZDAtaW5kZXgtd3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbnJlcXVpcmUoJy4vYXBwLnNjc3MnKTtcbmltcG9ydCB7XG4gIENoYXRGZWVkLFxuICBNZXNzYWdlLFxuICBBdXRob3IsXG4gIENoYXRCdWJibGVQcm9wcyxcbiAgQ2hhdEJ1YmJsZVN0eWxlcyxcbiAgTGFzdFNlZW5BdmF0YXJTdHlsZXMsXG4gIEF2YXRhclN0eWxlcyxcbiAgSXNUeXBpbmdQcm9wcyxcbiAgQnViYmxlR3JvdXAsXG4gIEF2YXRhcixcbiAgTGFzdFNlZW5BdmF0YXIsXG4gIENoYXRCdWJibGUsXG4gIENoYXRCdWJibGVDbGFzc2VzLFxufSBmcm9tICcuLi9saWInO1xuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcic7XG5pbXBvcnQgeyBnZXRHcmF2YXRhclVybCB9IGZyb20gJy4vdXRpbHMvZ2V0R3JhdmF0YXJVcmwnO1xuaW1wb3J0IHsgdXNlRGVib3VuY2VkQ2FsbGJhY2sgfSBmcm9tICd1c2UtZGVib3VuY2UnO1xuXG5jb25zdCBzdHlsZXM6IHsgW2tleTogc3RyaW5nXTogUmVhY3QuQ1NTUHJvcGVydGllcyB9ID0ge1xuICBidXR0b246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXJDb2xvcjogJyMxRDIxMjknLFxuICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgYm9yZGVyV2lkdGg6IDIsXG4gICAgY29sb3I6ICcjMUQyMTI5JyxcbiAgICBmb250U2l6ZTogMTgsXG4gICAgZm9udFdlaWdodDogMzAwLFxuICAgIHBhZGRpbmdUb3A6IDgsXG4gICAgcGFkZGluZ0JvdHRvbTogOCxcbiAgICBwYWRkaW5nTGVmdDogMTYsXG4gICAgcGFkZGluZ1JpZ2h0OiAxNixcbiAgfSxcbiAgc2VsZWN0ZWQ6IHtcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDg0RkYnLFxuICAgIGJvcmRlckNvbG9yOiAnIzAwODRGRicsXG4gIH0sXG59O1xuXG5jb25zdCBjdXN0b21CdWJibGU6IFJlYWN0LkZDPENoYXRCdWJibGVQcm9wczxzdHJpbmc+PiA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICA8c3Bhbj5cbiAgICAgIHtwcm9wcy5hdXRob3IgJiZcbiAgICAgICAgcHJvcHMuYXV0aG9yLm5hbWUgK1xuICAgICAgICAgICcgJyArXG4gICAgICAgICAgKHByb3BzLm1lc3NhZ2UuYXV0aG9ySWQgIT09IHByb3BzLnlvdXJBdXRob3JJZCA/ICdzYXlzJyA6ICdzYWlkJykgK1xuICAgICAgICAgICc6ICd9XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcz8udGV4dH0+e3Byb3BzLm1lc3NhZ2UubWVzc2FnZX08L3NwYW4+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgbG9hZGluZ0NoYXRCdWJibGVDbGFzc2VzOiBDaGF0QnViYmxlQ2xhc3NlcyA9IHtcbiAgdGV4dDogJ2xvYWRpbmctLXBsYWNlaG9sZGVyJyxcbn07XG5cbmNvbnN0IG1lc3NhZ2VzOiBNZXNzYWdlPHN0cmluZz5bXSA9IFtcbiAgeyBtZXNzYWdlOiAn4paI4paIIOKWiOKWiCDilojilojilojilojilojilogg4paI4paIIOKWiCDilojilojilojilogg4paIJywgYXV0aG9ySWQ6IDAgfSxcbiAgeyBtZXNzYWdlOiAn4paI4paI4paI4paIIOKWiOKWiOKWiOKWiCDilojilogg4paI4paI4paI4paIJywgYXV0aG9ySWQ6IDEgfSxcbiAgeyBtZXNzYWdlOiAn4paI4paIIOKWiOKWiOKWiCDilojilogg4paI4paI4paIIOKWiOKWiCDilojilojilognLCBhdXRob3JJZDogMiB9LFxuXTtcblxuY29uc3QgY3VzdG9tSXNUeXBpbmdGYWN0b3J5OiAocHJvcHM6IHtcbiAgYnViYmxlOiBSZWFjdC5GQzxDaGF0QnViYmxlUHJvcHM8c3RyaW5nPj47XG4gIHVzZUN1c3RvbVN0eWxlczogYm9vbGVhbjtcbiAgc2hvd1JlY2lwaWVudEF2YXRhcjogYm9vbGVhbjtcbn0pID0+IFJlYWN0LkZDPElzVHlwaW5nUHJvcHM8c3RyaW5nPj4gPSAoeyBidWJibGUsIHVzZUN1c3RvbVN0eWxlcyB9KSA9PiAoXG4gIHByb3BzXG4pID0+XG4gIHByb3BzLnR5cGluZ0F1dGhvcnM/Lmxlbmd0aCA+IDAgJiYgKFxuICAgIDw+XG4gICAgICB7cHJvcHMudHlwaW5nQXV0aG9ycy5tYXAoKGEpID0+IChcbiAgICAgICAgPEJ1YmJsZUdyb3VwPHN0cmluZz5cbiAgICAgICAgICBrZXk9e2EuaWR9XG4gICAgICAgICAgeW91ckF1dGhvcklkPXswfVxuICAgICAgICAgIGF1dGhvcj17YX1cbiAgICAgICAgICBtZXNzYWdlcz17XG4gICAgICAgICAgICBhLmlzVHlwaW5nTWVzc2FnZVxuICAgICAgICAgICAgICA/IFt7IG1lc3NhZ2U6IGEuaXNUeXBpbmdNZXNzYWdlICsgJy4uLicsIGF1dGhvcklkOiBhLmlkIH1dXG4gICAgICAgICAgICAgIDogW21lc3NhZ2VzLmZpbmQoKG0pID0+IG0uYXV0aG9ySWQgPT09IGEuaWQpXVxuICAgICAgICAgIH1cbiAgICAgICAgICBjaGF0QnViYmxlQ2xhc3Nlcz17XG4gICAgICAgICAgICBhLmlzVHlwaW5nTWVzc2FnZSA/IHVuZGVmaW5lZCA6IGxvYWRpbmdDaGF0QnViYmxlQ2xhc3Nlc1xuICAgICAgICAgIH1cbiAgICAgICAgICBDdXN0b21DaGF0QnViYmxlPXtidWJibGUgPz8gQ2hhdEJ1YmJsZX1cbiAgICAgICAgICBDdXN0b21BdmF0YXI9e0F2YXRhcn1cbiAgICAgICAgICBDdXN0b21MYXN0U2VlbkF2YXRhcj17TGFzdFNlZW5BdmF0YXJ9XG4gICAgICAgICAgc2hvd1JlY2lwaWVudEF2YXRhcj17dHJ1ZX1cbiAgICAgICAgICBjaGF0QnViYmxlU3R5bGVzPXt1c2VDdXN0b21TdHlsZXMgPyBjaGF0QnViYmxlU3R5bGVzIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGF2YXRhclN0eWxlcz17dXNlQ3VzdG9tU3R5bGVzID8gYXZhdGFyU3R5bGVzIDogdW5kZWZpbmVkfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG5cbmludGVyZmFjZSBDaGF0U3RhdGUge1xuICBhdXRob3JzOiBBdXRob3I8c3RyaW5nPltdO1xuICBtZXNzYWdlczogTWVzc2FnZTxzdHJpbmc+W107XG4gIHVzZUN1c3RvbUJ1YmJsZTogYm9vbGVhbjtcbiAgY3VycmVudFVzZXI6IG51bWJlcjtcbiAgbWVzc2FnZVRleHQ6IHN0cmluZztcbiAgc2ltdWxhdGVUeXBpbmc6IGJvb2xlYW47XG4gIHNob3dBdmF0YXI6IGJvb2xlYW47XG4gIHNob3dMYXN0U2VlbjogYm9vbGVhbjtcbiAgc2hvd0RhdGVSb3c6IGJvb2xlYW47XG4gIHNob3dJc1R5cGluZzogYm9vbGVhbjtcbiAgc2hvd0xvYWRpbmdNZXNzYWdlczogYm9vbGVhbjtcbiAgaGFzT2xkTWVzc2FnZXM6IGJvb2xlYW47XG4gIGZpcnN0QXV0aG9yVGltZXI6IG51bWJlcjtcbiAgc2Vjb25kQXV0aG9yVGltZXI6IG51bWJlcjtcbiAgdXNlQ3VzdG9tU3R5bGVzOiBib29sZWFuO1xuICB1c2VBdmF0YXJCZzogYm9vbGVhbjtcbiAgdXNlQ3VzdG9tSXNUeXBpbmc6IGJvb2xlYW47XG4gIHNob3dNc2dQcm9ncmVzczogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gdXNlQ2xpY2tIYW5kbGVyPFQgPSBDaGF0U3RhdGU+KFxuICBwcm9wZXJ0eU5hbWU6IGtleW9mIFQsXG4gIHNldFN0YXRlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxUPj5cbikge1xuICBjb25zdCBoYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN0YXRlKCh0KSA9PiAoeyAuLi50LCBbcHJvcGVydHlOYW1lXTogIXRbcHJvcGVydHlOYW1lXSB9KSk7XG4gIH0sIFtwcm9wZXJ0eU5hbWVdKTtcbiAgcmV0dXJuIGhhbmRsZXI7XG59XG5cbmNvbnN0IGNoYXRCdWJibGVTdHlsZXM6IENoYXRCdWJibGVTdHlsZXMgPSB7XG4gIGNoYXRCdWJibGU6IHtcbiAgICBib3hTaGFkb3c6ICdyZ2IoMTg3IDE4NyAxODcpIDBweCAwcHggMnB4IDAnLFxuICB9LFxuICByZWNpcGllbnRDaGF0QnViYmxlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICB9LFxuICB1c2VyQ2hhdEJ1YmJsZToge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigwLCAxMzIsIDI1NSknLFxuICB9LFxufTtcblxuY29uc3QgbGFzdFNlZW5BdmF0YXJTdHlsZXM6IExhc3RTZWVuQXZhdGFyU3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICBib3hTaGFkb3c6ICcjY2FjYWNhIDBweCAwcHggMTBweCAwcHgsIHJnYigxODcgMTg3IDE4NykgMHB4IDBweCAycHggMCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgfSxcbn07XG5cbmNvbnN0IGF2YXRhclN0eWxlczogQXZhdGFyU3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICBib3hTaGFkb3c6ICcjY2FjYWNhIDBweCAwcHggMjBweCAwcHgsIHJnYigxODcgMTg3IDE4NykgMHB4IDBweCAycHggMCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgfSxcbn07XG5cbmNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjJmMmYyJyxcbn07XG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGNoYXQ6IFJlYWN0LlJlZjxDaGF0RmVlZDxzdHJpbmc+PiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGNvbnN0IFtcbiAgICB7XG4gICAgICBtZXNzYWdlVGV4dCxcbiAgICAgIGF1dGhvcnMsXG4gICAgICBjdXJyZW50VXNlcixcbiAgICAgIGZpcnN0QXV0aG9yVGltZXIsXG4gICAgICBoYXNPbGRNZXNzYWdlcyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgc2Vjb25kQXV0aG9yVGltZXIsXG4gICAgICBzaG93QXZhdGFyLFxuICAgICAgc2hvd0RhdGVSb3csXG4gICAgICBzaG93SXNUeXBpbmcsXG4gICAgICBzaG93TGFzdFNlZW4sXG4gICAgICBzaG93TG9hZGluZ01lc3NhZ2VzLFxuICAgICAgc2ltdWxhdGVUeXBpbmcsXG4gICAgICB1c2VDdXN0b21CdWJibGUsXG4gICAgICB1c2VDdXN0b21TdHlsZXMsXG4gICAgICB1c2VBdmF0YXJCZyxcbiAgICAgIHVzZUN1c3RvbUlzVHlwaW5nLFxuICAgICAgc2hvd01zZ1Byb2dyZXNzLFxuICAgIH0sXG4gICAgc2V0U3RhdGUsXG4gIF0gPSBSZWFjdC51c2VTdGF0ZTxDaGF0U3RhdGU+KHtcbiAgICBhdXRob3JzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiAnWW91JyxcbiAgICAgICAgYmdJbWFnZVVybDogZ2V0R3JhdmF0YXJVcmwoMCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ01hcmsnLFxuICAgICAgICBpc1R5cGluZzogZmFsc2UsXG4gICAgICAgIGxhc3RTZWVuTWVzc2FnZUlkOiA3LFxuICAgICAgICBiZ0ltYWdlVXJsOiBnZXRHcmF2YXRhclVybCgxKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAnRXZhbicsXG4gICAgICAgIGlzVHlwaW5nOiBmYWxzZSxcbiAgICAgICAgbGFzdFNlZW5NZXNzYWdlSWQ6IDcsXG4gICAgICAgIGJnSW1hZ2VVcmw6IGdldEdyYXZhdGFyVXJsKDIpLFxuICAgICAgfSxcbiAgICBdLFxuICAgIG1lc3NhZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBhdXRob3JJZDogMSxcbiAgICAgICAgbWVzc2FnZTogJ0hleSBndXlzISEnLFxuICAgICAgICBjcmVhdGVkT246IG5ldyBEYXRlKDIwMTgsIDIsIDI3LCAxOCwgMzIsIDI0KSxcbiAgICAgICAgaXNTZW5kOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGF1dGhvcklkOiAyLFxuICAgICAgICBtZXNzYWdlOiAnSGV5ISBFdmFuIGhlcmUuIHJlYWN0LWJlbGwtY2hhdCBpcyBwcmV0dHkgZG9vb3BlLicsXG4gICAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoMjAxOCwgMiwgMjgsIDE4LCAxMiwgMjQpLFxuICAgICAgICBpc1NlbmQ6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgYXV0aG9ySWQ6IDIsXG4gICAgICAgIG1lc3NhZ2U6ICdSbHkgaXMuJyxcbiAgICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgyMDE4LCAyLCAyOCwgMTgsIDEzLCAyNCksXG4gICAgICAgIGlzU2VuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBhdXRob3JJZDogMixcbiAgICAgICAgbWVzc2FnZTogJ0xvbmcgZ3JvdXAuJyxcbiAgICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgyMDE4LCAyLCAyOCwgMTgsIDEzLCAyNCksXG4gICAgICAgIGlzU2VuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBhdXRob3JJZDogMCxcbiAgICAgICAgbWVzc2FnZTogJ015IG1lc3NhZ2UuJyxcbiAgICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgyMDE4LCAyLCAyOSwgMTksIDMyLCAyNCksXG4gICAgICAgIGlzU2VuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBhdXRob3JJZDogMCxcbiAgICAgICAgbWVzc2FnZTogJ09uZSBtb3JlLicsXG4gICAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoMjAxOCwgMiwgMjksIDE5LCAzMywgMjQpLFxuICAgICAgICBpc1NlbmQ6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNixcbiAgICAgICAgYXV0aG9ySWQ6IDIsXG4gICAgICAgIG1lc3NhZ2U6ICdPbmUgbW9yZSBncm91cCB0byBzZWUgdGhlIHNjcm9sbC4nLFxuICAgICAgICBjcmVhdGVkT246IG5ldyBEYXRlKDIwMTgsIDIsIDI5LCAxOSwgMzUsIDI0KSxcbiAgICAgICAgaXNTZW5kOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIGF1dGhvcklkOiAyLFxuICAgICAgICBtZXNzYWdlOiAnSSBzYWlkIGdyb3VwLicsXG4gICAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoMjAxOCwgMiwgMjksIDE5LCAzNSwgMjQpLFxuICAgICAgICBpc1NlbmQ6IHRydWUsXG4gICAgICB9LFxuICAgIF0sXG4gICAgdXNlQ3VzdG9tQnViYmxlOiBmYWxzZSxcbiAgICBjdXJyZW50VXNlcjogMCxcbiAgICBtZXNzYWdlVGV4dDogJycsXG4gICAgc2ltdWxhdGVUeXBpbmc6IGZhbHNlLFxuICAgIHNob3dBdmF0YXI6IHRydWUsXG4gICAgc2hvd0RhdGVSb3c6IHRydWUsXG4gICAgc2hvd0xhc3RTZWVuOiB0cnVlLFxuICAgIHNob3dJc1R5cGluZzogdHJ1ZSxcbiAgICBzaG93TG9hZGluZ01lc3NhZ2VzOiB0cnVlLFxuICAgIGhhc09sZE1lc3NhZ2VzOiB0cnVlLFxuICAgIGZpcnN0QXV0aG9yVGltZXI6IHVuZGVmaW5lZCxcbiAgICBzZWNvbmRBdXRob3JUaW1lcjogdW5kZWZpbmVkLFxuICAgIHVzZUN1c3RvbVN0eWxlczogdHJ1ZSxcbiAgICB1c2VBdmF0YXJCZzogdHJ1ZSxcbiAgICB1c2VDdXN0b21Jc1R5cGluZzogdHJ1ZSxcbiAgICBzaG93TXNnUHJvZ3Jlc3M6IGZhbHNlLFxuICB9KTtcblxuICBjb25zdCBvblByZXNzID0gUmVhY3QudXNlQ2FsbGJhY2soKHVzZXI6IG51bWJlcikgPT4ge1xuICAgIHNldFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBjdXJyZW50VXNlcjogdXNlciB9KSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVJc1R5cGluZyA9IFJlYWN0LnVzZUNhbGxiYWNrKChhdXRob3JJZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0U3RhdGUoKHByZXYpID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgYXV0aG9yczogcHJldi5hdXRob3JzXG4gICAgICAgIC5zbGljZSgwKVxuICAgICAgICAubWFwKChhLCBpKSA9PiAoaSA9PT0gYXV0aG9ySWQgPyBhIDogeyAuLi5hLCBpc1R5cGluZzogIWEuaXNUeXBpbmcgfSkpLFxuICAgIH0pKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUlzQ3VycmVudFR5cGluZyA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoY3VycmVudFVzZXIgIT09IDApIHtcbiAgICAgIHNldFN0YXRlKChwcmV2KSA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBhdXRob3JzOiBwcmV2LmF1dGhvcnNcbiAgICAgICAgICAuc2xpY2UoMClcbiAgICAgICAgICAubWFwKChhLCBpKSA9PlxuICAgICAgICAgICAgaSA9PT0gY3VycmVudFVzZXIgPyBhIDogeyAuLi5hLCBpc1R5cGluZzogIWEuaXNUeXBpbmcgfVxuICAgICAgICAgICksXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCBbY3VycmVudFVzZXJdKTtcblxuICBjb25zdCBoYW5kbGVJc1R5cGluZ0RlYm91bmNlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIHVzZURlYm91bmNlZENhbGxiYWNrKGhhbmRsZUlzQ3VycmVudFR5cGluZywgNzAwLCB7XG4gICAgICBsZWFkaW5nOiB0cnVlLFxuICAgICAgdHJhaWxpbmc6IHRydWUsXG4gICAgfSksXG4gICAgW2hhbmRsZUlzQ3VycmVudFR5cGluZ11cbiAgKTtcblxuICBjb25zdCBvbk1lc3NhZ2VDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHNldFN0YXRlKChwcmV2KSA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBtZXNzYWdlVGV4dDogbmV3TWVzc2FnZSxcbiAgICAgICAgYXV0aG9yczogc2hvd01zZ1Byb2dyZXNzXG4gICAgICAgICAgPyBwcmV2LmF1dGhvcnNcbiAgICAgICAgICAgICAgLnNsaWNlKDApXG4gICAgICAgICAgICAgIC5tYXAoKGEsIGkpID0+XG4gICAgICAgICAgICAgICAgaSA9PT0gY3VycmVudFVzZXIgPyBhIDogeyAuLi5hLCBpc1R5cGluZ01lc3NhZ2U6IG5ld01lc3NhZ2UgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgOiBwcmV2LmF1dGhvcnMsXG4gICAgICB9KSk7XG4gICAgICBoYW5kbGVJc1R5cGluZ0RlYm91bmNlZCgpO1xuICAgICAgaGFuZGxlSXNUeXBpbmdEZWJvdW5jZWQoKTtcbiAgICB9LFxuICAgIFtoYW5kbGVJc1R5cGluZ0RlYm91bmNlZCwgY3VycmVudFVzZXIsIHNob3dNc2dQcm9ncmVzc11cbiAgKTtcblxuICBjb25zdCBvbkxvYWRPbGRNZXNzYWdlcyA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICgpID0+XG4gICAgICBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0U3RhdGUoKHByZXZpb3VzU3RhdGUpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2aW91c1N0YXRlLFxuICAgICAgICAgICAgbWVzc2FnZXM6IG5ldyBBcnJheSgxMClcbiAgICAgICAgICAgICAgLmZpbGwoMSlcbiAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAoZSwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBOdW1iZXIobmV3IERhdGUoKSksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoMjAxNywgMSwgMSksXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdPbGQgbWVzc2FnZSAnICsgKGkgKyAxKS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3JJZDogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICsgMSksXG4gICAgICAgICAgICAgICAgICB9IGFzIE1lc3NhZ2U8c3RyaW5nPilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAuY29uY2F0KHByZXZpb3VzU3RhdGUubWVzc2FnZXMpLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sIDEwMDApXG4gICAgICApLFxuICAgIFtdXG4gICk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNob3dNc2dQcm9ncmVzcykge1xuICAgICAgc2V0U3RhdGUoKHByZXYpID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIGF1dGhvcnM6IHByZXYuYXV0aG9ycy5tYXAoKGEsIGkpID0+ICh7XG4gICAgICAgICAgLi4uYSxcbiAgICAgICAgICBpc1R5cGluZ01lc3NhZ2U6ICcnLFxuICAgICAgICB9KSksXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCBbc2hvd01zZ1Byb2dyZXNzXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBjaGF0LmN1cnJlbnQ/LnNjcm9sbEFwaT8uc2Nyb2xsVG9Cb3R0b20/LigpLCBbXG4gICAgc2hvd0lzVHlwaW5nLFxuICBdKTtcbiAgUmVhY3QudXNlRWZmZWN0KFxuICAgICgpID0+XG4gICAgICBzZXRTdGF0ZSgocHJldikgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgYXV0aG9yczogcHJldi5hdXRob3JzLm1hcCgoYSwgaSkgPT4gKHtcbiAgICAgICAgICAuLi5hLFxuICAgICAgICAgIGJnSW1hZ2VVcmw6IHVzZUF2YXRhckJnID8gZ2V0R3JhdmF0YXJVcmwoaSkgOiB1bmRlZmluZWQsXG4gICAgICAgIH0pKSxcbiAgICAgIH0pKSxcbiAgICBbdXNlQXZhdGFyQmddXG4gICk7XG5cbiAgY29uc3Qgb25TaG93TXNnUHJvZ3Jlc3NDbGljayA9IHVzZUNsaWNrSGFuZGxlcignc2hvd01zZ1Byb2dyZXNzJywgc2V0U3RhdGUpO1xuICBjb25zdCBvblVzZUN1c3RvbVN0eWxlc0NsaWNrID0gdXNlQ2xpY2tIYW5kbGVyKCd1c2VDdXN0b21TdHlsZXMnLCBzZXRTdGF0ZSk7XG4gIGNvbnN0IG9uVXNlQ3VzdG9tQnViYmxlc0NsaWNrID0gdXNlQ2xpY2tIYW5kbGVyKCd1c2VDdXN0b21CdWJibGUnLCBzZXRTdGF0ZSk7XG4gIGNvbnN0IG9uU2hvd0F2YXRhckNsaWNrID0gdXNlQ2xpY2tIYW5kbGVyKCdzaG93QXZhdGFyJywgc2V0U3RhdGUpO1xuICBjb25zdCBvblNob3dEYXRlUm93Q2xpY2sgPSB1c2VDbGlja0hhbmRsZXIoJ3Nob3dEYXRlUm93Jywgc2V0U3RhdGUpO1xuICBjb25zdCBvblNob3dJc1R5cGluZ0NsaWNrID0gdXNlQ2xpY2tIYW5kbGVyKCdzaG93SXNUeXBpbmcnLCBzZXRTdGF0ZSk7XG4gIGNvbnN0IG9uU2hvd0xhc3RTZWVuQ2xpY2sgPSB1c2VDbGlja0hhbmRsZXIoJ3Nob3dMYXN0U2VlbicsIHNldFN0YXRlKTtcbiAgY29uc3Qgb25TaG93TG9hZGluZ01lc3NhZ2VzQ2xpY2sgPSB1c2VDbGlja0hhbmRsZXIoXG4gICAgJ3Nob3dMb2FkaW5nTWVzc2FnZXMnLFxuICAgIHNldFN0YXRlXG4gICk7XG4gIGNvbnN0IG9uVXNlQ3VzdG9tSXNUeXBpbmdDbGljayA9IHVzZUNsaWNrSGFuZGxlcihcbiAgICAndXNlQ3VzdG9tSXNUeXBpbmcnLFxuICAgIHNldFN0YXRlXG4gICk7XG4gIGNvbnN0IG9uVXNlQXZhdGFyQmdDbGljayA9IHVzZUNsaWNrSGFuZGxlcigndXNlQXZhdGFyQmcnLCBzZXRTdGF0ZSk7XG4gIGNvbnN0IG9uSGFzT2xkTWVzc2FnZXNDbGljayA9IHVzZUNsaWNrSGFuZGxlcignaGFzT2xkTWVzc2FnZXMnLCBzZXRTdGF0ZSk7XG5cbiAgY29uc3Qgb25TaW11bGF0ZU1lc3NhZ2VCdXR0b25DbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTdGF0ZSgocHJldikgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBtZXNzYWdlczogcHJldi5tZXNzYWdlcy5jb25jYXQoW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IE51bWJlcihuZXcgRGF0ZSgpKSxcbiAgICAgICAgICBjcmVhdGVkT246IG5ldyBEYXRlKCksXG4gICAgICAgICAgbWVzc2FnZTogJ1NpbXVsYXRlZCBtZXNzYWdlJyxcbiAgICAgICAgICBhdXRob3JJZDogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICsgMSksXG4gICAgICAgIH0sXG4gICAgICBdKSxcbiAgICB9KSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblN5c3RlbU1lc3NhZ2VDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTdGF0ZSgocHJldikgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBtZXNzYWdlczogcHJldi5tZXNzYWdlcy5jb25jYXQoW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IE51bWJlcihuZXcgRGF0ZSgpKSxcbiAgICAgICAgICBjcmVhdGVkT246IG5ldyBEYXRlKCksXG4gICAgICAgICAgbWVzc2FnZTogJ1N5c3RlbSBtZXNzYWdlJyxcbiAgICAgICAgfSxcbiAgICAgIF0pLFxuICAgIH0pKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uU2ltdWxhdGVUeXBpbmdCdXR0b25DbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoc2ltdWxhdGVUeXBpbmcpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoZmlyc3RBdXRob3JUaW1lcik7XG4gICAgICBjbGVhckludGVydmFsKHNlY29uZEF1dGhvclRpbWVyKTtcbiAgICAgIHNldFN0YXRlKChwcmV2KSA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBzaW11bGF0ZVR5cGluZzogIXNpbXVsYXRlVHlwaW5nLFxuICAgICAgICBmaXJzdEF1dGhvclRpbWVyOiB1bmRlZmluZWQsXG4gICAgICAgIHNlY29uZEF1dGhvclRpbWVyOiB1bmRlZmluZWQsXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZUlzVHlwaW5nKDEpO1xuICAgICAgbGV0IF9maXJzdEF1dGhvclRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IGhhbmRsZUlzVHlwaW5nKDEpLCA0MDAwKTtcbiAgICAgIGhhbmRsZUlzVHlwaW5nKDIpO1xuICAgICAgbGV0IF9zZWNvbmRBdXRob3JUaW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbChcbiAgICAgICAgKCkgPT4gaGFuZGxlSXNUeXBpbmcoMiksXG4gICAgICAgIDUyMDBcbiAgICAgICk7XG4gICAgICBzZXRTdGF0ZSgocHJldikgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgZmlyc3RBdXRob3JUaW1lcjogX2ZpcnN0QXV0aG9yVGltZXIsXG4gICAgICAgIHNlY29uZEF1dGhvclRpbWVyOiBfc2Vjb25kQXV0aG9yVGltZXIsXG4gICAgICAgIHNpbXVsYXRlVHlwaW5nOiAhc2ltdWxhdGVUeXBpbmcsXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCBbc2ltdWxhdGVUeXBpbmcsIGhhbmRsZUlzVHlwaW5nXSk7XG5cbiAgY29uc3Qgb25NZXNzYWdlU3VibWl0ID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAobWVzc2FnZVRleHQgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuICAgICAgICBjb25zdCBuZXdNZXNzYWdlOiBNZXNzYWdlPHN0cmluZz4gPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgYXV0aG9ySWQ6IGN1cnJlbnRVc2VyLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VUZXh0LFxuICAgICAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoKSxcbiAgICAgICAgICBpc1NlbmQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBzZXRTdGF0ZSgocHJldmlvdXNTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2aW91c1N0YXRlLFxuICAgICAgICAgIG1lc3NhZ2VUZXh0OiAnJyxcbiAgICAgICAgICBtZXNzYWdlczogcHJldmlvdXNTdGF0ZS5tZXNzYWdlcy5jb25jYXQobmV3TWVzc2FnZSksXG4gICAgICAgICAgYXV0aG9yczogcHJldmlvdXNTdGF0ZS5hdXRob3JzXG4gICAgICAgICAgICAuc2xpY2UoMClcbiAgICAgICAgICAgIC5tYXAoKGEsIGkpID0+XG4gICAgICAgICAgICAgIGkgPT09IGN1cnJlbnRVc2VyID8gYSA6IHsgLi4uYSwgaXNUeXBpbmdNZXNzYWdlOiAnJyB9XG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG4gICAgICAgIGNoYXQuY3VycmVudD8ub25NZXNzYWdlU2VuZD8uKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldFN0YXRlKChwcmV2aW91c1N0YXRlKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldmlvdXNTdGF0ZSxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBwcmV2aW91c1N0YXRlLm1lc3NhZ2VzLm1hcCgobSkgPT5cbiAgICAgICAgICAgICAgbS5pZCA9PT0gaWQgPyB7IC4uLm0sIGlzU2VuZDogdHJ1ZSB9IDogbVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBbbWVzc2FnZVRleHQsIGN1cnJlbnRVc2VyXVxuICApO1xuXG4gIGNvbnN0IEN1c3RvbUlzVHlwaW5nID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgdXNlQ3VzdG9tSXNUeXBpbmdcbiAgICAgICAgPyBjdXN0b21Jc1R5cGluZ0ZhY3Rvcnkoe1xuICAgICAgICAgICAgYnViYmxlOiB1c2VDdXN0b21CdWJibGUgPyBjdXN0b21CdWJibGUgOiBDaGF0QnViYmxlLFxuICAgICAgICAgICAgc2hvd1JlY2lwaWVudEF2YXRhcjogc2hvd0F2YXRhcixcbiAgICAgICAgICAgIHVzZUN1c3RvbVN0eWxlcyxcbiAgICAgICAgICB9KVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICBbdXNlQ3VzdG9tQnViYmxlLCB1c2VDdXN0b21Jc1R5cGluZywgc2hvd0F2YXRhciwgdXNlQ3VzdG9tU3R5bGVzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPnJlYWN0LWJlbGwtY2hhdDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUGV0ZXJLb3R0YXMvcmVhY3QtYmVsbC1jaGF0XCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgR2l0aHViXG4gICAgICAgIDwvYT5cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdGFsbFwiPlxuICAgICAgICA8Y29kZT55YXJuIGFkZCByZWFjdC1iZWxsLWNoYXQ8L2NvZGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdGZlZWQtd3JhcHBlclwiPlxuICAgICAgICA8Q2hhdEZlZWQ8c3RyaW5nPlxuICAgICAgICAgIHJlZj17Y2hhdH1cbiAgICAgICAgICB5b3VyQXV0aG9ySWQ9ezB9XG4gICAgICAgICAgbWVzc2FnZXM9e21lc3NhZ2VzfVxuICAgICAgICAgIGF1dGhvcnM9e2F1dGhvcnN9XG4gICAgICAgICAgc3R5bGU9e3VzZUN1c3RvbVN0eWxlcyA/IHN0eWxlIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGF2YXRhclN0eWxlcz17dXNlQ3VzdG9tU3R5bGVzID8gYXZhdGFyU3R5bGVzIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGxhc3RTZWVuQXZhdGFyU3R5bGVzPXtcbiAgICAgICAgICAgIHVzZUN1c3RvbVN0eWxlcyA/IGxhc3RTZWVuQXZhdGFyU3R5bGVzIDogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICAgIGNoYXRCdWJibGVTdHlsZXM9e3VzZUN1c3RvbVN0eWxlcyA/IGNoYXRCdWJibGVTdHlsZXMgOiB1bmRlZmluZWR9XG4gICAgICAgICAgbWF4SGVpZ2h0PXszNTB9XG4gICAgICAgICAgQ3VzdG9tQ2hhdEJ1YmJsZT17dXNlQ3VzdG9tQnViYmxlID8gY3VzdG9tQnViYmxlIDogdW5kZWZpbmVkfVxuICAgICAgICAgIEN1c3RvbUlzVHlwaW5nPXtDdXN0b21Jc1R5cGluZ31cbiAgICAgICAgICBzaG93UmVjaXBpZW50QXZhdGFyPXtzaG93QXZhdGFyfVxuICAgICAgICAgIHNob3dJc1R5cGluZz17c2hvd0lzVHlwaW5nfVxuICAgICAgICAgIHNob3dSZWNpcGllbnRMYXN0U2Vlbk1lc3NhZ2U9e3Nob3dMYXN0U2Vlbn1cbiAgICAgICAgICBzaG93RGF0ZVJvdz17c2hvd0RhdGVSb3d9XG4gICAgICAgICAgc2hvd0xvYWRpbmdNZXNzYWdlcz17c2hvd0xvYWRpbmdNZXNzYWdlc31cbiAgICAgICAgICBoYXNPbGRNZXNzYWdlcz17aGFzT2xkTWVzc2FnZXN9XG4gICAgICAgICAgb25Mb2FkT2xkTWVzc2FnZXM9e29uTG9hZE9sZE1lc3NhZ2VzfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gb25NZXNzYWdlU3VibWl0KGUpfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZS1pbnB1dFwiXG4gICAgICAgICAgICB2YWx1ZT17bWVzc2FnZVRleHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25NZXNzYWdlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbCBtdC0wIGJ0LTBcIj5BdXRob3JzOjwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnIH19PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgLi4uKGN1cnJlbnRVc2VyID09PSAwID8gc3R5bGVzLnNlbGVjdGVkIDoge30pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUHJlc3MoMCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgWW91XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgLi4uKGN1cnJlbnRVc2VyID09PSAxID8gc3R5bGVzLnNlbGVjdGVkIDoge30pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUHJlc3MoMSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTWFya1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICAgIC4uLihjdXJyZW50VXNlciA9PT0gMiA/IHN0eWxlcy5zZWxlY3RlZCA6IHt9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblByZXNzKDIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEV2YW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5TaW11bGF0ZSBpbnB1dDo8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAuLi4oc2ltdWxhdGVUeXBpbmcgPyBzdHlsZXMuc2VsZWN0ZWQgOiB7fSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17b25TaW11bGF0ZVR5cGluZ0J1dHRvbkNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpbXVsYXRlIHR5cGluZ1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17b25TaW11bGF0ZU1lc3NhZ2VCdXR0b25DbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaW11bGF0ZSBtZXNzYWdlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtvblN5c3RlbU1lc3NhZ2VDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTeXN0ZW0gbWVzc2FnZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPlN3aXRjaGVzOjwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcbiAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICAgIC4uLihzaG93TXNnUHJvZ3Jlc3MgPyBzdHlsZXMuc2VsZWN0ZWQgOiB7fSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17b25TaG93TXNnUHJvZ3Jlc3NDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaG93IG1zZyBwcm9ncmVzc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICAgIC4uLihzaG93QXZhdGFyID8gc3R5bGVzLnNlbGVjdGVkIDoge30pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uU2hvd0F2YXRhckNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNob3cgQXZhdGFyc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICAgIC4uLihzaG93SXNUeXBpbmcgPyBzdHlsZXMuc2VsZWN0ZWQgOiB7fSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17b25TaG93SXNUeXBpbmdDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaG93IHR5cGluZyBpbmRpY2F0b3JcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAuLi4oc2hvd0xhc3RTZWVuID8gc3R5bGVzLnNlbGVjdGVkIDoge30pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uU2hvd0xhc3RTZWVuQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2hvdyBsYXN0IHNlZW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgLi4uKHNob3dEYXRlUm93ID8gc3R5bGVzLnNlbGVjdGVkIDoge30pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uU2hvd0RhdGVSb3dDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaG93IGRhdGUgcm93XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgLi4uKHNob3dMb2FkaW5nTWVzc2FnZXMgPyBzdHlsZXMuc2VsZWN0ZWQgOiB7fSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17b25TaG93TG9hZGluZ01lc3NhZ2VzQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2hvdyBMb2FkaW5nXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgLi4uKHVzZUF2YXRhckJnID8gc3R5bGVzLnNlbGVjdGVkIDoge30pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uVXNlQXZhdGFyQmdDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBdmF0YXJzIGltYWdlc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICAgIC4uLihoYXNPbGRNZXNzYWdlcyA/IHN0eWxlcy5zZWxlY3RlZCA6IHt9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkhhc09sZE1lc3NhZ2VzQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSGFzIG1vcmUgbWVzc2FnZXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5DdXN0b21pemF0aW9uOjwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcbiAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICAgIC4uLih1c2VDdXN0b21TdHlsZXMgPyBzdHlsZXMuc2VsZWN0ZWQgOiB7fSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17b25Vc2VDdXN0b21TdHlsZXNDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdHlsZXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAuLi4odXNlQ3VzdG9tQnViYmxlID8gc3R5bGVzLnNlbGVjdGVkIDoge30pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uVXNlQ3VzdG9tQnViYmxlc0NsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJ1YmJsZXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAuLi4odXNlQ3VzdG9tSXNUeXBpbmcgPyBzdHlsZXMuc2VsZWN0ZWQgOiB7fSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17b25Vc2VDdXN0b21Jc1R5cGluZ0NsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFR5cGluZyBpbmRpY2F0b3JcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvdChtb2R1bGUpKEFwcCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjY2RiNDViMTg4YTY5MGQxNTQ2ZVwiKSJdLCJzb3VyY2VSb290IjoiIn0=