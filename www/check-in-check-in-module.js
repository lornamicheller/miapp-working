(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["check-in-check-in-module"],{

/***/ "./src/app/check-in/check-in.module.ts":
/*!*********************************************!*\
  !*** ./src/app/check-in/check-in.module.ts ***!
  \*********************************************/
/*! exports provided: CheckInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInPageModule", function() { return CheckInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _check_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check-in.page */ "./src/app/check-in/check-in.page.ts");







var routes = [
    {
        path: '',
        component: _check_in_page__WEBPACK_IMPORTED_MODULE_6__["CheckInPage"]
    }
];
var CheckInPageModule = /** @class */ (function () {
    function CheckInPageModule() {
    }
    CheckInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_check_in_page__WEBPACK_IMPORTED_MODULE_6__["CheckInPage"]]
        })
    ], CheckInPageModule);
    return CheckInPageModule;
}());



/***/ }),

/***/ "./src/app/check-in/check-in.page.html":
/*!*********************************************!*\
  !*** ./src/app/check-in/check-in.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\n  <p class=\"doctors-title\">Check-In</p>\n</div>\n\n<!-- <ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n  <ion-icon class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-button> -->\n\n<ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/user-home\"></ion-back-button>\n\n\n<ion-content>\n\n  <ion-card class=\"doctors-card\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"avatar-img\" size=\"4\">\n          <ion-avatar class=\"doctor-img\">\n            <ion-img src=\"assets/happydoctor.jpg\"></ion-img>\n          </ion-avatar>\n        </ion-col>\n        <ion-col class=\"doc-info\" size=\"8\">\n          <p style=\"color: black; font-weight: 700; margin-top: 20px; margin-bottom: 0; padding-bottom: 0;\">John Smith</p>\n          <p style=\"margin-top: 0; padding-top: 0;\">Open: 1 hour ago</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-button class=\"checkin-btn\" (click)=\"presentAlert()\" expand=\"block\">CHECK-IN</ion-button>\n\n    <p style=\"padding: 10px; text-align: center;\">Select \"Check-in\" to sign into your appointment and receive your estimated wait time.</p>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/check-in/check-in.page.scss":
/*!*********************************************!*\
  !*** ./src/app/check-in/check-in.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px; }\n\n.doctors-title {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n  padding-top: 45px;\n  font-weight: 700; }\n\n.arrow-btn {\n  position: absolute;\n  top: 50px;\n  left: 20px;\n  color: white;\n  height: 20px;\n  width: 20px; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.doctors {\n  font-weight: 300;\n  font-size: 15px;\n  letter-spacing: 1px;\n  text-align: center;\n  margin-top: 20px;\n  color: #727272; }\n\n.doctors-card {\n  color: grey;\n  font-weight: 400;\n  padding: 0;\n  margin-top: 50px; }\n\n.doctor-img {\n  margin-top: 10px;\n  margin-left: 10px;\n  width: 70px;\n  height: 70px; }\n\n.doctor-info {\n  font-weight: 400;\n  font-size: 15px; }\n\n.checkin-btn {\n  background-image: linear-gradient(to right, #575af3, #5f69f6, #6878f9, #7285fb, #7e93fc);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 150px;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9jaGVjay1pbi9jaGVjay1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3RkFBd0Y7RUFDeEYsYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUF5QixFQUFBOztBQUczQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usd0ZBQXdGO0VBQ3hGLGdDQUFnQztFQUNoQyx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hlY2staW4vY2hlY2staW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5MzI3OGYsICM3YzU1YjcsICM1OTc2ZDEsICMzMzkyZGYsICMyOWFiZTIpO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uZG9jdG9ycy10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYXJyb3ctYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5hcnJvdyB7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5kb2N0b3JzIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiByZ2IoMTE0LCAxMTQsIDExNCk7XG59XG5cbi5kb2N0b3JzLWNhcmQge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmRvY3Rvci1pbWcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLmRvY3Rvci1pbmZvIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY2hlY2tpbi1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1NzVhZjMsICM1ZjY5ZjYsICM2ODc4ZjksICM3Mjg1ZmIsICM3ZTkzZmMpO1xuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/check-in/check-in.page.ts":
/*!*******************************************!*\
  !*** ./src/app/check-in/check-in.page.ts ***!
  \*******************************************/
/*! exports provided: CheckInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInPage", function() { return CheckInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");





var CheckInPage = /** @class */ (function () {
    function CheckInPage(navigate, nativePageTransitions, alertController) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.alertController = alertController;
    }
    CheckInPage.prototype.ngOnInit = function () {
    };
    CheckInPage.prototype.openPage = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        // this.navigate.navigateRoot("/checkin-profile");
    };
    CheckInPage.prototype.goBack = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/user-home");
    };
    CheckInPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Good!', message: 'Check-in complete. Jane Doe, remember to click "I have arrived" when you arrive to your appointment.', buttons: [{
                                    text: 'OK', handler: function () {
                                        console.log('Confirm Cancel');
                                        _this.openPage();
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
    CheckInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-check-in',
            template: __webpack_require__(/*! ./check-in.page.html */ "./src/app/check-in/check-in.page.html"),
            styles: [__webpack_require__(/*! ./check-in.page.scss */ "./src/app/check-in/check-in.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], CheckInPage);
    return CheckInPage;
}());



/***/ })

}]);
//# sourceMappingURL=check-in-check-in-module.js.map