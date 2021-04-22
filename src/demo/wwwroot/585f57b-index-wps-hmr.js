self["webpackHotUpdatereact_bell_chat"]("index",{

/***/ "./src/lib/SystemChatBubble/index.tsx":
/*!********************************************!*\
  !*** ./src/lib/SystemChatBubble/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultSystemChatBubbleClasses": () => (/* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_3__.defaultSystemChatBubbleClasses),
/* harmony export */   "defaultSystemChatBubbleStyles": () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_4__.defaultSystemChatBubbleStyles),
/* harmony export */   "SystemChatBubble": () => (/* binding */ Memoized)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatBubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ChatBubble */ "./src/lib/ChatBubble/index.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes */ "./src/lib/SystemChatBubble/classes.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/lib/SystemChatBubble/styles.ts");
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







function SystemChatBubble(props) {
    var styles = props.styles, classes = props.classes, message = props.message, config = props.config;
    var finalConfig = __assign(__assign({}, _ChatBubble__WEBPACK_IMPORTED_MODULE_1__.defaultChatBubbleConfig), config);
    var time = finalConfig.formatTime(message.createdOn);
    var style = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () { return (__assign(__assign({}, _styles__WEBPACK_IMPORTED_MODULE_4__.defaultSystemChatBubbleStyles.systemChatBubbleContainer), styles === null || styles === void 0 ? void 0 : styles.systemChatBubbleContainer)); }, [styles === null || styles === void 0 ? void 0 : styles.systemChatBubbleContainer]);
    var textStyle = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () { return (__assign(__assign({}, _styles__WEBPACK_IMPORTED_MODULE_4__.defaultSystemChatBubbleStyles.systemChatBubbleText), styles === null || styles === void 0 ? void 0 : styles.systemChatBubbleText)); }, [styles === null || styles === void 0 ? void 0 : styles.systemChatBubbleText]);
    return (message && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_classes__WEBPACK_IMPORTED_MODULE_3__.defaultSystemChatBubbleClasses.chatBubbleWrapper, classes === null || classes === void 0 ? void 0 : classes.chatBubbleWrapper), style: style },
        time && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_classes__WEBPACK_IMPORTED_MODULE_3__.defaultSystemChatBubbleClasses.createdOn, classes === null || classes === void 0 ? void 0 : classes.createdOn), title: props.message.createdOn.toLocaleString(), style: textStyle },
            time,
            ":",
            ' ')),
        props.message.message)));
}
var Memoized = react__WEBPACK_IMPORTED_MODULE_0__.memo(SystemChatBubble);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("23f4ea8d388c7beb003c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1iZWxsLWNoYXQvLi9zcmMvbGliL1N5c3RlbUNoYXRCdWJibGUvaW5kZXgudHN4Iiwid2VicGFjazovL3JlYWN0LWJlbGwtY2hhdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQzBDO0FBQ3JDO0FBQ3VCO0FBQ0Y7QUFDL0I7QUFDRDtBQUl6QixTQUFTLGdCQUFnQixDQUFhLEtBQStCO0lBQzNELFVBQU0sR0FBK0IsS0FBSyxPQUFwQyxFQUFFLE9BQU8sR0FBc0IsS0FBSyxRQUEzQixFQUFFLE9BQU8sR0FBYSxLQUFLLFFBQWxCLEVBQUUsTUFBTSxHQUFLLEtBQUssT0FBVixDQUFXO0lBRW5ELElBQU0sV0FBVyx5QkFDWixnRUFBdUIsR0FDdkIsTUFBTSxDQUNWLENBQUM7SUFFRixJQUFNLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV2RCxJQUFNLEtBQUssR0FBRywwQ0FBYSxDQUN6QixjQUFNLDhCQUNELDRGQUF1RCxHQUN2RCxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUseUJBQXlCLEVBQ3BDLEVBSEksQ0FHSixFQUNGLENBQUMsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLHlCQUF5QixDQUFDLENBQ3BDLENBQUM7SUFDRixJQUFNLFNBQVMsR0FBRywwQ0FBYSxDQUM3QixjQUFNLDhCQUNELHVGQUFrRCxHQUNsRCxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsb0JBQW9CLEVBQy9CLEVBSEksQ0FHSixFQUNGLENBQUMsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLG9CQUFvQixDQUFDLENBQy9CLENBQUM7SUFDRixPQUFPLENBQ0wsT0FBTyxJQUFJLENBQ1QsMERBQ0UsU0FBUyxFQUFFLGlEQUFVLENBQ25CLHNGQUFnRCxFQUNoRCxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsaUJBQWlCLENBQzNCLEVBQ0QsS0FBSyxFQUFFLEtBQUs7UUFFWCxJQUFJLElBQUksQ0FDUCwyREFDRSxTQUFTLEVBQUUsaURBQVUsQ0FDbkIsOEVBQXdDLEVBQ3hDLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxTQUFTLENBQ25CLEVBQ0QsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUMvQyxLQUFLLEVBQUUsU0FBUztZQUVmLElBQUk7O1lBQUcsR0FBRyxDQUNOLENBQ1I7UUFDQSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FDbEIsQ0FDUCxDQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsSUFBTSxRQUFRLEdBQUcsdUNBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRU47Ozs7Ozs7Ozs7O1VDL0R4QyxzRCIsImZpbGUiOiI1ODVmNTdiLWluZGV4LXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGF0QnViYmxlUHJvcHMsIGRlZmF1bHRDaGF0QnViYmxlQ29uZmlnIH0gZnJvbSAnLi4vQ2hhdEJ1YmJsZSc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGRlZmF1bHRTeXN0ZW1DaGF0QnViYmxlQ2xhc3NlcyB9IGZyb20gJy4vY2xhc3Nlcyc7XG5pbXBvcnQgeyBkZWZhdWx0U3lzdGVtQ2hhdEJ1YmJsZVN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3Nlcyc7XG5leHBvcnQgKiBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3lzdGVtQ2hhdEJ1YmJsZVByb3BzPFQgPSBzdHJpbmc+IGV4dGVuZHMgQ2hhdEJ1YmJsZVByb3BzPFQ+IHt9XG5cbmZ1bmN0aW9uIFN5c3RlbUNoYXRCdWJibGU8VCA9IHN0cmluZz4ocHJvcHM6IFN5c3RlbUNoYXRCdWJibGVQcm9wczxUPikge1xuICBjb25zdCB7IHN0eWxlcywgY2xhc3NlcywgbWVzc2FnZSwgY29uZmlnIH0gPSBwcm9wcztcblxuICBjb25zdCBmaW5hbENvbmZpZyA9IHtcbiAgICAuLi5kZWZhdWx0Q2hhdEJ1YmJsZUNvbmZpZyxcbiAgICAuLi5jb25maWcsXG4gIH07XG5cbiAgY29uc3QgdGltZSA9IGZpbmFsQ29uZmlnLmZvcm1hdFRpbWUobWVzc2FnZS5jcmVhdGVkT24pO1xuXG4gIGNvbnN0IHN0eWxlID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgLi4uZGVmYXVsdFN5c3RlbUNoYXRCdWJibGVTdHlsZXMuc3lzdGVtQ2hhdEJ1YmJsZUNvbnRhaW5lcixcbiAgICAgIC4uLnN0eWxlcz8uc3lzdGVtQ2hhdEJ1YmJsZUNvbnRhaW5lcixcbiAgICB9KSxcbiAgICBbc3R5bGVzPy5zeXN0ZW1DaGF0QnViYmxlQ29udGFpbmVyXVxuICApO1xuICBjb25zdCB0ZXh0U3R5bGUgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICAuLi5kZWZhdWx0U3lzdGVtQ2hhdEJ1YmJsZVN0eWxlcy5zeXN0ZW1DaGF0QnViYmxlVGV4dCxcbiAgICAgIC4uLnN0eWxlcz8uc3lzdGVtQ2hhdEJ1YmJsZVRleHQsXG4gICAgfSksXG4gICAgW3N0eWxlcz8uc3lzdGVtQ2hhdEJ1YmJsZVRleHRdXG4gICk7XG4gIHJldHVybiAoXG4gICAgbWVzc2FnZSAmJiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICBkZWZhdWx0U3lzdGVtQ2hhdEJ1YmJsZUNsYXNzZXMuY2hhdEJ1YmJsZVdyYXBwZXIsXG4gICAgICAgICAgY2xhc3Nlcz8uY2hhdEJ1YmJsZVdyYXBwZXJcbiAgICAgICAgKX1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgPlxuICAgICAgICB7dGltZSAmJiAoXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgZGVmYXVsdFN5c3RlbUNoYXRCdWJibGVDbGFzc2VzLmNyZWF0ZWRPbixcbiAgICAgICAgICAgICAgY2xhc3Nlcz8uY3JlYXRlZE9uXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgdGl0bGU9e3Byb3BzLm1lc3NhZ2UuY3JlYXRlZE9uLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICBzdHlsZT17dGV4dFN0eWxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aW1lfTp7JyAnfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgICAge3Byb3BzLm1lc3NhZ2UubWVzc2FnZX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgKTtcbn1cblxuY29uc3QgTWVtb2l6ZWQgPSBSZWFjdC5tZW1vKFN5c3RlbUNoYXRCdWJibGUpO1xuXG5leHBvcnQgeyBNZW1vaXplZCBhcyBTeXN0ZW1DaGF0QnViYmxlIH07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyM2Y0ZWE4ZDM4OGM3YmViMDAzY1wiKSJdLCJzb3VyY2VSb290IjoiIn0=