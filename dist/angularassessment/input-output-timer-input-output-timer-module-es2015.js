(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-output-timer-input-output-timer-module"],{

/***/ "./src/app/input-output-timer/counter-status/counter-status.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/input-output-timer/counter-status/counter-status.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CounterStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterStatusComponent", function() { return CounterStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CounterStatusComponent {
    constructor() { }
    ngOnInit() { }
}
CounterStatusComponent.ɵfac = function CounterStatusComponent_Factory(t) { return new (t || CounterStatusComponent)(); };
CounterStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterStatusComponent, selectors: [["app-counter-status"]], inputs: { startCount: "startCount", pausedCount: "pausedCount" }, decls: 11, vars: 2, consts: [[1, "columns"], [1, "column"], [1, "heading"], [1, "title", "is-size-1"]], template: function CounterStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Resume count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pause count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.startCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pausedCount);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LW91dHB1dC10aW1lci9jb3VudGVyLXN0YXR1cy9jb3VudGVyLXN0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-counter-status',
                templateUrl: './counter-status.component.html',
                styleUrls: ['./counter-status.component.scss'],
            }]
    }], function () { return []; }, { startCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pausedCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/input-output-timer/display/display.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/input-output-timer/display/display.component.ts ***!
  \*****************************************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DisplayComponent {
    constructor() { }
    ngOnInit() { }
}
DisplayComponent.ɵfac = function DisplayComponent_Factory(t) { return new (t || DisplayComponent)(); };
DisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayComponent, selectors: [["app-display"]], inputs: { timerLimit: "timerLimit" }, decls: 5, vars: 1, consts: [[1, "heading"], [1, "title", "is-size-1"]], template: function DisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Count Down Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timerLimit);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LW91dHB1dC10aW1lci9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-display',
                templateUrl: './display.component.html',
                styleUrls: ['./display.component.scss'],
            }]
    }], function () { return []; }, { timerLimit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/input-output-timer/forms/forms.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/input-output-timer/forms/forms.component.ts ***!
  \*************************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function FormsComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Paused at ", time_r2, "");
} }
function FormsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormsComponent_div_9_div_3_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pausedTime);
} }
class FormsComponent {
    constructor() {
        this.emitTimerValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emitStartCount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emitPausedCount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emitStartTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emitResetStartLogs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timerLimit = 0;
        this.startCount = 0;
        this.pausedCount = 0;
        this.isTimerStart = false;
        this.pausedTime = [];
        this.startTime = '';
        this.inputText = '';
    }
    ngOnInit() { }
    setInput(event) {
        this.timerLimit = event.target.value;
        this.inputText = '';
        this.setToInitialState();
    }
    handleButton() {
        if (this.timerLimit > 0) {
            this.inputText = '';
            this.isTimerStart = !this.isTimerStart;
            if (this.isTimerStart) {
                this.startCount = this.startCount + 1;
                this.emitStartCount.emit(this.startCount);
                this.startTime = new Date().toString();
                this.emitStartTime.emit(this.startTime);
                this.emitResetStartLogs.emit(false);
                this.timerInterval = setInterval(() => {
                    if (this.timerLimit === 0) {
                        clearInterval(this.timerInterval);
                        this.IsStartVisible();
                        this.isTimerStart = false;
                    }
                    this.emitTimerValue.emit(this.timerLimit);
                    this.timerLimit = this.timerLimit - 1;
                }, 1000);
            }
            else {
                this.pausedCount = this.pausedCount + 1;
                this.emitPausedCount.emit(this.pausedCount);
                this.emitResetStartLogs.emit(false);
                this.pausedTime.push(this.timerLimit + 1);
                clearInterval(this.timerInterval);
            }
        }
    }
    handleReset() {
        this.timerLimit = 0;
        this.setToInitialState();
    }
    IsStartVisible() {
        if (this.timerLimit < 0) {
            return true;
        }
        else if (this.isTimerStart) {
            return false;
        }
        return true;
    }
    setToInitialState() {
        this.pausedTime = [];
        this.startCount = 0;
        this.pausedCount = 0;
        this.isTimerStart = false;
        this.emitTimerValue.emit(0);
        this.emitStartCount.emit(this.startCount);
        this.emitPausedCount.emit(this.pausedCount);
        this.emitResetStartLogs.emit(true);
        clearInterval(this.timerInterval);
    }
}
FormsComponent.ɵfac = function FormsComponent_Factory(t) { return new (t || FormsComponent)(); };
FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormsComponent, selectors: [["app-forms"]], outputs: { emitTimerValue: "emitTimerValue", emitStartCount: "emitStartCount", emitPausedCount: "emitPausedCount", emitStartTime: "emitStartTime", emitResetStartLogs: "emitResetStartLogs" }, decls: 10, vars: 3, consts: [[1, "field", "has-addons"], [1, "control"], ["type", "number", "placeholder", "Timer Limit", "id", "timer", 1, "input", 3, "ngModel", "input", "ngModelChange"], [1, "button", "is-info", 3, "click"], [1, "container", "mb-3"], [1, "button", "is-danger", "is-outlined", 3, "click"], [4, "ngIf"], [1, "subtitle"], [4, "ngFor", "ngForOf"]], template: function FormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FormsComponent_Template_input_input_2_listener($event) { return ctx.setInput($event); })("ngModelChange", function FormsComponent_Template_input_ngModelChange_2_listener($event) { return ctx.inputText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_Template_button_click_4_listener() { return ctx.handleButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_Template_button_click_7_listener() { return ctx.handleReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormsComponent_div_9_Template, 4, 1, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.IsStartVisible() ? "Start" : "Pause", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pausedTime.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LW91dHB1dC10aW1lci9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forms',
                templateUrl: './forms.component.html',
                styleUrls: ['./forms.component.scss'],
            }]
    }], function () { return []; }, { emitTimerValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], emitStartCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], emitPausedCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], emitStartTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], emitResetStartLogs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/input-output-timer/input-output-timer-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/input-output-timer/input-output-timer-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: InputOutputTimerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputOutputTimerRoutingModule", function() { return InputOutputTimerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _input_output_timer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-output-timer.component */ "./src/app/input-output-timer/input-output-timer.component.ts");





const routes = [{ path: '', component: _input_output_timer_component__WEBPACK_IMPORTED_MODULE_2__["InputOutputTimerComponent"] }];
class InputOutputTimerRoutingModule {
}
InputOutputTimerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InputOutputTimerRoutingModule });
InputOutputTimerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InputOutputTimerRoutingModule_Factory(t) { return new (t || InputOutputTimerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InputOutputTimerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputOutputTimerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/input-output-timer/input-output-timer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/input-output-timer/input-output-timer.component.ts ***!
  \********************************************************************/
/*! exports provided: InputOutputTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputOutputTimerComponent", function() { return InputOutputTimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/input-output-timer/forms/forms.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/display.component */ "./src/app/input-output-timer/display/display.component.ts");
/* harmony import */ var _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter-status/counter-status.component */ "./src/app/input-output-timer/counter-status/counter-status.component.ts");
/* harmony import */ var _logger_logger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logger/logger.component */ "./src/app/input-output-timer/logger/logger.component.ts");







class InputOutputTimerComponent {
    constructor() {
        this.timerLimit = 0;
        this.startCount = 0;
        this.pausedCount = 0;
        this.startTime = '';
        this.resetStartLog = false;
    }
    ngOnInit() { }
    setTimerLimit(timer) {
        this.timerLimit = timer;
    }
    setStartCount(count) {
        this.startCount = count;
    }
    setPausedCount(count) {
        this.pausedCount = count;
    }
    setStartTime(startTime) {
        this.startTime = startTime;
    }
    resetStartLogs(status) {
        this.resetStartLog = status;
    }
}
InputOutputTimerComponent.ɵfac = function InputOutputTimerComponent_Factory(t) { return new (t || InputOutputTimerComponent)(); };
InputOutputTimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputOutputTimerComponent, selectors: [["app-input-output-timer"]], decls: 32, vars: 5, consts: [[1, "divider", "mt-0", "mb-0"], [1, "section"], [1, "container"], [1, "title", "is-size-3", "has-text-grey", "is-family-secondary", "mb-5"], [1, "tile", "is-ancestor"], [1, "tile"], [1, "tile", "is-parent"], [1, "tile", "is-child", "box"], [1, "title"], [1, "divider", "mt-0"], [3, "emitTimerValue", "emitStartCount", "emitPausedCount", "emitStartTime", "emitResetStartLogs"], [3, "timerLimit"], [1, "tile", "is-parent", "is-vertical"], [1, "tile", "box", "is-child"], [3, "startCount", "pausedCount"], [3, "startTime", "resetStartLog"]], template: function InputOutputTimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Timer [I/O Decorator] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Gauge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-forms", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emitTimerValue", function InputOutputTimerComponent_Template_app_forms_emitTimerValue_14_listener($event) { return ctx.setTimerLimit($event); })("emitStartCount", function InputOutputTimerComponent_Template_app_forms_emitStartCount_14_listener($event) { return ctx.setStartCount($event); })("emitPausedCount", function InputOutputTimerComponent_Template_app_forms_emitPausedCount_14_listener($event) { return ctx.setPausedCount($event); })("emitStartTime", function InputOutputTimerComponent_Template_app_forms_emitStartTime_14_listener($event) { return ctx.setStartTime($event); })("emitResetStartLogs", function InputOutputTimerComponent_Template_app_forms_emitResetStartLogs_14_listener($event) { return ctx.resetStartLogs($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-display", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-counter-status", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-logger", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timerLimit", ctx.timerLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startCount", ctx.startCount)("pausedCount", ctx.pausedCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startTime", ctx.startTime)("resetStartLog", ctx.resetStartLog);
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_2__["FormsComponent"], _display_display_component__WEBPACK_IMPORTED_MODULE_3__["DisplayComponent"], _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_4__["CounterStatusComponent"], _logger_logger_component__WEBPACK_IMPORTED_MODULE_5__["LoggerComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  position: relative;\n}\n.main_display[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n  position: relative;\n  left: -2rem;\n}\n.main_form[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n}\n.main_logger[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n  position: relative;\n  left: -2rem;\n  top: 2rem;\n}\n.main_counter[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n  position: relative;\n  top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW1hcmFua3VyL0Rlc2t0b3AvYW5ndWxhci9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC9pbnB1dC1vdXRwdXQtdGltZXIvaW5wdXQtb3V0cHV0LXRpbWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnB1dC1vdXRwdXQtdGltZXIvaW5wdXQtb3V0cHV0LXRpbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjtBREVFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0FDQUo7QURHRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNESjtBRElFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9pbnB1dC1vdXRwdXQtdGltZXIvaW5wdXQtb3V0cHV0LXRpbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJl9kaXNwbGF5IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMnJlbTtcbiAgfVxuXG4gICZfZm9ybSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgaGVpZ2h0OiAzMHJlbTtcbiAgfVxuXG4gICZfbG9nZ2VyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMnJlbTtcbiAgICB0b3A6IDJyZW07XG4gIH1cblxuICAmX2NvdW50ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGhlaWdodDogMzByZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnJlbTtcbiAgfVxufVxuIiwiLm1haW4ge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9kaXNwbGF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMzByZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTJyZW07XG59XG4ubWFpbl9mb3JtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMzByZW07XG59XG4ubWFpbl9sb2dnZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAzMHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMnJlbTtcbiAgdG9wOiAycmVtO1xufVxuLm1haW5fY291bnRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDMwcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputOutputTimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-output-timer',
                templateUrl: './input-output-timer.component.html',
                styleUrls: ['./input-output-timer.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/input-output-timer/input-output-timer.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/input-output-timer/input-output-timer.module.ts ***!
  \*****************************************************************/
/*! exports provided: InputOutputTimerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputOutputTimerModule", function() { return InputOutputTimerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _input_output_timer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-output-timer-routing.module */ "./src/app/input-output-timer/input-output-timer-routing.module.ts");
/* harmony import */ var _input_output_timer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-output-timer.component */ "./src/app/input-output-timer/input-output-timer.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display/display.component */ "./src/app/input-output-timer/display/display.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/input-output-timer/forms/forms.component.ts");
/* harmony import */ var _logger_logger_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logger/logger.component */ "./src/app/input-output-timer/logger/logger.component.ts");
/* harmony import */ var _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter-status/counter-status.component */ "./src/app/input-output-timer/counter-status/counter-status.component.ts");
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");











class InputOutputTimerModule {
}
InputOutputTimerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InputOutputTimerModule });
InputOutputTimerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InputOutputTimerModule_Factory(t) { return new (t || InputOutputTimerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _input_output_timer_routing_module__WEBPACK_IMPORTED_MODULE_3__["InputOutputTimerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_9__["NavigationModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InputOutputTimerModule, { declarations: [_input_output_timer_component__WEBPACK_IMPORTED_MODULE_4__["InputOutputTimerComponent"], _display_display_component__WEBPACK_IMPORTED_MODULE_5__["DisplayComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__["FormsComponent"], _logger_logger_component__WEBPACK_IMPORTED_MODULE_7__["LoggerComponent"], _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_8__["CounterStatusComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _input_output_timer_routing_module__WEBPACK_IMPORTED_MODULE_3__["InputOutputTimerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_9__["NavigationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputOutputTimerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _input_output_timer_routing_module__WEBPACK_IMPORTED_MODULE_3__["InputOutputTimerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_9__["NavigationModule"]],
                declarations: [_input_output_timer_component__WEBPACK_IMPORTED_MODULE_4__["InputOutputTimerComponent"], _display_display_component__WEBPACK_IMPORTED_MODULE_5__["DisplayComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__["FormsComponent"], _logger_logger_component__WEBPACK_IMPORTED_MODULE_7__["LoggerComponent"], _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_8__["CounterStatusComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/input-output-timer/logger/logger.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/input-output-timer/logger/logger.component.ts ***!
  \***************************************************************/
/*! exports provided: LoggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerComponent", function() { return LoggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function LoggerComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Started at ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, time_r2, "dd-mm-yyyy hh:mm:ss a"), " ");
} }
function LoggerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoggerComponent_div_1_div_3_Template, 3, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.startList);
} }
class LoggerComponent {
    constructor() {
        this.startList = [];
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.resetStartLog && changes.resetStartLog.currentValue) {
            this.startList.length = 0;
        }
        if (changes.startTime && changes.startTime.currentValue) {
            this.startList.push(changes.startTime.currentValue);
        }
    }
}
LoggerComponent.ɵfac = function LoggerComponent_Factory(t) { return new (t || LoggerComponent)(); };
LoggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoggerComponent, selectors: [["app-logger"]], inputs: { startTime: "startTime", resetStartLog: "resetStartLog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[1, ""], [4, "ngIf"], [1, "subtitle"], [4, "ngFor", "ngForOf"]], template: function LoggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoggerComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startList.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LW91dHB1dC10aW1lci9sb2dnZXIvbG9nZ2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logger',
                templateUrl: './logger.component.html',
                styleUrls: ['./logger.component.scss'],
            }]
    }], function () { return []; }, { startTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resetStartLog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=input-output-timer-input-output-timer-module-es2015.js.map