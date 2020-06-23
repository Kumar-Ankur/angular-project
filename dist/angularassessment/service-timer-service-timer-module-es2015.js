(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-timer-service-timer-module"],{

/***/ "./src/app/service-timer/counter-status/counter-status.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/service-timer/counter-status/counter-status.component.ts ***!
  \**************************************************************************/
/*! exports provided: CounterStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterStatusComponent", function() { return CounterStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service-timer.service */ "./src/app/service-timer/service-timer.service.ts");



class CounterStatusComponent {
    constructor(timerService) {
        this.timerService = timerService;
        this.startCount = 0;
        this.pausedCount = 0;
    }
    ngOnInit() {
        this.timerService.setStartCountValue.subscribe((value) => {
            this.startCount = value;
        });
        this.timerService.setPausedCountValue.subscribe((value) => {
            this.pausedCount = value;
        });
    }
}
CounterStatusComponent.ɵfac = function CounterStatusComponent_Factory(t) { return new (t || CounterStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"])); };
CounterStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterStatusComponent, selectors: [["app-counter-status"]], decls: 11, vars: 2, consts: [[1, "columns"], [1, "column"], [1, "heading"], [1, "title", "is-size-1"]], template: function CounterStatusComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UtdGltZXIvY291bnRlci1zdGF0dXMvY291bnRlci1zdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-counter-status',
                templateUrl: './counter-status.component.html',
                styleUrls: ['./counter-status.component.scss'],
            }]
    }], function () { return [{ type: _service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service-timer/display/display.component.ts":
/*!************************************************************!*\
  !*** ./src/app/service-timer/display/display.component.ts ***!
  \************************************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service-timer.service */ "./src/app/service-timer/service-timer.service.ts");



class DisplayComponent {
    constructor(timerService) {
        this.timerService = timerService;
        this.timerValue = 0;
    }
    ngOnInit() {
        this.timerService.setTimerValue.subscribe((value) => {
            this.timerValue = value;
        });
    }
}
DisplayComponent.ɵfac = function DisplayComponent_Factory(t) { return new (t || DisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"])); };
DisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayComponent, selectors: [["app-display"]], decls: 5, vars: 1, consts: [[1, "heading"], [1, "title", "is-size-1"]], template: function DisplayComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timerValue);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UtdGltZXIvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-display',
                templateUrl: './display.component.html',
                styleUrls: ['./display.component.scss'],
            }]
    }], function () { return [{ type: _service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service-timer/forms/forms.component.ts":
/*!********************************************************!*\
  !*** ./src/app/service-timer/forms/forms.component.ts ***!
  \********************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service-timer.service */ "./src/app/service-timer/service-timer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





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
    constructor(timerService) {
        this.timerService = timerService;
        this.inputText = 0;
        this.isTimerStart = false;
        this.startCount = 0;
        this.pausedCount = 0;
        this.pausedTime = [];
        this.startTime = '';
        this.text = '';
    }
    ngOnInit() { }
    onSelectedInput(event) {
        this.inputText = event.target.value;
        this.text = '';
        this.setToInitialState();
    }
    handleStartPause() {
        if (this.inputText > 0) {
            this.text = '';
            this.isTimerStart = !this.isTimerStart;
            if (this.isTimerStart) {
                this.startCount = this.startCount + 1;
                this.timerService.setStartCountValue.next(this.startCount);
                this.startTime = new Date().toString();
                this.timerService.setStartTime.next(this.startTime);
                this.timerService.emitResetStartLogs.next(false);
                this.timerInterval = setInterval(() => {
                    if (this.inputText === 0) {
                        clearInterval(this.timerInterval);
                        this.IsStartVisible();
                        this.isTimerStart = false;
                    }
                    this.timerService.setTimerValue.next(+this.inputText);
                    this.inputText = this.inputText - 1;
                }, 1000);
            }
            else {
                this.pausedCount = this.pausedCount + 1;
                this.timerService.setPausedCountValue.next(this.pausedCount);
                this.pausedTime.push(this.inputText + 1);
                this.timerService.emitResetStartLogs.next(false);
                clearInterval(this.timerInterval);
            }
        }
    }
    handleReset() {
        this.inputText = 0;
        this.setToInitialState();
    }
    IsStartVisible() {
        if (this.inputText < 0) {
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
        this.timerService.setStartCountValue.next(this.startCount);
        this.timerService.setPausedCountValue.next(this.pausedCount);
        this.timerService.setTimerValue.next(0);
        this.timerService.emitResetStartLogs.next(true);
        this.isTimerStart = false;
        clearInterval(this.timerInterval);
    }
}
FormsComponent.ɵfac = function FormsComponent_Factory(t) { return new (t || FormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"])); };
FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormsComponent, selectors: [["app-forms"]], decls: 10, vars: 3, consts: [[1, "field", "has-addons"], [1, "control"], ["type", "number", "placeholder", "Timer Limit", "id", "timer", 1, "input", 3, "ngModel", "input", "ngModelChange"], [1, "button", "is-info", 3, "click"], [1, "container", "mb-3"], [1, "button", "is-danger", "is-outlined", 3, "click"], [4, "ngIf"], [1, "subtitle"], [4, "ngFor", "ngForOf"]], template: function FormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FormsComponent_Template_input_input_2_listener($event) { return ctx.onSelectedInput($event); })("ngModelChange", function FormsComponent_Template_input_ngModelChange_2_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_Template_button_click_4_listener() { return ctx.handleStartPause(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.IsStartVisible() ? "Start" : "Pause", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pausedTime.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".forms[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3rem;\n}\n\n.buttonStyle[_ngcontent-%COMP%] {\n  position: relative;\n  top: 5rem;\n}\n\n.pauseContent[_ngcontent-%COMP%] {\n  position: relative;\n  top: 8rem;\n  height: 12rem;\n  overflow-y: scroll;\n  border-top: 1px solid #e4e4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW1hcmFua3VyL0Rlc2t0b3AvYW5ndWxhci9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC9zZXJ2aWNlLXRpbWVyL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlLXRpbWVyL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlLXRpbWVyL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNyZW07XG59XG5cbi5idXR0b25TdHlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cmVtO1xufVxuXG4ucGF1c2VDb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhyZW07XG4gIGhlaWdodDogMTJyZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNGU0ZTQ7XG59XG4iLCIuZm9ybXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3JlbTtcbn1cblxuLmJ1dHRvblN0eWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVyZW07XG59XG5cbi5wYXVzZUNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHJlbTtcbiAgaGVpZ2h0OiAxMnJlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U0ZTRlNDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forms',
                templateUrl: './forms.component.html',
                styleUrls: ['./forms.component.scss'],
            }]
    }], function () { return [{ type: _service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service-timer/logger/logger.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/service-timer/logger/logger.component.ts ***!
  \**********************************************************/
/*! exports provided: LoggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerComponent", function() { return LoggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service-timer.service */ "./src/app/service-timer/service-timer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function LoggerComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Started at ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, time_r2, "dd-mm-yyyy hh:mm:ss a"), "");
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
    constructor(timerService) {
        this.timerService = timerService;
        this.startList = [];
    }
    ngOnInit() {
        this.timerService.emitResetStartLogs.subscribe((reset) => {
            if (reset) {
                this.startList = [];
            }
        });
        this.timerService.setStartTime.subscribe((time) => {
            this.startList.push(time);
        });
    }
}
LoggerComponent.ɵfac = function LoggerComponent_Factory(t) { return new (t || LoggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"])); };
LoggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoggerComponent, selectors: [["app-logger"]], decls: 2, vars: 1, consts: [[1, ""], [4, "ngIf"], [1, "subtitle"], [4, "ngFor", "ngForOf"]], template: function LoggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoggerComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startList.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UtdGltZXIvbG9nZ2VyL2xvZ2dlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logger',
                templateUrl: './logger.component.html',
                styleUrls: ['./logger.component.scss'],
            }]
    }], function () { return [{ type: _service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service-timer/service-timer-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/service-timer/service-timer-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ServiceTimerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTimerRoutingModule", function() { return ServiceTimerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_timer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-timer.component */ "./src/app/service-timer/service-timer.component.ts");





const routes = [{ path: '', component: _service_timer_component__WEBPACK_IMPORTED_MODULE_2__["ServiceTimerComponent"] }];
class ServiceTimerRoutingModule {
}
ServiceTimerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceTimerRoutingModule });
ServiceTimerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServiceTimerRoutingModule_Factory(t) { return new (t || ServiceTimerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceTimerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceTimerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service-timer/service-timer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/service-timer/service-timer.component.ts ***!
  \**********************************************************/
/*! exports provided: ServiceTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTimerComponent", function() { return ServiceTimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/service-timer/forms/forms.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/display.component */ "./src/app/service-timer/display/display.component.ts");
/* harmony import */ var _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter-status/counter-status.component */ "./src/app/service-timer/counter-status/counter-status.component.ts");
/* harmony import */ var _logger_logger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logger/logger.component */ "./src/app/service-timer/logger/logger.component.ts");







class ServiceTimerComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServiceTimerComponent.ɵfac = function ServiceTimerComponent_Factory(t) { return new (t || ServiceTimerComponent)(); };
ServiceTimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceTimerComponent, selectors: [["app-service-timer"]], decls: 32, vars: 0, consts: [[1, "divider", "mt-0", "mb-0"], [1, "section"], [1, "container"], [1, "title", "is-size-3", "has-text-grey", "is-family-secondary", "mb-5"], [1, "tile", "is-ancestor"], [1, "tile"], [1, "tile", "is-parent"], [1, "tile", "is-child", "box"], [1, "title"], [1, "divider", "mt-0"], [1, "tile", "is-parent", "is-vertical"], [1, "tile", "box", "is-child"]], template: function ServiceTimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Timer [Service With Subject] ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-counter-status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-logger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_2__["FormsComponent"], _display_display_component__WEBPACK_IMPORTED_MODULE_3__["DisplayComponent"], _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_4__["CounterStatusComponent"], _logger_logger_component__WEBPACK_IMPORTED_MODULE_5__["LoggerComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  position: relative;\n}\n.main_display[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n  position: relative;\n  left: -2rem;\n}\n.main_form[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n}\n.main_logger[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n  position: relative;\n  left: -2rem;\n  top: 2rem;\n}\n.main_counter[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n  position: relative;\n  top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW1hcmFua3VyL0Rlc2t0b3AvYW5ndWxhci9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC9zZXJ2aWNlLXRpbWVyL3NlcnZpY2UtdGltZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2UtdGltZXIvc2VydmljZS10aW1lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7QURFRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBQ0FKO0FER0U7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDREo7QURJRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZS10aW1lci9zZXJ2aWNlLXRpbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJl9kaXNwbGF5IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMnJlbTtcbiAgfVxuXG4gICZfZm9ybSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgaGVpZ2h0OiAzMHJlbTtcbiAgfVxuXG4gICZfbG9nZ2VyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMnJlbTtcbiAgICB0b3A6IDJyZW07XG4gIH1cblxuICAmX2NvdW50ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGhlaWdodDogMzByZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnJlbTtcbiAgfVxufVxuIiwiLm1haW4ge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9kaXNwbGF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMzByZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTJyZW07XG59XG4ubWFpbl9mb3JtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMzByZW07XG59XG4ubWFpbl9sb2dnZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAzMHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMnJlbTtcbiAgdG9wOiAycmVtO1xufVxuLm1haW5fY291bnRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDMwcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceTimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-service-timer',
                templateUrl: './service-timer.component.html',
                styleUrls: ['./service-timer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service-timer/service-timer.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/service-timer/service-timer.module.ts ***!
  \*******************************************************/
/*! exports provided: ServiceTimerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTimerModule", function() { return ServiceTimerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _service_timer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-timer-routing.module */ "./src/app/service-timer/service-timer-routing.module.ts");
/* harmony import */ var _service_timer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service-timer.component */ "./src/app/service-timer/service-timer.component.ts");
/* harmony import */ var _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./counter-status/counter-status.component */ "./src/app/service-timer/counter-status/counter-status.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display/display.component */ "./src/app/service-timer/display/display.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/service-timer/forms/forms.component.ts");
/* harmony import */ var _logger_logger_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger/logger.component */ "./src/app/service-timer/logger/logger.component.ts");
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");











class ServiceTimerModule {
}
ServiceTimerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceTimerModule });
ServiceTimerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServiceTimerModule_Factory(t) { return new (t || ServiceTimerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _service_timer_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServiceTimerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_9__["NavigationModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceTimerModule, { declarations: [_service_timer_component__WEBPACK_IMPORTED_MODULE_4__["ServiceTimerComponent"], _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_5__["CounterStatusComponent"], _display_display_component__WEBPACK_IMPORTED_MODULE_6__["DisplayComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"], _logger_logger_component__WEBPACK_IMPORTED_MODULE_8__["LoggerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _service_timer_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServiceTimerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_9__["NavigationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceTimerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _service_timer_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServiceTimerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_9__["NavigationModule"]],
                declarations: [_service_timer_component__WEBPACK_IMPORTED_MODULE_4__["ServiceTimerComponent"], _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_5__["CounterStatusComponent"], _display_display_component__WEBPACK_IMPORTED_MODULE_6__["DisplayComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"], _logger_logger_component__WEBPACK_IMPORTED_MODULE_8__["LoggerComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service-timer/service-timer.service.ts":
/*!********************************************************!*\
  !*** ./src/app/service-timer/service-timer.service.ts ***!
  \********************************************************/
/*! exports provided: TimerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return TimerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class TimerService {
    constructor() {
        this.setTimerValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.setStartCountValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.setPausedCountValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.setStartTime = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.emitResetStartLogs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
TimerService.ɵfac = function TimerService_Factory(t) { return new (t || TimerService)(); };
TimerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimerService, factory: TimerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=service-timer-service-timer-module-es2015.js.map