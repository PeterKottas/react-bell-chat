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
var customBubble = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.author &&
        props.author.name +
            ' ' +
            (props.message.authorId !== props.yourAuthorId ? 'says' : 'said') +
            ': ' +
            props.message.message))); };
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
                isTyping: true,
                lastSeenMessageId: 7,
                bgImageUrl: (0,_utils_getGravatarUrl__WEBPACK_IMPORTED_MODULE_2__.getGravatarUrl)(1),
            },
            {
                id: 2,
                name: 'Evan',
                isTyping: true,
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
    }), _b = _a[0], messageText = _b.messageText, authors = _b.authors, currentUser = _b.currentUser, firstAuthorTimer = _b.firstAuthorTimer, hasOldMessages = _b.hasOldMessages, messages = _b.messages, secondAuthorTimer = _b.secondAuthorTimer, showAvatar = _b.showAvatar, showDateRow = _b.showDateRow, showIsTyping = _b.showIsTyping, showLastSeen = _b.showLastSeen, showLoadingMessages = _b.showLoadingMessages, simulateTyping = _b.simulateTyping, useCustomBubble = _b.useCustomBubble, useCustomStyles = _b.useCustomStyles, useAvatarBg = _b.useAvatarBg, setState = _a[1];
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
    var onCustomBubblesClick = useClickHandler('useCustomBubble', setState);
    var onShowAvatarClick = useClickHandler('showAvatar', setState);
    var onShowDateRowClick = useClickHandler('showDateRow', setState);
    var onShowIsTypingClick = useClickHandler('showIsTyping', setState);
    var onShowLastSeenClick = useClickHandler('showLastSeen', setState);
    var onShowLoadingMessagesClick = useClickHandler('showLoadingMessages', setState);
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
            var _firstAuthorTimer_1 = window.setInterval(function () {
                return setState(function (prev) { return (__assign(__assign({}, prev), { authors: prev.authors
                        .slice(0)
                        .map(function (a, i) { return (i === 1 ? a : __assign(__assign({}, a), { isTyping: !a.isTyping })); }) })); });
            }, 2000);
            var _secondAuthorTimer_1 = window.setInterval(function () {
                return setState(function (prev) { return (__assign(__assign({}, prev), { authors: prev.authors
                        .slice(0)
                        .map(function (a, i) { return (i === 2 ? a : __assign(__assign({}, a), { isTyping: !a.isTyping })); }) })); });
            }, 3200);
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
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: "text-center" }, "react-bell-chat"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "text-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "https://github.com/PeterKottas/react-bell-chat", target: "_blank", rel: "noreferrer" }, "Github")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "install" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "yarn add react-bell-chat")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "chatfeed-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__.ChatFeed, { yourAuthorId: 0, authors: authors, CustomChatBubble: useCustomBubble ? customBubble : undefined, style: useCustomStyles ? style : undefined, avatarStyles: useCustomStyles ? avatarStyles : undefined, lastSeenAvatarStyles: useCustomStyles ? lastSeenAvatarStyles : undefined, chatBubbleStyles: useCustomStyles ? chatBubbleStyles : undefined, maxHeight: 350, messages: messages, showRecipientAvatar: showAvatar, ref: chat, showIsTyping: showIsTyping, showRecipientLastSeenMessage: showLastSeen, showDateRow: showDateRow, showLoadingMessages: showLoadingMessages, onLoadOldMessages: onLoadOldMessages, hasOldMessages: hasOldMessages }),
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
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (showAvatar ? styles.selected : {})), onClick: onShowAvatarClick }, "Show avatar"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (showIsTyping ? styles.selected : {})), onClick: onShowIsTypingClick }, "Show typing"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (showLastSeen ? styles.selected : {})), onClick: onShowLastSeenClick }, "Show last seen"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (showDateRow ? styles.selected : {})), onClick: onShowDateRowClick }, "Show date row")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: 10,
                } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (useCustomBubble ? styles.selected : {})), onClick: onCustomBubblesClick }, "Custom Bubbles"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (showLoadingMessages ? styles.selected : {})), onClick: onShowLoadingMessagesClick }, "Show Loading"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (useCustomStyles ? styles.selected : {})), onClick: onUseCustomStylesClick }, "Custom styles"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (useAvatarBg ? styles.selected : {})), onClick: onUseAvatarBgClick }, "Avatars"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: __assign(__assign({}, styles.button), (hasOldMessages ? styles.selected : {})), onClick: onHasOldMessagesClick }, "Has more messages")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_hot_loader__WEBPACK_IMPORTED_MODULE_3__.hot)(module)(App));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("68b5382bc5e6ce5870db")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1iZWxsLWNoYXQvLi9zcmMvZGVtby9BcHAudHN4Iiwid2VicGFjazovL3JlYWN0LWJlbGwtY2hhdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQVNmO0FBQ3VCO0FBQ2lCO0FBRXhELElBQU0sTUFBTSxHQUEyQztJQUNyRCxNQUFNLEVBQUU7UUFDTixlQUFlLEVBQUUsTUFBTTtRQUN2QixXQUFXLEVBQUUsU0FBUztRQUN0QixXQUFXLEVBQUUsT0FBTztRQUNwQixZQUFZLEVBQUUsRUFBRTtRQUNoQixXQUFXLEVBQUUsQ0FBQztRQUNkLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEdBQUc7UUFDZixVQUFVLEVBQUUsQ0FBQztRQUNiLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsWUFBWSxFQUFFLEVBQUU7S0FDakI7SUFDRCxRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUUsTUFBTTtRQUNiLGVBQWUsRUFBRSxTQUFTO1FBQzFCLFdBQVcsRUFBRSxTQUFTO0tBQ3ZCO0NBQ0YsQ0FBQztBQUVGLElBQU0sWUFBWSxHQUFzQyxVQUFDLEtBQUssSUFBSyxRQUNqRTtJQUNFLDREQUNHLEtBQUssQ0FBQyxNQUFNO1FBQ1gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ2YsR0FBRztZQUNILENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDakUsSUFBSTtZQUNKLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUN2QixDQUNBLENBQ1AsRUFYa0UsQ0FXbEUsQ0FBQztBQXFCRixTQUFTLGVBQWUsQ0FDdEIsWUFBcUIsRUFDckIsUUFBaUQ7SUFFakQsSUFBTSxPQUFPLEdBQUcsOENBQWlCLENBQUM7UUFDaEMsUUFBUSxDQUFDLFVBQUMsQ0FBQzs7WUFBSyw4QkFBTSxDQUFDLGdCQUFHLFlBQVksSUFBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBRztRQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDaEUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuQixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQsSUFBTSxnQkFBZ0IsR0FBcUI7SUFDekMsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFLGdDQUFnQztLQUM1QztJQUNELG1CQUFtQixFQUFFO1FBQ25CLGVBQWUsRUFBRSxPQUFPO0tBQ3pCO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsS0FBSyxFQUFFLE9BQU87UUFDZCxlQUFlLEVBQUUsa0JBQWtCO0tBQ3BDO0NBQ0YsQ0FBQztBQUVGLElBQU0sb0JBQW9CLEdBQXlCO0lBQ2pELFNBQVMsRUFBRTtRQUNULFNBQVMsRUFBRSwwREFBMEQ7UUFDckUsZUFBZSxFQUFFLE9BQU87UUFDeEIsUUFBUSxFQUFFLFFBQVE7S0FDbkI7Q0FDRixDQUFDO0FBRUYsSUFBTSxZQUFZLEdBQWlCO0lBQ2pDLFNBQVMsRUFBRTtRQUNULFNBQVMsRUFBRSwwREFBMEQ7UUFDckUsZUFBZSxFQUFFLE9BQU87UUFDeEIsUUFBUSxFQUFFLFFBQVE7S0FDbkI7Q0FDRixDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQXdCO0lBQ2pDLGVBQWUsRUFBRSxTQUFTO0NBQzNCLENBQUM7QUFFRixJQUFNLEdBQUcsR0FBYTtJQUNwQixJQUFNLElBQUksR0FBZ0MseUNBQVksRUFBRSxDQUFDO0lBRW5ELFNBb0JGLDJDQUFjLENBQVk7UUFDNUIsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsVUFBVSxFQUFFLHFFQUFjLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsaUJBQWlCLEVBQUUsQ0FBQztnQkFDcEIsVUFBVSxFQUFFLHFFQUFjLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsaUJBQWlCLEVBQUUsQ0FBQztnQkFDcEIsVUFBVSxFQUFFLHFFQUFjLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1NBQ0Y7UUFDRCxRQUFRLEVBQUU7WUFDUjtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxPQUFPLEVBQUUsWUFBWTtnQkFDckIsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUM1QyxNQUFNLEVBQUUsSUFBSTthQUNiO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsT0FBTyxFQUFFLG1EQUFtRDtnQkFDNUQsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUM1QyxNQUFNLEVBQUUsSUFBSTthQUNiO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDNUMsTUFBTSxFQUFFLElBQUk7YUFDYjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLFFBQVEsRUFBRSxDQUFDO2dCQUNYLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQzVDLE1BQU0sRUFBRSxJQUFJO2FBQ2I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUM1QyxNQUFNLEVBQUUsSUFBSTthQUNiO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDNUMsTUFBTSxFQUFFLElBQUk7YUFDYjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLFFBQVEsRUFBRSxDQUFDO2dCQUNYLE9BQU8sRUFBRSxtQ0FBbUM7Z0JBQzVDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDNUMsTUFBTSxFQUFFLElBQUk7YUFDYjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLFFBQVEsRUFBRSxDQUFDO2dCQUNYLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQzVDLE1BQU0sRUFBRSxJQUFJO2FBQ2I7U0FDRjtRQUNELGVBQWUsRUFBRSxLQUFLO1FBQ3RCLFdBQVcsRUFBRSxDQUFDO1FBQ2QsV0FBVyxFQUFFLEVBQUU7UUFDZixjQUFjLEVBQUUsS0FBSztRQUNyQixVQUFVLEVBQUUsSUFBSTtRQUNoQixXQUFXLEVBQUUsSUFBSTtRQUNqQixZQUFZLEVBQUUsSUFBSTtRQUNsQixZQUFZLEVBQUUsSUFBSTtRQUNsQixtQkFBbUIsRUFBRSxJQUFJO1FBQ3pCLGNBQWMsRUFBRSxJQUFJO1FBQ3BCLGdCQUFnQixFQUFFLFNBQVM7UUFDM0IsaUJBQWlCLEVBQUUsU0FBUztRQUM1QixlQUFlLEVBQUUsSUFBSTtRQUNyQixXQUFXLEVBQUUsSUFBSTtLQUNsQixDQUFDLEVBakhBLFVBaUJDLEVBaEJDLFdBQVcsbUJBQ1gsT0FBTyxlQUNQLFdBQVcsbUJBQ1gsZ0JBQWdCLHdCQUNoQixjQUFjLHNCQUNkLFFBQVEsZ0JBQ1IsaUJBQWlCLHlCQUNqQixVQUFVLGtCQUNWLFdBQVcsbUJBQ1gsWUFBWSxvQkFDWixZQUFZLG9CQUNaLG1CQUFtQiwyQkFDbkIsY0FBYyxzQkFDZCxlQUFlLHVCQUNmLGVBQWUsdUJBQ2YsV0FBVyxtQkFFYixRQUFRLFFBK0ZSLENBQUM7SUFFSCxJQUFNLE9BQU8sR0FBRyw4Q0FBaUIsQ0FBQyxVQUFDLElBQVk7UUFDN0MsUUFBUSxDQUFDLFVBQUMsSUFBSSxJQUFLLDhCQUFNLElBQUksS0FBRSxXQUFXLEVBQUUsSUFBSSxJQUFHLEVBQWhDLENBQWdDLENBQUMsQ0FBQztJQUN2RCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxJQUFNLGVBQWUsR0FBRyw4Q0FBaUIsQ0FDdkMsVUFBQyxDQUFzQztRQUNyQyxJQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNsQyxRQUFRLENBQUMsVUFBQyxJQUFJLElBQUssOEJBQU0sSUFBSSxLQUFFLFdBQVcsRUFBRSxVQUFVLElBQUcsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO0lBQzdELENBQUMsRUFDRCxFQUFFLENBQ0gsQ0FBQztJQUVGLElBQU0saUJBQWlCLEdBQUcsOENBQWlCLENBQ3pDO1FBQ0UsV0FBSSxPQUFPLENBQU8sVUFBQyxPQUFPO1lBQ3hCLGlCQUFVLENBQUM7Z0JBQ1QsUUFBUSxDQUFDLFVBQUMsYUFBYSxJQUFLLDhCQUN2QixhQUFhLEtBQ2hCLFFBQVEsRUFBRSxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUM7eUJBQ3BCLElBQUksQ0FBQyxDQUFDLENBQUM7eUJBQ1AsR0FBRyxDQUNGLFVBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQ0gsUUFBQzs0QkFDQyxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7NEJBQ3RCLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDL0IsT0FBTyxFQUFFLGNBQWMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7NEJBQzVDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7eUJBQ3BCO29CQUxyQixDQUtxQixDQUN4Qjt5QkFDQSxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUNqQyxFQWQwQixDQWMxQixDQUFDLENBQUM7Z0JBQ0osT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQUUsSUFBSSxDQUFDO1FBakJSLENBaUJRLENBQ1Q7SUFuQkQsQ0FtQkMsRUFDSCxFQUFFLENBQ0gsQ0FBQztJQUVGLDRDQUFlLENBQUMsOEJBQU0sNkJBQUksQ0FBQyxPQUFPLDBDQUFFLFNBQVMsMENBQUUsY0FBYyxrREFBSSxLQUFFO1FBQ2pFLFlBQVk7S0FDYixDQUFDLENBQUM7SUFDSCw0Q0FBZSxDQUNiO1FBQ0UsZUFBUSxDQUFDLFVBQUMsSUFBSSxJQUFLLDhCQUNkLElBQUksS0FDUCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLDhCQUMvQixDQUFDLEtBQ0osVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMscUVBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUN2RCxFQUhrQyxDQUdsQyxDQUFDLElBQ0gsRUFOaUIsQ0FNakIsQ0FBQztJQU5ILENBTUcsRUFDTCxDQUFDLFdBQVcsQ0FBQyxDQUNkLENBQUM7SUFFRixJQUFNLHNCQUFzQixHQUFHLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1RSxJQUFNLG9CQUFvQixHQUFHLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxRSxJQUFNLGlCQUFpQixHQUFHLGVBQWUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsSUFBTSxrQkFBa0IsR0FBRyxlQUFlLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BFLElBQU0sbUJBQW1CLEdBQUcsZUFBZSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0RSxJQUFNLG1CQUFtQixHQUFHLGVBQWUsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEUsSUFBTSwwQkFBMEIsR0FBRyxlQUFlLENBQ2hELHFCQUFxQixFQUNyQixRQUFRLENBQ1QsQ0FBQztJQUNGLElBQU0sa0JBQWtCLEdBQUcsZUFBZSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRSxJQUFNLHFCQUFxQixHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUUxRSxJQUFNLDRCQUE0QixHQUFHLDhDQUFpQixDQUFDO1FBQ3JELFFBQVEsQ0FBQyxVQUFDLElBQUksSUFBSyw4QkFDZCxJQUFJLEtBQ1AsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUM3QjtvQkFDRSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ3RCLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTtvQkFDckIsT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDeEM7YUFDRixDQUFDLElBQ0YsRUFWaUIsQ0FVakIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBTSxvQkFBb0IsR0FBRyw4Q0FBaUIsQ0FBQztRQUM3QyxRQUFRLENBQUMsVUFBQyxJQUFJLElBQUssOEJBQ2QsSUFBSSxLQUNQLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDN0I7b0JBQ0UsRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUN0QixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7b0JBQ3JCLE9BQU8sRUFBRSxnQkFBZ0I7aUJBQzFCO2FBQ0YsQ0FBQyxJQUNGLEVBVGlCLENBU2pCLENBQUMsQ0FBQztJQUNOLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQU0sMkJBQTJCLEdBQUcsOENBQWlCLENBQUM7UUFDcEQsSUFBSSxjQUFjLEVBQUU7WUFDbEIsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDaEMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDakMsUUFBUSxDQUFDLFVBQUMsSUFBSSxJQUFLLDhCQUNkLElBQUksS0FDUCxjQUFjLEVBQUUsQ0FBQyxjQUFjLEVBQy9CLGdCQUFnQixFQUFFLFNBQVMsRUFDM0IsaUJBQWlCLEVBQUUsU0FBUyxJQUM1QixFQUxpQixDQUtqQixDQUFDLENBQUM7U0FDTDthQUFNO1lBQ0wsSUFBSSxtQkFBaUIsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUN4QztnQkFDRSxlQUFRLENBQUMsVUFBQyxJQUFJLElBQUssOEJBQ2QsSUFBSSxLQUNQLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzt5QkFDbEIsS0FBSyxDQUFDLENBQUMsQ0FBQzt5QkFDUixHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQU0sQ0FBQyxLQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUUsQ0FBQyxFQUEvQyxDQUErQyxDQUFDLElBQ2pFLEVBTGlCLENBS2pCLENBQUM7WUFMSCxDQUtHLEVBQ0wsSUFBSSxDQUNMLENBQUM7WUFDRixJQUFJLG9CQUFrQixHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQ3pDO2dCQUNFLGVBQVEsQ0FBQyxVQUFDLElBQUksSUFBSyw4QkFDZCxJQUFJLEtBQ1AsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO3lCQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDO3lCQUNSLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBTSxDQUFDLEtBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRSxDQUFDLEVBQS9DLENBQStDLENBQUMsSUFDakUsRUFMaUIsQ0FLakIsQ0FBQztZQUxILENBS0csRUFDTCxJQUFJLENBQ0wsQ0FBQztZQUNGLFFBQVEsQ0FBQyxVQUFDLElBQUksSUFBSyw4QkFDZCxJQUFJLEtBQ1AsZ0JBQWdCLEVBQUUsbUJBQWlCLEVBQ25DLGlCQUFpQixFQUFFLG9CQUFrQixFQUNyQyxjQUFjLEVBQUUsQ0FBQyxjQUFjLElBQy9CLEVBTGlCLENBS2pCLENBQUMsQ0FBQztTQUNMO0lBQ0gsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUVyQixJQUFNLGVBQWUsR0FBRyw4Q0FBaUIsQ0FDdkMsVUFBQyxDQUFtQzs7UUFDbEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUksV0FBVyxLQUFLLEVBQUUsRUFBRTtZQUN0QixJQUFNLElBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLElBQU0sWUFBVSxHQUFvQjtnQkFDbEMsRUFBRTtnQkFDRixRQUFRLEVBQUUsV0FBVztnQkFDckIsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTtnQkFDckIsTUFBTSxFQUFFLEtBQUs7YUFDZCxDQUFDO1lBQ0YsUUFBUSxDQUFDLFVBQUMsYUFBYSxJQUFLLDhCQUN2QixhQUFhLEtBQ2hCLFdBQVcsRUFBRSxFQUFFLEVBQ2YsUUFBUSxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVUsQ0FBQyxJQUNuRCxFQUowQixDQUkxQixDQUFDLENBQUM7WUFDSixnQkFBSSxDQUFDLE9BQU8sMENBQUUsYUFBYSxrREFBSSxDQUFDO1lBQ2hDLFVBQVUsQ0FBQztnQkFDVCxRQUFRLENBQUMsVUFBQyxhQUFhLElBQUssOEJBQ3ZCLGFBQWEsS0FDaEIsUUFBUSxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQzt3QkFDckMsUUFBQyxDQUFDLEVBQUUsS0FBSyxJQUFFLENBQUMsQ0FBQyx1QkFBTSxDQUFDLEtBQUUsTUFBTSxFQUFFLElBQUksSUFBRyxDQUFDLENBQUMsQ0FBQztvQkFBeEMsQ0FBd0MsQ0FDekMsSUFDRCxFQUwwQixDQUsxQixDQUFDLENBQUM7WUFDTixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyxFQUNELENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUMzQixDQUFDO0lBRUYsT0FBTyxDQUNMLDBEQUFLLFNBQVMsRUFBQyxXQUFXO1FBQ3hCLHlEQUFJLFNBQVMsRUFBQyxhQUFhLHNCQUFxQjtRQUNoRCx3REFBRyxTQUFTLEVBQUMsYUFBYTtZQUN4Qix3REFDRSxJQUFJLEVBQUMsZ0RBQWdELEVBQ3JELE1BQU0sRUFBQyxRQUFRLEVBQ2YsR0FBRyxFQUFDLFlBQVksYUFHZCxDQUNGO1FBQ0osMERBQUssU0FBUyxFQUFDLFNBQVM7WUFDdEIsMEZBQXFDLENBQ2pDO1FBQ04sMERBQUssU0FBUyxFQUFDLGtCQUFrQjtZQUMvQixpREFBQywwQ0FBUSxJQUNQLFlBQVksRUFBRSxDQUFDLEVBQ2YsT0FBTyxFQUFFLE9BQU8sRUFDaEIsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDNUQsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQzFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUN4RCxvQkFBb0IsRUFDbEIsZUFBZSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUVwRCxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQ2hFLFNBQVMsRUFBRSxHQUFHLEVBQ2QsUUFBUSxFQUFFLFFBQVEsRUFDbEIsbUJBQW1CLEVBQUUsVUFBVSxFQUMvQixHQUFHLEVBQUUsSUFBSSxFQUNULFlBQVksRUFBRSxZQUFZLEVBQzFCLDRCQUE0QixFQUFFLFlBQVksRUFDMUMsV0FBVyxFQUFFLFdBQVcsRUFDeEIsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQ3hDLGlCQUFpQixFQUFFLGlCQUFpQixFQUNwQyxjQUFjLEVBQUUsY0FBYyxHQUM5QjtZQUVGLDJEQUFNLFFBQVEsRUFBRSxVQUFDLENBQUMsSUFBSyxzQkFBZSxDQUFDLENBQUMsQ0FBQyxFQUFsQixDQUFrQjtnQkFDdkMsNERBQ0UsV0FBVyxFQUFDLG1CQUFtQixFQUMvQixTQUFTLEVBQUMsZUFBZSxFQUN6QixLQUFLLEVBQUUsV0FBVyxFQUNsQixRQUFRLEVBQUUsZUFBZSxHQUN6QixDQUNHO1lBQ1AsMERBQUssU0FBUyxFQUFDLGlCQUFpQixlQUFlO1lBQy9DLDBEQUFLLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtnQkFDN0QsNkRBQ0UsSUFBSSxFQUFDLFFBQVEsRUFDYixLQUFLLHdCQUNBLE1BQU0sQ0FBQyxNQUFNLEdBQ2IsQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FFL0MsT0FBTyxFQUFFLGNBQU0sY0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFWLENBQVUsVUFHbEI7Z0JBQ1QsNkRBQ0UsS0FBSyx3QkFDQSxNQUFNLENBQUMsTUFBTSxHQUNiLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBRS9DLE9BQU8sRUFBRSxjQUFNLGNBQU8sQ0FBQyxDQUFDLENBQUMsRUFBVixDQUFVLFdBR2xCO2dCQUNULDZEQUNFLEtBQUssd0JBQ0EsTUFBTSxDQUFDLE1BQU0sR0FDYixDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUUvQyxPQUFPLEVBQUUsY0FBTSxjQUFPLENBQUMsQ0FBQyxDQUFDLEVBQVYsQ0FBVSxXQUdsQixDQUNMO1lBQ04sMERBQUssU0FBUyxFQUFDLE9BQU8sc0JBQXNCO1lBQzVDLDBEQUNFLEtBQUssRUFBRTtvQkFDTCxPQUFPLEVBQUUsTUFBTTtvQkFDZixjQUFjLEVBQUUsY0FBYztvQkFDOUIsU0FBUyxFQUFFLEVBQUU7aUJBQ2Q7Z0JBRUQsNkRBQ0UsS0FBSyx3QkFDQSxNQUFNLENBQUMsTUFBTSxHQUNiLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FFNUMsT0FBTyxFQUFFLDJCQUEyQixzQkFHN0I7Z0JBQ1QsNkRBQ0UsS0FBSyxlQUNBLE1BQU0sQ0FBQyxNQUFNLEdBRWxCLE9BQU8sRUFBRSw0QkFBNEIsdUJBRzlCO2dCQUNULDZEQUNFLEtBQUssZUFDQSxNQUFNLENBQUMsTUFBTSxHQUVsQixPQUFPLEVBQUUsb0JBQW9CLHFCQUd0QixDQUNMO1lBQ04sMERBQUssU0FBUyxFQUFDLE9BQU8sZ0JBQWdCO1lBQ3RDLDBEQUNFLEtBQUssRUFBRTtvQkFDTCxPQUFPLEVBQUUsTUFBTTtvQkFDZixjQUFjLEVBQUUsY0FBYztvQkFDOUIsU0FBUyxFQUFFLEVBQUU7aUJBQ2Q7Z0JBRUQsNkRBQ0UsS0FBSyx3QkFDQSxNQUFNLENBQUMsTUFBTSxHQUNiLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FFeEMsT0FBTyxFQUFFLGlCQUFpQixrQkFHbkI7Z0JBQ1QsNkRBQ0UsS0FBSyx3QkFDQSxNQUFNLENBQUMsTUFBTSxHQUNiLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FFMUMsT0FBTyxFQUFFLG1CQUFtQixrQkFHckI7Z0JBQ1QsNkRBQ0UsS0FBSyx3QkFDQSxNQUFNLENBQUMsTUFBTSxHQUNiLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FFMUMsT0FBTyxFQUFFLG1CQUFtQixxQkFHckI7Z0JBQ1QsNkRBQ0UsS0FBSyx3QkFDQSxNQUFNLENBQUMsTUFBTSxHQUNiLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FFekMsT0FBTyxFQUFFLGtCQUFrQixvQkFHcEIsQ0FDTDtZQUNOLDBEQUNFLEtBQUssRUFBRTtvQkFDTCxPQUFPLEVBQUUsTUFBTTtvQkFDZixjQUFjLEVBQUUsY0FBYztvQkFDOUIsU0FBUyxFQUFFLEVBQUU7aUJBQ2Q7Z0JBRUQsNkRBQ0UsS0FBSyx3QkFDQSxNQUFNLENBQUMsTUFBTSxHQUNiLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FFN0MsT0FBTyxFQUFFLG9CQUFvQixxQkFHdEI7Z0JBQ1QsNkRBQ0UsS0FBSyx3QkFDQSxNQUFNLENBQUMsTUFBTSxHQUNiLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUVqRCxPQUFPLEVBQUUsMEJBQTBCLG1CQUc1QjtnQkFDVCw2REFDRSxLQUFLLHdCQUNBLE1BQU0sQ0FBQyxNQUFNLEdBQ2IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUU3QyxPQUFPLEVBQUUsc0JBQXNCLG9CQUd4QjtnQkFDVCw2REFDRSxLQUFLLHdCQUNBLE1BQU0sQ0FBQyxNQUFNLEdBQ2IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUV6QyxPQUFPLEVBQUUsa0JBQWtCLGNBR3BCO2dCQUNULDZEQUNFLEtBQUssd0JBQ0EsTUFBTSxDQUFDLE1BQU0sR0FDYixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBRTVDLE9BQU8sRUFBRSxxQkFBcUIsd0JBR3ZCLENBQ0wsQ0FDRixDQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGlFQUFlLHFEQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUM7Ozs7Ozs7Ozs7O1VDL2xCaEMsc0QiLCJmaWxlIjoiMDk5N2Y0Yi1pbmRleC13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQ2hhdEZlZWQsXG4gIE1lc3NhZ2UsXG4gIEF1dGhvcixcbiAgQ2hhdEJ1YmJsZVByb3BzLFxuICBDaGF0QnViYmxlU3R5bGVzLFxuICBMYXN0U2VlbkF2YXRhclN0eWxlcyxcbiAgQXZhdGFyU3R5bGVzLFxufSBmcm9tICcuLi9saWInO1xuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcic7XG5pbXBvcnQgeyBnZXRHcmF2YXRhclVybCB9IGZyb20gJy4vdXRpbHMvZ2V0R3JhdmF0YXJVcmwnO1xuXG5jb25zdCBzdHlsZXM6IHsgW2tleTogc3RyaW5nXTogUmVhY3QuQ1NTUHJvcGVydGllcyB9ID0ge1xuICBidXR0b246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXJDb2xvcjogJyMxRDIxMjknLFxuICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgYm9yZGVyV2lkdGg6IDIsXG4gICAgY29sb3I6ICcjMUQyMTI5JyxcbiAgICBmb250U2l6ZTogMTgsXG4gICAgZm9udFdlaWdodDogMzAwLFxuICAgIHBhZGRpbmdUb3A6IDgsXG4gICAgcGFkZGluZ0JvdHRvbTogOCxcbiAgICBwYWRkaW5nTGVmdDogMTYsXG4gICAgcGFkZGluZ1JpZ2h0OiAxNixcbiAgfSxcbiAgc2VsZWN0ZWQ6IHtcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDg0RkYnLFxuICAgIGJvcmRlckNvbG9yOiAnIzAwODRGRicsXG4gIH0sXG59O1xuXG5jb25zdCBjdXN0b21CdWJibGU6IFJlYWN0LkZDPENoYXRCdWJibGVQcm9wczxzdHJpbmc+PiA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxwPlxuICAgICAge3Byb3BzLmF1dGhvciAmJlxuICAgICAgICBwcm9wcy5hdXRob3IubmFtZSArXG4gICAgICAgICAgJyAnICtcbiAgICAgICAgICAocHJvcHMubWVzc2FnZS5hdXRob3JJZCAhPT0gcHJvcHMueW91ckF1dGhvcklkID8gJ3NheXMnIDogJ3NhaWQnKSArXG4gICAgICAgICAgJzogJyArXG4gICAgICAgICAgcHJvcHMubWVzc2FnZS5tZXNzYWdlfVxuICAgIDwvcD5cbiAgPC9kaXY+XG4pO1xuXG5pbnRlcmZhY2UgQ2hhdFN0YXRlIHtcbiAgYXV0aG9yczogQXV0aG9yW107XG4gIG1lc3NhZ2VzOiBNZXNzYWdlPHN0cmluZz5bXTtcbiAgdXNlQ3VzdG9tQnViYmxlOiBib29sZWFuO1xuICBjdXJyZW50VXNlcjogbnVtYmVyO1xuICBtZXNzYWdlVGV4dDogc3RyaW5nO1xuICBzaW11bGF0ZVR5cGluZzogYm9vbGVhbjtcbiAgc2hvd0F2YXRhcjogYm9vbGVhbjtcbiAgc2hvd0xhc3RTZWVuOiBib29sZWFuO1xuICBzaG93RGF0ZVJvdzogYm9vbGVhbjtcbiAgc2hvd0lzVHlwaW5nOiBib29sZWFuO1xuICBzaG93TG9hZGluZ01lc3NhZ2VzOiBib29sZWFuO1xuICBoYXNPbGRNZXNzYWdlczogYm9vbGVhbjtcbiAgZmlyc3RBdXRob3JUaW1lcjogbnVtYmVyO1xuICBzZWNvbmRBdXRob3JUaW1lcjogbnVtYmVyO1xuICB1c2VDdXN0b21TdHlsZXM6IGJvb2xlYW47XG4gIHVzZUF2YXRhckJnOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiB1c2VDbGlja0hhbmRsZXI8VCA9IENoYXRTdGF0ZT4oXG4gIHByb3BlcnR5TmFtZToga2V5b2YgVCxcbiAgc2V0U3RhdGU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPFQ+PlxuKSB7XG4gIGNvbnN0IGhhbmRsZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3RhdGUoKHQpID0+ICh7IC4uLnQsIFtwcm9wZXJ0eU5hbWVdOiAhdFtwcm9wZXJ0eU5hbWVdIH0pKTtcbiAgfSwgW3Byb3BlcnR5TmFtZV0pO1xuICByZXR1cm4gaGFuZGxlcjtcbn1cblxuY29uc3QgY2hhdEJ1YmJsZVN0eWxlczogQ2hhdEJ1YmJsZVN0eWxlcyA9IHtcbiAgY2hhdEJ1YmJsZToge1xuICAgIGJveFNoYWRvdzogJ3JnYigxODcgMTg3IDE4NykgMHB4IDBweCAycHggMCcsXG4gIH0sXG4gIHJlY2lwaWVudENoYXRCdWJibGU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gIH0sXG4gIHVzZXJDaGF0QnViYmxlOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDAsIDEzMiwgMjU1KScsXG4gIH0sXG59O1xuXG5jb25zdCBsYXN0U2VlbkF2YXRhclN0eWxlczogTGFzdFNlZW5BdmF0YXJTdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIGJveFNoYWRvdzogJyNjYWNhY2EgMHB4IDBweCAxMHB4IDBweCwgcmdiKDE4NyAxODcgMTg3KSAwcHggMHB4IDJweCAwJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxufTtcblxuY29uc3QgYXZhdGFyU3R5bGVzOiBBdmF0YXJTdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIGJveFNoYWRvdzogJyNjYWNhY2EgMHB4IDBweCAyMHB4IDBweCwgcmdiKDE4NyAxODcgMTg3KSAwcHggMHB4IDJweCAwJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxufTtcblxuY29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmMmYyZjInLFxufTtcblxuY29uc3QgQXBwOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgY2hhdDogUmVhY3QuUmVmPENoYXRGZWVkPHN0cmluZz4+ID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgY29uc3QgW1xuICAgIHtcbiAgICAgIG1lc3NhZ2VUZXh0LFxuICAgICAgYXV0aG9ycyxcbiAgICAgIGN1cnJlbnRVc2VyLFxuICAgICAgZmlyc3RBdXRob3JUaW1lcixcbiAgICAgIGhhc09sZE1lc3NhZ2VzLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBzZWNvbmRBdXRob3JUaW1lcixcbiAgICAgIHNob3dBdmF0YXIsXG4gICAgICBzaG93RGF0ZVJvdyxcbiAgICAgIHNob3dJc1R5cGluZyxcbiAgICAgIHNob3dMYXN0U2VlbixcbiAgICAgIHNob3dMb2FkaW5nTWVzc2FnZXMsXG4gICAgICBzaW11bGF0ZVR5cGluZyxcbiAgICAgIHVzZUN1c3RvbUJ1YmJsZSxcbiAgICAgIHVzZUN1c3RvbVN0eWxlcyxcbiAgICAgIHVzZUF2YXRhckJnLFxuICAgIH0sXG4gICAgc2V0U3RhdGUsXG4gIF0gPSBSZWFjdC51c2VTdGF0ZTxDaGF0U3RhdGU+KHtcbiAgICBhdXRob3JzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiAnWW91JyxcbiAgICAgICAgYmdJbWFnZVVybDogZ2V0R3JhdmF0YXJVcmwoMCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ01hcmsnLFxuICAgICAgICBpc1R5cGluZzogdHJ1ZSxcbiAgICAgICAgbGFzdFNlZW5NZXNzYWdlSWQ6IDcsXG4gICAgICAgIGJnSW1hZ2VVcmw6IGdldEdyYXZhdGFyVXJsKDEpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdFdmFuJyxcbiAgICAgICAgaXNUeXBpbmc6IHRydWUsXG4gICAgICAgIGxhc3RTZWVuTWVzc2FnZUlkOiA3LFxuICAgICAgICBiZ0ltYWdlVXJsOiBnZXRHcmF2YXRhclVybCgyKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBtZXNzYWdlczogW1xuICAgICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgYXV0aG9ySWQ6IDEsXG4gICAgICAgIG1lc3NhZ2U6ICdIZXkgZ3V5cyEhJyxcbiAgICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgyMDE4LCAyLCAyNywgMTgsIDMyLCAyNCksXG4gICAgICAgIGlzU2VuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBhdXRob3JJZDogMixcbiAgICAgICAgbWVzc2FnZTogJ0hleSEgRXZhbiBoZXJlLiByZWFjdC1iZWxsLWNoYXQgaXMgcHJldHR5IGRvb29wZS4nLFxuICAgICAgICBjcmVhdGVkT246IG5ldyBEYXRlKDIwMTgsIDIsIDI4LCAxOCwgMTIsIDI0KSxcbiAgICAgICAgaXNTZW5kOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGF1dGhvcklkOiAyLFxuICAgICAgICBtZXNzYWdlOiAnUmx5IGlzLicsXG4gICAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoMjAxOCwgMiwgMjgsIDE4LCAxMywgMjQpLFxuICAgICAgICBpc1NlbmQ6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgYXV0aG9ySWQ6IDIsXG4gICAgICAgIG1lc3NhZ2U6ICdMb25nIGdyb3VwLicsXG4gICAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoMjAxOCwgMiwgMjgsIDE4LCAxMywgMjQpLFxuICAgICAgICBpc1NlbmQ6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgYXV0aG9ySWQ6IDAsXG4gICAgICAgIG1lc3NhZ2U6ICdNeSBtZXNzYWdlLicsXG4gICAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoMjAxOCwgMiwgMjksIDE5LCAzMiwgMjQpLFxuICAgICAgICBpc1NlbmQ6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgYXV0aG9ySWQ6IDAsXG4gICAgICAgIG1lc3NhZ2U6ICdPbmUgbW9yZS4nLFxuICAgICAgICBjcmVhdGVkT246IG5ldyBEYXRlKDIwMTgsIDIsIDI5LCAxOSwgMzMsIDI0KSxcbiAgICAgICAgaXNTZW5kOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIGF1dGhvcklkOiAyLFxuICAgICAgICBtZXNzYWdlOiAnT25lIG1vcmUgZ3JvdXAgdG8gc2VlIHRoZSBzY3JvbGwuJyxcbiAgICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgyMDE4LCAyLCAyOSwgMTksIDM1LCAyNCksXG4gICAgICAgIGlzU2VuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICBhdXRob3JJZDogMixcbiAgICAgICAgbWVzc2FnZTogJ0kgc2FpZCBncm91cC4nLFxuICAgICAgICBjcmVhdGVkT246IG5ldyBEYXRlKDIwMTgsIDIsIDI5LCAxOSwgMzUsIDI0KSxcbiAgICAgICAgaXNTZW5kOiB0cnVlLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHVzZUN1c3RvbUJ1YmJsZTogZmFsc2UsXG4gICAgY3VycmVudFVzZXI6IDAsXG4gICAgbWVzc2FnZVRleHQ6ICcnLFxuICAgIHNpbXVsYXRlVHlwaW5nOiBmYWxzZSxcbiAgICBzaG93QXZhdGFyOiB0cnVlLFxuICAgIHNob3dEYXRlUm93OiB0cnVlLFxuICAgIHNob3dMYXN0U2VlbjogdHJ1ZSxcbiAgICBzaG93SXNUeXBpbmc6IHRydWUsXG4gICAgc2hvd0xvYWRpbmdNZXNzYWdlczogdHJ1ZSxcbiAgICBoYXNPbGRNZXNzYWdlczogdHJ1ZSxcbiAgICBmaXJzdEF1dGhvclRpbWVyOiB1bmRlZmluZWQsXG4gICAgc2Vjb25kQXV0aG9yVGltZXI6IHVuZGVmaW5lZCxcbiAgICB1c2VDdXN0b21TdHlsZXM6IHRydWUsXG4gICAgdXNlQXZhdGFyQmc6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IG9uUHJlc3MgPSBSZWFjdC51c2VDYWxsYmFjaygodXNlcjogbnVtYmVyKSA9PiB7XG4gICAgc2V0U3RhdGUoKHByZXYpID0+ICh7IC4uLnByZXYsIGN1cnJlbnRVc2VyOiB1c2VyIH0pKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uTWVzc2FnZUNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3QgbmV3TWVzc2FnZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgc2V0U3RhdGUoKHByZXYpID0+ICh7IC4uLnByZXYsIG1lc3NhZ2VUZXh0OiBuZXdNZXNzYWdlIH0pKTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3Qgb25Mb2FkT2xkTWVzc2FnZXMgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoKSA9PlxuICAgICAgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldFN0YXRlKChwcmV2aW91c1N0YXRlKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldmlvdXNTdGF0ZSxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBuZXcgQXJyYXkoMTApXG4gICAgICAgICAgICAgIC5maWxsKDEpXG4gICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgKGUsIGkpID0+XG4gICAgICAgICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgICAgICBpZDogTnVtYmVyKG5ldyBEYXRlKCkpLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkT246IG5ldyBEYXRlKDIwMTcsIDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnT2xkIG1lc3NhZ2UgJyArIChpICsgMSkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9ySWQ6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSArIDEpLFxuICAgICAgICAgICAgICAgICAgfSBhcyBNZXNzYWdlPHN0cmluZz4pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLmNvbmNhdChwcmV2aW91c1N0YXRlLm1lc3NhZ2VzKSxcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LCAxMDAwKVxuICAgICAgKSxcbiAgICBbXVxuICApO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBjaGF0LmN1cnJlbnQ/LnNjcm9sbEFwaT8uc2Nyb2xsVG9Cb3R0b20/LigpLCBbXG4gICAgc2hvd0lzVHlwaW5nLFxuICBdKTtcbiAgUmVhY3QudXNlRWZmZWN0KFxuICAgICgpID0+XG4gICAgICBzZXRTdGF0ZSgocHJldikgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgYXV0aG9yczogcHJldi5hdXRob3JzLm1hcCgoYSwgaSkgPT4gKHtcbiAgICAgICAgICAuLi5hLFxuICAgICAgICAgIGJnSW1hZ2VVcmw6IHVzZUF2YXRhckJnID8gZ2V0R3JhdmF0YXJVcmwoaSkgOiB1bmRlZmluZWQsXG4gICAgICAgIH0pKSxcbiAgICAgIH0pKSxcbiAgICBbdXNlQXZhdGFyQmddXG4gICk7XG5cbiAgY29uc3Qgb25Vc2VDdXN0b21TdHlsZXNDbGljayA9IHVzZUNsaWNrSGFuZGxlcigndXNlQ3VzdG9tU3R5bGVzJywgc2V0U3RhdGUpO1xuICBjb25zdCBvbkN1c3RvbUJ1YmJsZXNDbGljayA9IHVzZUNsaWNrSGFuZGxlcigndXNlQ3VzdG9tQnViYmxlJywgc2V0U3RhdGUpO1xuICBjb25zdCBvblNob3dBdmF0YXJDbGljayA9IHVzZUNsaWNrSGFuZGxlcignc2hvd0F2YXRhcicsIHNldFN0YXRlKTtcbiAgY29uc3Qgb25TaG93RGF0ZVJvd0NsaWNrID0gdXNlQ2xpY2tIYW5kbGVyKCdzaG93RGF0ZVJvdycsIHNldFN0YXRlKTtcbiAgY29uc3Qgb25TaG93SXNUeXBpbmdDbGljayA9IHVzZUNsaWNrSGFuZGxlcignc2hvd0lzVHlwaW5nJywgc2V0U3RhdGUpO1xuICBjb25zdCBvblNob3dMYXN0U2VlbkNsaWNrID0gdXNlQ2xpY2tIYW5kbGVyKCdzaG93TGFzdFNlZW4nLCBzZXRTdGF0ZSk7XG4gIGNvbnN0IG9uU2hvd0xvYWRpbmdNZXNzYWdlc0NsaWNrID0gdXNlQ2xpY2tIYW5kbGVyKFxuICAgICdzaG93TG9hZGluZ01lc3NhZ2VzJyxcbiAgICBzZXRTdGF0ZVxuICApO1xuICBjb25zdCBvblVzZUF2YXRhckJnQ2xpY2sgPSB1c2VDbGlja0hhbmRsZXIoJ3VzZUF2YXRhckJnJywgc2V0U3RhdGUpO1xuICBjb25zdCBvbkhhc09sZE1lc3NhZ2VzQ2xpY2sgPSB1c2VDbGlja0hhbmRsZXIoJ2hhc09sZE1lc3NhZ2VzJywgc2V0U3RhdGUpO1xuXG4gIGNvbnN0IG9uU2ltdWxhdGVNZXNzYWdlQnV0dG9uQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3RhdGUoKHByZXYpID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgbWVzc2FnZXM6IHByZXYubWVzc2FnZXMuY29uY2F0KFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBOdW1iZXIobmV3IERhdGUoKSksXG4gICAgICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgIG1lc3NhZ2U6ICdTaW11bGF0ZWQgbWVzc2FnZScsXG4gICAgICAgICAgYXV0aG9ySWQ6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSArIDEpLFxuICAgICAgICB9LFxuICAgICAgXSksXG4gICAgfSkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25TeXN0ZW1NZXNzYWdlQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3RhdGUoKHByZXYpID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgbWVzc2FnZXM6IHByZXYubWVzc2FnZXMuY29uY2F0KFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBOdW1iZXIobmV3IERhdGUoKSksXG4gICAgICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgIG1lc3NhZ2U6ICdTeXN0ZW0gbWVzc2FnZScsXG4gICAgICAgIH0sXG4gICAgICBdKSxcbiAgICB9KSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblNpbXVsYXRlVHlwaW5nQnV0dG9uQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHNpbXVsYXRlVHlwaW5nKSB7XG4gICAgICBjbGVhckludGVydmFsKGZpcnN0QXV0aG9yVGltZXIpO1xuICAgICAgY2xlYXJJbnRlcnZhbChzZWNvbmRBdXRob3JUaW1lcik7XG4gICAgICBzZXRTdGF0ZSgocHJldikgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgc2ltdWxhdGVUeXBpbmc6ICFzaW11bGF0ZVR5cGluZyxcbiAgICAgICAgZmlyc3RBdXRob3JUaW1lcjogdW5kZWZpbmVkLFxuICAgICAgICBzZWNvbmRBdXRob3JUaW1lcjogdW5kZWZpbmVkLFxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgX2ZpcnN0QXV0aG9yVGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoXG4gICAgICAgICgpID0+XG4gICAgICAgICAgc2V0U3RhdGUoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgYXV0aG9yczogcHJldi5hdXRob3JzXG4gICAgICAgICAgICAgIC5zbGljZSgwKVxuICAgICAgICAgICAgICAubWFwKChhLCBpKSA9PiAoaSA9PT0gMSA/IGEgOiB7IC4uLmEsIGlzVHlwaW5nOiAhYS5pc1R5cGluZyB9KSksXG4gICAgICAgICAgfSkpLFxuICAgICAgICAyMDAwXG4gICAgICApO1xuICAgICAgbGV0IF9zZWNvbmRBdXRob3JUaW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbChcbiAgICAgICAgKCkgPT5cbiAgICAgICAgICBzZXRTdGF0ZSgocHJldikgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBhdXRob3JzOiBwcmV2LmF1dGhvcnNcbiAgICAgICAgICAgICAgLnNsaWNlKDApXG4gICAgICAgICAgICAgIC5tYXAoKGEsIGkpID0+IChpID09PSAyID8gYSA6IHsgLi4uYSwgaXNUeXBpbmc6ICFhLmlzVHlwaW5nIH0pKSxcbiAgICAgICAgICB9KSksXG4gICAgICAgIDMyMDBcbiAgICAgICk7XG4gICAgICBzZXRTdGF0ZSgocHJldikgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgZmlyc3RBdXRob3JUaW1lcjogX2ZpcnN0QXV0aG9yVGltZXIsXG4gICAgICAgIHNlY29uZEF1dGhvclRpbWVyOiBfc2Vjb25kQXV0aG9yVGltZXIsXG4gICAgICAgIHNpbXVsYXRlVHlwaW5nOiAhc2ltdWxhdGVUeXBpbmcsXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCBbc2ltdWxhdGVUeXBpbmddKTtcblxuICBjb25zdCBvbk1lc3NhZ2VTdWJtaXQgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChtZXNzYWdlVGV4dCAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIobmV3IERhdGUoKSk7XG4gICAgICAgIGNvbnN0IG5ld01lc3NhZ2U6IE1lc3NhZ2U8c3RyaW5nPiA9IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBhdXRob3JJZDogY3VycmVudFVzZXIsXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVRleHQsXG4gICAgICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgIGlzU2VuZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHNldFN0YXRlKChwcmV2aW91c1N0YXRlKSA9PiAoe1xuICAgICAgICAgIC4uLnByZXZpb3VzU3RhdGUsXG4gICAgICAgICAgbWVzc2FnZVRleHQ6ICcnLFxuICAgICAgICAgIG1lc3NhZ2VzOiBwcmV2aW91c1N0YXRlLm1lc3NhZ2VzLmNvbmNhdChuZXdNZXNzYWdlKSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjaGF0LmN1cnJlbnQ/Lm9uTWVzc2FnZVNlbmQ/LigpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRTdGF0ZSgocHJldmlvdXNTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZpb3VzU3RhdGUsXG4gICAgICAgICAgICBtZXNzYWdlczogcHJldmlvdXNTdGF0ZS5tZXNzYWdlcy5tYXAoKG0pID0+XG4gICAgICAgICAgICAgIG0uaWQgPT09IGlkID8geyAuLi5tLCBpc1NlbmQ6IHRydWUgfSA6IG1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgW21lc3NhZ2VUZXh0LCBjdXJyZW50VXNlcl1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5yZWFjdC1iZWxsLWNoYXQ8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1BldGVyS290dGFzL3JlYWN0LWJlbGwtY2hhdFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIEdpdGh1YlxuICAgICAgICA8L2E+XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhbGxcIj5cbiAgICAgICAgPGNvZGU+eWFybiBhZGQgcmVhY3QtYmVsbC1jaGF0PC9jb2RlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRmZWVkLXdyYXBwZXJcIj5cbiAgICAgICAgPENoYXRGZWVkPHN0cmluZz5cbiAgICAgICAgICB5b3VyQXV0aG9ySWQ9ezB9XG4gICAgICAgICAgYXV0aG9ycz17YXV0aG9yc31cbiAgICAgICAgICBDdXN0b21DaGF0QnViYmxlPXt1c2VDdXN0b21CdWJibGUgPyBjdXN0b21CdWJibGUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgc3R5bGU9e3VzZUN1c3RvbVN0eWxlcyA/IHN0eWxlIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGF2YXRhclN0eWxlcz17dXNlQ3VzdG9tU3R5bGVzID8gYXZhdGFyU3R5bGVzIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGxhc3RTZWVuQXZhdGFyU3R5bGVzPXtcbiAgICAgICAgICAgIHVzZUN1c3RvbVN0eWxlcyA/IGxhc3RTZWVuQXZhdGFyU3R5bGVzIDogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICAgIGNoYXRCdWJibGVTdHlsZXM9e3VzZUN1c3RvbVN0eWxlcyA/IGNoYXRCdWJibGVTdHlsZXMgOiB1bmRlZmluZWR9XG4gICAgICAgICAgbWF4SGVpZ2h0PXszNTB9XG4gICAgICAgICAgbWVzc2FnZXM9e21lc3NhZ2VzfVxuICAgICAgICAgIHNob3dSZWNpcGllbnRBdmF0YXI9e3Nob3dBdmF0YXJ9XG4gICAgICAgICAgcmVmPXtjaGF0fVxuICAgICAgICAgIHNob3dJc1R5cGluZz17c2hvd0lzVHlwaW5nfVxuICAgICAgICAgIHNob3dSZWNpcGllbnRMYXN0U2Vlbk1lc3NhZ2U9e3Nob3dMYXN0U2Vlbn1cbiAgICAgICAgICBzaG93RGF0ZVJvdz17c2hvd0RhdGVSb3d9XG4gICAgICAgICAgc2hvd0xvYWRpbmdNZXNzYWdlcz17c2hvd0xvYWRpbmdNZXNzYWdlc31cbiAgICAgICAgICBvbkxvYWRPbGRNZXNzYWdlcz17b25Mb2FkT2xkTWVzc2FnZXN9XG4gICAgICAgICAgaGFzT2xkTWVzc2FnZXM9e2hhc09sZE1lc3NhZ2VzfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gb25NZXNzYWdlU3VibWl0KGUpfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZS1pbnB1dFwiXG4gICAgICAgICAgICB2YWx1ZT17bWVzc2FnZVRleHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25NZXNzYWdlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbCBtdC0wIGJ0LTBcIj5BdXRob3JzOjwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnIH19PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgLi4uKGN1cnJlbnRVc2VyID09PSAwID8gc3R5bGVzLnNlbGVjdGVkIDoge30pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUHJlc3MoMCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgWW91XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgLi4uKGN1cnJlbnRVc2VyID09PSAxID8gc3R5bGVzLnNlbGVjdGVkIDoge30pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUHJlc3MoMSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTWFya1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICAgIC4uLihjdXJyZW50VXNlciA9PT0gMiA/IHN0eWxlcy5zZWxlY3RlZCA6IHt9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblByZXNzKDIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEV2YW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5TaW11bGF0ZSBpbnB1dDo8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAuLi4oc2ltdWxhdGVUeXBpbmcgPyBzdHlsZXMuc2VsZWN0ZWQgOiB7fSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17b25TaW11bGF0ZVR5cGluZ0J1dHRvbkNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpbXVsYXRlIHR5cGluZ1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17b25TaW11bGF0ZU1lc3NhZ2VCdXR0b25DbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaW11bGF0ZSBtZXNzYWdlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtvblN5c3RlbU1lc3NhZ2VDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTeXN0ZW0gbWVzc2FnZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPlN3aXRjaGVzOjwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcbiAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICAgIC4uLihzaG93QXZhdGFyID8gc3R5bGVzLnNlbGVjdGVkIDoge30pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uU2hvd0F2YXRhckNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNob3cgYXZhdGFyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgLi4uKHNob3dJc1R5cGluZyA/IHN0eWxlcy5zZWxlY3RlZCA6IHt9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtvblNob3dJc1R5cGluZ0NsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNob3cgdHlwaW5nXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgLi4uKHNob3dMYXN0U2VlbiA/IHN0eWxlcy5zZWxlY3RlZCA6IHt9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtvblNob3dMYXN0U2VlbkNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNob3cgbGFzdCBzZWVuXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgLi4uKHNob3dEYXRlUm93ID8gc3R5bGVzLnNlbGVjdGVkIDoge30pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uU2hvd0RhdGVSb3dDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaG93IGRhdGUgcm93XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcbiAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICAgIC4uLih1c2VDdXN0b21CdWJibGUgPyBzdHlsZXMuc2VsZWN0ZWQgOiB7fSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17b25DdXN0b21CdWJibGVzQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ3VzdG9tIEJ1YmJsZXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAuLi4oc2hvd0xvYWRpbmdNZXNzYWdlcyA/IHN0eWxlcy5zZWxlY3RlZCA6IHt9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtvblNob3dMb2FkaW5nTWVzc2FnZXNDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaG93IExvYWRpbmdcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZXMuYnV0dG9uLFxuICAgICAgICAgICAgICAuLi4odXNlQ3VzdG9tU3R5bGVzID8gc3R5bGVzLnNlbGVjdGVkIDoge30pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uVXNlQ3VzdG9tU3R5bGVzQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ3VzdG9tIHN0eWxlc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICAgIC4uLih1c2VBdmF0YXJCZyA/IHN0eWxlcy5zZWxlY3RlZCA6IHt9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtvblVzZUF2YXRhckJnQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQXZhdGFyc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgICAgIC4uLihoYXNPbGRNZXNzYWdlcyA/IHN0eWxlcy5zZWxlY3RlZCA6IHt9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkhhc09sZE1lc3NhZ2VzQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSGFzIG1vcmUgbWVzc2FnZXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvdChtb2R1bGUpKEFwcCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2OGI1MzgyYmM1ZTZjZTU4NzBkYlwiKSJdLCJzb3VyY2VSb290IjoiIn0=