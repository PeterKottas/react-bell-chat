self["webpackHotUpdatereact_bell_chat"]("index",{

/***/ "./src/lib/ChatScrollArea/index.tsx":
/*!******************************************!*\
  !*** ./src/lib/ChatScrollArea/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultChatScrollAreaClasses": () => (/* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatScrollAreaClasses),
/* harmony export */   "defaultChatScrollAreaStyles": () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatScrollAreaStyles),
/* harmony export */   "ChatScrollArea": () => (/* binding */ ChatScrollArea)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/lib/ChatScrollArea/styles.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes */ "./src/lib/ChatScrollArea/classes.ts");
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






var ChatScrollArea = /** @class */ (function (_super) {
    __extends(ChatScrollArea, _super);
    function ChatScrollArea(props) {
        var _this = _super.call(this, props) || this;
        _this.containerRef = _this.containerRef.bind(_this);
        _this.onScroll = _this.onScroll.bind(_this);
        return _this;
    }
    ChatScrollArea.prototype.render = function () {
        var _a = this.props, styles = _a.styles, classes = _a.classes;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.containerRef, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_classes__WEBPACK_IMPORTED_MODULE_3__.defaultChatScrollAreaClasses.container, classes === null || classes === void 0 ? void 0 : classes.container), style: __assign(__assign(__assign(__assign({}, _styles__WEBPACK_IMPORTED_MODULE_2__.defaultChatScrollAreaStyles.container), (this.props.maxHeight !== undefined
                ? { maxHeight: this.props.maxHeight }
                : {})), (this.props.minHeight !== undefined
                ? { minHeight: this.props.minHeight }
                : {})), styles === null || styles === void 0 ? void 0 : styles.container), onScroll: this.onScroll }, this.props.children));
    };
    ChatScrollArea.prototype.onScroll = function () {
        if (this.scrollContainer &&
            this.scrollContainer.scrollTop <= this.props.loadOldMessagesThreshold) {
            this.props.onLoadOldMessages();
        }
    };
    ChatScrollArea.prototype.containerRef = function (scrollContainer) {
        var _this = this;
        this.scrollContainer = scrollContainer;
        this.props.apiRef &&
            this.props.apiRef({
                scrollToBottom: function (behavior) {
                    if (behavior === void 0) { behavior = 'auto'; }
                    return scrollContainer &&
                        (scrollContainer.scrollTo
                            ? scrollContainer.scrollTo({
                                top: scrollContainer.scrollHeight,
                                behavior: behavior,
                            })
                            : (scrollContainer.scrollTop = scrollContainer.scrollHeight));
                },
                scrollTo: function (top) {
                    return scrollContainer &&
                        (scrollContainer.scrollTo
                            ? scrollContainer.scrollTo({
                                top: top,
                            })
                            : (scrollContainer.scrollTop = top));
                },
                scrolledToBottom: function () {
                    return _this.scrollContainer.scrollHeight -
                        _this.scrollContainer.scrollTop -
                        _this.scrollContainer.clientHeight <
                        10;
                },
                scrolledToLoadThreshold: function () {
                    return _this.scrollContainer &&
                        _this.scrollContainer.scrollTop <= _this.props.loadOldMessagesThreshold;
                },
                scrollTop: function () { return _this.scrollContainer && _this.scrollContainer.scrollTop; },
                scrollHeight: function () {
                    return _this.scrollContainer && _this.scrollContainer.scrollHeight;
                },
                clientHeight: function () {
                    return _this.scrollContainer && _this.scrollContainer.clientHeight;
                },
            });
    };
    return ChatScrollArea;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent));



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("31bcee3b62023ae41ef3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1iZWxsLWNoYXQvLi9zcmMvbGliL0NoYXRTY3JvbGxBcmVhL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1iZWxsLWNoYXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0s7QUFDeUM7QUFDRztBQUN0RDtBQUNEO0FBd0J6QjtJQUFvQyxrQ0FBd0M7SUFFMUUsd0JBQVksS0FBMEI7UUFBdEMsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FHYjtRQUZDLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDakQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDM0MsQ0FBQztJQUVNLCtCQUFNLEdBQWI7UUFDUSxTQUFzQixJQUFJLENBQUMsS0FBSyxFQUE5QixNQUFNLGNBQUUsT0FBTyxhQUFlLENBQUM7UUFDdkMsT0FBTyxDQUNMLDBEQUNFLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUN0QixTQUFTLEVBQUUsaURBQVUsQ0FDbkIsNEVBQXNDLEVBQ3RDLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxTQUFTLENBQ25CLEVBQ0QsS0FBSywwQ0FDQSwwRUFBcUMsR0FDckMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTO2dCQUNwQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7Z0JBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FDSixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLFNBQVM7Z0JBQ3BDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtnQkFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUNKLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxTQUFTLEdBRXRCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUV0QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDaEIsQ0FDUCxDQUFDO0lBQ0osQ0FBQztJQUVPLGlDQUFRLEdBQWhCO1FBQ0UsSUFDRSxJQUFJLENBQUMsZUFBZTtZQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUNyRTtZQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFTyxxQ0FBWSxHQUFwQixVQUFxQixlQUErQjtRQUFwRCxpQkFpQ0M7UUFoQ0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ2hCLGNBQWMsRUFBRSxVQUFDLFFBQWlCO29CQUFqQiw0Q0FBaUI7b0JBQ2hDLHNCQUFlO3dCQUNmLENBQUMsZUFBZSxDQUFDLFFBQVE7NEJBQ3ZCLENBQUMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO2dDQUN2QixHQUFHLEVBQUUsZUFBZSxDQUFDLFlBQVk7Z0NBQ2pDLFFBQVE7NkJBQ1QsQ0FBQzs0QkFDSixDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFOL0QsQ0FNK0Q7Z0JBQ2pFLFFBQVEsRUFBRSxhQUFHO29CQUNYLHNCQUFlO3dCQUNmLENBQUMsZUFBZSxDQUFDLFFBQVE7NEJBQ3ZCLENBQUMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO2dDQUN2QixHQUFHLEVBQUUsR0FBRzs2QkFDVCxDQUFDOzRCQUNKLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBTHRDLENBS3NDO2dCQUN4QyxnQkFBZ0IsRUFBRTtvQkFDaEIsWUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZO3dCQUMvQixLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVM7d0JBQzlCLEtBQUksQ0FBQyxlQUFlLENBQUMsWUFBWTt3QkFDbkMsRUFBRTtnQkFIRixDQUdFO2dCQUNKLHVCQUF1QixFQUFFO29CQUN2QixZQUFJLENBQUMsZUFBZTt3QkFDcEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyx3QkFBd0I7Z0JBRHJFLENBQ3FFO2dCQUN2RSxTQUFTLEVBQUUsY0FBTSxZQUFJLENBQUMsZUFBZSxJQUFJLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUF0RCxDQUFzRDtnQkFDdkUsWUFBWSxFQUFFO29CQUNaLFlBQUksQ0FBQyxlQUFlLElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZO2dCQUF6RCxDQUF5RDtnQkFDM0QsWUFBWSxFQUFFO29CQUNaLFlBQUksQ0FBQyxlQUFlLElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZO2dCQUF6RCxDQUF5RDthQUM1RCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLENBN0VtQyxnREFBbUIsR0E2RXREOzs7Ozs7Ozs7Ozs7VUMxR0Qsc0QiLCJmaWxlIjoiM2ZiNGIxYy1pbmRleC13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDaGF0U2Nyb2xsQXJlYVN0eWxlcywgZGVmYXVsdENoYXRTY3JvbGxBcmVhU3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgQ2hhdFNjcm9sbEFyZWFDbGFzc2VzLCBkZWZhdWx0Q2hhdFNjcm9sbEFyZWFDbGFzc2VzIH0gZnJvbSAnLi9jbGFzc2VzJztcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3Nlcyc7XG5leHBvcnQgKiBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhdFNjcm9sbEFyZWFQcm9wcyB7XG4gIG1heEhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgbWluSGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBjaGlsZHJlbj86IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXTtcbiAgc3R5bGVzPzogQ2hhdFNjcm9sbEFyZWFTdHlsZXM7XG4gIGFwaVJlZj86IChhcGk6IENoYXRTY3JvbGxBcmVhQXBpKSA9PiB2b2lkO1xuICBsb2FkT2xkTWVzc2FnZXNUaHJlc2hvbGQ6IG51bWJlcjtcbiAgb25Mb2FkT2xkTWVzc2FnZXM6ICgpID0+IFByb21pc2U8dm9pZD47XG5cbiAgY2xhc3Nlcz86IENoYXRTY3JvbGxBcmVhQ2xhc3Nlcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGF0U2Nyb2xsQXJlYUFwaSB7XG4gIHNjcm9sbFRvQm90dG9tOiAoYmVoYXZpb3I/OiBTY3JvbGxCZWhhdmlvcikgPT4gdm9pZDtcbiAgc2Nyb2xsVG86ICh0b3A6IG51bWJlcikgPT4gdm9pZDtcbiAgc2Nyb2xsVG9wOiAoKSA9PiBudW1iZXI7XG4gIHNjcm9sbEhlaWdodDogKCkgPT4gbnVtYmVyO1xuICBjbGllbnRIZWlnaHQ6ICgpID0+IG51bWJlcjtcbiAgc2Nyb2xsZWRUb0JvdHRvbTogKCkgPT4gYm9vbGVhbjtcbiAgc2Nyb2xsZWRUb0xvYWRUaHJlc2hvbGQ6ICgpID0+IGJvb2xlYW47IC8vIENoZWNrIGlmIHdlIGFyZSBzY3JvbGxlZCB0byB0aHJlc2hvbGQgd2hlcmUgd2UgbmVlZCB0byBsb2FkIG1lc3NhZ2VzXG59XG5cbmV4cG9ydCBjbGFzcyBDaGF0U2Nyb2xsQXJlYSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8Q2hhdFNjcm9sbEFyZWFQcm9wcz4ge1xuICBzY3JvbGxDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ2hhdFNjcm9sbEFyZWFQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNvbnRhaW5lclJlZiA9IHRoaXMuY29udGFpbmVyUmVmLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblNjcm9sbCA9IHRoaXMub25TY3JvbGwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdHlsZXMsIGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXt0aGlzLmNvbnRhaW5lclJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgIGRlZmF1bHRDaGF0U2Nyb2xsQXJlYUNsYXNzZXMuY29udGFpbmVyLFxuICAgICAgICAgIGNsYXNzZXM/LmNvbnRhaW5lclxuICAgICAgICApfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIC4uLmRlZmF1bHRDaGF0U2Nyb2xsQXJlYVN0eWxlcy5jb250YWluZXIsXG4gICAgICAgICAgLi4uKHRoaXMucHJvcHMubWF4SGVpZ2h0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8geyBtYXhIZWlnaHQ6IHRoaXMucHJvcHMubWF4SGVpZ2h0IH1cbiAgICAgICAgICAgIDoge30pLFxuICAgICAgICAgIC4uLih0aGlzLnByb3BzLm1pbkhlaWdodCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHsgbWluSGVpZ2h0OiB0aGlzLnByb3BzLm1pbkhlaWdodCB9XG4gICAgICAgICAgICA6IHt9KSxcbiAgICAgICAgICAuLi5zdHlsZXM/LmNvbnRhaW5lcixcbiAgICAgICAgfX1cbiAgICAgICAgb25TY3JvbGw9e3RoaXMub25TY3JvbGx9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgb25TY3JvbGwoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5zY3JvbGxDb250YWluZXIgJiZcbiAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA8PSB0aGlzLnByb3BzLmxvYWRPbGRNZXNzYWdlc1RocmVzaG9sZFxuICAgICkge1xuICAgICAgdGhpcy5wcm9wcy5vbkxvYWRPbGRNZXNzYWdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29udGFpbmVyUmVmKHNjcm9sbENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICB0aGlzLnNjcm9sbENvbnRhaW5lciA9IHNjcm9sbENvbnRhaW5lcjtcbiAgICB0aGlzLnByb3BzLmFwaVJlZiAmJlxuICAgICAgdGhpcy5wcm9wcy5hcGlSZWYoe1xuICAgICAgICBzY3JvbGxUb0JvdHRvbTogKGJlaGF2aW9yID0gJ2F1dG8nKSA9PlxuICAgICAgICAgIHNjcm9sbENvbnRhaW5lciAmJlxuICAgICAgICAgIChzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9cbiAgICAgICAgICAgID8gc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICB0b3A6IHNjcm9sbENvbnRhaW5lci5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICAgICAgYmVoYXZpb3IsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IChzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0gc2Nyb2xsQ29udGFpbmVyLnNjcm9sbEhlaWdodCkpLFxuICAgICAgICBzY3JvbGxUbzogdG9wID0+XG4gICAgICAgICAgc2Nyb2xsQ29udGFpbmVyICYmXG4gICAgICAgICAgKHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb1xuICAgICAgICAgICAgPyBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiAoc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9IHRvcCkpLFxuICAgICAgICBzY3JvbGxlZFRvQm90dG9tOiAoKSA9PlxuICAgICAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbEhlaWdodCAtXG4gICAgICAgICAgICB0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgLVxuICAgICAgICAgICAgdGhpcy5zY3JvbGxDb250YWluZXIuY2xpZW50SGVpZ2h0IDxcbiAgICAgICAgICAxMCxcbiAgICAgICAgc2Nyb2xsZWRUb0xvYWRUaHJlc2hvbGQ6ICgpID0+XG4gICAgICAgICAgdGhpcy5zY3JvbGxDb250YWluZXIgJiZcbiAgICAgICAgICB0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgPD0gdGhpcy5wcm9wcy5sb2FkT2xkTWVzc2FnZXNUaHJlc2hvbGQsXG4gICAgICAgIHNjcm9sbFRvcDogKCkgPT4gdGhpcy5zY3JvbGxDb250YWluZXIgJiYgdGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wLFxuICAgICAgICBzY3JvbGxIZWlnaHQ6ICgpID0+XG4gICAgICAgICAgdGhpcy5zY3JvbGxDb250YWluZXIgJiYgdGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICBjbGllbnRIZWlnaHQ6ICgpID0+XG4gICAgICAgICAgdGhpcy5zY3JvbGxDb250YWluZXIgJiYgdGhpcy5zY3JvbGxDb250YWluZXIuY2xpZW50SGVpZ2h0LFxuICAgICAgfSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjMxYmNlZTNiNjIwMjNhZTQxZWYzXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==