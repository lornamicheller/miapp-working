(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "./src/app/notification/notification.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "./src/app/notification/notification.page.ts");







var routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]
    }
];
var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());



/***/ }),

/***/ "./src/app/notification/notification.page.html":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\n  <p class=\"doctors-title\">Notifications</p>\n</div>\n\n<ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n  <ion-icon class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-button>\n\n<ion-content>\n  <ion-card class=\"doctors-card\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"avatar-img\" size=\"3\">\n          <ion-avatar class=\"doctor-img\">\n            <ion-img src=\"assets/happydoctor.jpg\"></ion-img>\n          </ion-avatar>\n        </ion-col>\n        <ion-col class=\"doc-info\" size=\"9\">\n          <p\n            style=\"margin-left: 5px; margin-top: 20px; margin-bottom: 0; padding-bottom: 0; font-weight: 700; color: rgb(32, 32, 32); font-size: 13px;\">\n            Dr. John has <span>4 </span> people ahead of you.</p>\n          <p\n            style=\"margin-left: 5px; margin-top: 5px; padding-top: 0; font-weight: 700; color: rgb(32, 32, 32); font-size: 13px;\">\n            Estimated wait time: <span>1 hour</span><span> 45 mins</span></p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-button (click)=\"confirmLate()\" class=\"confirm-btn\" expand=\"block\">I'M LATE</ion-button>\n  </ion-card>\n\n  <ion-card class=\"doctors-card\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"avatar-img\" size=\"3\">\n            <ion-avatar class=\"doctor-img\">\n              <ion-img src=\"assets/happydoctor.jpg\"></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col class=\"doc-info\" size=\"9\">\n            <p\n              style=\"margin-left: 5px; margin-top: 20px; margin-bottom: 0; padding-bottom: 0; font-weight: 700; color: rgb(32, 32, 32); font-size: 13px;\">\n             Remember to \"click\" arrived when you get to Dr. John's office.</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-button class=\"confirm-btn\" (click)=\"arrivedAlert()\" expand=\"block\">ARRIVED</ion-button>\n    </ion-card>\n\n  <ion-card class=\"doctors-card\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"avatar-img\" size=\"3\">\n          <ion-avatar class=\"doctor-img\">\n            <ion-img src=\"assets/happydoctor.jpg\"></ion-img>\n          </ion-avatar>\n        </ion-col>\n        <ion-col class=\"doc-info\" size=\"9\">\n          <p\n            style=\"margin-left: 5px; margin-top: 20px; margin-bottom: 0; padding-bottom: 0; font-weight: 700; color: rgb(32, 32, 32); font-size: 13px;\">\n            Dr. John <span class=\"office-status\">has opened the wait list. Jane Doe, please now select “Check-in” to sign\n              into your appointment and receive your estimated wait time.</span></p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-button class=\"confirm-btn\" (click)=\"presentAlert()\" expand=\"block\">CHECK-IN</ion-button>\n  </ion-card>\n\n  <ion-card class=\"doctors-card\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"avatar-img\" size=\"3\">\n          <ion-avatar class=\"doctor-img\">\n            <ion-img src=\"assets/happydoctor.jpg\"></ion-img>\n          </ion-avatar>\n        </ion-col>\n        <ion-col class=\"doc-info\" size=\"9\">\n          <p\n            style=\"margin-left: 5px; margin-top: 20px; margin-bottom: 0; padding-bottom: 0; font-weight: 700; color: rgb(32, 32, 32); font-size: 13px;\">\n            Dr. John:</p>\n          <p\n            style=\"margin-left: 5px; margin-top: 5px; padding-top: 0; font-weight: 700; color: rgb(32, 32, 32); font-size: 13px;\">\n            Jane Doe, please confirm your appointment with Dr. John.</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-button class=\"confirm-btn\" (click)=\"presentAlert2()\" expand=\"block\">CONFIRM</ion-button>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/notification/notification.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px; }\n\n.doctors-title {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n  padding-top: 45px;\n  font-weight: 700; }\n\n.arrow-btn {\n  position: absolute;\n  top: 45px;\n  left: 0;\n  z-index: 20;\n  width: 50px;\n  --background: transparent;\n  --background-activated: transparent;\n  --box-shadow: none; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.doctors-card {\n  color: grey;\n  font-weight: 400;\n  margin-top: 10px; }\n\n.doctor-img {\n  margin-top: 10px;\n  width: 50px;\n  height: 50px; }\n\n.checkin-btn {\n  background-image: linear-gradient(to right, #575af3, #5f69f6, #6878f9, #7285fb, #7e93fc);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 190px;\n  height: 45px;\n  float: right;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  color: white; }\n\n.confirm-btn {\n  background-image: linear-gradient(to right, #575af3, #5f69f6, #6878f9, #7285fb, #7e93fc);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 200px;\n  height: 45px;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: white;\n  margin-left: auto;\n  margin-right: auto; }\n\n.office-status {\n  text-align: justify; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdGQUF3RjtFQUN4RixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixrQkFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx3RkFBd0Y7RUFDeEYsZ0NBQWdDO0VBQ2hDLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSx3RkFBd0Y7RUFDeEYsZ0NBQWdDO0VBQ2hDLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmRvY3RvcnMtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFycm93LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NXB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyMDtcbiAgd2lkdGg6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hcnJvdyB7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5kb2N0b3JzLWNhcmQge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmRvY3Rvci1pbWcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uY2hlY2tpbi1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1NzVhZjMsICM1ZjY5ZjYsICM2ODc4ZjksICM3Mjg1ZmIsICM3ZTkzZmMpO1xuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxOTBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbmZpcm0tYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNTc1YWYzLCAjNWY2OWY2LCAjNjg3OGY5LCAjNzI4NWZiLCAjN2U5M2ZjKTtcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLm9mZmljZS1zdGF0dXMge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/notification/notification.page.ts":
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");





var NotificationPage = /** @class */ (function () {
    function NotificationPage(navigate, nativePageTransitions, alertController) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.alertController = alertController;
    }
    NotificationPage.prototype.ngOnInit = function () {
    };
    NotificationPage.prototype.goBack = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/user-home");
    };
    NotificationPage.prototype.goHome = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/user-home");
    };
    NotificationPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Good!', message: 'Check-in complete. Jane Doe, remember to click "I have arrived" when you arrive to your appointment.', buttons: [{
                                    text: 'OK', handler: function () {
                                        console.log('Confirm Cancel');
                                        _this.goHome();
                                        _this.navigate.navigateRoot('/checkin-profile');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationPage.prototype.arrivedAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Good!', message: 'Jane Doe, thank you for letting us know that you have arrived to your appointment. Your doctor will be notified.', buttons: [{
                                    text: 'OK', handler: function () {
                                        console.log('Confirm Cancel');
                                        _this.goHome();
                                        _this.navigate.navigateRoot("/user-home");
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationPage.prototype.presentAlert2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Jane Doe', message: 'Please confirm your appointment with Dr. John for September 7, 2019 at 9:30AM.',
                            buttons: [{
                                    text: 'OK',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                        _this.goHome();
                                        _this.navigate.navigateRoot("/user-home");
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationPage.prototype.confirmLate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Jane Doe',
                            // subHeader: 'Subtitle',
                            message: 'Thank you for letting us know! Your doctor will now be notified of your delayed arrival.',
                            buttons: [{
                                    text: 'OK',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                        _this.goHome();
                                        _this.navigate.navigateRoot("/user-home");
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationPage.prototype.checkIn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Good!', message: 'Check-in complete. Jane Doe, remember to click "I have arrived" when you arrive to your appointment.', buttons: [{
                                    text: 'OK', handler: function () {
                                        console.log('Confirm Cancel');
                                        _this.goHome();
                                        _this.navigate.navigateRoot("/user-home");
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.page.html */ "./src/app/notification/notification.page.html"),
            styles: [__webpack_require__(/*! ./notification.page.scss */ "./src/app/notification/notification.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], NotificationPage);
    return NotificationPage;
}());



/***/ })

}]);
//# sourceMappingURL=notification-notification-module.js.map