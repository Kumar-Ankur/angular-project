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
CounterStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterStatusComponent, selectors: [["app-counter-status"]], inputs: { startCount: "startCount", pausedCount: "pausedCount" }, decls: 11, vars: 2, consts: [[1, "main"], [1, "main_count"], [2, "font-size", "3rem"]], template: function CounterStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Paused");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.startCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pausedCount);
    } }, styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n  top: 7rem;\n  left: 9rem;\n}\n.main_count[_ngcontent-%COMP%] {\n  position: relative;\n  left: 4rem;\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW1hcmFua3VyL0Rlc2t0b3AvYW5ndWxhci9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC9pbnB1dC1vdXRwdXQtdGltZXIvY291bnRlci1zdGF0dXMvY291bnRlci1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2lucHV0LW91dHB1dC10aW1lci9jb3VudGVyLXN0YXR1cy9jb3VudGVyLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaW5wdXQtb3V0cHV0LXRpbWVyL2NvdW50ZXItc3RhdHVzL2NvdW50ZXItc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogN3JlbTtcbiAgbGVmdDogOXJlbTtcblxuICAmX2NvdW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNHJlbTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbiIsIi5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDdyZW07XG4gIGxlZnQ6IDlyZW07XG59XG4ubWFpbl9jb3VudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNHJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xufSJdfQ== */"] });
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
DisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayComponent, selectors: [["app-display"]], inputs: { timerLimit: "timerLimit" }, decls: 5, vars: 1, consts: [[1, "main"]], template: function DisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Count Down Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timerLimit);
    } }, styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW1hcmFua3VyL0Rlc2t0b3AvYW5ndWxhci9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC9pbnB1dC1vdXRwdXQtdGltZXIvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnB1dC1vdXRwdXQtdGltZXIvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9pbnB1dC1vdXRwdXQtdGltZXIvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3JlbTtcbn1cbiIsIi5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNyZW07XG59Il19 */"] });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function FormsComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Paused at ", time_r2, "");
} }
function FormsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormsComponent_div_9_div_1_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
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
    }
    ngOnInit() { }
    setInput(event) {
        this.timerLimit = event.target.value;
        this.setToInitialState();
    }
    handleButton() {
        if (this.timerLimit > 0) {
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
        this.emitTimerValue.emit(0);
        this.emitStartCount.emit(this.startCount);
        this.emitPausedCount.emit(this.pausedCount);
        this.emitResetStartLogs.emit(true);
        clearInterval(this.timerInterval);
    }
}
FormsComponent.ɵfac = function FormsComponent_Factory(t) { return new (t || FormsComponent)(); };
FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormsComponent, selectors: [["app-forms"]], outputs: { emitTimerValue: "emitTimerValue", emitStartCount: "emitStartCount", emitPausedCount: "emitPausedCount", emitStartTime: "emitStartTime", emitResetStartLogs: "emitResetStartLogs" }, decls: 10, vars: 2, consts: [[1, "input-group", "forms"], ["for", "timer"], ["type", "number", "placeholder", "Enter timer limit", "id", "timer", "aria-describedby", "basic-addon1", 1, "form-control", 3, "input"], [1, "buttonStyle"], [1, "btn", "btn-primary", 2, "margin-right", "2rem", 3, "click"], [1, "btn", "btn-info", 3, "click"], ["class", "pauseContent", 4, "ngIf"], [1, "pauseContent"], [4, "ngFor", "ngForOf"]], template: function FormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Timer Limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FormsComponent_Template_input_input_3_listener($event) { return ctx.setInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_Template_button_click_5_listener() { return ctx.handleButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_Template_button_click_7_listener() { return ctx.handleReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormsComponent_div_9_Template, 2, 1, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.IsStartVisible() ? "Start" : "Pause", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pausedTime.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".forms[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3rem;\n}\n\n.buttonStyle[_ngcontent-%COMP%] {\n  position: relative;\n  top: 5rem;\n}\n\n.pauseContent[_ngcontent-%COMP%] {\n  position: relative;\n  top: 8rem;\n  height: 12rem;\n  overflow-y: scroll;\n  border-top: 1px solid #e4e4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW1hcmFua3VyL0Rlc2t0b3AvYW5ndWxhci9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC9pbnB1dC1vdXRwdXQtdGltZXIvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2lucHV0LW91dHB1dC10aW1lci9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaW5wdXQtb3V0cHV0LXRpbWVyL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNyZW07XG59XG5cbi5idXR0b25TdHlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cmVtO1xufVxuXG4ucGF1c2VDb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhyZW07XG4gIGhlaWdodDogMTJyZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNGU0ZTQ7XG59IiwiLmZvcm1zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNyZW07XG59XG5cbi5idXR0b25TdHlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cmVtO1xufVxuXG4ucGF1c2VDb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhyZW07XG4gIGhlaWdodDogMTJyZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNGU0ZTQ7XG59Il19 */"] });
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
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/display.component */ "./src/app/input-output-timer/display/display.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/input-output-timer/forms/forms.component.ts");
/* harmony import */ var _logger_logger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger/logger.component */ "./src/app/input-output-timer/logger/logger.component.ts");
/* harmony import */ var _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter-status/counter-status.component */ "./src/app/input-output-timer/counter-status/counter-status.component.ts");






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
InputOutputTimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputOutputTimerComponent, selectors: [["app-input-output-timer"]], decls: 14, vars: 5, consts: [[1, "main"], [1, "row"], [1, "col-md-4", "main_display"], [3, "timerLimit"], [1, "col-md-6", "main_form"], [3, "emitTimerValue", "emitStartCount", "emitPausedCount", "emitStartTime", "emitResetStartLogs"], [1, "col-md-5", "main_logger"], [3, "startTime", "resetStartLog"], [1, "col-md-5", "main_counter"], [3, "startCount", "pausedCount"]], template: function InputOutputTimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Timer Using Input and Output Decorator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-display", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-forms", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emitTimerValue", function InputOutputTimerComponent_Template_app_forms_emitTimerValue_8_listener($event) { return ctx.setTimerLimit($event); })("emitStartCount", function InputOutputTimerComponent_Template_app_forms_emitStartCount_8_listener($event) { return ctx.setStartCount($event); })("emitPausedCount", function InputOutputTimerComponent_Template_app_forms_emitPausedCount_8_listener($event) { return ctx.setPausedCount($event); })("emitStartTime", function InputOutputTimerComponent_Template_app_forms_emitStartTime_8_listener($event) { return ctx.setStartTime($event); })("emitResetStartLogs", function InputOutputTimerComponent_Template_app_forms_emitResetStartLogs_8_listener($event) { return ctx.resetStartLogs($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-logger", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-counter-status", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timerLimit", ctx.timerLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startTime", ctx.startTime)("resetStartLog", ctx.resetStartLog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startCount", ctx.startCount)("pausedCount", ctx.pausedCount);
    } }, directives: [_display_display_component__WEBPACK_IMPORTED_MODULE_1__["DisplayComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_2__["FormsComponent"], _logger_logger_component__WEBPACK_IMPORTED_MODULE_3__["LoggerComponent"], _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_4__["CounterStatusComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  position: relative;\n}\n.main_display[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n  position: relative;\n  left: -2rem;\n}\n.main_form[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n}\n.main_logger[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n  position: relative;\n  left: -2rem;\n  top: 2rem;\n}\n.main_counter[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n  position: relative;\n  top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW1hcmFua3VyL0Rlc2t0b3AvYW5ndWxhci9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC9pbnB1dC1vdXRwdXQtdGltZXIvaW5wdXQtb3V0cHV0LXRpbWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnB1dC1vdXRwdXQtdGltZXIvaW5wdXQtb3V0cHV0LXRpbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjtBREVFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0FDQUo7QURHRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNESjtBRElFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9pbnB1dC1vdXRwdXQtdGltZXIvaW5wdXQtb3V0cHV0LXRpbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJl9kaXNwbGF5IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMnJlbTtcbiAgfVxuXG4gICZfZm9ybSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgaGVpZ2h0OiAzMHJlbTtcbiAgfVxuXG4gICZfbG9nZ2VyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMnJlbTtcbiAgICB0b3A6IDJyZW07XG4gIH1cblxuICAmX2NvdW50ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGhlaWdodDogMzByZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnJlbTtcbiAgfVxufVxuIiwiLm1haW4ge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9kaXNwbGF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMzByZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTJyZW07XG59XG4ubWFpbl9mb3JtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMzByZW07XG59XG4ubWFpbl9sb2dnZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAzMHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMnJlbTtcbiAgdG9wOiAycmVtO1xufVxuLm1haW5fY291bnRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDMwcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnJlbTtcbn0iXX0= */"] });
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










class InputOutputTimerModule {
}
InputOutputTimerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InputOutputTimerModule });
InputOutputTimerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InputOutputTimerModule_Factory(t) { return new (t || InputOutputTimerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _input_output_timer_routing_module__WEBPACK_IMPORTED_MODULE_3__["InputOutputTimerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InputOutputTimerModule, { declarations: [_input_output_timer_component__WEBPACK_IMPORTED_MODULE_4__["InputOutputTimerComponent"],
        _display_display_component__WEBPACK_IMPORTED_MODULE_5__["DisplayComponent"],
        _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__["FormsComponent"],
        _logger_logger_component__WEBPACK_IMPORTED_MODULE_7__["LoggerComponent"],
        _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_8__["CounterStatusComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _input_output_timer_routing_module__WEBPACK_IMPORTED_MODULE_3__["InputOutputTimerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputOutputTimerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _input_output_timer_routing_module__WEBPACK_IMPORTED_MODULE_3__["InputOutputTimerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                declarations: [
                    _input_output_timer_component__WEBPACK_IMPORTED_MODULE_4__["InputOutputTimerComponent"],
                    _display_display_component__WEBPACK_IMPORTED_MODULE_5__["DisplayComponent"],
                    _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__["FormsComponent"],
                    _logger_logger_component__WEBPACK_IMPORTED_MODULE_7__["LoggerComponent"],
                    _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_8__["CounterStatusComponent"],
                ],
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



function LoggerComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Started at ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, time_r2, "dd-mm-yyyy hh:mm:ss a"), " ");
} }
function LoggerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoggerComponent_div_3_div_1_Template, 3, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
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
LoggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoggerComponent, selectors: [["app-logger"]], inputs: { startTime: "startTime", resetStartLog: "resetStartLog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 1, consts: [[1, "logger"], ["class", "logContent", 4, "ngIf"], [1, "logContent"], [4, "ngFor", "ngForOf"]], template: function LoggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Started Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoggerComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startList.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".logger[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3rem;\n  left: 3rem;\n}\n\n.logContent[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-y: scroll;\n  height: 20rem;\n  left: -2rem;\n  border-top: 1px solid #e4e4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW1hcmFua3VyL0Rlc2t0b3AvYW5ndWxhci9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC9pbnB1dC1vdXRwdXQtdGltZXIvbG9nZ2VyL2xvZ2dlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5wdXQtb3V0cHV0LXRpbWVyL2xvZ2dlci9sb2dnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaW5wdXQtb3V0cHV0LXRpbWVyL2xvZ2dlci9sb2dnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nZ2VyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNyZW07XG4gIGxlZnQ6IDNyZW07XG59XG5cbi5sb2dDb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogMjByZW07XG4gIGxlZnQ6IC0ycmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U0ZTRlNDtcbn1cbiIsIi5sb2dnZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3JlbTtcbiAgbGVmdDogM3JlbTtcbn1cblxuLmxvZ0NvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgbGVmdDogLTJyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTRlNGU0O1xufSJdfQ== */"] });
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