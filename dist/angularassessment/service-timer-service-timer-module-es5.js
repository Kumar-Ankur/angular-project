function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-timer-service-timer-module"], {
  /***/
  "./src/app/service-timer/counter-status/counter-status.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/service-timer/counter-status/counter-status.component.ts ***!
    \**************************************************************************/

  /*! exports provided: CounterStatusComponent */

  /***/
  function srcAppServiceTimerCounterStatusCounterStatusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterStatusComponent", function () {
      return CounterStatusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service-timer.service */
    "./src/app/service-timer/service-timer.service.ts");

    var CounterStatusComponent = /*#__PURE__*/function () {
      function CounterStatusComponent(timerService) {
        _classCallCheck(this, CounterStatusComponent);

        this.timerService = timerService;
        this.startCount = 0;
        this.pausedCount = 0;
      }

      _createClass(CounterStatusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.timerService.setStartCountValue.subscribe(function (value) {
            _this.startCount = value;
          });
          this.timerService.setPausedCountValue.subscribe(function (value) {
            _this.pausedCount = value;
          });
        }
      }]);

      return CounterStatusComponent;
    }();

    CounterStatusComponent.ɵfac = function CounterStatusComponent_Factory(t) {
      return new (t || CounterStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"]));
    };

    CounterStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CounterStatusComponent,
      selectors: [["app-counter-status"]],
      decls: 11,
      vars: 2,
      consts: [[1, "main"], [1, "main_count"], [2, "font-size", "3rem"]],
      template: function CounterStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.startCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pausedCount);
        }
      },
      styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n  top: 7rem;\n  left: 9rem;\n}\n.main_count[_ngcontent-%COMP%] {\n  position: relative;\n  left: 4rem;\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW1hcmFua3VyL0Rlc2t0b3AvYW5ndWxhci9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC9zZXJ2aWNlLXRpbWVyL2NvdW50ZXItc3RhdHVzL2NvdW50ZXItc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlLXRpbWVyL2NvdW50ZXItc3RhdHVzL2NvdW50ZXItc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlLXRpbWVyL2NvdW50ZXItc3RhdHVzL2NvdW50ZXItc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogN3JlbTtcbiAgbGVmdDogOXJlbTtcblxuICAmX2NvdW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNHJlbTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbiIsIi5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDdyZW07XG4gIGxlZnQ6IDlyZW07XG59XG4ubWFpbl9jb3VudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNHJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-counter-status',
          templateUrl: './counter-status.component.html',
          styleUrls: ['./counter-status.component.scss']
        }]
      }], function () {
        return [{
          type: _service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service-timer/display/display.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/service-timer/display/display.component.ts ***!
    \************************************************************/

  /*! exports provided: DisplayComponent */

  /***/
  function srcAppServiceTimerDisplayDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayComponent", function () {
      return DisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service-timer.service */
    "./src/app/service-timer/service-timer.service.ts");

    var DisplayComponent = /*#__PURE__*/function () {
      function DisplayComponent(timerService) {
        _classCallCheck(this, DisplayComponent);

        this.timerService = timerService;
        this.timerValue = 0;
      }

      _createClass(DisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.timerService.setTimerValue.subscribe(function (value) {
            _this2.timerValue = value;
          });
        }
      }]);

      return DisplayComponent;
    }();

    DisplayComponent.ɵfac = function DisplayComponent_Factory(t) {
      return new (t || DisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"]));
    };

    DisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DisplayComponent,
      selectors: [["app-display"]],
      decls: 5,
      vars: 1,
      consts: [[1, "main"]],
      template: function DisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Count Down Timer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timerValue);
        }
      },
      styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW1hcmFua3VyL0Rlc2t0b3AvYW5ndWxhci9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC9zZXJ2aWNlLXRpbWVyL2Rpc3BsYXkvZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VydmljZS10aW1lci9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UtdGltZXIvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3JlbTtcbn1cbiIsIi5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-display',
          templateUrl: './display.component.html',
          styleUrls: ['./display.component.scss']
        }]
      }], function () {
        return [{
          type: _service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service-timer/forms/forms.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/service-timer/forms/forms.component.ts ***!
    \********************************************************/

  /*! exports provided: FormsComponent */

  /***/
  function srcAppServiceTimerFormsFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
      return FormsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service-timer.service */
    "./src/app/service-timer/service-timer.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FormsComponent_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var time_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Paused at ", time_r2, "");
      }
    }

    function FormsComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormsComponent_div_9_div_1_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pausedTime);
      }
    }

    var FormsComponent = /*#__PURE__*/function () {
      function FormsComponent(timerService) {
        _classCallCheck(this, FormsComponent);

        this.timerService = timerService;
        this.inputText = 0;
        this.isTimerStart = false;
        this.startCount = 0;
        this.pausedCount = 0;
        this.pausedTime = [];
        this.startTime = '';
      }

      _createClass(FormsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSelectedInput",
        value: function onSelectedInput(event) {
          this.inputText = event.target.value;
          this.setToInitialState();
        }
      }, {
        key: "handleStartPause",
        value: function handleStartPause() {
          var _this3 = this;

          if (this.inputText > 0) {
            this.isTimerStart = !this.isTimerStart;

            if (this.isTimerStart) {
              this.startCount = this.startCount + 1;
              this.timerService.setStartCountValue.next(this.startCount);
              this.startTime = new Date().toString();
              this.timerService.setStartTime.next(this.startTime);
              this.timerService.emitResetStartLogs.next(false);
              this.timerInterval = setInterval(function () {
                if (_this3.inputText === 0) {
                  clearInterval(_this3.timerInterval);

                  _this3.IsStartVisible();

                  _this3.isTimerStart = false;
                }

                _this3.timerService.setTimerValue.next(+_this3.inputText);

                _this3.inputText = _this3.inputText - 1;
              }, 1000);
            } else {
              this.pausedCount = this.pausedCount + 1;
              this.timerService.setPausedCountValue.next(this.pausedCount);
              this.pausedTime.push(this.inputText + 1);
              this.timerService.emitResetStartLogs.next(false);
              clearInterval(this.timerInterval);
            }
          }
        }
      }, {
        key: "handleReset",
        value: function handleReset() {
          this.inputText = 0;
          this.setToInitialState();
        }
      }, {
        key: "IsStartVisible",
        value: function IsStartVisible() {
          if (this.inputText < 0) {
            return true;
          } else if (this.isTimerStart) {
            return false;
          }

          return true;
        }
      }, {
        key: "setToInitialState",
        value: function setToInitialState() {
          this.pausedTime = [];
          this.startCount = 0;
          this.pausedCount = 0;
          this.timerService.setStartCountValue.next(this.startCount);
          this.timerService.setPausedCountValue.next(this.pausedCount);
          this.timerService.setTimerValue.next(0);
          this.timerService.emitResetStartLogs.next(true);
          this.isTimerStart = false;
          clearInterval(this.timerInterval);
        }
      }]);

      return FormsComponent;
    }();

    FormsComponent.ɵfac = function FormsComponent_Factory(t) {
      return new (t || FormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"]));
    };

    FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsComponent,
      selectors: [["app-forms"]],
      decls: 10,
      vars: 2,
      consts: [[1, "input-group", "forms"], ["for", "timer"], ["type", "number", "placeholder", "Enter timer limit", "id", "timer", "aria-describedby", "basic-addon1", "value", "inputText", 1, "form-control", 3, "input"], [1, "buttonStyle"], [1, "btn", "btn-primary", 2, "margin-right", "2rem", 3, "click"], [1, "btn", "btn-info", 3, "click"], ["class", "pauseContent", 4, "ngIf"], [1, "pauseContent"], [4, "ngFor", "ngForOf"]],
      template: function FormsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Timer Limit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FormsComponent_Template_input_input_3_listener($event) {
            return ctx.onSelectedInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_Template_button_click_5_listener() {
            return ctx.handleStartPause();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_Template_button_click_7_listener() {
            return ctx.handleReset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormsComponent_div_9_Template, 2, 1, "div", 6);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.IsStartVisible() ? "Start" : "Pause", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pausedTime.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".forms[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3rem;\n}\n\n.buttonStyle[_ngcontent-%COMP%] {\n  position: relative;\n  top: 5rem;\n}\n\n.pauseContent[_ngcontent-%COMP%] {\n  position: relative;\n  top: 8rem;\n  height: 12rem;\n  overflow-y: scroll;\n  border-top: 1px solid #e4e4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW1hcmFua3VyL0Rlc2t0b3AvYW5ndWxhci9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC9zZXJ2aWNlLXRpbWVyL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlLXRpbWVyL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlLXRpbWVyL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNyZW07XG59XG5cbi5idXR0b25TdHlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cmVtO1xufVxuXG4ucGF1c2VDb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhyZW07XG4gIGhlaWdodDogMTJyZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNGU0ZTQ7XG59XG4iLCIuZm9ybXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3JlbTtcbn1cblxuLmJ1dHRvblN0eWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVyZW07XG59XG5cbi5wYXVzZUNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHJlbTtcbiAgaGVpZ2h0OiAxMnJlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U0ZTRlNDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms',
          templateUrl: './forms.component.html',
          styleUrls: ['./forms.component.scss']
        }]
      }], function () {
        return [{
          type: _service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service-timer/logger/logger.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/service-timer/logger/logger.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoggerComponent */

  /***/
  function srcAppServiceTimerLoggerLoggerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggerComponent", function () {
      return LoggerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service-timer.service */
    "./src/app/service-timer/service-timer.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoggerComponent_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var time_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Started at ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, time_r2, "dd-mm-yyyy hh:mm:ss a"), " ");
      }
    }

    function LoggerComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoggerComponent_div_3_div_1_Template, 3, 4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.startList);
      }
    }

    var LoggerComponent = /*#__PURE__*/function () {
      function LoggerComponent(timerService) {
        _classCallCheck(this, LoggerComponent);

        this.timerService = timerService;
        this.startList = [];
      }

      _createClass(LoggerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.timerService.emitResetStartLogs.subscribe(function (reset) {
            if (reset) {
              _this4.startList = [];
            }
          });
          this.timerService.setStartTime.subscribe(function (time) {
            _this4.startList.push(time);
          });
        }
      }]);

      return LoggerComponent;
    }();

    LoggerComponent.ɵfac = function LoggerComponent_Factory(t) {
      return new (t || LoggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"]));
    };

    LoggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoggerComponent,
      selectors: [["app-logger"]],
      decls: 4,
      vars: 1,
      consts: [[1, "logger"], ["class", "logContent", 4, "ngIf"], [1, "logContent"], [4, "ngFor", "ngForOf"]],
      template: function LoggerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Started Logs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoggerComponent_div_3_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startList.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: [".logger[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3rem;\n  left: 3rem;\n}\n\n.logContent[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-y: scroll;\n  height: 20rem;\n  left: -2rem;\n  border-top: 1px solid #e4e4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW1hcmFua3VyL0Rlc2t0b3AvYW5ndWxhci9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC9zZXJ2aWNlLXRpbWVyL2xvZ2dlci9sb2dnZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2UtdGltZXIvbG9nZ2VyL2xvZ2dlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlLXRpbWVyL2xvZ2dlci9sb2dnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nZ2VyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNyZW07XG4gIGxlZnQ6IDNyZW07XG59XG5cbi5sb2dDb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogMjByZW07XG4gIGxlZnQ6IC0ycmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U0ZTRlNDtcbn1cbiIsIi5sb2dnZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3JlbTtcbiAgbGVmdDogM3JlbTtcbn1cblxuLmxvZ0NvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgbGVmdDogLTJyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTRlNGU0O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logger',
          templateUrl: './logger.component.html',
          styleUrls: ['./logger.component.scss']
        }]
      }], function () {
        return [{
          type: _service_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service-timer/service-timer-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/service-timer/service-timer-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ServiceTimerRoutingModule */

  /***/
  function srcAppServiceTimerServiceTimerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceTimerRoutingModule", function () {
      return ServiceTimerRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_timer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service-timer.component */
    "./src/app/service-timer/service-timer.component.ts");

    var routes = [{
      path: '',
      component: _service_timer_component__WEBPACK_IMPORTED_MODULE_2__["ServiceTimerComponent"]
    }];

    var ServiceTimerRoutingModule = function ServiceTimerRoutingModule() {
      _classCallCheck(this, ServiceTimerRoutingModule);
    };

    ServiceTimerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ServiceTimerRoutingModule
    });
    ServiceTimerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ServiceTimerRoutingModule_Factory(t) {
        return new (t || ServiceTimerRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceTimerRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceTimerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/service-timer/service-timer.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/service-timer/service-timer.component.ts ***!
    \**********************************************************/

  /*! exports provided: ServiceTimerComponent */

  /***/
  function srcAppServiceTimerServiceTimerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceTimerComponent", function () {
      return ServiceTimerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _display_display_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./display/display.component */
    "./src/app/service-timer/display/display.component.ts");
    /* harmony import */


    var _forms_forms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./forms/forms.component */
    "./src/app/service-timer/forms/forms.component.ts");
    /* harmony import */


    var _logger_logger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./logger/logger.component */
    "./src/app/service-timer/logger/logger.component.ts");
    /* harmony import */


    var _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./counter-status/counter-status.component */
    "./src/app/service-timer/counter-status/counter-status.component.ts");

    var ServiceTimerComponent = /*#__PURE__*/function () {
      function ServiceTimerComponent() {
        _classCallCheck(this, ServiceTimerComponent);
      }

      _createClass(ServiceTimerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServiceTimerComponent;
    }();

    ServiceTimerComponent.ɵfac = function ServiceTimerComponent_Factory(t) {
      return new (t || ServiceTimerComponent)();
    };

    ServiceTimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServiceTimerComponent,
      selectors: [["app-service-timer"]],
      decls: 14,
      vars: 0,
      consts: [[1, "main"], [1, "row"], [1, "col-md-4", "main_display"], [1, "col-md-6", "main_form"], [1, "col-md-5", "main_logger"], [1, "col-md-5", "main_counter"]],
      template: function ServiceTimerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Timer Using Service with Subject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-display");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-forms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-logger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-counter-status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_display_display_component__WEBPACK_IMPORTED_MODULE_1__["DisplayComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_2__["FormsComponent"], _logger_logger_component__WEBPACK_IMPORTED_MODULE_3__["LoggerComponent"], _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_4__["CounterStatusComponent"]],
      styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  position: relative;\n}\n.main_display[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n  position: relative;\n  left: -2rem;\n}\n.main_form[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n}\n.main_logger[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n  position: relative;\n  left: -2rem;\n  top: 2rem;\n}\n.main_counter[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 30rem;\n  position: relative;\n  top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW1hcmFua3VyL0Rlc2t0b3AvYW5ndWxhci9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC9zZXJ2aWNlLXRpbWVyL3NlcnZpY2UtdGltZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2UtdGltZXIvc2VydmljZS10aW1lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7QURFRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBQ0FKO0FER0U7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDREo7QURJRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZS10aW1lci9zZXJ2aWNlLXRpbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJl9kaXNwbGF5IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMnJlbTtcbiAgfVxuXG4gICZfZm9ybSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgaGVpZ2h0OiAzMHJlbTtcbiAgfVxuXG4gICZfbG9nZ2VyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMnJlbTtcbiAgICB0b3A6IDJyZW07XG4gIH1cblxuICAmX2NvdW50ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGhlaWdodDogMzByZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnJlbTtcbiAgfVxufVxuIiwiLm1haW4ge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9kaXNwbGF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMzByZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTJyZW07XG59XG4ubWFpbl9mb3JtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMzByZW07XG59XG4ubWFpbl9sb2dnZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAzMHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMnJlbTtcbiAgdG9wOiAycmVtO1xufVxuLm1haW5fY291bnRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDMwcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceTimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-service-timer',
          templateUrl: './service-timer.component.html',
          styleUrls: ['./service-timer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service-timer/service-timer.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/service-timer/service-timer.module.ts ***!
    \*******************************************************/

  /*! exports provided: ServiceTimerModule */

  /***/
  function srcAppServiceTimerServiceTimerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceTimerModule", function () {
      return ServiceTimerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _service_timer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service-timer-routing.module */
    "./src/app/service-timer/service-timer-routing.module.ts");
    /* harmony import */


    var _service_timer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service-timer.component */
    "./src/app/service-timer/service-timer.component.ts");
    /* harmony import */


    var _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./counter-status/counter-status.component */
    "./src/app/service-timer/counter-status/counter-status.component.ts");
    /* harmony import */


    var _display_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./display/display.component */
    "./src/app/service-timer/display/display.component.ts");
    /* harmony import */


    var _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forms/forms.component */
    "./src/app/service-timer/forms/forms.component.ts");
    /* harmony import */


    var _logger_logger_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./logger/logger.component */
    "./src/app/service-timer/logger/logger.component.ts");

    var ServiceTimerModule = function ServiceTimerModule() {
      _classCallCheck(this, ServiceTimerModule);
    };

    ServiceTimerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ServiceTimerModule
    });
    ServiceTimerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ServiceTimerModule_Factory(t) {
        return new (t || ServiceTimerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _service_timer_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServiceTimerRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceTimerModule, {
        declarations: [_service_timer_component__WEBPACK_IMPORTED_MODULE_3__["ServiceTimerComponent"], _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_4__["CounterStatusComponent"], _display_display_component__WEBPACK_IMPORTED_MODULE_5__["DisplayComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__["FormsComponent"], _logger_logger_component__WEBPACK_IMPORTED_MODULE_7__["LoggerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _service_timer_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServiceTimerRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceTimerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _service_timer_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServiceTimerRoutingModule"]],
          declarations: [_service_timer_component__WEBPACK_IMPORTED_MODULE_3__["ServiceTimerComponent"], _counter_status_counter_status_component__WEBPACK_IMPORTED_MODULE_4__["CounterStatusComponent"], _display_display_component__WEBPACK_IMPORTED_MODULE_5__["DisplayComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__["FormsComponent"], _logger_logger_component__WEBPACK_IMPORTED_MODULE_7__["LoggerComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/service-timer/service-timer.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/service-timer/service-timer.service.ts ***!
    \********************************************************/

  /*! exports provided: TimerService */

  /***/
  function srcAppServiceTimerServiceTimerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerService", function () {
      return TimerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TimerService = function TimerService() {
      _classCallCheck(this, TimerService);

      this.setTimerValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      this.setStartCountValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      this.setPausedCountValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      this.setStartTime = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      this.emitResetStartLogs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    };

    TimerService.ɵfac = function TimerService_Factory(t) {
      return new (t || TimerService)();
    };

    TimerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TimerService,
      factory: TimerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=service-timer-service-timer-module-es5.js.map